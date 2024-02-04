'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";

import { useState, FormEvent, ChangeEvent } from 'react';

function Prediction() {
  const [formData, setFormData] = useState({
    cc_num: '',
    merchant: '',
    amt: '',
    sender_ip: '',
    merch_ip: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
      .then(response => response.json())
      .then(data => {
        setPrediction(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error making API request:', error);
      });
  };

  return (
    <>
      <Navbar page={3} />

      <div className={styles.outerBox}>
        <div className={styles.innerBox}>
          <form onSubmit={handleSubmit}>
            <div>
              <div>Credit Card</div>
              <input type="text" name="cc_num" onChange={handleChange} />
            </div>
            <div>
              <div>Merchant ID</div>
              <input type="text" name="merchant" onChange={handleChange} />
            </div>
            <div>
              <div>Amount</div>
              <input type="text" name="amt" onChange={handleChange} />
            </div>
            <div>
              <div>Sender's IP Address</div>
              <input type="text" name="sender_ip" onChange={handleChange} />
            </div>
            <div>
              <div>
                Receiver's IP Address
              </div>
              <input type="text" name="merch_ip" onChange={handleChange} />
            </div>
            <div style={{ textAlign: "center" }}>
              <input type="submit" value="Check Transaction" />
            </div>
          </form>

          {prediction && !loading && (
            <div style={{ textAlign: "center", margin: "30px" }}>
              <h2>Prediction: {prediction}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Prediction;
