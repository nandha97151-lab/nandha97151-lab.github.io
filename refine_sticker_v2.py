import cv2
import numpy as np
from PIL import Image, ImageFilter

def perfect_sticker(cutout_path, final_cutout_path, final_sticker_path, border_size=16, tilt_angle=2.2):
    # Load cutout RGBA
    img = Image.open(cutout_path).convert("RGBA")
    
    # Rotate image slightly to make person stand perfectly straight
    if abs(tilt_angle) > 0.1:
        img = img.rotate(-tilt_angle, resample=Image.BICUBIC, expand=True)
        
    np_img = np.array(img)
    alpha = np_img[:, :, 3]
    
    # Trim any bottom red frame artifact at the very bottom edge of alpha mask
    coords = cv2.findNonZero(alpha)
    if coords is not None:
        _, y, _, h = cv2.boundingRect(coords)
        bottom_y = y + h
        # Cut off the bottom 6 pixels of the subject bounds
        np_img[bottom_y - 6:bottom_y, :, 3] = 0
        alpha = np_img[:, :, 3]

    # 1. Strict thresholding to remove faint halo / background artifact pixels
    _, strict_mask = cv2.threshold(alpha, 100, 255, cv2.THRESH_BINARY)
    
    # Keep only the largest connected component (body of the person)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(strict_mask)
    if num_labels > 1:
        largest_label = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        clean_body_mask = np.zeros_like(strict_mask)
        clean_body_mask[labels == largest_label] = 255
    else:
        clean_body_mask = strict_mask
        
    alpha_cleaned = np.where(clean_body_mask > 0, alpha, 0)
    np_img[:, :, 3] = alpha_cleaned
    
    cleaned_cutout = Image.fromarray(np_img)
    
    # Crop tight around person
    coords = cv2.findNonZero(clean_body_mask)
    if coords is not None:
        x, y, w, h = cv2.boundingRect(coords)
        pad = 15
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(cleaned_cutout.width, x + w + pad)
        y2 = min(cleaned_cutout.height, y + h + pad)
        cleaned_cutout = cleaned_cutout.crop((x1, y1, x2, y2))
        clean_body_mask = clean_body_mask[y1:y2, x1:x2]

    cleaned_cutout.save(final_cutout_path, "PNG")
    print(f"Saved clean cutout to {final_cutout_path}")

    # 2. Sticker outline generation
    w_c, h_c = cleaned_cutout.size
    margin = border_size * 3
    canvas_w = w_c + margin * 2
    canvas_h = h_c + margin * 2

    # Morphological Dilation with smooth elliptical kernel
    kernel_radius = border_size
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (kernel_radius * 2 + 1, kernel_radius * 2 + 1))
    dilated_mask = cv2.dilate(clean_body_mask, kernel, iterations=1)

    # Blur & threshold for silky smooth rounded sticker border
    blur_k = border_size // 2 * 2 + 1
    dilated_mask = cv2.GaussianBlur(dilated_mask, (blur_k, blur_k), 0)
    _, dilated_mask = cv2.threshold(dilated_mask, 110, 255, cv2.THRESH_BINARY)

    # Build canvas
    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))

    # A) Soft ambient drop shadow under sticker
    shadow_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    shadow_fill = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 100))
    shadow_layer.paste(shadow_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=border_size // 2 + 2))

    shadow_canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow_offset_x = 0
    shadow_offset_y = border_size // 2 + 3
    shadow_canvas.paste(shadow_layer, (margin + shadow_offset_x, margin + shadow_offset_y))

    # B) Crisp White Sticker Outline
    stroke_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    white_fill = Image.new("RGBA", (w_c, h_c), (255, 255, 255, 255))
    stroke_layer.paste(white_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))

    # Composite: Shadow -> White Outline -> Cutout Image
    canvas.paste(shadow_canvas, (0, 0), shadow_canvas)
    canvas.paste(stroke_layer, (margin, margin), stroke_layer)
    canvas.paste(cleaned_cutout, (margin, margin), cleaned_cutout)

    # Crop excess canvas
    np_canvas_alpha = np.array(canvas)[:, :, 3]
    coords = cv2.findNonZero(np_canvas_alpha)
    if coords is not None:
        cx, cy, cw, ch = cv2.boundingRect(coords)
        cpad = 10
        canvas = canvas.crop((max(0, cx - cpad), max(0, cy - cpad), min(canvas_w, cx + cw + cpad), min(canvas_h, cy + ch + cpad)))

    canvas.save(final_sticker_path, "PNG")
    print(f"Saved perfect sticker to {final_sticker_path}")

if __name__ == "__main__":
    cutout = r"d:\portfilo 2\assets\profile_cutout.png"
    final_cutout = r"d:\portfilo 2\assets\profile_cutout_v2.png"
    final_sticker = r"d:\portfilo 2\assets\profile_sticker_v2.png"
    perfect_sticker(cutout, final_cutout, final_sticker)
