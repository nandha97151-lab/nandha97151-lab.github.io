import io
import cv2
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

def process_image(input_path, out_sticker_path):
    print(f"Reading {input_path}...")
    with open(input_path, 'rb') as f:
        input_bytes = f.read()

    # Check if image has white background - if so, remove it with rembg
    img_check = Image.open(io.BytesIO(input_bytes)).convert("RGBA")
    np_check = np.array(img_check)
    
    # Check corners - if they are white/near-white, need bg removal
    corners = [np_check[0,0,:3], np_check[0,-1,:3], np_check[-1,0,:3], np_check[-1,-1,:3]]
    is_white_bg = all(np.mean(c) > 200 for c in corners)
    
    if is_white_bg:
        print("White background detected - running rembg...")
        session = new_session('u2netp')
        cutout_bytes = remove(input_bytes, session=session)
        img_rgba = Image.open(io.BytesIO(cutout_bytes)).convert("RGBA")
    else:
        img_rgba = img_check
    
    np_img = np.array(img_rgba)
    h, w = np_img.shape[:2]
    alpha = np_img[:, :, 3]

    # Remove black outline artifact - erode mask slightly
    _, binary_mask = cv2.threshold(alpha, 80, 255, cv2.THRESH_BINARY)
    
    # Detect black pixels in the image (the drawn outline)
    gray = cv2.cvtColor(np_img[:, :, :3], cv2.COLOR_RGB2GRAY)
    is_black = (gray < 40).astype(np.uint8) * 255
    
    # Remove black outline only at edges (dilate mask then subtract black in edge zone)
    erode_k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    eroded = cv2.erode(binary_mask, erode_k, iterations=1)
    edge_zone = cv2.subtract(binary_mask, eroded)
    black_border = cv2.bitwise_and(edge_zone, is_black)
    clean_mask = cv2.subtract(binary_mask, black_border)
    
    # Keep largest component (person body)
    num_labels, labels, stats, _ = cv2.connectedComponentsWithStats(clean_mask)
    if num_labels > 1:
        largest = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        person_mask = np.zeros_like(clean_mask)
        person_mask[labels == largest] = 255
    else:
        person_mask = clean_mask

    # Slightly erode mask to trim away any edge border artifacts
    trim_k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    person_mask = cv2.erode(person_mask, trim_k, iterations=1)

    # Feather edges for natural look
    alpha_smooth = cv2.GaussianBlur(person_mask, (3, 3), 0)
    np_img[:, :, 3] = alpha_smooth

    cutout = Image.fromarray(np_img)

    # Crop tight
    coords = cv2.findNonZero(person_mask)
    if coords is not None:
        x, y, cw, ch = cv2.boundingRect(coords)
        pad = 15
        x1, y1 = max(0, x-pad), max(0, y-pad)
        x2, y2 = min(w, x+cw+pad), min(h, y+ch+pad)
        cutout = cutout.crop((x1, y1, x2, y2))
        person_mask = person_mask[y1:y2, x1:x2]

    # --- Save clean cutout without white border line ---
    canvas = cutout
    canvas.save(out_sticker_path, "PNG")
    print(f"Saved clean cutout (no border) -> {out_sticker_path}")

if __name__ == "__main__":
    inp  = r"d:\portfilo 2\assets\user_new.png"
    out  = r"d:\portfilo 2\assets\profile_sticker.png"
    process_image(inp, out)
    
    # Also copy to all sub-portfolio folders
    import shutil
    targets = [
        r"d:\portfilo 2\nandha97151-lab.github.io\assets\profile_sticker.png",
        r"d:\portfilo 2\nandha97151-lab.github.io\assets\profile_cutout.png",
        r"d:\portfilo 2\nandha97151-lab.github.io\assets\profile.jpg",
        r"d:\portfilo 2\assets\profile.jpg",
        r"d:\portfilo 2\assets\profile.png",
        r"d:\portfilo 2\assets\profile_cutout.png",
        r"d:\portfilo 2\poarfilo 11\assets\profile\profile_sticker.png",
        r"d:\portfilo 2\poarfilo 11\assets\profile\profile.png",
    ]
    for t in targets:
        shutil.copy(out, t)
        print(f"Copied -> {t}")
    print("Done!")
