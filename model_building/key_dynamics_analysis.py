from flask import Flask, request
import json
import numpy as np
import tensorflow as tf

app = Flask(__name__)

@app.route('/save-logs', methods=['POST'])
def save_logs():
    if request.method == 'POST':
        data = request.json
        print(data)
        return "Data received"

if __name__ == '__main__':
    app.run(debug=True, ssl_context='adhoc')