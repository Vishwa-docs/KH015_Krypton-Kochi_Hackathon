'use client'

import Navbar from '@/components/Navbar';
import styles from './page.module.css'

function Home() {
  return (
    <>
      <Navbar page={1} />
      <div className={styles.top}>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Valid Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "50px" }}>10000</div>
            <a href="#">See all Valid Transactions &gt;</a>
          </div>
        </div>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Fraudulant Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "50px" }}>10000</div>
            <a href="#">See all Fraudulant Transactions &gt;</a>
          </div>
        </div>
        <div className={styles.outerBox}>
          <div className={styles.box}>
            <div style={{ float: "right", color: "green" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
              </svg>20 %</div>
            <h2>Total Transactions</h2>
            <div style={{ padding: "40px 30px", fontSize: "50px" }}>10000</div>
            <a href="#">See all Transactions &gt;</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
