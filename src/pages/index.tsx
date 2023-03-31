import React from 'react';
import Seo from '@/components/Seo';
import Login from '@/components/Login/Login';
import InvitaionPhrasesLayout from './layout';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Login />
      <InvitaionPhrasesLayout />
    </>
  );
}
