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
    return render_template('index3.html')

#camara
def gen(camera):
    while True:
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
    matrix =  Matrix('C')
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
        Motor('A').stop()

    if keyCodeBeforeB != keyCodeB:
        Motor('B').stop()

    keyCodeBeforeA = keyCodeA
    keyCodeBeforeB = keyCodeB

    if keyCode == 87:
        matrix.clear(("blue", 10))
        Motor('A').run_for_seconds(0.1,potenciaMotor)
        Matrix('C').clear(("blue", 0))
    if keyCode == 83:
        matrix.clear(("green", 10))
        Motor('A').run_for_seconds(0.1,potenciaMotor*-1)
        Matrix('C').clear(("blue", 0))
    if keyCode == 81:
        matrix.clear(("red", 10))
        Motor('B').run_for_seconds(0.1,potenciaMotor)
        Matrix('C').clear(("blue", 0))
    if keyCode == 69:
        matrix.clear(("yellow", 10))
        Motor('B').run_for_seconds(0.1,potenciaMotor*-1)
        Matrix('C').clear(("blue", 0))

@socketio.on('keyUp')
def recibirKeyUp():
    print("El cliente ha dejado de pulsar teclas")
    Matrix('C').clear(("blue", 0))
    Motor('A').stop()
    Motor('B').stop()

if __name__ == '__main__':
    from waitress import serve
    socketio.run(app)