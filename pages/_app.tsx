import "../styles/normalize.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <motion.div className='container'>
          <Component {...pageProps} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default MyApp;
