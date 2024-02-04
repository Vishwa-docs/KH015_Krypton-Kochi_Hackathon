'use client'

import Navbar from '@/components/Navbar';
import Chart from '@/components/Chart';
import styles from './page.module.css'
import user from '../userCredentials.json';

import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@/atoms/user';

function Home() {
  const [userId, _] = useAtom(userAtom)
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (userId !== null) {
      for (let i = 0; i < user.items.length; i++) {
        if (user.items[i].username === userId) {
          setIndex(i);
          break;
        }
      }
    }
  }, [userId])

  return (
    <>
      <Navbar page={1} />
      <div className={styles.top}>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green", verticalAlign: "text-top" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Valid Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "40px" }}>1000</div>
            <a href="/history">See all Valid Transactions &gt;</a>
          </div>
        </div>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Fraudulant Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "40px" }}>10000</div>
            <a href="/history">See all Fraudulant Transactions &gt;</a>
          </div>
        </div>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Total Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "40px" }}>11000</div>
            <a href="/history">See all Transactions &gt;</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div style={{ flex: 1 }} className={styles.outerBox}>
          {index >= 0 && <>
            <div className={styles.box}>
              <div className={styles.left}>
                <h1>Your Balance:</h1>
                <h2>₹ {user.items[index].balance}</h2>
                <h1 style={{ marginTop: "30px" }}>Latest Transaction:</h1>
                <h2>₹ {user.items[index].recent_transactions[0].amount} was sent {user.items[index].recent_transactions[0].type === "debit" ? "to" : "by"} you {user.items[index].recent_transactions[0].type === "debit" ? "by" : "to"} {user.items[index].recent_transactions[0].to}</h2>
                <h2></h2>
              </div>
            </div>
          </>}
        </div>
        <div style={{ flex: 2 }} className={styles.outerBox}>
          <div className={styles.box}>
            <div className={styles.left}>
              <div className="charts">
                <Chart
                  title="Last 6 Months Fraud Transaction Recordings"
                  aspect={3 / 1}
                />
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  );
};

export default Home;
