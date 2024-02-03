'use client'

import styles from './page.module.css'
import Navbar from '@/components/Navbar';
import Login from '@/components/Login';

function NetworkAnalysis() {

  return (
    <>
      <Navbar page={5} />
      <Login />
    </>
  )
}

export default NetworkAnalysis;
