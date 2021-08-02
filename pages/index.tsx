import React, { useEffect } from 'react';
import Head from 'next/head';
import Greeter from '@/components/Greeter';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Bellum Mechanica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Greeter />
      </main>

      <footer></footer>
    </div>
  );
}
