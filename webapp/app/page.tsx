'use client'

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/user';

export default function Home() {
  const [user, _] = useAtom(userAtom);

  return (
    <>
      <Navbar page={1} />
      <h1>Hello, {user}</h1>
    </>
  );
}
