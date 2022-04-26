from flask import *
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/pium')
def pium():
    return render_template('pium.html')