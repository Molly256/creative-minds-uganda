"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const donateAction = () => {
    window.open(
      `https://wa.me/256753185973?text=${encodeURIComponent(
        "Hello Creative Minds Initiative Uganda, I want to donate to support the children. MTN: +256773242118 / Airtel: +256753185973 - Nakiyngi Maureen"
      )}`,
      "_blank"
    );
  };

  const volunteerAction = () => {
    window.open(
      `https://wa.me/256753185973?text=${encodeURIComponent(
        "Hello Creative Minds Initiative Uganda, I want to VOLUNTEER. My name is: , My skills are: "
      )}`,
      "_blank"
    );
  };

  const partnerAction = () => {
    window.open(
      `mailto:creativemindsinitiativeugandan@gmail.com?subject=Partnership Inquiry - Creative Minds Initiative Uganda&body=Hello Maureen, I want to partner with Creative Minds Initiative Uganda...`,
      "_blank"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#F6F7F9] text-[#333]">
      {/* NAVBAR - NOW USES REAL PAGES */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="h-[76px] flex items-center justify-between px-4 lg:px-16">
          <Link href="/" onClick={closeMenu}>
            <Image src="/logo.png" alt="logo" width={70} height={70} className="object-contain" />
          </Link>

          {/* Desktop Menu - Link = New Page */}
          <div className="hidden md:flex items-center gap-7 font-semibold text-[15px] text-[#00BFFF]">
            <Link href="/" className="text-[#6C3BAA]">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/get-involved">Get Involved</Link>
            <button onClick={donateAction} className="bg-[#6C3BAA] text-white px-6 py-2.5 rounded-lg ml-2">DONATE</button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#00BFFF] px-2"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-6 py-4 gap-4 font-semibold text-[16px] text-[#00BFFF]">
            <Link href="/" onClick={closeMenu} className="text-[#6C3BAA]">Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/programs" onClick={closeMenu}>Programs</Link>
            <Link href="/impact" onClick={closeMenu}>Impact</Link>
            <Link href="/get-involved" onClick={closeMenu}>Get Involved</Link>
            <button className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg text-center" onClick={donateAction}>DONATE</button>
          </div>
        )}
      </nav>

      {/* HERO - HOME ONLY */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#00BFFF] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-[44px] font-black leading-[0.95]">Every Child Deserves<br/>Education, Food & Skills</h1>
          <h2 className="text-white font-bold text-[20px] mt-3">From Nsambya Slum To Our Own School In Makindye</h2>
          <p className="text-[13px] text-white/90 mt-3 max-w-[480px] leading-relaxed">Founded March 20th, 2024. Today we provide education and food for 100 children in our own school in Makindye, Lukuli Zone. Our goal: add 100 more children every year — but we cannot do it alone.</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <button onClick={donateAction} className="bg-[#6C3BAA] text-white text-xs font-bold px-5 py-2.5 rounded-md">♡ DONATE NOW</button>
            <Link href="/about" className="border border-white text-white text-xs font-bold px-5 py-2.5 rounded-md">LEARN MORE</Link>
          </div>
          <p className="text-[11px] mt-4 text-white/80">100 children helped • Goal: +100 every year • Makindye, Lukuli Zone</p>
        </div>
        <div className="bg-[#00BFFF] p-5">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image src="/hero.jpg" fill alt="Children in Makindye school" className="object-cover" />
          </div>
        </div>
      </div>

      {/* HOME PREVIEW - SMALL CARDS THAT LINK TO PAGES */}
      <div className="px-6 lg:px-20 py-10 bg-white">
        <h3 className="text-center font-black text-[24px] text-[#6C3BAA]">We Were All Born To Thrive</h3>
        <p className="text-center text-[13px] text-gray-600 mt-2 max-w-[600px] mx-auto leading-relaxed">We empower children to reach their God-given potential through The Mind and The Body — Education and Food.</p>
        
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <Link href="/about" className="bg-[#F6F7F9] rounded-xl p-5 block">
            <h4 className="font-bold text-[#6C3BAA]">Our Story →</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">I lived in Nsambya. I saw the pain every day. On March 20th, 2024 I started Creative Minds and bought land in Makindye.</p>
            <p className="text-[12px] font-bold text-[#00BFFF] mt-3">Read Our Story →</p>
          </Link>
          <Link href="/programs" className="bg-[#F6F7F9] rounded-xl p-5 block">
            <h4 className="font-bold text-[#00BFFF]">Our Programs →</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">2 Programs: Education Program (The Mind) + Food Program (The Body) for 100 children.</p>
            <p className="text-[12px] font-bold text-[#00BFFF] mt-3">See Programs →</p>
          </Link>
          <Link href="/impact" className="bg-[#F6F7F9] rounded-xl p-5 block">
            <h4 className="font-bold text-[#6C3BAA]">Our Impact →</h4>
            <p className="text-[12px] text-gray-600 mt-2 leading-relaxed">100 children with education & food today. Goal: Add 100 more every year.</p>
            <p className="text-[12px] font-bold text-[#00BFFF] mt-3">See Impact →</p>
          </Link>
        </div>
      </div>

      {/* GET INVOLVED PREVIEW */}
      <div className="bg-[#00BFFF] text-white p-8 text-center">
        <h3 className="font-bold text-lg">Get Involved Today</h3>
        <p className="text-xs text-white/90 mt-2 max-w-[550px] mx-auto leading-relaxed">Every child deserves education, food, and skills to be someone in life. We cannot reach the next 100 children without you.</p>
        <div className="flex justify-center gap-3 mt-5 flex-wrap">
          <Link href="/get-involved" className="bg-[#6C3BAA] px-6 py-3 rounded-lg font-bold text-sm">GIVE A HAND →</Link>
          <button onClick={donateAction} className="bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-bold text-sm">DONATE NOW</button>
        </div>
        <p className="text-[11px] mt-4 text-white/80">MTN: +256773242118 • Airtel: +256753185973 • creativemindsinitiativeugandan@gmail.com</p>
      </div>

      <footer className="bg-white text-gray-500 text-[11px] py-3 text-center">© 2026 Creative Minds Initiative Uganda • Makindye, Lukuli Zone, Kampala • Founded March 20th, 2024</footer>
    </main>
  );
}