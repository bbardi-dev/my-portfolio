import "../styles/normalize.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div style={{ position: "relative" }}>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.6, 0.01, -0.05, 0.95],
              },
            }}
            style={{ position: "relative" }}
          >
            <Menu />
            <Component {...pageProps} />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
export default MyApp;
