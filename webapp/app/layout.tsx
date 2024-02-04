'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/user'
import Login from '@/components/Login'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [id, setId] = useAtom(userAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let userId = localStorage.getItem('user');
    if (userId !== null) {
      setId(userId);
    }
    setLoading(false);
  }, [])

  const [user, _] = useAtom<string | null>(userAtom);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!loading && user === null ? <><Login /></> : <>{children}</>}
      </body>
    </html>
  );
}
