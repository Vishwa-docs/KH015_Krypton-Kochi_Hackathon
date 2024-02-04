from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import StandardScaler
import pickle

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


@app.post("/save-logs")
async def save_logs(request: Request):
    data = await request.json()
    data = [x - data[0] for x in data]
    data = data[:26]

    print(data)

    with open("scaler.pkl", "rb") as f:
        scaler = pickle.load(f)

    data = np.array(data).reshape(1, -1)

    data = scaler.transform(data)
    model = tf.keras.models.load_model('keystrokes_dynamics_model.h5')
    y = model.predict(tf.convert_to_tensor(data))

    y = np.argmax(y, axis=1)

    if y == 12:
        return {"message": "Normal"}
    return {"message": "Anomaly detected"}


@app.options("/save-logs")
async def options_save_logs(request: Request):
    response_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
    }
    return Response(content="", headers=response_headers)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=5000)
