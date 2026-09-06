import cv2
import numpy as np
from PIL import Image, ImageFilter

def refine_cutout_and_sticker(cutout_path, final_cutout_path, final_sticker_path, border_size=18):
    # Load cutout RGBA
    img = Image.open(cutout_path).convert("RGBA")
    np_img = np.array(img)
    
    # 1. Clean alpha: threshold alpha channel
    alpha = np_img[:, :, 3]
    
    # Remove bottom red artifact: cut off bottom 8 pixels if alpha is present there
    h, w = alpha.shape
    alpha[-10:, :] = 0
    np_img[-10:, :, 3] = 0
    
    # 2. Keep only the largest connected component in alpha mask
    _, binary_mask = cv2.threshold(alpha, 30, 255, cv2.THRESH_BINARY)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(binary_mask)
    
    if num_labels > 1:
        # Find label with largest area (excluding background index 0)
        largest_label = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        
        # Mask out everything except the largest component
        clean_mask = np.zeros_like(binary_mask)
        clean_mask[labels == largest_label] = 255
        
        # Apply clean mask to alpha channel
        np_img[:, :, 3] = cv2.bitwise_and(np_img[:, :, 3], clean_mask)
    
    # 3. Crop tight around cleaned person
    clean_alpha = np_img[:, :, 3]
    coords = cv2.findNonZero(clean_alpha)
    if coords is not None:
        x, y, cw, ch = cv2.boundingRect(coords)
        pad = 20
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(w, x + cw + pad)
        y2 = min(h, y + ch + pad)
        np_img = np_img[y1:y2, x1:x2]
        
    cleaned_cutout = Image.fromarray(np_img)
    cleaned_cutout.save(final_cutout_path, "PNG")
    print(f"Saved refined cutout to {final_cutout_path}")
    
    # 4. Generate Sticker Effect with refined mask
    w_c, h_c = cleaned_cutout.size
    alpha_c = np.array(cleaned_cutout)[:, :, 3]
    
    margin = border_size * 3
    canvas_w = w_c + margin * 2
    canvas_h = h_c + margin * 2
    
    _, mask = cv2.threshold(alpha_c, 15, 255, cv2.THRESH_BINARY)
    
    # Round kernel for smooth dilation
    kernel_radius = border_size
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (kernel_radius * 2 + 1, kernel_radius * 2 + 1))
    dilated_mask = cv2.dilate(mask, kernel, iterations=1)
    
    # Gaussian blur & re-threshold for smooth rounded corners on the sticker stroke
    blur_k = border_size // 2 * 2 + 1
    dilated_mask = cv2.GaussianBlur(dilated_mask, (blur_k, blur_k), 0)
    _, dilated_mask = cv2.threshold(dilated_mask, 100, 255, cv2.THRESH_BINARY)
    
    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    
    # Drop shadow
    shadow_mask = Image.fromarray(dilated_mask).convert("L")
    shadow_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    shadow_fill = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 110))
    shadow_layer.paste(shadow_fill, (0, 0), shadow_mask)
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=border_size // 2))
    
    shadow_canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow_offset_x = border_size // 3
    shadow_offset_y = border_size // 2 + 3
    shadow_canvas.paste(shadow_layer, (margin + shadow_offset_x, margin + shadow_offset_y))
    
    # White sticker stroke layer
    stroke_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    white_fill = Image.new("RGBA", (w_c, h_c), (255, 255, 255, 255))
    stroke_layer.paste(white_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))
    
    # Composite: Shadow -> White Outline -> Cutout
    canvas.paste(shadow_canvas, (0, 0), shadow_canvas)
    canvas.paste(stroke_layer, (margin, margin), stroke_layer)
    canvas.paste(cleaned_cutout, (margin, margin), cleaned_cutout)
    
    # Crop canvas tight
    np_canvas_alpha = np.array(canvas)[:, :, 3]
    coords = cv2.findNonZero(np_canvas_alpha)
    if coords is not None:
        cx, cy, cw, ch = cv2.boundingRect(coords)
        cpad = 12
        canvas = canvas.crop((max(0, cx - cpad), max(0, cy - cpad), min(canvas_w, cx + cw + cpad), min(canvas_h, cy + ch + cpad)))
        
    canvas.save(final_sticker_path, "PNG")
    print(f"Saved refined sticker to {final_sticker_path}")

if __name__ == "__main__":
    cutout = r"d:\portfilo 2\assets\profile_cutout.png"
    final_cutout = r"d:\portfilo 2\assets\profile_cutout_clean.png"
    final_sticker = r"d:\portfilo 2\assets\profile_sticker_clean.png"
    refine_cutout_and_sticker(cutout, final_cutout, final_sticker)
