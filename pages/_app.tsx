import { Layout } from "@/components/common/layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { lazy } from "react";

const PreviewProvider = lazy(
  () => import("@/components/common/PreviewProvider")
);

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;
  return (
    <>
      {draftMode ? (
        <PreviewProvider previewToken={token}>
          <h1 className="opacity-70 text-xl fixed bottom-0 right-0 px-3 py-1 bg-black text-white z-50">
            <Link href="/api/exit-preview">Exit preview</Link>
          </h1>
          <Layout>
            <Component {...pageProps} className />
          </Layout>
        </PreviewProvider>
      ) : (
        <>
          <Layout>
            <Component {...pageProps} className />
          </Layout>
          <Analytics />
        </>
      )}
    </>
  );
}
