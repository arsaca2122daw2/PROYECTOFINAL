from buildhat import *



#motor1 = Motor('B')
#motor2 = Motor('A')

#motor1.set_default_speed(100)

#motor1.run_for_seconds(5)x     
#motor2.run_for_seconds(5)

pair = MotorPair('A', 'B')

pair.run_for_rotations(2)

pair.run_for_rotations(1, speedl=100, speedr=20)
pair.run_to_position(20, 100, speed=20)


import time
import random

matrix = Matrix('C')

matrix.clear(("red",10))
time.sleep(1)

matrix.clear()
time.sleep(1)
matrix.set_pixel((0,0), ("blue", 10))
matrix.set_pixel((2,2), ("red", 10))
time.sleep(1)

while True:
    out = [[(int(random.uniform(0,9)),10) for x in range(3)] for y in range(3)]
    matrix.set_pixels(out)
    time.sleep(0.1)