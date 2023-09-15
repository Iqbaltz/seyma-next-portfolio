import { Plus_Jakarta_Sans } from "next/font/google";

const plusjkt = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`py-20 bg-[url(/images/grainy-bg.png)] bg-black/30 bg-blend-hard-light bg-cover overflow-hidden ${plusjkt.className}`}
    >
      <div className="marquee-container">
        <div className="flex marquee whitespace-nowrap ">
          <h1 className="text-9xl font-semibold">GET IN TOUCH</h1>
          <img
            src="/svg/small-star-white.svg"
            className="mx-16"
            alt="small-star-white"
          />
          <h1 className="text-9xl font-semibold">GET IN TOUCH</h1>
          <img
            src="/svg/small-star-white.svg"
            className="mx-16"
            alt="small-star-white"
          />
          <h1 className="text-9xl font-semibold">GET IN TOUCH</h1>
          <img
            src="/svg/small-star-white.svg"
            className="mx-16"
            alt="small-star-white"
          />
          <h1 className="text-9xl font-semibold">GET IN TOUCH</h1>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <p className="text-4xl mt-40 w-[560px]">
          Let’s grab a coffee and dive into your design needs.
        </p>

        <div className="flex items-center mt-16 text-white">
          <p className="text-2xl mr-6">GET TO KNOW ME</p>
          <button className="px-8 py-5 border border-white rounded-full">
            <img
              className="w-36"
              src="./svg/arrow-right-white.svg"
              alt="arrow-right"
            />
          </button>
        </div>
        <div className="flex justify-end mt-24">
          <img src="/images/back-top.png" className="w-32" alt="back-top" />
        </div>
        <div className="flex justify-between mt-32">
          <p className="text-xl font-light">
            © 2023 sne design // by Seyma N. Ermis
          </p>
          <div className="flex items-center text-2xl">
            <p>FOLLOW ME</p>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              LINKEDIN
            </a>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              INSTAGRAM
            </a>
            <img src="/svg/tiny-star.svg" className="mx-4" alt="tiny-star" />
            <a className="underline" href="#">
              BEHANCE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
