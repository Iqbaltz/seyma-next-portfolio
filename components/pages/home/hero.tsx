import React from "react";

export default function Hero() {
  return (
    <div className="h-screen" data-scroll data-scroll-speed="-0.9">
      <div className="w-full">
        <section className="max-w-[1600px] mx-auto pt-32 flex flex-col justify-center min-h-screen bg-hero-pattern bg-contain bg-no-repeat bg-top">
          <div className="h-full">
            <div className="overflow-hidden">
              <h1 className="text-9xl font-semibold mt-6 opacity-0 animate-appear-from-bottom">
                HUMAN-CENTRED
              </h1>
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center justify-end mt-11 translate-y-40 opacity-0 animate-[appear-dp_1s_0.9s_ease_forwards]">
                <img
                  src="/svg/sun.svg"
                  alt="star"
                  className="h-24 mr-2 animate-spin-back"
                />
                <h1 className="text-9xl branch text-right">
                  DIGITAL PRODUCTS &
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-11">
              <p className="max-w-[600px] leading-9 text-2xl opacity-0 font-light animate-[appear_1s_2.1s_ease-in_forwards]">
                Seyma is a creative UX/UI Designer who helps businesses tackle
                digital design challenges & creating engaging experiences that
                their users love.
              </p>
              <div className="overflow-hidden">
                <h1 className="text-9xl branch opacity-0 animate-[appear-from-bottom-reversed_1s_1.5s_ease_forwards]">
                  EXPERIENCES
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-24 opacity-0 animate-[appear_1s_2.4s_ease-in_forwards]">
            <img
              className="ml-auto w-36"
              src="/images/scroll-down.png"
              alt="keep scrolling"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
