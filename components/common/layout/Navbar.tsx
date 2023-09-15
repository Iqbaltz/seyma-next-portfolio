import React, { useEffect } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusjkt = Plus_Jakarta_Sans({ subsets: ["latin"] });

const menuList = [
  {
    label: {
      id: "Layanan",
      en: "Services",
    },
    url: "/services",
  },
  {
    label: {
      id: "Pelatihan",
      en: "Training",
    },
    url: "#",
  },
  {
    label: {
      id: "Tim Kami",
      en: "Our Team",
    },
    url: "/team",
  },
  {
    label: {
      id: "Tentang",
      en: "About",
    },
    url: "/about",
  },
  {
    label: {
      id: "Hubungi Kami",
      en: "Contact Us",
    },
    url: "/contact",
  },
];

export default function Navbar() {
  function handleOpenMenu() {}
  function handleCloseMenu() {}

  return (
    <>
      <header
        className={`fixed z-10 mix-blend-difference w-[100%] max-w-[1600px] top-0 left-[50%] translate-x-[-50%] flex justify-between items-center py-8 ${plusjkt.className}`}
      >
        <p className="font-bold text-4xl">sne</p>
        <div
          onClick={handleOpenMenu}
          className="ham flex flex-col items-end group cursor-pointer"
        >
          <div className="w-12 h-0.5 bg-white mb-1.5 group-hover:w-20 transition-[width] duration-300 ease-in-out"></div>
          <div className="w-7 h-0.5 bg-white mb-1.5 group-hover:w-12 transition-[width] duration-300 ease-in-out"></div>
          <div className="w-7 h-0.5 bg-white group-hover:w-12 transition-[width] duration-300 ease-in-out delay-75"></div>
        </div>
      </header>

      <div
        className="fixed z-50 w-full h-full top-full transition-all ease-[cubic-bezier(.58,0,.5,.1)] duration-[1s] flex bg-black/30 backdrop-blur justify-center items-center"
        id="menu"
      >
        <div className="absolute top-8 z-50 max-w-[1600px] mx-auto flex justify-end  w-full">
          <img
            onClick={handleCloseMenu}
            src="/svg/x-cross.svg"
            alt="cross"
            className="cursor-pointer w-10 opacity-0"
            id="cross-btn"
          />
        </div>
        <div className="absolute w-full h-full z-40 mix-blend-soft-light bg-black opacity-70"></div>
        <img
          src="/images/grainy-bg.png"
          alt="grainy"
          className="absolute w-full h-full object-cover z-30 opacity-70"
        />
        <nav className="relative z-50 font-semibold w-full max-w-[1600px] mx-auto">
          <div className="line-menu relative flex items-center py-3 after:transition-[width] after:duration-700 after:content-[''] after:h-[2px] after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0">
            <div className="flex items-end">
              <p className="branch mr-8 text-2xl font-light">01</p>
              <a href="#" className="text-9xl branch font-normal">
                HOME
              </a>
            </div>
            <img
              src="/svg/small-star-white.svg"
              className="ml-8"
              alt="star-white"
            />
            <p className="text-xl font-light ml-6">you are here</p>
          </div>
          <div className="line-menu relative flex justify-center items-end py-3 after:transition-[width] after:duration-700 after:content-[''] after:h-[2px] after:w-0 after:bg-white after:absolute after:bottom-0 after:right-0">
            <p className="branch mr-8 text-2xl font-light">02</p>
            <a href="#" className="text-9xl text-center mr-[30%]">
              ABOUT
            </a>
          </div>
          <div className="line-menu relative flex justify-center items-end py-3 after:transition-[width] after:duration-700 after:content-[''] after:h-[2px] after:w-0 after:bg-white after:absolute after:bottom-0 after:left-0">
            <p className="branch mr-8 text-2xl font-light ml-[10%]">03</p>
            <a href="#" className="text-9xl text-center">
              WORK
            </a>
          </div>
          <div className="line-menu relative flex justify-end items-end py-3 after:transition-[width] after:duration-700 after:content-[''] after:h-[2px] after:w-0 after:bg-white after:absolute after:bottom-0 after:right-0">
            <p className="branch mr-8 text-2xl font-light">04</p>
            <a href="#" className="text-9xl">
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
