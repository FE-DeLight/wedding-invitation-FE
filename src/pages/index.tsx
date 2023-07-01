import React, { useEffect } from 'react';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import Auth from '@/utils/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!Auth.checkToken()) {
      router.push('/login');
    }
  }, [router]);

  return <Seo title="Home" />;
}
