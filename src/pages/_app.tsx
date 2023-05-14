import React from 'react';
import '@/styles/globals.scss';
import '@/styles/datePicker.scss';
import '@/styles/guestBook.scss';
import '@/styles/Invitation.scss';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/Layout';
import { Provider } from 'react-redux';
import store from '@/store';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component pageProps={pageProps} />
      </LayoutComponent>
    </Provider>
  );
}
