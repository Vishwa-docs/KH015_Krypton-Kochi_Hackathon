'use client'

import Navbar from '@/components/Navbar';
import Chart from '@/components/Chart';
import styles from './page.module.css'

function Home() {
  return (
    <>
      <Navbar page={1} />
      <div className="loader-container">
        <div className="loader">
          <div className="progress" id="progress">70%</div>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green", verticalAlign: "text-top" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
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
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
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
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Total Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "40px" }}>11000</div>
            <a href="/history">See all Transactions &gt;</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div style={{ flex: 1 }} className={styles.outerBox}>
          <div className={styles.box}>
            <div className={styles.left}>
              <h1>Total Balance:</h1>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>To</th>
                    <th>From</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>You</td>
                    <td>John Doe</td>
                    <td style={{ color: "green" }}>+ ₹ 200</td>
                  </tr>
                  <tr>
                    <td>You</td>
                    <td>John Doe</td>
                    <td style={{ color: "red", }}>- ₹ 500</td>
                  </tr>
                  <tr>
                    <td>You</td>
                    <td>Adithya</td>
                    <td style={{ color: "green", }}>+ ₹ 100</td>
                  </tr>
                </tbody>
              </table >
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }} className={styles.outerBox}>
          <div className={styles.box}>
            <div className={styles.right}><Chart aspect={100} title="Hello world" /></div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Home;
