import os
import io
import cv2
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

def create_sticker(input_path, output_cutout_path, output_sticker_path, border_size=16, pad=30):
    print(f"Loading image from {input_path}...")
    with open(input_path, 'rb') as f:
        input_data = f.read()

    print("Initializing fast rembg session (u2netp)...")
    session = new_session('u2netp')

    print("Removing background...")
    cutout_data = remove(input_data, session=session)

    cutout_img = Image.open(io.BytesIO(cutout_data)).convert("RGBA")

    # Get alpha mask
    np_img = np.array(cutout_img)
    alpha = np_img[:, :, 3]

    # Find bounding box of alpha > 10
    coords = cv2.findNonZero(alpha)
    if coords is not None:
        x, y, w, h = cv2.boundingRect(coords)
        height, width = alpha.shape
        x1 = max(0, x - pad)
        y1 = max(0, y - pad)
        x2 = min(width, x + w + pad)
        y2 = min(height, y + h + pad)

        np_img = np_img[y1:y2, x1:x2]
        cutout_img = Image.fromarray(np_img)

    cutout_img.save(output_cutout_path, "PNG")
    print(f"Saved transparent cutout to {output_cutout_path}")

    # Now create sticker effect with smooth white border and drop shadow
    w, h = cutout_img.size
    np_img = np.array(cutout_img)
    alpha = np_img[:, :, 3]

    margin = border_size * 3
    canvas_w = w + margin * 2
    canvas_h = h + margin * 2

    _, mask = cv2.threshold(alpha, 10, 255, cv2.THRESH_BINARY)

    # Create kernel for dilation (round kernel)
    kernel_radius = border_size
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (kernel_radius * 2 + 1, kernel_radius * 2 + 1))
    dilated_mask = cv2.dilate(mask, kernel, iterations=1)

    # Smooth stroke mask with Gaussian Blur
    blur_radius = max(3, border_size // 4)
    if blur_radius % 2 == 0:
        blur_radius += 1
    dilated_mask = cv2.GaussianBlur(dilated_mask, (blur_radius, blur_radius), 0)
    _, dilated_mask = cv2.threshold(dilated_mask, 128, 255, cv2.THRESH_BINARY)

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))

    # 1. Drop shadow layer
    shadow_mask = Image.fromarray(dilated_mask).convert("L")
    shadow_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    shadow_fill = Image.new("RGBA", (w, h), (0, 0, 0, 90))
    shadow_layer.paste(shadow_fill, (0, 0), shadow_mask)
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=border_size // 2))

    shadow_canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow_offset_x = border_size // 2
    shadow_offset_y = border_size // 2 + 4
    shadow_canvas.paste(shadow_layer, (margin + shadow_offset_x, margin + shadow_offset_y))

    # 2. White sticker stroke layer
    stroke_layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    white_fill = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    stroke_layer.paste(white_fill, (0, 0), Image.fromarray(dilated_mask).convert("L"))

    # 3. Composite
    canvas.paste(shadow_canvas, (0, 0), shadow_canvas)
    canvas.paste(stroke_layer, (margin, margin), stroke_layer)
    canvas.paste(cutout_img, (margin, margin), cutout_img)

    # Crop canvas tight
    np_canvas_alpha = np.array(canvas)[:, :, 3]
    coords = cv2.findNonZero(np_canvas_alpha)
    if coords is not None:
        cx, cy, cw, ch = cv2.boundingRect(coords)
        cpad = 10
        canvas = canvas.crop((max(0, cx - cpad), max(0, cy - cpad), min(canvas_w, cx + cw + cpad), min(canvas_h, cy + ch + cpad)))

    canvas.save(output_sticker_path, "PNG")
    print(f"Saved sticker photo to {output_sticker_path}")

if __name__ == "__main__":
    input_file = r"d:\portfilo 2\assets\user_original.png"
    out_cutout = r"d:\portfilo 2\assets\profile_cutout.png"
    out_sticker = r"d:\portfilo 2\assets\profile_sticker.png"
    create_sticker(input_file, out_cutout, out_sticker)
