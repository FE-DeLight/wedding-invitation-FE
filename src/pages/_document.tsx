import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        type="text/javascript"
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
        charSet="utf-8"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
