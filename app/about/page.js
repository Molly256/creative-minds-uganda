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
        <p className="mt-4 text-[15px] max-w-[650px] mx-auto text-white font-bold">Founded March 20th, 2024 by Ssemwogerere Edward in Nsambya. Today we own land and run a school in Makindye, Kipamba, Kampala Uganda providing Education & Food for 100 children.</p>
      </div>

      <div className="px-6 lg:px-20 pt-10">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100 border">
          <Image src="/image9.jpg" fill alt="Children from Nsambya" className="object-cover" priority />
        </div>
        <p className="text-[12px] text-black font-bold text-center mt-2">Children from Nsambya slum - where our journey began in 2024</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 py-14 items-center">
        <div className="relative h-[380px] rounded-xl overflow-hidden bg-gray-100 border">
          <Image src="/image9.jpg" fill alt="Nsambya children" className="object-cover" />
        </div>
        <div>
          <h2 className="text-[#6C3BAA] font-black text-[28px]">Our Story</h2>
          <h3 className="font-black text-[18px] mt-2 text-black">I lived in Nsambya. I saw the pain every day.</h3>
          <p className="text-black text-[15px] mt-4 leading-relaxed font-medium">
            I, <span className="font-black text-[#00BFFF]">Ssemwogerere Edward</span>, used to stay in Nsambya slum area. Every morning I watched children - dirty, hungry, not healthy - sitting at home while other kids went to school. 
            Their parents loved them but couldn't afford food, let alone school fees.
            <br/><br/>
            I promised myself: When I get a better life and connections, I will start my own NGO. On <span className="font-black">March 20th, 2024</span>, that promise became <span className="font-black">Creative Minds Initiative Uganda</span>.
            <br/><br/>
            <span className="font-black text-[#6C3BAA]">Then I realized: Paying school fees in other schools was too expensive and not sustainable. So I made a big decision - I bought land and built our OWN school.</span>
            <br/><br/>
            Today our school is located in <span className="font-black">Makindye, Kipamba, Kampala Uganda</span> - and we now provide <span className="font-black">education and food for 100 children</span>.
          </p>
          <div className="flex gap-6 mt-6">
            <div><div className="font-black text-2xl text-[#6C3BAA]">100</div><div className="text-xs font-bold text-black">Children in Our School</div></div>
            <div><div className="font-black text-2xl text-[#6C3BAA]">Own Land</div><div className="text-xs font-bold text-black">Makindye, Kipamba</div></div>
            <div><div className="font-black text-2xl text-[#6C3BAA]">2</div><div className="text-xs font-bold text-black">Education, Food</div></div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F7F9] px-6 lg:px-20 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-[30px] text-[#6C3BAA]">What We Do</h2>
          <h3 className="font-black text-[20px] mt-3 text-black">We Were All Born To Thrive</h3>
          <p className="text-black text-[15px] mt-6 leading-relaxed font-medium">
            We each have God's unique stamp of approval on our lives, complete with a plan and a purpose.<br/><br/>
            Sadly, many children in Nsambya have never heard this message. Many children don't know that they matter; that anyone cares about them.<br/><br/>
            <span className="font-black text-[#00BFFF]">We're on a mission to make sure every child knows they are loved, that they matter, and that they have incredible potential.</span>
          </p>
          <p className="text-black text-[15px] mt-6 leading-relaxed font-medium">
            We empower children to reach their God-given potential by creating opportunities for transformational development: <span className="font-black text-[#6C3BAA]">The Mind and The Body.</span><br/>
            Through our development programs in Makindye, Kipamba, children receive <span className="font-black">food and education</span> - so they can thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow border-l-4 border-[#6C3BAA]">
            <h4 className="font-black text-[#6C3BAA]">📚 The Mind - Education</h4>
            <p className="text-[14px] text-black mt-3 leading-relaxed font-medium">I decided to buy land and build a school because paying fees in other schools was too expensive. Now in our own school in Makindye, Kipamba, 100 children get free education - books, uniforms, literacy, numeracy, and creative learning. Education is how they learn they matter and unlock their incredible potential.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow border-l-4 border-[#00BFFF]">
            <h4 className="font-black text-[#00BFFF]">🍲 The Body - Food</h4>
            <p className="text-[14px] text-black mt-3 leading-relaxed font-medium">A hungry child cannot learn. We provide daily nutritious meals - posho, beans, rice, porridge - for 100 children. Many used to sleep hungry in Nsambya. Now they have food and strength to learn and thrive.</p>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-14">
        <h2 className="text-center font-black text-[28px] text-[#00BFFF]">Our School in Makindye, Kipamba</h2>
        <p className="text-center text-black font-bold text-sm mt-2">Why we built our own school - cheaper, safer, and we control the quality</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow border border-gray-200 border-l-4 border-l-[#00BFFF]">
            <h3 className="font-black text-[#00BFFF]">📚 Education - Our Own School</h3>
            <p className="text-[14px] text-black mt-2 font-medium">Instead of paying expensive fees in other schools, we teach 100 children in our own school. Literacy, numeracy, creative skills, and girls education.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow border border-gray-200 border-l-4 border-l-[#6C3BAA]">
            <h3 className="font-black text-[#6C3BAA]">🍲 Food - Daily Meals</h3>
            <p className="text-[14px] text-black mt-2 font-medium">Every child in our Makindye Kipamba school gets daily nutritious meals - posho, beans, rice, porridge. No child can learn on an empty stomach.</p>
          </div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 mt-8 text-center shadow border">
          <h3 className="font-black text-black text-[16px]">📍 Visit Us: Makindye, Kipamba, Kampala Uganda</h3>
          <p className="text-[14px] text-black mt-2 font-medium">We bought this land to save costs and build a permanent future for the children. Your donation helps us build more classrooms and buy more books.</p>
        </div>
      </div>

      {/* FOUNDER - IMAGE10 KEPT */}
      <div className="bg-[#6C3BAA] text-white px-6 lg:px-20 py-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
        <div className="relative h-[380px] rounded-xl overflow-hidden bg-white border-4 border-white">
          <Image src="/image10.jpg" fill alt="Ssemwogerere Edward - Founder" className="object-cover" />
        </div>
        <div>
          <h2 className="font-black text-[22px]">Meet the Founder</h2>
          <h3 className="font-black text-[32px] mt-1">Ssemwogerere Edward</h3>
          <p className="text-[#FFD700] font-bold text-sm">Founder - Bought Land & Built School in Makindye, Kipamba</p>
          <p className="text-[15px] text-white mt-4 leading-relaxed font-medium">I am not from a rich family. I know what it is to sleep hungry. That is why I decided to buy land in Makindye, Kipamba, Kampala Uganda and build our own school. Paying other schools was too expensive. Now 100 children have education and food under one roof.<br/><br/>Tel: +256795624752 | +256753988127<br/>Email: creativemindsinitiativeugandan@gmail.com</p>
          <button onClick={() => window.open('https://wa.me/256795624752?text=Hello Edward, I read about your school in Makindye Kipamba and want to support')} className="bg-white text-[#6C3BAA] font-black px-6 py-2.5 rounded-lg mt-5 text-sm">TALK TO EDWARD</button>
        </div>
      </div>

      <div className="bg-[#00BFFF] text-white text-center py-12 px-6">
        <h2 className="font-black text-[26px]">Help Us Expand Our Makindye School</h2>
        <p className="text-[15px] mt-2 font-bold">We have land, we have 100 children, we need more classrooms, books, and food. Your $10 feeds 5 children, $30 buys books for 10 children.</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256795624752')} className="bg-[#6C3BAA] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0795624752</button>
          <button onClick={() => window.open('https://wa.me/256753988127')} className="bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0753988127</button>
        </div>
        <Link href="/" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-black text-sm mt-4">← BACK TO HOME</Link>
      </div>

      <footer className="bg-white text-black font-bold text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • School Location: Makindye, Kipamba, Kampala Uganda • Founded March 20, 2024 • <Link href="/" className="text-[#00BFFF]">Back to Home</Link></footer>
    </main>
  );
}