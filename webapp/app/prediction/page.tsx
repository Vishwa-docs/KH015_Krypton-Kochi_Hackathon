'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";

import { useState, useEffect, FormEvent } from 'react';

function Prediction() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [merchantId, setMerchantId] = useState('');
  const [amount, setAmount] = useState('');
  const [senderIp, setSenderIp] = useState('');
  const [merchantIp, setMerchantIp] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Navbar page={2} />

      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          <div>
            <div>Credit Card</div>
            <input type="textbox" value={creditCardNumber} onChange={e => setCreditCardNumber(e.target.value)} placeholder="1234 1234 1234 1234" />
          </div>
          <div>
            <div>Merchant ID</div>
            <input type="textbox" value={merchantId} onChange={e => setMerchantId(e.target.value)} />
          </div>
          <div>
            <div>Amount</div>
            <input type="textbox" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.0" />
          </div>
          <div>
            <div>Sender's IP Address</div>
            <input type="textbox" value={senderIp} onChange={e => setSenderIp(e.target.value)} placeholder="123.123.123.123" />
          </div>
          <div>
            <div>
              Receiver's IP Address
            </div>
            <input type="textbox" value={merchantIp} onChange={e => setMerchantIp(e.target.value)} />
          </div>
          <div style={{ textAlign: "center" }}>
            <input type="submit" value="Check Transaction" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Prediction;
