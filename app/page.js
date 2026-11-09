"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const donateAction = () => {
    window.open(
      `https://wa.me/256753185973?text=${encodeURIComponent(
        "Hello Creative Minds Initiative Uganda, I want to donate to support the children. MTN: +256773242118 / Airtel: +256753185973 - Nakiyngi Maureen"
      )}`,
      "_blank"
    );
    scrollTo("get-involved");
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

  return (
    <main className="min-h-screen bg-[#F6F7F9] text-[#333]">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="h-[76px] flex items-center justify-between px-4 lg:px-16">
          <Image src="/logo.png" alt="logo" width={70} height={70} className="object-contain" />

          <div className="hidden md:flex items-center gap-7 font-semibold text-[15px] text-[#00BFFF]">
            <span className="text-[#6C3BAA] cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>Home</span>
            <span className="cursor-pointer" onClick={() => scrollTo("about")}>About</span>
            <span className="cursor-pointer" onClick={() => scrollTo("programs")}>Programs</span>
            <span className="cursor-pointer" onClick={() => scrollTo("impact")}>Impact</span>
            <span className="cursor-pointer" onClick={() => scrollTo("get-involved")}>Get Involved</span>
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

        {menuOpen && (
          <div className="md:hidden bg-white border-t flex flex-col px-6 py-4 gap-4 font-semibold text-[16px] text-[#00BFFF]">
            <span className="text-[#6C3BAA]" onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); setMenuOpen(false)}}>Home</span>
            <span onClick={() => scrollTo("about")}>About</span>
            <span onClick={() => scrollTo("programs")}>Programs</span>
            <span onClick={() => scrollTo("impact")}>Impact</span>
            <span onClick={() => scrollTo("get-involved")}>Get Involved</span>
            <button className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg text-center" onClick={donateAction}>DONATE</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#00BFFF] text-white p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-[44px] font-black leading-[0.95]">Every Child Deserves<br/>Education, Food & Skills</h1>
          <h2 className="text-white font-bold text-[20px] mt-3">From Nsambya Slum To Our Own School In Makindye</h2>
          <p className="text-[13px] text-white/90 mt-3 max-w-[480px] leading-relaxed">Founded March 20th, 2024. Today we provide education and food for 100 children in our own school in Makindye, Lukuli Zone. Our goal: add 100 more children every year — but we cannot do it alone.</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <button onClick={donateAction} className="bg-[#6C3BAA] text-white text-xs font-bold px-5 py-2.5 rounded-md">♡ DONATE NOW</button>
            <button onClick={() => scrollTo("about")} className="border border-white text-white text-xs font-bold px-5 py-2.5 rounded-md">LEARN MORE</button>
          </div>
          <p className="text-[11px] mt-4 text-white/80">100 children helped • Goal: +100 every year • Makindye, Lukuli Zone</p>
        </div>
        <div className="bg-[#00BFFF] p-5">
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image src="/hero.jpg" fill alt="Children in Makindye school" className="object-cover" />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2">
        <div className="p-6 bg-[#F0F2F5]">
          {/* ABOUT */}
          <div id="about">
            <h3 className="font-black text-xl text-center text-[#6C3BAA]">Our Story - Born To Thrive</h3>
            <p className="text-center text-[12px] text-gray-600 mt-2 leading-relaxed px-2">
              I, <span className="font-bold">Nakiyngi Maureen</span>, lived in Nsambya slum. I saw children suffering — no education, no food, not healthy because their parents could not afford to care for them. I promised that when I had a better life and connections, I would start my own NGO. On March 20th, 2024, that promise became Creative Minds Initiative Uganda. Paying fees in other schools was too expensive, so I bought land and built our own school in Makindye, Lukuli Zone.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-[13px] text-[#6C3BAA]">Our Mission</h3>
                <p className="text-[10px] text-gray-600 mt-2 leading-tight">To ensure every child knows they matter, and receives education, food, and skills to reach their God-given potential.</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-[13px] text-[#6C3BAA]">Our Vision</h3>
                <p className="text-[10px] text-gray-600 mt-2 leading-tight">A Uganda where every child, no matter their background, has the opportunity to learn, eat, and become someone in life.</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <h3 className="font-bold text-[13px] text-[#6C3BAA]">Our Commitment</h3>
                <p className="text-[10px] text-gray-600 mt-2 leading-tight">To add 100 more children every year in our Makindye school, with your support.</p>
              </div>
            </div>
          </div>

          {/* PROGRAMS - EDUCATION + FOOD ONLY */}
          <h3 id="programs" className="text-center font-black text-xl mt-8 text-[#00BFFF]">Our Programs</h3>
          <p className="text-center text-xs mb-4 text-gray-600">The Mind and The Body — Education and Food for 100 children</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[100px]"><Image src="/image1.jpg" fill alt="Education program" className="object-cover" /></div>
              <div className="p-3"><h4 className="font-bold text-[12px] text-[#6C3BAA]">📚 Education Program - The Mind</h4><p className="text-[10px] text-gray-600 mt-1 leading-relaxed">Free education in our own school in Makindye. Books, uniforms, literacy, numeracy, creative skills & girls stay-in-school support.</p></div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[100px]"><Image src="/image4.jpg" fill alt="Food program" className="object-cover" /></div>
              <div className="p-3"><h4 className="font-bold text-[12px] text-[#00BFFF]">🍲 Food Program - The Body</h4><p className="text-[10px] text-gray-600 mt-1 leading-relaxed">Daily nutritious meals - posho, beans, rice, porridge. No child can learn on an empty stomach.</p></div>
            </div>
          </div>
          <p className="text-center text-[11px] text-gray-500 mt-3">We were all born to thrive. We empower children through The Mind and The Body.</p>
        </div>

        <div className="flex flex-col">
          {/* IMPACT */}
          <div id="impact" className="bg-[#6C3BAA] text-white text-center py-7 px-4">
            <h3 className="font-semibold">Our Impact in Numbers</h3>
            <div className="font-black text-5xl mt-1">100</div>
            <div className="text-sm">Children Receiving Education & Food</div>
            <p className="text-[11px] text-white/80 mt-2 max-w-[320px] mx-auto leading-relaxed">Since March 20th, 2024, we have provided education and food for 100 children. Our goal is to add 100 more children every year — with your help.</p>
            <div className="flex justify-center gap-3 mt-4">
              <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-black">100</div><div className="text-[10px]">Today</div></div>
              <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-black">200</div><div className="text-[10px]">Next Year Goal</div></div>
              <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-black">300</div><div className="text-[10px]">Year After</div></div>
            </div>
          </div>

          {/* GET INVOLVED */}
          <div id="get-involved" className="bg-[#00BFFF] text-white p-8 flex-1">
            <h3 className="text-center font-bold text-lg">Get Involved Today</h3>
            <p className="text-center text-xs text-white/90 leading-relaxed mt-2">Every child deserves education, food, and skills to be someone in life. We cannot reach the next 100 children without you. We cannot do this alone.</p>

            <div className="text-center text-[11px] mt-4 leading-relaxed bg-white/10 rounded-xl p-3">
              <p className="font-bold">Donate via Mobile Money</p>
              <p>MTN: +256773242118 - Nakiyngi Maureen</p>
              <p>Airtel: +256753185973 - Nakiyngi Maureen</p>
              <p>$10 = Food for 5 children / week • $30 = Books for 10 • $50 = 1 child / month</p>
              <p>Email: creativemindsinitiativeugandan@gmail.com</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-[#00A8E8] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Volunteer</h4><p className="text-[9px] text-white/80 mt-1">Give your time and skills to empower children in Makindye.</p><button onClick={volunteerAction} className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">JOIN US</button></div>
              <div className="bg-[#00A8E8] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Partner With Us</h4><p className="text-[9px] text-white/80 mt-1">Help us add 100 more children every year as a partner.</p><button onClick={partnerAction} className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">PARTNER NOW</button></div>
              <div className="bg-[#00A8E8] rounded-lg p-3 text-center"><h4 className="font-bold text-[11px]">Donate</h4><p className="text-[9px] text-white/80 mt-1">Your hand gives a child education, food & skills.</p><button onClick={donateAction} className="bg-[#6C3BAA] w-full mt-3 py-1.5 rounded text-[10px] font-bold">DONATE</button></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#00BFFF] text-white text-[11px] py-3 text-center">© 2026 Creative Minds Initiative Uganda • Contact: creativemindsinitiativeugandan@gmail.com • MTN: +256773242118 | Airtel: +256753185973 • Makindye, Lukuli Zone, Kampala</footer>
    </main>
  );
}