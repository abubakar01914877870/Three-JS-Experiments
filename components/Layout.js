import Head from "next/head";
import { useRouter } from "next/router";
import { getPageTitleByPath } from "../utils/utils";
import { sora } from "../styles/fonts";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div
      className={`${sora.className} relative overflow-y-auto text-white bg-black bg-no-repeat bg-cover page scrollbar-thumb-red-700 scrollbar-track-black scrollbar-thin`}
    >
      <Head>
        <title>{getPageTitleByPath(pathname)}</title>
      </Head>
      <Toaster position="top-right" />
      {children}
    </div>
  );
};

export default Layout;
