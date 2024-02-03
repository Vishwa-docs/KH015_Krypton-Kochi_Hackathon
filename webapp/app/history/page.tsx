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
        </div>
      </div>
    </>
  )
}

export default History;
