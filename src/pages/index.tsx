import React, { useEffect } from 'react';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  router.push('/login');

  return <Seo title="Home" />;
}
