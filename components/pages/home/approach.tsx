import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import { urlForImage } from "@/sanity/lib/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

type Props = { data: any };

gsap.registerPlugin(ScrollTrigger);
export default function Approach({ data }: Props) {
  const fadeIns = useRef<any>([]);
  const appearing = useRef<any>();
  const goRight = useRef<any>(null);
  const goLeft = useRef<any>(null);

  const { title1, title2, image, description } = data;

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

    gsap.fromTo(
      appearing.current,
      {
        y: "1.25em",
        opacity: "0",
        rotationZ: "10deg",
        duration: "1",
      },
      {
        scrollTrigger: {
          trigger: appearing.current,
          start: "top 98%",
        },
        y: "0em",
        opacity: "1",
        rotationZ: "0deg",
      }
    );
  }, []);
  return (
    <section className="py-40 overflow-hidden">
      <div className="xl:max-w-[1160px] 2xl:max-w-[1600px] 2xl:px-12 mx-auto">
        <h1
          ref={(el) => {
            fadeIns.current.push(el);
            goRight.current = el;
          }}
          className="opacity-0 flex font-semibold items-center text-8xl 2xl:text-9xl"
        >
          A
          <img
            src="/svg/circular.svg"
            alt="circular"
            className="h-24 ml-2 mr-4"
          />
          {title1}
        </h1>
        <div className="overflow-hidden">
          <h1
            ref={(el) => {
              appearing.current = el;
              goLeft.current = el;
            }}
            className="branch text-8xl 2xl:text-9xl text-right mt-8"
          >
            {title2}
          </h1>
        </div>
        <p
          ref={(el) => fadeIns.current.push(el)}
          className="opacity-0 text-lg 2xl:text-xl mt-24 max-w-[600px] 2xl:max-w-[660px]"
        >
          {description}
        </p>
        <img
          className="w-full mt-40"
          src={image ? urlForImage(image).url() : ""}
          alt="process"
        />
      </div>
    </section>
  );
}
