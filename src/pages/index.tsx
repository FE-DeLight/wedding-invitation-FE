import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Seo from '@/components/Seo';
import Login from '@/components/Login/Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      {/*<Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />*/}
      {/*<h1 className={inter.className}>Home</h1>*/}
      <Login />
    </>
  );
}
