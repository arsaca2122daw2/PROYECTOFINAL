import keyword
from buildhat import *
from flask import *
from flask_socketio import SocketIO
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
keyCodeBeforeA= 0
keyCodeBeforeB = 0
keyCodeA = 0
keyCodeB = 0


@app.route('/')
def index():
    return render_template('index2.html')

#Motores
@app.route("/<deviceName>/<action>")
def action(deviceName, action):

    if action == 'on':
        if deviceName == 'motor1':
            print('Motor A adelante')
            Motor('A').run_for_seconds(1000,100) #Endavant infinit MOTOR1
        if deviceName == 'motor2':
            print('Motor B adelante')
            Motor('B').run_for_seconds(1000,100) #Endavant poc MOTOR2

    if action == 'off':
        if deviceName == 'motor1':
            print('Motor A atrás')
            Motor('A').run_for_seconds(1000,-100) #Endarrere poc MOTOR1
        if deviceName == 'motor2':
            print('Motor B atrás')
            Motor('B').run_for_seconds(1000,-100) #Endarrere poc MOTOR2

    return render_template('index2.html')

#Matriz
@app.route("/matriu", methods=["GET", "POST"])
def sign_up():

    if request.method == "POST":

        matrix =  Matrix('C')

        req = request.form
        color = req.get("color") 

        print(color)
        for x in range(100):
            matrix.clear((color, 10))

    return render_template("index2.html")

#Websocekts
@socketio.on('enviarKeyCode')
def recibirKeyCode(keyCode):
    matrix =  Matrix('C')
    print("El cliente ha pulsado la tecla " + str(keyCode))
    global keyCodeBeforeA
    global keyCodeBeforeB
    global keyCodeA
    global keyCodeB

    if keyCode == 87 or keyCode == 83:
        keyCodeA = keyCode
    
    if keyCode == 38 or keyCode == 40:
        keyCodeB = keyCode
    
    if keyCodeBeforeA != keyCodeA:
        Motor('A').stop()

    if keyCodeBeforeB != keyCodeB:
        Motor('B').stop()

    keyCodeBeforeA = keyCodeA
    keyCodeBeforeB = keyCodeB

    if keyCode == 87:
        matrix.clear(("blue", 10))
        Motor('A').run_for_seconds(1000,100)
    if keyCode == 83:
        matrix.clear(("green", 10))
        Motor('A').run_for_seconds(1000,-100)
    if keyCode == 38:
        matrix.clear(("red", 10))
        Motor('B').run_for_seconds(1000,100)
    if keyCode == 40:
        matrix.clear(("yellow", 10))
        Motor('B').run_for_seconds(1000,-100)


if __name__ == '__main__':
    socketio.run(app)