'use client'

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar page={1} />
      <h1>Hello, user</h1>
    </>
  );
}
