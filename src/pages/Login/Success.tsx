import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface LoginSuccessType {
  [key: string]: string;
}

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    const routerQuery = router.asPath.split('#')[1].split('&');
    const resData: LoginSuccessType = {};

    routerQuery.forEach((item) => {
      const [key, value] = item.split('=');
      if (key && value) {
        resData[key] = value;
        window.localStorage.setItem(key, value);
      }
    });

    router.push('/mypage');
  });

  return null;
}
