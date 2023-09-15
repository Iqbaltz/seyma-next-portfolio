import React from "react";

export default function Intro() {
  return (
    <section className="relative p-16 bg-white rounded-3xl text-black">
      <div className="flex justify-between max-w-[1440px] mx-auto">
        <div className="bg-[lightgrey] w-[320px] flex-grow min-h-[800px] rounded-full mr-8"></div>
        <div className="flex-grow py-4">
          <div className="relative text-[40px] w-full">
            <p>Seyma is a UX designer with a knack for creating</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right"></div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>intuitive and user-centered designs. With a</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right"></div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>background in architecture and a Master’s degree in</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>User Experience Design, Seyma brings a unique</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>perspective to the digital world. She started out</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>designing physical spaces, but quickly realised her</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>true passion was creating intuitive and user-friendly</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>digital products. With skills in design thinking,</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>storytelling and creative problem-solving, Seyma is</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>committed to making a meaningful impact on</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>people’s lives through innovative solutions that</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="relative text-[40px] w-full">
            <p>prioritise the needs of the user.</p>
            <div className="line-mask absolute top-0 w-full h-full bg-white/90 origin-right">
              {" "}
            </div>
          </div>
          <div className="flex justify-end items-center mt-16">
            <p className="text-2xl mr-6">GET TO KNOW ME</p>
            <button className="btn-effect relative overflow-hidden border border-black rounded-full">
              <div className="relative w-full h-full  px-8 py-5 overflow-hidden rounded-full">
                <img
                  className="w-32 relative "
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
