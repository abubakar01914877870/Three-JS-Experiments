import "../styles/globals.css";

// import layout
import Layout from "../components/Layout";
// import { VercelToolbar } from "@vercel/toolbar/next";

// import next js router
import { useRouter } from "next/router";

// import framer motion
import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import Loading from "../components/Loading";
// import { LocationProvider } from "../context/location-context";

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
