import cv2
import os


def make_movie():
    # img の中の写真を 1 フレームずつの動画にする
    img_array = []
    latest_dir = sorted(os.listdir("img"))[-1]
    for filename in sorted(os.listdir(f"img/{latest_dir}")):
        img = cv2.imread(f"img/{latest_dir}/{filename}")
        height, width, layers = img.shape
        size = (width, height)
        img_array.append(img)

    out = cv2.VideoWriter(f"{latest_dir}.mp4", cv2.VideoWriter_fourcc(*"mp4v"), 30, size)

    for i in range(len(img_array)):
        out.write(img_array[i])

    out.release()
