"use client";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-8 lg:px-10 text-white">
      <h1 className="text-4xl font-medium tracking-tight">Rise at Seven</h1>

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

      <button className="lg:hidden bg-white text-black px-5 py-3 rounded-full font-bold">
        Menu
      </button>
    </header>
  );
}