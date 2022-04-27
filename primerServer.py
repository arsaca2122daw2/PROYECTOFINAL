from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/pium')
def pium():
    return render_template('pium.html')

if __name__ == '__main__':
   app.run(debug=True, port=5000, host='0.0.0.0')