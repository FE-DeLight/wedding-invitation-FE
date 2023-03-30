import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <script async src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
