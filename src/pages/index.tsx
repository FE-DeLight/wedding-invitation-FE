import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
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
