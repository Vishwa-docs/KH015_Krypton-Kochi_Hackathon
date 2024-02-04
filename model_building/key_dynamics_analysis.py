from flask import Flask, request, jsonify
import json
import numpy as np
import tensorflow as tf
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
cors = CORS(app)

@app.route('/save-logs', methods=['POST', 'OPTIONS'])
def save_logs():
    from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/save-logs', methods=['POST', 'OPTIONS'])
def save_logs():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight successful'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    elif request.method == 'POST':

        data = request.json
        data = data[0]
        print(data)
        # new_data = []
        # for _ in range(31):
        #     new_data.append(data['duration'])

        # new_data = np.array(new_data).reshape(1, 31)
        # import pickle

        # with open('scale.pkl', 'rb') as f:
        #     scaler = pickle.load(f)

        # new_data = scaler.transform(new_data)
        # model = tf.keras.models.load_model('key_dynamics_model.h5')
        # y = model.predict(tf.convert_to_tensor(new_data))
        
        # y = np.argmax(y, axis=1)

        # print(y)

        # if y == 0:
        #     return jsonify({'message': 'Suspicious activity detected'})
        # else:
        #     return jsonify({'message': 'No suspicious activity detected'})

    else:
        return jsonify({'error': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(port=5000)