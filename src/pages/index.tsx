import React from 'react';
import Seo from '@/components/Seo';
import Login from '@/components/Login/Login';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
      <h1 className={inter.className}>Home</h1>
      <Login />
    </>
  );
}
