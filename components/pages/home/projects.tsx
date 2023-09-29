import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urlForImage } from "@/sanity/lib/image";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    name: "ORBZII",
    color: "blue",
  },
  {
    name: "TRAVELAR",
    color: "red",
  },
  {
    name: "PROJECT",
    color: "yellow",
  },
  {
    name: "ORBZII",
    color: "green",
  },
  {
    name: "TRAVEL",
    color: "fuchsia",
  },
];

interface IProjectsProps {
  data: any[];
}
export default function Projects({ data }: IProjectsProps) {
  const sectionRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);
  const ups = useRef<any>([]);
  const downs = useRef<any>([]);

  useIsomorphicLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX:
          -(
            sectionRef?.current?.offsetWidth - triggerRef?.current?.offsetWidth
          ) || "100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${triggerRef?.current?.offsetWidth} top`,
          pin: true,
          scrub: true,
        },
      }
    );

    ups.current.forEach((elm: any, i: number) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `top top`,
            end: `${
              triggerRef?.current?.offsetWidth + i * elm?.offsetHeight
            } top`,
            scrub: 0.3,
          },
        })
        .to(elm, {
          y: -80,
        });
    });
    downs.current.forEach((elm: any, i: number) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: `top top`,
            end: `${
              triggerRef?.current?.offsetWidth + i * elm?.offsetHeight
            } top`,
            scrub: 0.3,
          },
        })
        .to(elm, {
          y: 80,
        });
    });

    return () => {
      pin.kill();
    };
  }, [sectionRef]);

  return (
    <>
      <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="px-40 2xl:px-52 h-screen w-max grid gap-52 2xl:gap-80 grid-flow-col items-center relative"
          >
            {data.map(({ title, mainImage, slug }, i) => (
              <div
                key={i}
                ref={(el) =>
                  i % 2 ? downs?.current?.push(el) : ups?.current?.push(el)
                }
                className={`${
                  i % 2 ? "-translate-y-20" : "translate-y-20"
                } relative w-80 2xl:w-96 h-[400px] 2xl:h-[480px] rounded-3xl flex justify-start items-end overflow-hidden`}
              >
                <img
                  src={urlForImage(mainImage).url()}
                  className="absolute w-full h-full object-cover"
                  alt={title}
                />
                <h1 className="relative branch text-4xl m-8">{title}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
