import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/Layout';
import { Provider } from 'react-redux';
import store from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component pageProps={pageProps} />
      </LayoutComponent>
    </Provider>
  );
}
