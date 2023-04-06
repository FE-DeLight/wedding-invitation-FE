import React, { useEffect } from 'react';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return <Seo title="Home" />;
}
