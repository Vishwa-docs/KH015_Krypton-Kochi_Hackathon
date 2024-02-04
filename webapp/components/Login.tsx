'use client'

import { useState, FormEvent } from "react";
import CryptoJS from "crypto-js"
import users from "../userCredentials.json";
import styles from "./Login.module.css";
import Navbar from "@/components/Navbar";

import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/user'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setUser] = useAtom(userAtom);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = CryptoJS.SHA256(password).toString();
    for (let i = 0; i < users.items.length; i++) {
      const user = users.items[i];
      if (user.username === username && user.pswd === hashedPassword) {
        setUser(user.username);
        localStorage.setItem('user', user.username)
        return;
      }
    }

    setUsername("");
    setPassword("");

    alert("Invalid username or password");
  };

  return (
    <>
      <Navbar page={0} />
      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
