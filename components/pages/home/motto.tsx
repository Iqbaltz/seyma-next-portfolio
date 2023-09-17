import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

type Props = {};

gsap.registerPlugin(ScrollTrigger);

export default function Motto({}: Props) {
  const fadeIns = useRef<any>([]);
  const goRight = useRef<any>(null);
  const goLeft = useRef<any>(null);
  const appearing = useRef<any>([]);

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
          start: "top 98%",
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
            start: "top 98%",
          },
          y: "0em",
          opacity: "1",
          rotationZ: "0deg",
        }
      );
    });
  }, []);

  return (
    <section className="pb-40 pt-64">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h1
            ref={(el) => {
              fadeIns.current.push(el);
              goRight.current = el;
            }}
            className="opacity-0 text-9xl mb-8 font-semibold"
          >
            CREATIVE
          </h1>
          <div className="overflow-hidden">
            <h1
              ref={(el) => appearing.current.push(el)}
              className="text-9xl branch ml-[15%] flex"
            >
              <img src="/svg/sun.svg" alt="sun" className="w-24 mr-8" />
              SOLUTIONS
            </h1>
          </div>
        </div>
        <div className="text-right">
          <h1
            ref={(el) => {
              fadeIns.current.push(el);
              goLeft.current = el;
            }}
            className="opacity-0 text-9xl mb-8 font-semibold mr-[15%]"
          >
            DRIVEN BY
          </h1>
          <div className="overflow-hidden">
            <h1
              ref={(el) => appearing.current.push(el)}
              className="text-9xl branch flex justify-end"
            >
              <img src="/svg/star.svg" alt="sun" className="w-20 mr-8" />
              EMPATHY
            </h1>
          </div>
        </div>
        <p
          ref={(el) => fadeIns.current.push(el)}
          className="opacity-0 max-w-[500px] text-xl mt-16"
        >
          I believe in using storytelling and design thinking to create products
          that not only solve the right problems, but also engage and inspire
          people. By putting empathy at the heart of my work, I strive to create
          user experiences that are meaningful and bring joy to people.
        </p>
      </div>
    </section>
  );
}
