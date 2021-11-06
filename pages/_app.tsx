import "../styles/normalize.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='animation-helper'>
        <motion.div animate={{ x: [0, 100, 0] }} className='transition-1' />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ display: "none" }}
          className='transition-2'
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ display: "none" }}
          className='transition-3'
        />
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </div>
    </AnimatePresence>
  );
}
export default MyApp;
