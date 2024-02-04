'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";

import { useState, useRef, FormEvent } from 'react';

interface IPData {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}

function Prediction() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState<IPData | null>(null);

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
          setData(null);
        } else {
          setError(false);
          setData(data);
        }
      });
  }

  return (
    <>
      <Navbar page={4} />

      <div className={styles.outerBox}>
        <div className={styles.box}>
          <form onSubmit={handleSubmit}>
            {error && <div className={styles.error}>Invalid IP Address. Please enter in the format X.X.X.X .</div>}
            <div style={{ paddingLeft: "10px", fontSize: "30px", paddingBottom: "20px" }}>Enter IP Address</div>
            <div>
              <input className={styles.textbox} type="textbox" value={ip} onChange={e => setIp(e.target.value)} placeholder="X.X.X.X" />
            </div>
            <div>
              <input type="submit" ref={button} value="Check IP" className={styles.submit} />
            </div>
          </form>

          {data && <>
            <div style={{ marginTop: "30px" }}>The location was found to be {data?.city}, {data?.regionName}</div>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <iframe width="800" height="600" src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.lon}%2C${data.lat}%2C${data.lon}%2C${data.lat}&amp;layer=hot`} style={{ border: "1px solid black" }} />
            </div>
          </>
          }
        </div>
      </div>
    </>
  )
}

export default Prediction;
