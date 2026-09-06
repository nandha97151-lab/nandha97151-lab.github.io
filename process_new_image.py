import io
import cv2
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

def process_new_profile_image(input_path, out_cutout_path, out_sticker_path, out_profile_path):
    print(f"Reading input image {input_path}...")
    with open(input_path, 'rb') as f:
        input_bytes = f.read()

    print("Running rembg background removal...")
    session = new_session('u2netp')
    cutout_bytes = remove(input_bytes, session=session)
    img_rgba = Image.open(io.BytesIO(cutout_bytes)).convert("RGBA")

    np_img = np.array(img_rgba)
    h, w, c = np_img.shape
    alpha = np_img[:, :, 3]

    # 1. Binary mask of subject + black outline
    _, binary_mask = cv2.threshold(alpha, 80, 255, cv2.THRESH_BINARY)

    # 2. To remove the thick black outline drawn around the person:
    # Erode the mask by ~6-8 pixels to peel off the black border ring
    erode_radius = 7
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (erode_radius * 2 + 1, erode_radius * 2 + 1))
    eroded_mask = cv2.erode(binary_mask, kernel, iterations=1)

    # Smooth the eroded mask edges with slight blur + threshold for anti-aliased edge
    eroded_blur = cv2.GaussianBlur(eroded_mask, (5, 5), 0)
    _, clean_alpha_mask = cv2.threshold(eroded_blur, 120, 255, cv2.THRESH_BINARY)

    # Keep only the largest component (person)
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(clean_alpha_mask)
    if num_labels > 1:
        largest_label = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        final_person_mask = np.zeros_like(clean_alpha_mask)
        final_person_mask[labels == largest_label] = 255
    else:
        final_person_mask = clean_alpha_mask

    # Also detect any pure black stroke pixels near boundary and mask them out
    # Create an edge region mask (difference between binary_mask and eroded_mask)
    edge_region = cv2.subtract(binary_mask, eroded_mask)
    # Convert image to grayscale to detect black stroke
    gray = cv2.cvtColor(np_img[:, :, :3], cv2.COLOR_RGB2GRAY)
    is_black = (gray < 45).astype(np.uint8) * 255
    black_border_mask = cv2.bitwise_and(edge_region, is_black)

    # Subtract detected black border pixels
    final_person_mask = cv2.subtract(final_person_mask, black_border_mask)

    # Apply soft feathering to the alpha channel for ultra clean natural cutout
    alpha_feathered = cv2.GaussianBlur(final_person_mask, (3, 3), 0)
    
    # Update RGBA alpha channel
    np_img[:, :, 3] = alpha_feathered

    cleaned_cutout = Image.fromarray(np_img)

    # Crop tight around the person
    coords = cv2.findNonZero(final_person_mask)
    if coords is not None:
        x, y, cw, ch = cv2.boundingRect(coords)
        pad = 12
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(w, x + cw + pad)
        y2 = min(h, y + ch + pad)
        cleaned_cutout = cleaned_cutout.crop((x1, y1, x2, y2))
        final_person_mask = final_person_mask[y1:y2, x1:x2]

    # Save transparent clean cutout
    cleaned_cutout.save(out_cutout_path, "PNG")
    cleaned_cutout.save(out_profile_path, "PNG")
    print(f"Saved clean cutout to {out_cutout_path} and {out_profile_path}")

    # 3. Create Sticker version with clean white stroke & drop shadow
    w_c, h_c = cleaned_cutout.size
    border_size = 18
    margin = border_size * 3
    canvas_w = w_c + margin * 2
    canvas_h = h_c + margin * 2

    # Morphological Dilation for white sticker border
    _, mask_c = cv2.threshold(final_person_mask, 50, 255, cv2.THRESH_BINARY)
    s_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (border_size * 2 + 1, border_size * 2 + 1))
    dilated_mask = cv2.dilate(mask_c, s_kernel, iterations=1)
    
    blur_k = border_size // 2 * 2 + 1
    dilated_mask = cv2.GaussianBlur(dilated_mask, (blur_k, blur_k), 0)
    _, dilated_mask = cv2.threshold(dilated_mask, 110, 255, cv2.THRESH_BINARY)

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))

    # Ambient drop shadow
    shadow_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    shadow_fill = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 95))
    shadow_layer.paste(shadow_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=border_size // 2 + 2))

    shadow_canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow_canvas.paste(shadow_layer, (margin, margin + border_size // 2 + 3))

    # White Sticker Stroke
    stroke_layer = Image.new("RGBA", (w_c, h_c), (0, 0, 0, 0))
    white_fill = Image.new("RGBA", (w_c, h_c), (255, 255, 255, 255))
    stroke_layer.paste(white_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))

    # Composite: Shadow -> White Outline -> Cutout
    canvas.paste(shadow_canvas, (0, 0), shadow_canvas)
    canvas.paste(stroke_layer, (margin, margin), stroke_layer)
    canvas.paste(cleaned_cutout, (margin, margin), cleaned_cutout)

    # Crop excess canvas
    np_canvas_alpha = np.array(canvas)[:, :, 3]
    coords_c = cv2.findNonZero(np_canvas_alpha)
    if coords_c is not None:
        cx, cy, cw, ch = cv2.boundingRect(coords_c)
        cpad = 10
        canvas = canvas.crop((max(0, cx - cpad), max(0, cy - cpad), min(canvas_w, cx + cw + cpad), min(canvas_h, cy + ch + cpad)))

    canvas.save(out_sticker_path, "PNG")
    print(f"Saved sticker image to {out_sticker_path}")

if __name__ == "__main__":
    inp = r"d:\portfilo 2\assets\user_original_v2.png"
    out_c = r"d:\portfilo 2\assets\profile_cutout.png"
    out_s = r"d:\portfilo 2\assets\profile_sticker.png"
    out_p = r"d:\portfilo 2\assets\profile.png"
    process_new_profile_image(inp, out_c, out_s, out_p)
