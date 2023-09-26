import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Intro() {
  const lineMasks = useRef<any>([]);
  const btn = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    lineMasks.current.forEach((mask: any) => {
      gsap.to(mask, {
        scrollTrigger: {
          trigger: mask,
          start: "top 72%",
          end: "bottom 72%",
          scrub: 1,
          toggleActions: "restart completed reverse pause",
        },
        width: "0",
        ease: "none",
        duration: 1,
      });
    });

    const changeMousePosition = (e: any) => {
      const { x, y } = btn.current.getBoundingClientRect();
      const xOffset = e.clientX - parseInt(x);
      const yOffset = e.clientY - parseInt(y);

      btn.current.style.setProperty("--x", xOffset);
      btn.current.style.setProperty("--y", yOffset);
    };

    btn.current.addEventListener("mousemove", changeMousePosition);

    return () => {
      document.removeEventListener("mousemove", changeMousePosition);
    };
  }, []);
  return (
    <section className="relative py-16 xl:py-20 bg-white rounded-3xl text-black">
      <div className="flex justify-between xl:max-w-[1160px] 2xl:max-w-[1600px] 2xl:px-12 mx-auto">
        <div className="bg-[lightgrey] w-[320px] flex-grow rounded-full mr-12 2xl:mr-16"></div>
        <div className="flex-grow py-4">
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>Seyma is a UX designer with a knack for creating</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            ></div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>intuitive and user-centered designs. With a</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            ></div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>background in architecture and a Master’s degree in</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>User Experience Design, Seyma brings a unique</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>perspective to the digital world. She started out</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>designing physical spaces, but quickly realised her</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>true passion was creating intuitive and user-friendly</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>digital products. With skills in design thinking,</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>storytelling and creative problem-solving, Seyma is</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>committed to making a meaningful impact on</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>people’s lives through innovative solutions that</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="relative text-[32px] 2xl:text-[40px] w-full">
            <p>prioritise the needs of the user.</p>
            <div
              ref={(el) => lineMasks.current.push(el)}
              className="absolute right-0 top-0 w-full h-full bg-white/90 origin-right"
            >
              {" "}
            </div>
          </div>
          <div className="flex justify-end items-center mt-16">
            <p className="text-xl 2xl:text-2xl mr-6">GET TO KNOW ME</p>
            <button
              ref={btn}
              className="btn-effect relative overflow-hidden border border-black rounded-full"
            >
              <div className="relative w-full h-full px-6 2xl:px-8 py-4 2xl:py-5 overflow-hidden rounded-full">
                <img
                  className="w-28 2xl:w-32 relative "
                  src="/svg/arrow-right.svg"
                  alt="arrow-right"
                />
                <div className="dot-black absolute top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference scale-[0.01] transition-[transform] duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
