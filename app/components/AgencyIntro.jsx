"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "The agency|behind ...",
  "Emirates",
  "Shark Ninja",
  "CapitalOne",
  "RedBull",
  "JD",
  "AXA",
  "PlayStation",
  "HubSpot",
  "Xbox",
  "Sixt",
  "Revolution",
];

const AgencyIntro = () => {
  return (
    <section className="overflow-hidden bg-[#f4f3f0] text-black py-20 lg:py-28">
      {/* LOGO MARQUEE */}
      <div className="relative mb-28 overflow-hidden">
        <div className="flex min-w-max animate-marquee items-center gap-28 lg:gap-40 px-10">
          {[...logos, ...logos].map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#f4f3f0] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#f4f3f0] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-8 px-5 md:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="order-1 lg:order-2">
          <h3 className="text-[58px] font-semibold leading-[0.86] tracking-[-0.09em] sm:text-[72px] lg:text-[70px]">
            Driving Demand &
            <br />
            Discovery
            <Image
              src="/images/mini.png"
              alt=""
              width={96}
              height={96}
              className="ml-3 inline-block h-16 w-16 rounded-2xl object-cover align-middle sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            />
          </h3>
        </div>

        <h2 className="order-2 max-w-[780px] text-3xl font-semibold leading-[0.95] tracking-[-0.08em] lg:order-1 lg:text-[25px]">
          A global team of search-first content marketers engineering semantic
          relevancy & category signals for both the internet and people
        </h2>

        <div className="order-3 flex w-full flex-col gap-3 sm:flex-row lg:col-start-2 lg:flex-row lg:gap-6">
          <button className="w-full rounded-full bg-white px-9 py-5 text-xl font-semibold sm:w-auto">
            Our Story ↗
          </button>

          <button className="w-full rounded-full px-9 py-5 text-xl font-semibold sm:w-auto lg:px-4">
            Our Services ↗
          </button>
        </div>
      </div>
    </section>
  );
};

const LogoItem = ({ logo }) => {
  if (logo === "The agency|behind ...") {
    return (
      <div className="flex min-w-[220px] items-center justify-center">
        <p className="text-2xl font-semibold leading-none tracking-[-0.07em]">
          The agency
          <br />
          behind ...
        </p>
      </div>
    );
  }

  if (logo === "JD") {
    return (
      <div className="flex min-w-[220px] items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-4xl font-black text-white">
          JD
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-[220px] items-center justify-center">
      <p className="text-4xl font-black tracking-[-0.08em]">{logo}</p>
    </div>
  );
};

export default AgencyIntro;
