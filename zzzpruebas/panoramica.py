import numpy as np
import cv2
import glob
import imutils

iamge_paths = glob.glob('imagenes/*.jpg')
images = []

for image in iamge_paths:
    img = cv2.imread(image)
    images.append(img)

imagenStitcher = cv2.Stitcher_create()
imagenStitchada = imagenStitcher.stitch(images)

if imagenStitchada:
    cv2.imwrite("ImagenPanoramica.png")
    cv2.imshow("Imagen panoramica", imagenStitchada)
    cv2.waitKey(0)
else:
    print("mal")