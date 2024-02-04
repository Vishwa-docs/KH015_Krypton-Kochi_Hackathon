'use client'

import styles from './page.module.css'
import Navbar from '@/components/Navbar';

function NetworkAnalysis() {

  return (
    <>
      <Navbar page={6} />

      <div className={styles.outerBox}>
        <div className={styles.box}>
          <img src="/graph.png" alt="Network Analysis" />
          <img src="/graph_connected.png" alt="Network Analysis" />
        </div>
      </div>
    </>
  )
}

export default NetworkAnalysis;
