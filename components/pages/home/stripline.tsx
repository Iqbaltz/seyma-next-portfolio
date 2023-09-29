import { urlForImage } from "@/sanity/lib/image";
import React from "react";

type Props = { data: any };

export default function stripline({ data }: Props) {
  const { text, icon } = data;

  return (
    <section className="min-h-[400px] flex justify-center items-center overflow-hidden">
      <div className="bg-white whitespace-nowrap max-w-screen text-black flex justify-center -rotate-[5deg]">
        <h1 className="text-8xl 2xl:text-9xl font-semibold block	bg-white p-12">
          {text}
        </h1>
        <img src={urlForImage(icon).url()} alt="small-star" className="mx-4" />
        <h1 className="text-8xl 2xl:text-9xl font-semibold p-12">{text}</h1>
      </div>
    </section>
  );
}
