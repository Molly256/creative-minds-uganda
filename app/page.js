"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="h-[76px] flex items-center justify-between px-4 lg:px-16">
          <Link href="/" onClick={closeMenu}>
            <Image src="/logo.png" alt="Creative Minds Initiative Uganda" width={70} height={70} className="object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-7 font-bold text-[15px] text-[#6C3BAA]">
            <Link href="/" className="text-[#6C3BAA]">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/get-involved" className="bg-[#6C3BAA] text-white px-6 py-2.5 rounded-lg ml-2">DONATE</Link>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-[#6C3BAA] px-2">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-6 py-4 gap-4 font-bold text-[16px] text-[#6C3BAA]">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/programs" onClick={closeMenu}>Programs</Link>
            <Link href="/impact" onClick={closeMenu}>Impact</Link>
            <Link href="/get-involved" onClick={closeMenu}>Get Involved</Link>
            <Link href="/get-involved" onClick={closeMenu} className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg text-center">DONATE</Link>
          </div>
        )}
      </nav>

      {/* HERO - DARK like screenshot - uses hero.jpg */}
      <div className="bg-[#0A1931] text-white px-6 lg:px-16 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[48px] leading-[1.1] font-black">Every Child Deserves<br/>Education</h1>
          <h2 className="text-[#B47DFF] font-black text-[26px] mt-3">Progress With A Purpose</h2>
          <p className="text-white text-[15px] mt-4 leading-relaxed font-medium max-w-[500px]">
            Empowering young learners across Uganda through education, creativity, and community support.
            <br/><br/>
            <span className="font-black">Founded March 20th, 2024 by Ssemwogerere Edward in Nsambya.</span> Today we own land and run our own school in Makindye, Kipamba, Kampala Uganda - providing Education & Food for 100 children.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <Link href="/get-involved" className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg font-black text-sm">♡ DONATE NOW</Link>
            <Link href="/about" className="border border-white/40 text-white px-6 py-3 rounded-lg font-black text-sm">LEARN MORE</Link>
          </div>
        </div>
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden border-2 border-white/20">
          <Image src="/hero.jpg" fill alt="Children in classroom" className="object-cover" priority />
        </div>
      </div>

      {/* MISSION / VISION / COMMITMENT */}
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#F6F7F9] px-6 lg:px-10 py-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow text-center">
              <h3 className="font-black text-black text-[15px]">Our Mission</h3>
              <p className="text-[13px] text-black font-bold mt-2 leading-relaxed">Providing quality education and creative learning to underserved children in Uganda.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow text-center">
              <h3 className="font-black text-black text-[15px]">Our Vision</h3>
              <p className="text-[13px] text-black font-bold mt-2 leading-relaxed">A Uganda where every child unlocks their creative potential and thrives.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow text-center">
              <h3 className="font-black text-black text-[15px]">Our Commitment</h3>
              <p className="text-[13px] text-black font-bold mt-2 leading-relaxed">Delivering sustainable programs focused on learning, growth, and opportunity.</p>
            </div>
          </div>

          <h2 className="font-black text-[26px] text-black mt-10">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className="bg-white rounded-xl overflow-hidden shadow border">
              <div className="relative h-[120px]"><Image src="/literacy.jpg" fill alt="Literacy" className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-black text-black text-[14px]">📚 Literacy</h4>
                <p className="text-[12px] text-black font-medium mt-1">Reading, writing, numeracy for 100 children in Makindye, Kipamba.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow border">
              <div className="relative h-[120px]"><Image src="/girls.jpg" fill alt="Girls Education" className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-black text-black text-[14px]">👧 Girls Education</h4>
                <p className="text-[12px] text-black font-medium mt-1">Empowering girls with education and life skills to thrive.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow border">
              <div className="relative h-[120px]"><Image src="/skills.jpg" fill alt="Skills" className="object-cover" /></div>
              <div className="p-4">
                <h4 className="font-black text-black text-[14px]">🎨 Creative Skills</h4>
                <p className="text-[12px] text-black font-medium mt-1">Art, music, and creative learning to unlock potential.</p>
              </div>
            </div>
          </div>
          <Link href="/programs" className="inline-block bg-[#00BFFF] text-white font-black px-6 py-3 rounded-lg mt-6 text-sm">VIEW ALL PROGRAMS →</Link>
        </div>

        <div className="bg-[#6C3BAA] text-white px-6 lg:px-10 py-10 text-center flex flex-col justify-center">
          <h3 className="font-black text-[20px]">Our Impact in Numbers</h3>
          <div className="font-black text-[72px] leading-none mt-4">100+</div>
          <div className="font-bold text-[15px]">Children Reached</div>
          <div className="grid grid-cols-2 gap-4 mt-8 text-left">
            <div className="bg-white/10 rounded-xl p-4"><div className="font-black text-2xl">100</div><div className="text-[12px] font-bold">Children in Our School</div></div>
            <div className="bg-white/10 rounded-xl p-4"><div className="font-black text-2xl">Own Land</div><div className="text-[12px] font-bold">Makindye, Kipamba</div></div>
            <div className="bg-white/10 rounded-xl p-4"><div className="font-black text-2xl">2</div><div className="text-[12px] font-bold">Education & Food</div></div>
            <div className="bg-white/10 rounded-xl p-4"><div className="font-black text-2xl">2024</div><div className="text-[12px] font-bold">Founded March 20</div></div>
          </div>
          <p className="text-[13px] font-bold mt-6">📍 Makindye, Kipamba, Kampala Uganda<br/>Founder: Ssemwogerere Edward</p>
          <Link href="/impact" className="bg-white text-[#6C3BAA] font-black px-6 py-3 rounded-lg mt-6 text-sm inline-block">SEE OUR IMPACT →</Link>
        </div>
      </div>

      <div className="bg-[#00BFFF] text-white text-center py-12 px-6">
        <h2 className="font-black text-[26px]">Help Us Reach The Next 100 Children</h2>
        <p className="text-[15px] mt-2 font-bold">We have land, we have 100 children, we need more classrooms, books, and food. Your $10 feeds 5 children.</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256795624752')} className="bg-[#6C3BAA] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0795624752</button>
          <button onClick={() => window.open('https://wa.me/256753988127')} className="bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0753988127</button>
        </div>
      </div>

      <footer className="bg-white text-black font-bold text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • School: Makindye, Kipamba, Kampala Uganda • Founded March 20, 2024</footer>
    </main>
  );
}