#!/usr/bin/python
from flask import Flask, render_template, request, make_response
from util import *

app = Flask(__name__)
token = gen_token()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        if request.form.get('token', '') == token:
            shutdown()
            return 'OK'
        else:
            return make_response('wrong token', 403)

@app.route('/token')
def show_token():
    if request.remote_addr == '127.0.0.1':
        return token
    else:
        return make_response('', 404)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
