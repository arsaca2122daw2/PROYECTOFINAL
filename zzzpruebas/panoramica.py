import numpy as np
import cv2
import glob
import imutils

iamge_paths = glob.glob('imagenes/*.jpg')
iamges = []

for image in iamge_paths:
    img = cv2.imread(image)
    imagenes.append(img)
    #cv2.waitKey(0)

imagenStitcher = cv2.Stitcher_create()
error, imagenStitchada = imagenStitcher.stitch(imagenes)
print(imagenStitchada)

if not error:
    cv2.imwrite("ImagenPanoramica.png")
    cv2.imshow("Imagen panoramica", imagenStitchada)
    #cv2.waitKey(0)
else:
    print("mal")