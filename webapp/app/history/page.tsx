'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";

import { useState, useRef, FormEvent } from 'react';

function History() {
  return (
    <>
      <Navbar page={4} />

      <div className={styles.outerBox}>
        <div className={styles.box}>
          <h1>Recent Transactions</h1>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>To</th>
                <th>From</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>d251eb2a-89ec-4c3d</td>
                <td>ABC Corporation</td>
                <td>John Doe</td>
                <td style={{ color: "green" }}>+ ₹ 200</td>
                <td>Technology</td>
                <td><button>DELETE</button></td>
              </tr>
              <tr>
                <td>675dbe0c-e8af-43b0</td>
                <td>ABC Corporation</td>
                <td>John Doe</td>
                <td style={{ color: "red", }}>- ₹ 500</td>
                <td>Technology</td>
                <td><button>DELETE</button></td>
              </tr>
              <tr>
                <td>047cfe5f-dbdd-4ee1</td>
                <td>Adithya Vedhamani</td>
                <td>Adithya</td>
                <td style={{ color: "green", }}>+ ₹ 100</td>
                <td>Retail</td>
                <td><button>DELETE</button></td>
              </tr>
            </tbody>
          </table >
        </div>
      </div>


    </>
  )
}

export default History;

