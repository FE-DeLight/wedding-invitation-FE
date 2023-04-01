import React from 'react';
import Seo from '@/components/Seo';
import Login from '@/components/Login/Login';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Login />
    </>
  );
}
