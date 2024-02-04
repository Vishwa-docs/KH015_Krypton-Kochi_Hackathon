from flask import Flask, request, jsonify
import json
import numpy as np
import tensorflow as tf
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler
import pickle

app = Flask(__name__)
cors = CORS(app)


@app.route("/save-logs", methods=["POST", "OPTIONS"])
def save_logs():
    if request.method == "OPTIONS":
        response = jsonify({"message": "CORS preflight successful"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response
    elif request.method == "POST":
        data = request.json
        data = [x - data[0] for x in data]
        data = data[:26]

        print(data)

        with open("scaler.pkl", "rb") as f:
            scaler = pickle.load(f)

        data = np.array(data).reshape(1, -1)

        data = scaler.transform(data)
        model = tf.keras.models.load_model("keystrokes_dynamics_model.h5")
        y = model.predict(tf.convert_to_tensor(data))

        y = np.argmax(y, axis=1)

        if y == 12:
            return jsonify({"message": "Normal"})
        return jsonify({"message": "Anomaly detected"})

    else:
        return jsonify({"error": "Method not allowed"}), 405


if __name__ == "__main__":
    app.run(port=5000, debug=True)
