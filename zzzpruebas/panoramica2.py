import numpy as np
import cv2
import glob
import imutils

iamge_paths = glob.glob('imagenes/*.jpg')
images = []

for image in iamge_paths:
    img = cv2.imread(image)
    images.append(img)

imgs = []
 
for i in range(len(images)):
    imgs.append(cv2.imread(str(images[i])))
    imgs[i]=cv2.resize(imgs[i],(0,0),fx=0.4,fy=0.4)

cv2.imshow('1',imgs[0])
cv2.imshow('2',imgs[1])
 
stitchy=cv2.Stitcher.create()
(dummy,output)=stitchy.stitch(imgs)
 
if dummy != cv2.STITCHER_OK:
    print("stitching ain't successful")
else:
    print('Your Panorama is ready!!!')
 
# final output
cv2.imshow('final result',output)
 
cv2.waitKey(0)