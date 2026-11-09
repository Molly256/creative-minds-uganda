"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedPage() {
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
            <Link href="/impact">Impact</Link>
            <Link href="/get-involved" className="text-[#6C3BAA]">Get Involved</Link>
            <button onClick={() => window.open('https://wa.me/256795624752')} className="bg-[#6C3BAA] text-white px-6 py-2.5 rounded-lg ml-2">DONATE</button>
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
            <Link href="/impact" onClick={closeMenu}>Impact</Link>
            <Link href="/get-involved" onClick={closeMenu} className="text-[#6C3BAA]">Get Involved</Link>
          </div>
        )}
      </nav>

      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black leading-tight">Get Involved<br/>Together, We Can Reach More Children</h1>
        <p className="mt-4 text-[15px] max-w-[700px] mx-auto text-white font-bold leading-relaxed">
          At Creative Minds Initiative Uganda, we believe every child deserves access to education, nutritious food, and life skills to become someone in life. We currently support 100 children in Makindye, Kipamba, Kampala Uganda. Our goal is to add 100 more children every year — but we cannot achieve this alone without your support.
        </p>
      </div>

      <div className="px-6 lg:px-20 py-12 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-black text-[24px] text-[#6C3BAA]">Why Your Support Matters</h2>
          <p className="text-black text-[15px] mt-4 leading-relaxed font-medium">
            I am <span className="font-black">Ssemwogerere Edward</span>, Founder of Creative Minds Initiative Uganda. I lived in Nsambya slum area and witnessed firsthand children suffering without access to education, food, or healthcare, simply because their parents could not afford to provide for them.<br/><br/>
            On <span className="font-black">March 20th, 2024</span>, I made a commitment to change this reality. I promised that when I had the opportunity and connections, I would start an organization to support these children. That commitment became Creative Minds Initiative Uganda.<br/><br/>
            Initially, we attempted to pay school fees in other private schools, but the costs were unsustainable. Therefore, we made a strategic decision to <span className="font-black text-[#6C3BAA]">acquire land and establish our own school in Makindye, Kipamba, Kampala Uganda.</span><br/><br/>
            Today, we provide holistic support — education and daily meals — to <span className="font-black">100 vulnerable children</span>.<br/><br/>
            <span className="font-black text-[#00BFFF] text-[15px]">However, hundreds more children in Nsambya and Makindye still lack basic needs. Our strategic goal is to expand our reach by enrolling an additional 100 children each year. To achieve this, we need partners like you. Without external support, this growth is not possible.</span>
          </p>

          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="border-l-4 border-l-[#00BFFF] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-black text-sm text-black">1. Make a Donation — Direct Impact</h4>
              <p className="text-[14px] text-black mt-1 leading-relaxed font-medium">Your contribution directly funds education and nutrition. $10 provides meals for 5 children for a week, $30 supplies learning materials for 10 children, and $50 provides comprehensive support for one child for a full month.</p>
            </div>
            <div className="border-l-4 border-l-[#6C3BAA] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-black text-sm text-black">2. Sponsor a Child — Transform a Life</h4>
              <p className="text-[14px] text-black mt-1 leading-relaxed font-medium">Through child sponsorship, you ensure a child in our Makindye Kipamba school receives quality education, daily meals and essential life skills. Sponsors receive regular updates, photographs, and academic progress reports.</p>
            </div>
            <div className="border-l-4 border-l-[#00BFFF] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-black text-sm text-black">3. Invest in Infrastructure — Build for the Future</h4>
              <p className="text-[14px] text-black mt-1 leading-relaxed font-medium">We own land in Makindye, Kipamba, Kampala Uganda, but require additional classrooms, desks, and learning materials to accommodate the next 100 children.</p>
            </div>
            <div className="border-l-4 border-l-[#6C3BAA] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-black text-sm text-black">4. Amplify Our Mission — Share Our Story</h4>
              <p className="text-[14px] text-black mt-1 leading-relaxed font-medium">By sharing our work with your network, you help us reach potential donors and partners. One share can secure education and food for multiple children.</p>
            </div>
          </div>
          <Link href="/" className="inline-block bg-[#00BFFF] text-white font-black px-6 py-2.5 rounded-lg mt-8 text-sm">← BACK TO HOME</Link>
        </div>

        <div className="bg-[#6C3BAA] text-white rounded-2xl p-8 sticky top-6">
          <h3 className="font-black text-[22px]">Support Our Growth Today</h3>
          <p className="text-[14px] text-white font-bold mt-3 leading-relaxed">Help us reach our annual goal of adding 100 more children. Every child deserves the opportunity to learn, eat, and acquire skills to build a meaningful future.</p>
          
          <div className="mt-6 space-y-3">
            <button onClick={() => window.open('https://wa.me/256795624752?text=Hello Edward, I would like to support your goal of adding 100 more children each year. Every child deserves education, food, and skills.')} className="w-full bg-white text-[#6C3BAA] font-black py-3.5 rounded-xl text-sm">DONATE VIA: 0795624752</button>
            <button onClick={() => window.open('https://wa.me/256753988127?text=Hello Edward, I would like to support your mission to add 100 more children annually.')} className="w-full bg-[#00BFFF] text-white font-black py-3.5 rounded-xl text-sm">DONATE VIA: 0753988127</button>
            <button onClick={() => window.open('https://wa.me/256753988127?text=Hello Edward, I am interested in sponsoring a child to provide education, food, and skills for a better future.')} className="w-full bg-transparent border-2 border-white text-white font-black py-3.5 rounded-xl text-sm">SPONSOR A CHILD VIA WHATSAPP</button>
          </div>

          <div className="mt-6 bg-white/10 rounded-xl p-4 text-center">
            <div className="font-black text-sm">Our School Location</div>
            <div className="text-xs mt-2 text-white font-bold leading-relaxed">Makindye, Kipamba, Kampala Uganda<br/>Established March 20th, 2024 — Originating from Nsambya<br/>Founder: Ssemwogerere Edward</div>
            <div className="text-[11px] mt-3 text-white font-bold">Email: creativemindsinitiativeugandan@gmail.com<br/>Tel: +256795624752 / +256753988127</div>
          </div>

          <p className="text-[11px] text-white font-bold mt-6 text-center italic">Every child deserves access to education, food and life skills to become someone in life. Your support makes this possible.</p>
        </div>
      </div>

      <div className="bg-[#00BFFF] text-white text-center py-12 px-6">
        <h2 className="font-black text-[26px]">We Cannot Reach the Next 100 Without You</h2>
        <p className="text-[15px] mt-3 max-w-[650px] mx-auto leading-relaxed font-bold">We have successfully provided education and nutrition to 100 children. With your partnership, we will enroll 100 additional children next year, and continue expanding annually. Every child deserves the opportunity to thrive.</p>
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256795624752')} className="bg-[#6C3BAA] px-8 py-3 rounded-xl font-black text-sm">YES, I WANT TO HELP</button>
          <Link href="/" className="bg-white text-[#00BFFF] px-8 py-3 rounded-xl font-black text-sm">BACK TO HOME</Link>
        </div>
      </div>

      <footer className="bg-white text-black font-bold text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • Makindye, Kipamba, Kampala Uganda • Strategic Goal: Enroll 100 Additional Children Annually • <Link href="/" className="text-[#00BFFF]">Back to Home</Link></footer>
    </main>
  );
}