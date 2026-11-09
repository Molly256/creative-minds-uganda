"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[42px] font-black leading-tight">From Nsambya Slum<br/>To Our Own School In Makindye</h1>
        <p className="mt-4 text-[14px] max-w-[650px] mx-auto text-white/90">Founded March 20th, 2024 in Nsambya. Today we own land and run a school in Makindye, Lukuli Zone providing Education, Food & Shelter for 100 children.</p>
      </div>

      {/* STORY */}
      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 py-14 items-center">
        <div className="relative h-[380px] rounded-xl overflow-hidden bg-gray-100">
          <Image src="/about-nsambya.jpg" fill alt="Nsambya children" className="object-cover" />
        </div>
        <div>
          <h2 className="text-[#6C3BAA] font-black text-[26px]">Our Story</h2>
          <h3 className="font-bold text-[18px] mt-2">I lived in Nsambya. I saw the pain every day.</h3>
          <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
            I, <span className="font-bold text-[#00BFFF]">Nakiyngi Maureen</span>, used to stay in Nsambya slum area. Every morning I watched children - dirty, hungry, not healthy - sitting at home while other kids went to school. 
            Their parents loved them but couldn't afford food, let alone school fees.
            <br/><br/>
            I promised myself: When I get a better life and connections, I will start my own NGO. On <span className="font-bold">March 20th, 2024</span>, that promise became <span className="font-bold">Creative Minds Initiative Uganda</span>.
            <br/><br/>
            <span className="font-bold text-[#6C3BAA]">Then I realized: Paying school fees in other schools was too expensive and not sustainable. So I made a big decision - I bought land and built our OWN school.</span>
            <br/><br/>
            Today our school is located in <span className="font-bold">Makindye, Lukuli Zone</span> - and we now provide not just education and food, but also <span className="font-bold">shelter for 100 children</span> who had nowhere to sleep.
          </p>
          <div className="flex gap-6 mt-6">
            <div><div className="font-black text-2xl text-[#6C3BAA]">100</div><div className="text-xs text-gray-500">Children in Our School</div></div>
            <div><div className="font-black text-2xl text-[#6C3BAA]">Own Land</div><div className="text-xs text-gray-500">Makindye, Lukuli</div></div>
            <div><div className="font-black text-2xl text-[#6C3BAA]">3</div><div className="text-xs text-gray-500">Education, Food, Shelter</div></div>
          </div>
        </div>
      </div>

      {/* WHAT WE DO - NEW: From your image, focused on Education + Food */}
      <div className="bg-[#F6F7F9] px-6 lg:px-20 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-[28px] text-[#6C3BAA]">What We Do</h2>
          <h3 className="font-bold text-[20px] mt-3">We Were All Born To Thrive</h3>
          <p className="text-gray-600 text-[14px] mt-6 leading-relaxed">
            We each have God's unique stamp of approval on our lives, complete with a plan and a purpose.<br/><br/>
            Sadly, many children in Nsambya have never heard this message. Many children don't know that they matter; that anyone cares about them.<br/><br/>
            <span className="font-bold text-[#00BFFF]">We're on a mission to make sure every child knows they are loved, that they matter, and that they have incredible potential.</span>
          </p>
          <p className="text-gray-600 text-[14px] mt-6 leading-relaxed">
            We empower children to reach their God-given potential by creating opportunities for transformational development: <span className="font-bold text-[#6C3BAA]">The Mind and The Body.</span><br/>
            Through our development programs in Makindye, Lukuli Zone, children receive <span className="font-bold">food, education, and shelter</span> - so they can thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#6C3BAA]">
            <h4 className="font-black text-[#6C3BAA]">📚 The Mind - Education</h4>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">I decided to buy land and build a school because paying fees in other schools was too expensive. Now in our own school in Makindye, 100 children get free education - books, uniforms, literacy, numeracy, and creative learning. Education is how they learn they matter and unlock their incredible potential.</p>
            <ul className="text-xs text-gray-500 mt-3 list-disc ml-4 space-y-1">
              <li>Free education in our own school - no expensive fees</li>
              <li>Books, uniforms, pens, and scholastic materials</li>
              <li>Literacy, numeracy & creative skills workshops</li>
              <li>Girls stay-in-school support</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#00BFFF]">
            <h4 className="font-black text-[#00BFFF]">🍲 The Body - Food & Shelter</h4>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">A hungry child cannot learn. We provide daily nutritious meals - posho, beans, rice, porridge - and safe shelter for 100 children. Many used to sleep hungry in Nsambya. Now they have food, a mattress, and strength to learn and thrive.</p>
            <ul className="text-xs text-gray-500 mt-3 list-disc ml-4 space-y-1">
              <li>Daily lunch & porridge for 100 children</li>
              <li>Food parcels for the most vulnerable families</li>
              <li>Safe shelter in Makindye, Lukuli Zone</li>
              <li>Healthy body first, then healthy mind</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OUR SCHOOL */}
      <div className="px-6 lg:px-20 py-14">
        <h2 className="text-center font-black text-[28px] text-[#00BFFF]">Our School in Makindye, Lukuli Zone</h2>
        <p className="text-center text-gray-500 text-sm mt-2">Why we built our own school - cheaper, safer, and we control the quality</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#00BFFF]">
            <h3 className="font-bold text-[#00BFFF]">📚 Education - Our Own School</h3>
            <p className="text-sm text-gray-600 mt-2">Instead of paying expensive fees in other schools, we teach 100 children in our own school. Literacy, numeracy, creative skills, and girls education. Our teachers are from the community and understand the kids.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#6C3BAA]">
            <h3 className="font-bold text-[#6C3BAA]">🍲 Food - Daily Meals</h3>
            <p className="text-sm text-gray-600 mt-2">Every child in our Makindye school gets daily nutritious meals - posho, beans, rice, porridge. No child can learn on an empty stomach. Food is what brings them to class every day.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-[#00BFFF]">
            <h3 className="font-bold text-[#00BFFF]">🏠 Shelter - Safe Home</h3>
            <p className="text-sm text-gray-600 mt-2">Many children from Nsambya had no safe place to sleep. In our Makindye Lukuli school, we now provide shelter - a safe roof, mattress, and security for the most vulnerable 100 children.</p>
          </div>
        </div>

        <div className="bg-[#F6F7F9] rounded-xl p-6 mt-8 text-center shadow-sm">
          <h3 className="font-bold">📍 Visit Us: Makindye, Lukuli Zone, Kampala</h3>
          <p className="text-xs text-gray-500 mt-2">We bought this land to save costs and build a permanent future for the children. Your donation helps us build more classrooms and buy more mattresses.</p>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="bg-[#6C3BAA] text-white px-6 lg:px-20 py-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image src="/maureen.jpg" fill alt="Nakiyngi Maureen" className="object-cover" />
        </div>
        <div>
          <h2 className="font-bold text-[22px]">Meet the Founder</h2>
          <h3 className="font-black text-[28px] mt-1">Nakiyngi Maureen</h3>
          <p className="text-[#B47DFF] text-sm">Founder - Bought Land & Built School in Makindye</p>
          <p className="text-sm text-white/90 mt-4 leading-relaxed">I am not from a rich family. I know what it is to sleep hungry. That is why I decided to buy land in Makindye, Lukuli Zone and build our own school. Paying other schools was too expensive. Now 100 children have education, food, and shelter under one roof.<br/><br/>MTN: +256773242118 | Airtel: +256753185973<br/>Email: creativemindsinitiativeugandan@gmail.com</p>
          <button onClick={() => window.open('https://wa.me/256753185973?text=Hello Maureen, I read about your school in Makindye Lukuli and want to support')} className="bg-white text-[#6C3BAA] font-bold px-6 py-2.5 rounded-lg mt-5 text-sm">TALK TO MAUREEN</button>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#00BFFF] text-white text-center py-12 px-6">
        <h2 className="font-black text-[26px]">Help Us Expand Our Makindye School</h2>
        <p className="text-sm mt-2">We have land, we have 100 children, we need more classrooms, books, mattresses, and food. Your $10 feeds 5 children, $50 buys a mattress.</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256773242118')} className="bg-[#6C3BAA] px-6 py-3 rounded-lg font-bold text-sm">DONATE MTN: 0773242118</button>
          <button onClick={() => window.open('https://wa.me/256753185973')} className="bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-bold text-sm">DONATE AIRTEL: 0753185973</button>
        </div>
      </div>

      <footer className="bg-white text-gray-400 text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • School Location: Makindye, Lukuli Zone • Founded March 20, 2024</footer>
    </main>
  );
}