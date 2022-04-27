from buildhat import *
from flask import *


app = Flask(__name__)

motorA = Motor('A')
motorB = Motor('B')

@app.route('/')
def index():
    return render_template('index2.html')

#Motores
@app.route("/<deviceName>/<action>")
def action(deviceName, action):

    if action == 'on':
        if deviceName == 'motor1':
            motorA.run_for_seconds(1000)
        if deviceName == 'motor2':
            motorB.run_for_seconds(1000)

    if action == 'off':
        if deviceName == 'motor1':
            motorA.stop()
        if deviceName == 'motor2':
            motorB.stop()
     
    return render_template('index2.html') 

if __name__ == '__main__':
   app.run(debug=True, port=5000, host='0.0.0.0')