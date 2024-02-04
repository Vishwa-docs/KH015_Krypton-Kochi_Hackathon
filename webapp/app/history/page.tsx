'use client'

import styles from './page.module.css';
import Navbar from "@/components/Navbar";
import user from '../../userCredentials.json'

import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/user';
import { useEffect, useState } from 'react';

function History() {
  const [userId, setUserId] = useAtom(userAtom)
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
      <Navbar page={5} />

      <div className={styles.outerBox}>
        <div className={styles.box}>
          <h1>Recent Transactions</h1>


          <table className={styles.table}>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Your Location</th>
                <th>Their Location</th>
              </tr>
            </thead>
            <tbody>
              {index >= 0 && user.items[index].recent_transactions.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.transaction_id}</td>
                      <td>{item.type === "debit" ? item.to : user.items[index].name}</td>
                      <td>{item.type === "credit" ? item.to : user.items[index].name}</td>
                      <td>{item.type === "credit" ? <div className={styles.red}>{"- ₹" + item.amount}</div> : <div className={styles.green}>{"+ ₹" + item.amount}</div>}</td>
                      <td>{item.your_location}</td>
                      <td>{item.their_location}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table >
        </div>
      </div>
    </>
  )
}

export default History;

