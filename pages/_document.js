// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { Document } from 'next/document'; // ❌ DO NOT import Document like this

export default function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
