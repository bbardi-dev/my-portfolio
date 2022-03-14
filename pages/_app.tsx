import "../styles/normalize.scss";
import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head key='head'>
        <title>balazs.bardi</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
export default MyApp;
