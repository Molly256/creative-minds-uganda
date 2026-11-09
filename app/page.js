"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="h-[76px] flex items-center justify-between px-4 lg:px-16">
          <Link href="/" onClick={closeMenu}>
            <Image src="/logo.png" alt="logo" width={70} height={70} className="object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-7 font-semibold text-[15px] text-[#00BFFF]">
            <Link href="/">Home</Link>
            <Link href="/about" className="text-[#6C3BAA]">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/get-involved" className="bg-[#6C3BAA] text-white px-6 py-2.5 rounded-lg ml-2">DONATE</Link>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-[#00BFFF] px-2">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-6 py-4 gap-4 font-semibold text-[16px] text-[#00BFFF]">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu} className="text-[#6C3BAA]">About</Link>
            <Link href="/programs" onClick={closeMenu}>Programs</Link>
            <Link href="/impact" onClick={closeMenu}>Impact</Link>
            <Link href="/get-involved" onClick={closeMenu}>Get Involved</Link>
            <Link href="/get-involved" onClick={closeMenu} className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg text-center">DONATE</Link>
          </div>
        )}
      </nav>

      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[42px] font-black leading-tight">From Nsambya Slum<br/>To Our Own School In Makindye</h1>
        <p className="mt-4 text-[14px] max-w-[650px] mx-auto text-white/90">Founded March 20th, 2024 by Ssemwogerere Edward in Nsambya. Today we own land and run a school in Makindye, Lukuli Zone providing Education, Food & Shelter for 100 children.</p>
      </div>

      {/* IMAGE 9 - ABOVE STORY SECTION */}
      <div className="px-6 lg:px-20 pt-10">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100">
          <Image src="/image9.jpg" fill alt="Children from Nsambya" className="object-cover" priority />
        </div>
        <p className="text-[11px] text-gray-400 text-center mt-2">Children from Nsambya slum - where our journey began in 2024</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 py-14 items-center">
        <div className="relative h-[380px] rounded-xl overflow-hidden bg-gray-100">
          <Image src="/image9.jpg" fill alt="Nsambya children" className="object-cover" />
        </div>
        <div>
          <h2 className="text-[#6C3BAA] font-black text-[26px]">Our Story</h2>
          <h3 className="font-bold text-[18px] mt-2">I lived in Nsambya. I saw the pain every day.</h3>
          <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
            I, <span className="font-bold text-[#00BFFF]">Ssemwogerere Edward</span>, used to stay in Nsambya slum area. Every morning I watched children - dirty, hungry, not healthy - sitting at home while other kids went to school. 
            Their parents loved them but couldn't afford food, let alone school fees.
            <br/><br/>
            I promised myself: When I get a better life and connections, I will start my own NGO. On <span className="font-bold">March 20th, 2024</span>, that promise became <span className="font-bold">Creative Minds Initiative Uganda</span>.
            <br/><br/>
            <span className="font-bold text-[#6C3BAA]">Paying school fees in other schools was too expensive. So I bought land and built our OWN school in Makindye, Lukuli Zone.</span>
            <br/><br/>
            Today we provide Education, Food & Shelter for <span className="font-bold">100 children</span>.
          </p>
          <Link href="/" className="inline-block bg-[#00BFFF] text-white font-bold px-6 py-2.5 rounded-lg mt-6 text-sm">← BACK TO HOME</Link>
        </div>
      </div>

      <footer className="bg-white text-gray-400 text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • <Link href="/" className="text-[#00BFFF]">Back to Home</Link></footer>
    </main>
  );
}