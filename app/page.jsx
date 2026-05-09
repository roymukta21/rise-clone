"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import AgencyIntro from "./components/AgencyIntro";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <main className="min-h-screen bg-[#ece7de] p-1">
      <div className="bg-[#a8f5df] text-black text-center py-2 rounded-b-2xl font-bold text-sm sm:text-base">
        🚨 Where are your customers actually searching? Download the report
      </div>

      <section className="relative overflow-hidden rounded-4xl min-h-screen mt-1 text-white">
        <div
          className="absolute inset-0 scale-110 opacity-85 blur-md bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/herobg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <Navbar
          setMenuOpen={setMenuOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        {activeMenu && (
          <MegaMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        )}

        <Hero />
        
      </section>
      <AgencyIntro />

      {menuOpen && (
        <MobileMenu setMenuOpen={setMenuOpen} />
      )}
    </main>
  );
}