import Awards from "./Awards";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-10 lg:pt-12">
      <Awards />

      <h1 className="mt-6 text-6xl lg:text-[10vw] leading-[0.9] font-semibold tracking-[-0.08em]">
        <span className="block">We Create</span>

        <span className="flex items-center justify-center gap-4 flex-wrap">
          Category
          <Image
            src="/images/herobg.jpg"
            alt=""
            width={145}
            height={120}
            className="w-24 h-24 lg:w-36 lg:h-30 object-cover rounded-[18px]"
          />
          Leaders
        </span>
      </h1>

      <p className="mt-8 text-2xl sm:text-5xl font-bold tracking-[-0.06em]">
        on every searchable platform
      </p>

      <div className="hidden lg:flex absolute left-8 right-8 -bottom-36 justify-between text-left text-2xl font-medium tracking-[-0.04em]">
        <p>
          Organic media planners creating, distributing & optimising
          <br />
          <b>search-first content</b> for SEO, Social, PR, Ai and LLM search
        </p>

        <p className="text-right font-bold">
          4 Global Offices serving
          <br />
          UK, USA (New York) & EU
        </p>
      </div>
    </section>
  );
};

export default Hero;
