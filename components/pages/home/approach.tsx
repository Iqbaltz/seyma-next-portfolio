import React from "react";

type Props = {};

export default function approach({}: Props) {
  return (
    <section className="py-40">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="fade-in go-right opacity-0 flex font-semibold items-center text-9xl">
          A
          <img
            src="/svg/circular.svg"
            alt="circular"
            className="h-24 ml-2 mr-4"
          />
          PROCESS-DRIVEN
        </h1>
        <div className="overflow-hidden">
          <h1 className="appearing go-left branch text-9xl text-right mt-8">
            APPROACH TO DESIGN
          </h1>
        </div>
        <p className="fade-in opacity-0 text-xl mt-24 max-w-[660px]">
          At the core of my approach is design thinking, a methodology that
          prioritises empathy, experimentation, and innovation. By truly
          understanding user needs and engaging in creative ideation and
          prototyping, I’m able to create solutions that not only solve
          problems, but also inspire and engage people.
        </p>
        <img className="w-full mt-40" src="/images/process.png" alt="process" />
      </div>
    </section>
  );
}
