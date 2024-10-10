import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <AnimatePresence>
        <div className="h-full ">
          {/* <Transition /> */}
          <Component {...pageProps} />
          {/* <VercelToolbar /> */}
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
