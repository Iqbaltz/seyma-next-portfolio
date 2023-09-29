import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

type Props = { data: any };

gsap.registerPlugin(ScrollTrigger);

export default function Motto({ data }: Props) {
  const fadeIns = useRef<any>([]);
  const goRight = useRef<any>(null);
  const goLeft = useRef<any>(null);
  const appearing = useRef<any>([]);

  const { title1, title2, title3, title4, description } = data;

  useIsomorphicLayoutEffect(() => {
    gsap.to(goRight.current, {
      scrollTrigger: {
        trigger: goRight.current,
        scrub: true,
        end: "600% top",
      },
      x: 64,
      // duration: 1,
    });

    gsap.to(goLeft.current, {
      scrollTrigger: {
        trigger: goLeft.current,
        scrub: true,
        end: "600% top",
      },
      x: -64,
      // duration: 1,
    });

    fadeIns.current.forEach((elm: any) => {
      gsap.to(elm, {
        scrollTrigger: {
          trigger: elm,
          start: "top 96%",
        },
        opacity: 1,
        ease: "ease",
        duration: 1,
        delay: 0.2,
      });
    });

    appearing.current.forEach((elm: any) => {
      gsap.fromTo(
        elm,
        {
          y: "1.25em",
          opacity: "0",
          rotationZ: "10deg",
          duration: "1",
        },
        {
          scrollTrigger: {
            trigger: elm,
            start: "top 96%",
          },
          y: "0em",
          opacity: "1",
          rotationZ: "0deg",
        }
      );
    });
  }, []);

  return (
    <section className="pb-40 pt-64 overflow-hidden">
      <div className="xl:max-w-[1160px] 2xl:max-w-[1600px] 2xl:px-12 mx-auto">
        <div className="mb-16">
          <h1
            ref={(el) => {
              fadeIns.current.push(el);
              goRight.current = el;
            }}
            className="opacity-0 text-8xl 2xl:text-9xl mb-8 font-semibold"
          >
            {title1}
          </h1>
          <div className="overflow-hidden">
            <h1
              ref={(el) => appearing.current.push(el)}
              className="text-8xl 2xl:text-9xl branch ml-[15%] flex"
            >
              <img src="/svg/sun.svg" alt="sun" className="w-24 mr-8" />
              {title2}
            </h1>
          </div>
        </div>
        <div className="text-right">
          <h1
            ref={(el) => {
              fadeIns.current.push(el);
              goLeft.current = el;
            }}
            className="opacity-0 text-8xl 2xl:text-9xl mb-8 font-semibold mr-[15%]"
          >
            {title3}
          </h1>
          <div className="overflow-hidden">
            <h1
              ref={(el) => appearing.current.push(el)}
              className="text-8xl 2xl:text-9xl branch flex justify-end"
            >
              <img src="/svg/star.svg" alt="sun" className="w-20 mr-8" />
              {title4}
            </h1>
          </div>
        </div>
        <p
          ref={(el) => fadeIns.current.push(el)}
          className="opacity-0 max-w-[440px] 2xl:max-w-[500px] text-lg 2xl:text-xl mt-16"
        >
          {description}
        </p>
      </div>
    </section>
  );
}
