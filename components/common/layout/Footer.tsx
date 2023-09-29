import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRef } from "react";

const plusjkt = Plus_Jakarta_Sans({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const wrapper = useRef<any>(null);
  const allBox = useRef<any[]>([]);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useIsomorphicLayoutEffect(() => {
    const boxWidth = allBox.current[0].offsetWidth,
      totalWidth = boxWidth * 3,
      no01 = allBox.current,
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;
    const mod = gsap.utils.wrap(0, totalWidth);

    function marquees(which: any, time: any, direction: any) {
      gsap.set(which, {
        x: function (i) {
          return i * boxWidth;
        },
      });
      const action = gsap.timeline().to(which, {
        x: direction,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
      return action;
    }

    const master = gsap.timeline({}).add(marquees(no01, 15, dirFromRight));
    // === smooth 'stop'====
    var smooth = gsap.to(master, {
      timeScale: 1,
      duration: 1,
      ease: "power2.in",
      paused: true,
      onComplete: () =>
        ScrollTrigger.removeEventListener("scrollEnd", () => {}),
    });

    ScrollTrigger.create({
      trigger: wrapper.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        if (self.direction > 0) {
          master.timeScale(1.5);
        } else if (self.direction < 0) {
          master.timeScale(2);

          ScrollTrigger.addEventListener("scrollEnd", function () {
            master.timeScale(1);
          });
        }
      },
    });
  }, []);

  return (
    <footer
      className={`bg-[url(/images/grainy-bg.png)] bg-black/50 bg-blend-hard-light bg-cover h-max ${plusjkt.className}`}
    >
      <div className="py-20 bg-blend-darken bg-black bg-opacity-30">
        <div
          ref={wrapper}
          className="wrapper w-[100%] h-24 2xl:h-32 overflow-hidden"
        >
          <div className="relative -left-[1074px]">
            <div
              ref={(el) => allBox.current.push(el)}
              className="text-center absolute"
            >
              <div className="flex items-center">
                <h1 className="text-8xl 2xl:text-9xl font-semibold">
                  GET IN TOUCH
                </h1>
                <img
                  src="/svg/small-star-white.svg"
                  className="mx-16 animate-spin-slow"
                  alt="small-star-white"
                />
              </div>
            </div>
            <div
              ref={(el) => allBox.current.push(el)}
              className="text-center absolute"
            >
              <div className="flex items-center">
                <h1 className="text-8xl 2xl:text-9xl font-semibold">
                  GET IN TOUCH
                </h1>
                <img
                  src="/svg/small-star-white.svg"
                  className="mx-16 animate-spin-slow"
                  alt="small-star-white"
                />
              </div>
            </div>
            <div
              ref={(el) => allBox.current.push(el)}
              className="text-center absolute"
            >
              <div className="flex items-center">
                <h1 className="text-8xl 2xl:text-9xl font-semibold">
                  GET IN TOUCH
                </h1>
                <img
                  src="/svg/small-star-white.svg"
                  className="mx-16 animate-spin-slow"
                  alt="small-star-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:max-w-[1160px] mt-32 2xl:mt-36 2xl:max-w-[1600px] 2xl:px-12 mx-auto">
          <p className="text-3xl 2xl:text-4xl max-w-[500px] 2xl:w-[560px]">
            Let’s grab a coffee and dive into your design needs.
          </p>

          <div className="flex items-center mt-16 text-white">
            <p className="text-xl 2xl:text-2xl mr-6">GET TO KNOW ME</p>
            <button className="px-6 2xl:px-8 py-4 2xl:py-5 border border-white rounded-full">
              <img
                className="w-28 2xl:w-32"
                src="./svg/arrow-right-white.svg"
                alt="arrow-right"
              />
            </button>
          </div>
          <div
            onClick={scrollToTop}
            className="flex justify-end mt-16 2xl:mt-24 cursor-pointer"
          >
            <img src="/images/back-top.png" className="w-32" alt="back-top" />
          </div>
          <div className="flex justify-between mt-24 2xl:mt-32">
            <p className="text-lg 2xl:text-xl font-light">
              © 2023 sne design // by Seyma N. Ermis
            </p>
            <div className="flex items-center text-xl 2xl:text-2xl">
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
      </div>
    </footer>
  );
}
