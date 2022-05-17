import keyword
from buildhat import *
from flask import *
from flask_socketio import SocketIO
from camera import VideoCamera
import time
import threading
import os
from engineio.payload import Payload

Payload.max_decode_packets = 5000

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')
keyCodeBeforeA= 0
keyCodeBeforeB = 0
keyCodeA = 0
keyCodeB = 0
potenciaMotor = 0

pi_camera = VideoCamera(flip=False)

#index
@app.route('/')
def index():
    return render_template('index4.html')

#camara
def gen(camera):
    while True:
        time.sleep(0.1)
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(pi_camera),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

#Websocekts
@socketio.on('enviarKeyCode')
def recibirKeyCode(keyCode, potencia):
    matrix =  Matrix('A')
    print("El cliente ha pulsado la tecla " + str(keyCode))
    global keyCodeBeforeA
    global keyCodeBeforeB
    global keyCodeA
    global keyCodeB
    global potenciaMotor

    potenciaMotor = potencia

    potenciaMotor = int(potenciaMotor)

    if keyCode == 87 or keyCode == 83:
        keyCodeA = keyCode
    
    if keyCode == 81 or keyCode == 69:
        keyCodeB = keyCode
    
    if keyCodeBeforeA != keyCodeA:
        Motor('C').stop()

    if keyCodeBeforeB != keyCodeB:
        Motor('B').stop()

    keyCodeBeforeA = keyCodeA
    keyCodeBeforeB = keyCodeB

    if keyCode == 87:
        moverW(potenciaMotor)
    if keyCode == 83:
        moverS(potenciaMotor)
    if keyCode == 65:
        intermitenteDer()
        intermitenteDer()
        girarA()
    if keyCode == 68:
        intermitenteIzq()
        intermitenteIzq()
        girarD()
    if keyCode == 69:
        moverCamaraDerecha()
    if keyCode == 81:
        moverCamaraIzquierda()

@socketio.on('keyUp')
def recibirKeyUp():
    print("El cliente ha dejado de pulsar teclas")
    Matrix('A').clear(("red", 10))
    Motor('C').stop()
    Motor('B').stop()
    Motor('D').stop()
    moverCamaraDefault()

def moverW(potenciaMotor):#Alante
    pair = MotorPair('C','B')
    Matrix('A').clear(("green", 10))
    pair.run_for_seconds(1000,potenciaMotor*-1,potenciaMotor)
    Matrix('A').clear(("green", 0))

def moverS(potenciaMotor):#Atrás
    pair = MotorPair('C','B')
    Matrix('A').clear(("white", 10))
    pair.run_for_seconds(1000,potenciaMotor,potenciaMotor*-1)
    Matrix('A').clear(("white", 0))

def girarA():#Girar Derecha
    #pair = MotorPair('A','D')
    #cambiar fufncon intermitente
    Matrix('A').clear(("yellow", 10))
    #pair.run_for_seconds(1000,potenciaMotor,potenciaMotor)
    potenciaMotor=100
    Motor('B').run_for_seconds(1000, potenciaMotor)
    Matrix('A').clear(("yellow", 0))

def girarD():#Girar Izquierda
    #pair = MotorPair('A','D')
    #cambiar fufncon intermitente
    Matrix('A').clear(("blue", 10))
    #pair.run_for_seconds(1000,potenciaMotor*-1,potenciaMotor*-1)
    potenciaMotor=100
    Motor('C').run_for_seconds(1000, potenciaMotor*-1)
    Matrix('A').clear(("blue", 0))

def intermitenteDer():
    matrix = Matrix('A')
    matrix.clear(("blue",0))
    matrix.set_pixel((1, 2), ("yellow", 10))
    time.sleep(0.2)

    matrix.set_pixel((1, 1), ("yellow", 10))
    time.sleep(0.2)

    matrix.set_pixel((1, 0), ("yellow", 10))
    time.sleep(0.2)
def intermitenteIzq():
    matrix = Matrix('A')
    matrix.clear(("blue",0))
    matrix.set_pixel((1, 0), ("yellow", 10))
    time.sleep(0.2)

    matrix.set_pixel((1, 1), ("yellow", 10))
    time.sleep(0.2)
    1
    matrix.set_pixel((1, 2), ("yellow", 10))
    time.sleep(0.2) 


def moverCamaraDerecha():
    Motor('D').run_to_position(90,15)
def moverCamaraIzquierda():
    Motor('D').run_to_position(-90,15)
def moverCamaraDefault():
    Motor('D').run_to_position(0,15)
if __name__ == '__main__':
    from waitress import serve
    socketio.run(app)