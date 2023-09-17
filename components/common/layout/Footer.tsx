import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef } from "react";

const plusjkt = Plus_Jakarta_Sans({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const marquee = useRef<any[]>([]);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useIsomorphicLayoutEffect(() => {
    marquee.current.forEach((el:any) => {
      // set a default rate, the higher the value, the faster it is
      let rate = 200;
      // get the width of the element
      let distance = el?.clientWidth + 98;
      console.log(distance);
      // get the margin-right of the element
      let style = window.getComputedStyle(el);
      let marginRight = parseInt(style.marginRight) || 0;
      // get the total width of the element
      let totalDistance = distance + marginRight;
      // get the duration of the animation
      // for a better explanation, see the quoted codepen in the first comment
      let time = totalDistance / rate;
      // get the parent of the element
      let container = el?.parentElement;

      gsap.to(container, time, {
        repeat: -1,
        x: "-" + totalDistance,
        ease: Linear.easeNone,
      });
    });
  }, []);

  return (
    <footer
      className={`py-20 bg-[url(/images/grainy-bg.png)] bg-black/30 bg-blend-hard-light bg-cover overflow-hidden ${plusjkt.className}`}
    >
      <div className="marquee-container overflow-hidden whitespace-nowrap">
        <div className="marquee">
          <span ref={(el) => marquee.current.push(el)} className="inline-block">
            <h1 className="flex text-9xl font-semibold">
              GET IN TOUCH
              <img
                src="/svg/small-star-white.svg"
                className="mx-16"
                alt="small-star-white"
              />
            </h1>
          </span>
          <span ref={(el) => marquee.current.push(el)} className="inline-block">
            <h1 className="flex text-9xl font-semibold">
              GET IN TOUCH
              <img
                src="/svg/small-star-white.svg"
                className="mx-16"
                alt="small-star-white"
              />
            </h1>
          </span>
          <span ref={(el) => marquee.current.push(el)} className="inline-block">
            <h1 className="flex text-9xl font-semibold">
              GET IN TOUCH
              <img
                src="/svg/small-star-white.svg"
                className="mx-16"
                alt="small-star-white"
              />
            </h1>
          </span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <p className="text-4xl mt-40 w-[560px]">
          Let’s grab a coffee and dive into your design needs.
        </p>

        <div className="flex items-center mt-16 text-white">
          <p className="text-2xl mr-6">GET TO KNOW ME</p>
          <button className="px-8 py-5 border border-white rounded-full">
            <img
              className="w-36"
              src="./svg/arrow-right-white.svg"
              alt="arrow-right"
            />
          </button>
        </div>
        <div
          onClick={scrollToTop}
          className="flex justify-end mt-24 cursor-pointer"
        >
          <img src="/images/back-top.png" className="w-32" alt="back-top" />
        </div>
        <div className="flex justify-between mt-32">
          <p className="text-xl font-light">
            © 2023 sne design // by Seyma N. Ermis
          </p>
          <div className="flex items-center text-2xl">
            <p>FOLLOW ME</p>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              LINKEDIN
            </a>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              INSTAGRAM
            </a>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              BEHANCE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
