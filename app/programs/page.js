"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProgramsPage() {
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
            <Link href="/programs" className="text-[#6C3BAA]">Programs</Link>
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
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/programs" onClick={closeMenu} className="text-[#6C3BAA]">Programs</Link>
            <Link href="/impact" onClick={closeMenu}>Impact</Link>
            <Link href="/get-involved" onClick={closeMenu}>Get Involved</Link>
          </div>
        )}
      </nav>

      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black">Our Programs</h1>
        <p className="mt-3 text-[15px] max-w-[600px] mx-auto text-white font-bold">
          We were all born to thrive. We empower children in Makindye, Kipamba, Kampala Uganda through The Mind and The Body - Education & Food for 100 children.
        </p>
      </div>

      {/* EDUCATION */}
      <div className="px-6 lg:px-20 py-14">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6C3BAA] rounded-full flex items-center justify-center text-white font-black">1</div>
          <h2 className="text-[#6C3BAA] font-black text-[28px]">Education Program - The Mind</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <div>
            <h3 className="font-black text-[18px] text-black">Why We Built Our Own School</h3>
            <p className="text-black text-[15px] mt-4 leading-relaxed font-medium">
              When I, <span className="font-black">Ssemwogerere Edward</span>, started Creative Minds Initiative Uganda on March 20th, 2024, I was staying in Nsambya slum. I saw many children suffering - no education, no food, not healthy because their parents couldn't afford to take care of them.<br/><br/>
              At first, we tried to pay school fees in other schools, but it was too expensive and not sustainable. So I made a big decision - <span className="font-black text-[#6C3BAA]">I bought land and built our own school in Makindye, Kipamba, Kampala Uganda.</span><br/><br/>
              Now, instead of begging other schools to take our children, we teach <span className="font-black">100 children</span> in our own classrooms. Our teachers are from the community. They understand the pain of Nsambya because they lived it too.<br/><br/>
              We provide free education because we believe <span className="font-black text-[#00BFFF]">every child was born to thrive</span> - with God's unique stamp, a plan and a purpose. Education is how they discover they matter.
            </p>
            <div className="bg-[#F6F7F9] rounded-xl p-4 mt-6 border">
              <h4 className="font-black text-sm text-black">What Education Program Includes:</h4>
              <ul className="text-[14px] text-black mt-2 list-disc ml-5 space-y-1 font-medium">
                <li>Free classes in our own school in Makindye, Kipamba, Kampala Uganda</li>
                <li>Books, uniforms, pens, and scholastic materials</li>
                <li>Literacy, numeracy, reading clubs</li>
                <li>Creative Minds workshops - art, storytelling, skills</li>
                <li>Girls stay-in-school support</li>
                <li>Teachers who care, from our own community</li>
              </ul>
            </div>
            <button onClick={() => window.open('https://wa.me/256795624752?text=Hello Edward, I want to support EDUCATION program')} className="bg-[#6C3BAA] text-white font-black px-6 py-3 rounded-lg mt-6 text-sm">SUPPORT EDUCATION - 0795624752</button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100 border">
                <Image src="/image1.jpg" fill alt="Kids learning in Makindye school" className="object-cover" />
              </div>
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100 border">
                <Image src="/image2.jpg" fill alt="Children in classroom" className="object-cover" />
              </div>
            </div>
            <div className="relative h-[260px] rounded-xl overflow-hidden bg-gray-100 border">
              <Image src="/image3.jpg" fill alt="Education program Makindye Kipamba" className="object-cover" />
            </div>
            <p className="text-[12px] text-black font-bold text-center">📚 100 children learning in our own school in Makindye, Kipamba, Kampala Uganda</p>
          </div>
        </div>
      </div>

      {/* FOOD */}
      <div className="bg-[#F6F7F9] px-6 lg:px-20 py-14">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00BFFF] rounded-full flex items-center justify-center text-white font-black">2</div>
          <h2 className="text-[#00BFFF] font-black text-[28px]">Food Program - The Body</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <div className="space-y-4 order-2 lg:order-1">
            <div className="relative h-[260px] rounded-xl overflow-hidden bg-gray-100 border">
              <Image src="/image4.jpg" fill alt="Children eating food" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100 border">
                <Image src="/image5.jpg" fill alt="Feeding program" className="object-cover" />
              </div>
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100 border">
                <Image src="/image6.jpg" fill alt="Daily meals Makindye" className="object-cover" />
              </div>
            </div>
            <p className="text-[12px] text-black font-bold text-center">🍲 Daily nutritious meals for 100 children - No child learns on empty stomach</p>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-black text-[18px] text-black">A Hungry Child Cannot Learn</h3>
            <p className="text-black text-[15px] mt-4 leading-relaxed font-medium">
              In Nsambya slum, I watched children sitting at home, weak, not healthy, because there was no food. Even when we took them to other schools, they could not concentrate - how can you learn when you have not eaten since yesterday?<br/><br/>
              That is why in our school in <span className="font-black">Makindye, Kipamba, Kampala Uganda</span>, we start with food. <span className="font-black text-[#00BFFF]">Every child gets daily nutritious meals - posho, beans, rice, porridge.</span> For many of our 100 children, this is the only meal of the day.<br/><br/>
              Their parents love them but earn less than $2 a day. Choosing between food and school is not a choice. So we provide both.<br/><br/>
              Healthy body first, then healthy mind. When the body is fed, the mind can finally thrive and learn that they matter, that someone cares, and that they have incredible potential.
            </p>
            <div className="bg-white rounded-xl p-4 mt-6 border">
              <h4 className="font-black text-sm text-black">What Food Program Includes:</h4>
              <ul className="text-[14px] text-black mt-2 list-disc ml-5 space-y-1 font-medium">
                <li>Daily lunch - posho, beans, rice for 100 children</li>
                <li>Morning porridge for younger children</li>
                <li>Food parcels for the most vulnerable families from Nsambya</li>
                <li>Clean drinking water</li>
                <li>Nutrition support for sick/malnourished children</li>
              </ul>
            </div>
            <button onClick={() => window.open('https://wa.me/256753988127?text=Hello Edward, I want to support FOOD program')} className="bg-[#00BFFF] text-white font-black px-6 py-3 rounded-lg mt-6 text-sm">SUPPORT FOOD - 0753988127</button>
          </div>
        </div>
      </div>

      <div className="bg-[#6C3BAA] text-white text-center py-12 px-6">
        <h2 className="font-black text-[24px]">Your Support Feeds The Mind And The Body</h2>
        <p className="text-[15px] mt-2 text-white font-bold">We bought land and built a school in Makindye, Kipamba. Now we need your help to keep 100 children learning and eating every day.</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <div className="bg-white text-[#6C3BAA] px-5 py-3 rounded-lg font-black text-xs"> $10 = Food for 5 children for a week </div>
          <div className="bg-white text-[#00BFFF] px-5 py-3 rounded-lg font-black text-xs"> $30 = Books for 10 children </div>
          <div className="bg-white text-[#6C3BAA] px-5 py-3 rounded-lg font-black text-xs"> $50 = Food + Education for 1 child / month </div>
        </div>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256795624752')} className="bg-[#00BFFF] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0795624752</button>
          <button onClick={() => window.open('https://wa.me/256753988127')} className="bg-white text-[#6C3BAA] px-6 py-3 rounded-lg font-black text-sm">DONATE: 0753988127</button>
        </div>
        <Link href="/" className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-black text-sm mt-4">← BACK TO HOME</Link>
      </div>

      <footer className="bg-white text-black font-bold text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Founder: Ssemwogerere Edward • +256795624752 / +256753988127 • Makindye, Kipamba, Kampala Uganda • 100 Children • Education + Food • <Link href="/" className="text-[#00BFFF]">Back to Home</Link></footer>
    </main>
  );
}