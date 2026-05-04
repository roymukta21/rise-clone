"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#ece7de] p-1">
      <div className="bg-[#a8f5df] text-black text-center py-2 rounded-b-2xl font-bold text-sm sm:text-base">
        🚨 Where are your customers actually searching? Download the report
      </div>

      <section className="relative overflow-hidden rounded-[32px] min-h-screen mt-1 text-white">
        <div
          className="absolute inset-0 scale-110 opacity-80 blur-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/herobg.jpg')",
          }}
        />

        <header className="relative z-10 flex items-center justify-between px-6 py-8 lg:px-10">
          <h1 className="text-4xl font-medium tracking-[-0.07em]">
            Rise at Seven<span className="text-xs align-super">®</span>
          </h1>

          <nav className="hidden lg:flex gap-10 text-xl font-semibold">
            <a href="#">Services +</a>
            <a href="#">International +</a>
            <a href="#">About +</a>
            <a href="#">Work</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Webinar</a>
          </nav>

          <button className="hidden lg:block bg-white text-black px-8 py-4 rounded-full font-bold">
            Get In Touch ↗
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden bg-white text-black px-5 py-3 rounded-full font-bold"
          >
            Menu
          </button>
        </header>

        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20">
          <p className="uppercase text-sm sm:text-lg font-bold mb-8">
            #1 Most Recommended <br />
            Content Marketing Agency
          </p>

          <h1 className="text-[18vw] lg:text-[10vw] leading-[0.9] font-semibold tracking-[-0.08em]">
            <span className="block">We Create</span>
            <span className="block">Category Leaders</span>
          </h1>

          <p className="mt-6 text-2xl sm:text-5xl font-bold tracking-tight">
            on every searchable platform
          </p>
        </section>
      </section>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#ece7de] p-3">
          <div className="relative h-full overflow-y-auto rounded-[28px] bg-[#242321] text-white px-7 py-8 shadow-2xl">
            <div className="absolute inset-0 rounded-[28px] blur-xl opacity-40 bg-[radial-gradient(circle_at_50%_20%,#6b6b6b,transparent_35%),linear-gradient(#23211f,#171614)]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-20">
                <h2 className="text-3xl font-medium tracking-[-0.07em]">
                  Rise at Seven
                  <span className="text-[10px] align-super">®</span>
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="space-y-10">
                <MenuSection
                  title="Services"
                  items={[
                    "Search & Growth Strategy",
                    "Onsite SEO",
                    "Content Experience",
                    "B2B Marketing",
                    "Digital PR",
                    "Social Media & Campaigns",
                    "Data & Insights",
                    "Social SEO/Search",
                  ]}
                  open
                />

                <MenuSection
                  title="International"
                  items={[
                    "US Digital PR",
                    "Spain Digital PR",
                    "Germany Digital PR",
                    "Netherlands Digital PR",
                  ]}
                  open
                />

                <MenuSection
                  title="About"
                  items={["Our Story", "Meet the Team", "Contact"]}
                />

                <div className="space-y-4 text-[42px] font-semibold tracking-[-0.08em] leading-none">
                  <p>Work</p>
                  <p>Careers</p>
                  <p>Blog</p>
                  <p>Webinar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function MenuSection({ title, items, open = false }) {
  const [expanded, setExpanded] = useState(open);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-[48px] font-semibold tracking-[-0.08em] leading-none">
          {title}
        </h3>

        <button
          onClick={() => setExpanded(!expanded)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white text-2xl"
        >
          {expanded ? "⌃" : "⌄"}
        </button>
      </div>

      {expanded && (
        <div className="mt-7 space-y-4 text-[30px] font-semibold tracking-[-0.08em] leading-none">
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}
