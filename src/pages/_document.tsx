import React from 'react';
import { Html, Main, NextScript, Head } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title></title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
