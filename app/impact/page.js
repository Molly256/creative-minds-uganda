"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImpactPage() {
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
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/impact" className="text-[#6C3BAA]">Impact</Link>
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
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/programs" onClick={closeMenu}>Programs</Link>
            <Link href="/impact" onClick={closeMenu} className="text-[#6C3BAA]">Impact</Link>
            <Link href="/get-involved" onClick={closeMenu}>Get Involved</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div className="bg-[#6C3BAA] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black leading-tight">Our Impact<br/>100 Children Today, 200 Tomorrow</h1>
        <p className="mt-4 text-[15px] max-w-[600px] mx-auto text-white font-bold">
          Started March 20th, 2024 by Ssemwogerere Edward in Nsambya slum. Today in Makindye, Kipamba, Kampala Uganda we provide education, food & shelter for 100 children. Our goal is to add 100 more every year.
        </p>
      </div>

      {/* NUMBERS */}
      <div className="px-6 lg:px-20 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#00BFFF]">
          <div className="font-black text-[36px] text-[#00BFFF]">100</div>
          <div className="font-black text-sm text-black">Children Helped</div>
          <div className="text-[12px] text-black font-bold mt-1">Education + Food + Shelter in Makindye, Kipamba</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#6C3BAA]">
          <div className="font-black text-[36px] text-[#6C3BAA]">3</div>
          <div className="font-black text-sm text-black">Programs</div>
          <div className="text-[12px] text-black font-bold mt-1">Education, Food & Shelter Daily</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#00BFFF]">
          <div className="font-black text-[36px] text-[#00BFFF]">1</div>
          <div className="font-black text-sm text-black">Own School</div>
          <div className="text-[12px] text-black font-bold mt-1">Makindye, Kipamba, Kampala Uganda</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#6C3BAA]">
          <div className="font-black text-[36px] text-[#6C3BAA]">100+</div>
          <div className="font-black text-sm text-black">Goal Per Year</div>
          <div className="text-[12px] text-black font-bold mt-1">Add 100 more children yearly</div>
        </div>
      </div>

      {/* STORY + IMAGE7 */}
      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 py-10 items-start">
        <div>
          <h2 className="font-black text-[26px] text-[#00BFFF]">What We Have Done So Far</h2>
          <p className="text-black text-[15px] mt-4 leading-relaxed font-medium">
            I, <span className="font-black">Ssemwogerere Edward</span>, used to stay in Nsambya slum area. I watched many kids suffering - no education, no food, not healthy because even their parents couldn't afford to take care of them.<br/><br/>
            On <span className="font-black">March 20th, 2024</span>, I promised when I get a better life and connections, I will start my own NGO. That became Creative Minds Initiative Uganda.<br/><br/>
            Paying fees in other schools was too expensive. So <span className="font-black text-[#6C3BAA]">I bought land and built our own school in Makindye, Kipamba, Kampala Uganda.</span><br/><br/>
            <span className="font-black">Today we have provided education, food and shelter for 100 children.</span> Every day they come to our Makindye Kipamba school - they get books, they learn to read, and they get posho, beans, rice, porridge. For many, it is the only meal.<br/><br/>
            We were all born to thrive. These 100 children now know they matter, someone cares, and they have incredible potential.
          </p>

          <div className="bg-white border-l-4 border-l-[#6C3BAA] shadow p-5 mt-6 rounded-r-xl border border-gray-200">
            <h3 className="font-black text-[#6C3BAA] text-[16px]">🎯 Our Goal: Add 100 More Children Every Year</h3>
            <p className="text-[14px] text-black mt-2 leading-relaxed font-medium">
              We have land, we have a school, we have 100 children. But in Nsambya and Makindye, hundreds more are still suffering - no food, no education.<br/><br/>
              <span className="font-black">If we get a hand to help us, we will add 100 more children every year.</span><br/>
              Year 1 (2024-2025): 100 children ✅ Done<br/>
              Year 2 (2026): 200 children - Need your help<br/>
              Year 3 (2027): 300 children - With more classrooms<br/><br/>
              Your donation is not just food or books - it is a future. $10 feeds 5 children for a week. $30 buys books for 10 children. $50 supports 1 child for a whole month.
            </p>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            <button onClick={() => window.open('https://wa.me/256795624752?text=Hello Edward, I saw your Impact page - 100 children helped - I want to help add 100 more')} className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg font-black text-sm">HELP US ADD 100 MORE - 0795624752</button>
            <button onClick={() => window.open('https://wa.me/256753988127?text=Hello Edward, I saw your Impact page - I want to support')} className="bg-[#00BFFF] text-white px-6 py-3 rounded-lg font-black text-sm">DONATE: 0753988127</button>
          </div>
          <Link href="/" className="inline-block bg-[#00BFFF] text-white font-black px-6 py-2.5 rounded-lg mt-6 text-sm">← BACK TO HOME</Link>
        </div>

        <div className="space-y-4">
          <div className="relative h-[420px] rounded-xl overflow-hidden bg-gray-100 border">
            <Image src="/image7.jpg" fill alt="100 children helped in Makindye Kipamba" className="object-cover" />
          </div>
          <p className="text-[12px] text-black font-bold text-center">📸 100 children receiving education, food & shelter in our Makindye, Kipamba school - March 2024 to Now</p>
          
          <div className="bg-[#00BFFF] text-white rounded-xl p-5 text-center">
            <div className="font-black text-[22px]">Be Part Of The Next 100</div>
            <p className="text-[13px] mt-2 text-white font-bold">Every child we add needs food + books + uniform. We have the land. We need your hand.</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$10</div><div className="text-[10px] font-bold">Feeds 5 / week</div></div>
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$30</div><div className="text-[10px] font-bold">Books for 10</div></div>
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$50</div><div className="text-[10px] font-bold">1 child / month</div></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white text-black font-bold text-[11px] py-6 text-center border-t">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • Impact: 100 Children • Goal: +100 Every Year • Makindye, Kipamba, Kampala Uganda • <Link href="/" className="text-[#00BFFF]">Back to Home</Link></footer>
    </main>
  );
}