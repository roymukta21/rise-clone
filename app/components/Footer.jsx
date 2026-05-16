import React from "react";

const Footer = () => {
  return (
    <footer className="mx-2 mb-2 mt-10 overflow-hidden rounded-[40px] bg-black px-6 py-10 text-white lg:px-10 lg:py-12">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        {/* LEFT */}
        <div>
          <h2 className="mb-8 text-3xl font-semibold tracking-[-0.08em] lg:text-[52px]">
            Stay updated with Rise news
          </h2>

          <div className="flex h-20.5 items-center overflow-hidden rounded-full bg-zinc-900">
            <input
              type="text"
              placeholder="Your Email Address"
              className="h-full flex-1 bg-transparent px-8 text-xl outline-none placeholder:text-zinc-500"
            />

            <button className="mr-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#b8f7e3] text-4xl text-black">
              ↗
            </button>
          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["f", "𝕏", "in", "▶", "♪", "◎"].map((item) => (
              <button
                key={item}
                className="rounded-full border border-zinc-700 px-4 py-2 text-lg"
              >
                {item} ↗
              </button>
            ))}
          </div>
        </div>

        {/* LINKS 1 */}
        <div className="border-l border-zinc-800 pl-6">
          <div className="space-y-3 text-2xl font-semibold tracking-[-0.07em]">
            <p>Services</p>
            <p>Work</p>
            <p>About</p>
            <p>Culture</p>
            <p>Meet The Risers</p>
          </div>

          <button className="mt-8 rounded-full bg-[#b8f7e3] px-8 py-4 text-xl font-semibold text-black">
            Send Us Your Brief ↗
          </button>
        </div>

        {/* LINKS 2 */}
        <div className="border-l border-zinc-800 pl-6">
          <div className="space-y-3 text-2xl font-semibold tracking-[-0.07em]">
            <p>Testimonials</p>
            <p>Blog & Resources</p>
            <p>Webinars</p>
            <p>Careers</p>
          </div>
        </div>

        {/* LINKS 3 */}
        <div className="border-l border-zinc-800 pl-6">
          <div className="space-y-3 text-2xl font-semibold tracking-[-0.07em]">
            <p>Sheffield</p>
            <p>Manchester</p>
            <p>London</p>
            <p>New York</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      {/* BIG LOGO */}
      <div className="mt-24">
        <h1 className="text-[15vw] font-semibold leading-none tracking-[-0.1em]">
          Rise at Seven
          <span className="align-top text-[5vw]">®</span>
        </h1>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 flex flex-col gap-4 text-sm text-zinc-300 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <p>© 2025 Rise at Seven Ltd. All rights reserved</p>
          <span>•</span>
          <p>Company Number 11955187</p>
          <span>•</span>
          <p>VAT Registered GB 322402945</p>
          <span>•</span>
          <p>Privacy Policy</p>
          <span>•</span>
          <p>Terms & conditions</p>
        </div>

        <p>Website MadeByShape</p>
      </div>
    </footer>
  );
};

export default Footer;
