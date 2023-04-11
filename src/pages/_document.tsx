import React from 'react';
import { Html, Main, NextScript, Head } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Naver Login */}
        <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" strategy="beforeInteractive" />
        {/* Naver Map */}
        <Script
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=b0xf776a7j&submodules=geocoder"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
