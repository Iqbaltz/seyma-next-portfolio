import { useIsomorphicLayoutEffect } from "@/helpers/ismorphicEffect";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

export default function Projects() {
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
            className="px-40 2xl:px-52 h-screen w-max grid gap-40 grid-flow-col items-center relative"
          >
            {projectList.map(({ name, color }, i) => (
              <div
                key={i}
                ref={(el) =>
                  i % 2 ? downs?.current?.push(el) : ups?.current?.push(el)
                }
                className={`${
                  i % 2 ? "-translate-y-20" : "translate-y-20"
                } w-80 2xl:w-96 h-[400px] 2xl:h-[440px] rounded-3xl flex justify-center items-center bg-[lightgrey] text-black`}
              >
                <h1 className="branch text-4xl">{name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
