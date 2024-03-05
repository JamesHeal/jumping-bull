import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/logo.png' type='image/x-icon' />
        <meta name='viewport' content='user-scalable=yes' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
