from buildhat import *
from flask import *
from flask_socketio import SocketIO
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

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
            Motor('B').run_for_seconds(0.3,100) #Endavant poc MOTOR2

    if action == 'off':
        if deviceName == 'motor1':
            print('Motor A atrás')
            Motor('A').run_for_seconds(0.3,-100) #Endarrere poc MOTOR1
        if deviceName == 'motor2':
            print('Motor B atrás')
            Motor('B').run_for_seconds(0.3,-100) #Endarrere poc MOTOR2

    return render_template('index2.html')

#Matriz
@app.route("/matriu", methods=["GET", "POST"])
def sign_up():

    if request.method == "POST":

        matrix =  Matrix('C')

        req = request.form
        cella = req.get("cella")
        color = req.get("color") 

        print(color)
        for x in range(100):
            matrix.clear((color, 10))

    return render_template("index2.html")

#Websocekts
@socketio.on('my event')
def handle_my_custom_event(json):
    print('received json: ' + str(json))

if __name__ == '__main__':
    socketio.run(app)