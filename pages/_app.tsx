import { Layout } from "@/components/common/layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} className />
      </Layout>
      <Analytics />
    </>
  );
}
