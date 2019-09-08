# coding=utf-8
from __future__ import division, print_function
from flask import Flask, render_template
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')

if __name__ == '__main__':
    print('App ready. Check http://127.0.0.1:5000/')

    # Serve the app with gevent
    http_server = WSGIServer(('0.0.0.0', 5000), app)
    http_server.serve_forever()
