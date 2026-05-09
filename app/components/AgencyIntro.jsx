"use client";

import React from "react";
import Image from "next/image";

const logos = [
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
            <div
              key={index}
              className="flex min-w-[220px] items-center justify-center"
            >
              {logo === "JD" ? (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-4xl font-black text-white">
                  JD
                </div>
              ) : (
                <p className="text-4xl font-black tracking-[-0.08em]">
                  {logo}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* LEFT TEXT */}
        <div className="absolute left-0 top-0 z-10 flex h-full items-center bg-[#f4f3f0] pr-10">
          <p className="text-2xl font-semibold leading-none tracking-[-0.07em]">
            The agency
            <br />
            behind ...
          </p>
        </div>

        {/* FADE LEFT */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-52 bg-gradient-to-r from-[#f4f3f0] to-transparent" />

        {/* FADE RIGHT */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-52 bg-linear-to-l from-[#f4f3f0] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="grid gap-16 px-8 lg:grid-cols-2 lg:px-10">
        <h2 className="max-w-195 text-3xl font-semibold leading-[0.95] tracking-[-0.08em] lg:text-[34px]">
          A global team of search-first content marketers engineering semantic
          relevancy & category signals for both the internet and people
        </h2>

        <div>
          <h3 className="text-6xl font-semibold leading-[0.86] tracking-[-0.09em] lg:text-[110px]">
            Driving Demand &
            <br />
            Discovery
            <Image
              src="/images/herobg.jpg"
              alt=""
              width={96}
              height={96}
              className="ml-4 inline-block h-24 w-24 rounded-2xl object-cover align-middle"
            />
          </h3>

          <div className="mt-10 flex items-center gap-6">
            <button className="rounded-full bg-white px-9 py-5 text-xl font-semibold">
              Our Story ↗
            </button>

            <button className="rounded-full px-4 py-5 text-xl font-semibold">
              Our Services ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyIntro;