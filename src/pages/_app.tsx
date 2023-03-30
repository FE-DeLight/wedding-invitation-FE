import React from 'react';
import '@/styles/globals.scss';
import '@/styles/datePicker.scss';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/Layout';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component pageProps={pageProps} />
    </LayoutComponent>
  );
}
