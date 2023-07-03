import React, { useEffect } from 'react';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import Auth from '@/utils/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function authCheck() {
      if (!Auth.checkToken()) {
        await router.push('/Login', undefined, { shallow: true });
      }
    }

    authCheck();
  }, [router]);

  return <Seo title="Home" />;
}
