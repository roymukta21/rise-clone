"use client";

import React from "react";

const Navbar = ({
  setMenuOpen,
  activeMenu,
  setActiveMenu,
}) => {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-8 lg:px-10 text-white">
      <h1 className="text-3xl lg:text-4xl font-medium tracking-[-0.07em]">
        Rise at Seven
        <span className="text-xs align-super">®</span>
      </h1>

      <nav className="hidden lg:flex items-center gap-8 text-xl font-semibold">
        <NavItem
          name="Services +"
          id="services"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <NavItem
          name="International +"
          id="international"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <NavItem
          name="About +"
          id="about"
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <a href="#" className="relative">
          Work

          <span className="absolute -top-6 left-10 bg-[#a8f5df] text-black text-xs rounded-full px-2">
            25
          </span>
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
        className="lg:hidden bg-white text-black px-5 py-3 rounded-full font-bold text-2xl"
      >
        =
      </button>
    </header>
  );
};

const NavItem = ({
  name,
  id,
  activeMenu,
  setActiveMenu,
}) => {
  return (
    <button
      onMouseEnter={() => setActiveMenu(id)}
      className={`px-6 py-2 rounded-full transition-all duration-200 ${
        activeMenu === id
          ? "bg-white text-black"
          : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Navbar;