"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <main className="min-h-screen bg-[#ece7de] p-1">
      <div className="bg-[#a8f5df] text-black text-center py-2 rounded-b-2xl font-bold text-sm sm:text-base">
        🚨 Where are your customers actually searching? Download the report
      </div>

      <section className="relative overflow-hidden rounded-[32px]  min-h-screen mt-1 text-white">
        <div
          className="absolute inset-0 scale-110 opacity-85 blur-md bg-cover bg-center"
          style={{ backgroundImage: "url('/images/herobg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <header className="relative z-30 flex items-center justify-between px-6 py-8 lg:px-10">
          <h1 className="text-3xl lg:text-4xl font-medium tracking-[-0.07em]">
            Rise at Seven<span className="text-xs align-super">®</span>
          </h1>

          <nav className="hidden lg:flex items-center gap-8 text-xl font-semibold">
            <NavItem name="Services +" id="services" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavItem name="International +" id="international" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavItem name="About +" id="about" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <a href="#" className="relative">
              Work
              <span className="absolute -top-6 left-12 bg-[#a8f5df] text-black text-xs rounded-full px-2">25</span>
            </a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Webinar</a>
          </nav>

          <button className="hidden lg:block bg-white text-black px-8 py-4 rounded-full font-bold">
            Get In Touch ↗
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden bg-white text-black px-5 py-3 rounded-full font-bold text-3xl"
          >
            =
          </button>
        </header>

        {activeMenu && (
          <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        )}

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

      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </main>
  );
}

function NavItem({ name, id, activeMenu, setActiveMenu }) {
  return (
    <button
      onMouseEnter={() => setActiveMenu(id)}
      className={`px-6 py-2 rounded-full ${
        activeMenu === id ? "bg-white text-black" : ""
      }`}
    >
      {name}
    </button>
  );
}

function MegaMenu({ activeMenu, setActiveMenu }) {
  const data = {
    services: {
      width: "w-[1200px]",
      left: "left-1/2 -translate-x-1/2",
      img: "/images/herobg.png",
      content: (
        <div className="grid grid-cols-[1fr_1fr_380px] gap-10">
          <div>
            <p className="mb-8 text-xl text-zinc-500">Core Services</p>
            <MenuLinks items={["Search & Growth Strategy", "Onsite SEO", "Content Experience", "B2B Marketing"]} />
          </div>
          <div className="pt-14">
            <MenuLinks items={["Digital PR", "Social Media & Campaigns", "Data & Insights", "Social SEO/Search"]} />
          </div>
          <ImageCard img="/images/herobg.png" button="View All Services ↗" />
        </div>
      ),
    },
    international: {
      width: "w-[860px]",
      left: "left-1/2 -translate-x-1/2",
      content: (
        <div className="grid grid-cols-[1fr_360px] gap-12 items-center">
          <MenuLinks items={["US Digital PR", "Spain Digital PR", "Germany Digital PR", "Netherlands Digital PR"]} large />
          <ImageCard img="/images/herobg.png" />
        </div>
      ),
    },
    about: {
      width: "w-[760px]",
      left: "left-1/2 -translate-x-1/2",
      content: (
        <div className="grid grid-cols-[1fr_350px] gap-12 items-center">
          <MenuLinks items={["About Us", "Meet The Risers", "Culture", "Testimonials"]} large />
          <ImageCard img="/images/herobg.png" />
        </div>
      ),
    },
  };

  return (
    <div
      onMouseLeave={() => setActiveMenu(null)}
      className={`absolute top-[118px] z-20 ${data[activeMenu].left} ${data[activeMenu].width} rounded-[36px] bg-white p-10 text-black shadow-2xl`}
    >
      {data[activeMenu].content}
    </div>
  );
}

function MenuLinks({ items, large = false }) {
  return (
    <div className={`${large ? "text-[38px]" : "text-[28px]"} space-y-4 font-semibold leading-none tracking-[-0.08em]`}>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function ImageCard({ img, button }) {
  return (
    <div className="relative overflow-hidden rounded-[24px]">
      <img src={img} alt="" className="h-[350px] w-full object-cover" />
      {button && (
        <button className="absolute bottom-5 left-5 bg-black text-white px-8 py-4 rounded-full text-xl font-semibold">
          {button}
        </button>
      )}
    </div>
  );
}

function MobileMenu({ setMenuOpen }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#ece7de] p-3">
      <div className="relative h-full overflow-y-auto rounded-[28px] bg-[#242321] text-white px-7 py-8 shadow-2xl">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-3xl font-medium tracking-[-0.07em]">
            Rise at Seven<span className="text-[10px] align-super">®</span>
          </h2>
          <button onClick={() => setMenuOpen(false)} className="text-5xl leading-none">
            ×
          </button>
        </div>

        <MobileSection title="Services" open items={[
          "Search & Growth Strategy",
          "Onsite SEO",
          "Content Experience",
          "B2B Marketing",
          "Digital PR",
          "Social Media & Campaigns",
          "Data & Insights",
          "Social SEO/Search",
        ]} />

        <MobileSection title="International" open items={[
          "US Digital PR",
          "Spain Digital PR",
          "Germany Digital PR",
          "Netherlands Digital PR",
        ]} />

        <MobileSection title="About" items={["About Us", "Meet The Risers", "Culture", "Testimonials"]} />

        <div className="mt-10 space-y-4 text-[42px] font-semibold tracking-[-0.08em] leading-none">
          <p>Work</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Webinar</p>
        </div>
      </div>
    </div>
  );
}

function MobileSection({ title, items, open = false }) {
  const [expanded, setExpanded] = useState(open);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h3 className="text-[48px] font-semibold tracking-[-0.08em] leading-none">
          {title}
        </h3>
        <button onClick={() => setExpanded(!expanded)} className="grid h-10 w-10 place-items-center rounded-full border border-white text-2xl">
          {expanded ? "⌃" : "⌄"}
        </button>
      </div>

      {expanded && (
        <div className="mt-7 space-y-4 text-[30px] font-semibold tracking-[-0.08em] leading-none">
          {items.map((item) => <p key={item}>{item}</p>)}
        </div>
      )}
    </div>
  );
}