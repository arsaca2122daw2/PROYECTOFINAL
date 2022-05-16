from picamera import PiCamera
import time

camera = PiCamera()
camera.close()
time.sleep(2)
camera.capture("prueba.jpg")
print("Done.")