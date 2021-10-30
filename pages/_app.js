import { useEffect } from "react";
import { pageview } from "lib/gtag";
import "tailwindcss/tailwind.css";
import "./index.css";
import Layout from "../components/layout";
const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
