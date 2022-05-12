from buildhat import *
import time
import random

matrix = Matrix('A')

#izq
matrix.set_pixel((1, 0), ("yellow", 10))
time.sleep(0.5)

matrix.set_pixel((1, 1), ("yellow", 10))
time.sleep(0.5)
1
matrix.set_pixel((1, 2), ("yellow", 10))
time.sleep(0.5)

matrix.clear(("yellow", 0))

#dercha
matrix.set_pixel((1, 2), ("yellow", 10))
time.sleep(0.5)

matrix.set_pixel((1, 1), ("yellow", 10))
time.sleep(0.5)

matrix.set_pixel((1, 0), ("yellow", 10))
time.sleep(0.5)

matrix.clear(("yellow", 0))

