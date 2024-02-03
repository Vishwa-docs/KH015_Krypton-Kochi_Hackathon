'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";

import { useState, useRef, FormEvent } from 'react';

function Prediction() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(false);

  const button = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (ip === "") {
      setError(true);
      return;
    }

    fetch('http://ip-api.com/json/' + ip)
      .then(res => res.json())
      .then(data => {
        if (data.status === "fail") {
          setError(true);
        } else {
          setError(false);
        }

        console.log(data);
      });
  }

  return (
    <>
      <Navbar page={3} />

      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          {error && <div className={styles.error}>Invalid IP Address. Please enter in the format of X.X.X.X .</div>}

          <div>Enter IP Address</div>
          <div>
            <input className={styles.textbox} type="textbox" value={ip} onChange={e => setIp(e.target.value)} placeholder="X.X.X.X" />
          </div>
          <div style={{ textAlign: "center" }}>
            <input type="submit" ref={button} value="Check IP" className={styles.submit} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Prediction;
