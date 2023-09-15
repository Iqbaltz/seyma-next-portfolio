import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusjkt = Plus_Jakarta_Sans({ subsets: ["latin"] });

const withoutLayout = ["/studio"];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  const isWithoutLayout = withoutLayout.some((path) =>
    pathname.startsWith(path)
  );

  if (isWithoutLayout) {
    return <>{children}</>;
  }

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          normalizeWheel: true,
          easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Seyma Nur Ermis</title>
        <meta
          name="description"
          content="Seyma is a creative UX/UI Designer who helps businesses tackle digital design challenges & creating engaging experiences that their users love."
        />
      </Head>
      <Navbar />
      <main className={plusjkt.className}>{children}</main>
      <Footer />
    </>
  );
}
