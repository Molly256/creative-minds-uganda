"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F6F7F9] text-[#00BFFF]">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="h-[76px] flex items-center justify-between px-4 lg:px-16">
          <Image src="/logo.png" alt="logo" width={70} height={70} className="object-contain" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7 font-semibold text-[15px]">
            <span className="text-[#6C3BAA]">Home</span>
            <span>About</span>
            <span>Programs</span>
            <span>Impact</span>
            <span>Get Involved</span>
            <button className="bg-[#6C3BAA] text-white px-6 py-2.5 rounded-lg ml-2">DONATE</button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#00BFFF] px-2"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-6 py-4 gap-4 font-semibold text-[16px]">
            <span className="text-[#6C3BAA]" onClick={() => setMenuOpen(false)}>Home</span>
            <span onClick={() => setMenuOpen(false)}>About</span>
            <span onClick={() => setMenuOpen(false)}>Programs</span>
            <span onClick={() => setMenuOpen(false)}>Impact</span>
            <span onClick={() => setMenuOpen(false)}>Get Involved</span>
            <button className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg text-center" onClick={() => setMenuOpen(false)}>DONATE</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#00BFFF] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-[44px] font-black leading-[0.95]">Every Child Deserves<br/>Education</h1>
          <h2 className="text-[#B47DFF] font-bold text-[22px] mt-3">Progress With A Purpose</h2>
          <p className="text-[13px] text-gray-300 mt-3 max-w-[480px]">Empowering young learners across Uganda through education, creativity, and community support. Join us to build brighter futures.</p>
          <div className="flex gap-3 mt-6">
            <button className="bg-[#6C3BAA] text-white text-xs font-bold px-5 py-2.5 rounded-md">♡ DONATE NOW</button>
            <button className="border border-[#6C3BAA] text-white text-xs font-bold px-5 py-2.5 rounded-md">LEARN MORE</button>
          </div>
        </div>
        <div className="bg-[#00BFFF] p-5">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image src="/hero.jpg" fill alt="" className="object-cover" />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2">
        <div className="p-6 bg-[#F0F2F5]">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <h3 className="font-bold text-[13px]">Our Mission</h3>
              <p className="text-[10px] text-gray-600 mt-2 leading-tight">Providing quality education and creative learning opportunities to underserved children in Uganda.</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <h3 className="font-bold text-[13px]">Our Vision</h3>
              <p className="text-[10px] text-gray-600 mt-2 leading-tight">A Uganda where every child unlocks their creative potential and thrives in education.</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <h3 className="font-bold text-[13px]">Our Commitment</h3>
              <p className="text-[10px] text-gray-600 mt-2 leading-tight">Delivering sustainable programs focused on learning, growth, and opportunity.</p>
            </div>
          </div>

          <h3 className="text-center font-black text-xl mt-8">Our Programs</h3>
          <p className="text-center text-xs mb-4">Tailored programs to nurture learning and creativity</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[100px]"><Image src="/literacy.jpg" fill alt="" className="object-cover" /></div>
              <div className="p-2.5"><h4 className="font-bold text-[11px] text-[#6C3BAA]">Literacy & Learning</h4><p className="text-[9px] text-gray-600 mt-1">Improving reading, writing, and numeracy for primary students.</p></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[100px]"><Image src="/skills.jpg" fill alt="" className="object-cover" /></div>
              <div className="p-2.5"><h4 className="font-bold text-[11px] text-[#6C3BAA]">Skills & Creativity</h4><p className="text-[9px] text-gray-600 mt-1">Hands-on workshops that build innovation and self-confidence.</p></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[100px]"><Image src="/girls.jpg" fill alt="" className="object-cover" /></div>
              <div className="p-2.5"><h4 className="font-bold text-[11px] text-[#6C3BAA]">Girls Education</h4><p className="text-[9px] text-gray-600 mt-1">Ensuring equal opportunities and support for girls to stay in school.</p></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-[#6C3BAA] text-white text-center py-7">
            <h3 className="font-semibold">Our Impact in Numbers</h3>
            <div className="font-black text-5xl mt-1">100+</div>
            <div className="text-sm">Children Reached</div>
          </div>
          <div className="bg-[#00BFFF] text-white p-8 flex-1">
            <h3 className="text-center font-bold text-lg">Get Involved Today</h3>
            <p className="text-center text-xs text-[#B47DFF]">Join us to make a lasting difference</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-[#00BFFF] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Volunteer</h4><p className="text-[9px] text-gray-400 mt-1">Give your time and skills to empower children.</p><button className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">JOIN US</button></div>
              <div className="bg-[#00BFFF] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Partner With Us</h4><p className="text-[9px] text-gray-400 mt-1">Collaborate with us as a partner organization.</p><button className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">PARTNER NOW</button></div>
              <div className="bg-[#00BFFF] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Donate</h4><p className="text-[9px] text-gray-400 mt-1">Support our mission with a donation today.</p><button className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">DONATE</button></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#00BFFF] text-white text-[11px] py-3 text-center">© 2026 Creative Minds Initiative Uganda • Contact: info@creativemindsinitiativeug.org • Kampala, Uganda</footer>
    </main>
  );
}