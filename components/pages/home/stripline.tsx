import React from "react";

type Props = {};

export default function stripline({}: Props) {
  return (
    <section className="min-h-[400px] flex justify-center items-center overflow-hidden">
      <div className="bg-white whitespace-nowrap max-w-screen text-black flex justify-center -rotate-[5deg]">
        <h1 className="text-8xl 2xl:text-9xl font-semibold block	bg-white p-12">
          TED PROJECTS
        </h1>
        <img src="/svg/small-star.svg" alt="small-star" className="mx-4" />
        <h1 className="text-8xl 2xl:text-9xl font-semibold p-12">
          SELECTED PRO
        </h1>
      </div>
    </section>
  );
}
