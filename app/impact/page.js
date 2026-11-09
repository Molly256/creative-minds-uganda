"use client";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-[#6C3BAA] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black leading-tight">Our Impact<br/>100 Children Today, 200 Tomorrow</h1>
        <p className="mt-4 text-[14px] max-w-[600px] mx-auto text-white/80">
          Started March 20th, 2024 in Nsambya slum. Today in Makindye, Lukuli Zone we provide education and food for 100 children. Our goal is to add 100 more every year.
        </p>
      </div>

      {/* NUMBERS */}
      <div className="px-6 lg:px-20 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#00BFFF]">
          <div className="font-black text-[36px] text-[#00BFFF]">100</div>
          <div className="font-bold text-sm">Children Helped</div>
          <div className="text-[11px] text-gray-500 mt-1">Education + Food in Makindye</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#6C3BAA]">
          <div className="font-black text-[36px] text-[#6C3BAA]">2</div>
          <div className="font-bold text-sm">Programs</div>
          <div className="text-[11px] text-gray-500 mt-1">Education & Food Daily</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#00BFFF]">
          <div className="font-black text-[36px] text-[#00BFFF]">1</div>
          <div className="font-bold text-sm">Own School</div>
          <div className="text-[11px] text-gray-500 mt-1">Makindye, Lukuli Zone</div>
        </div>
        <div className="bg-[#F6F7F9] rounded-xl p-6 text-center border-t-4 border-t-[#6C3BAA]">
          <div className="font-black text-[36px] text-[#6C3BAA]">100+</div>
          <div className="font-bold text-sm">Goal Per Year</div>
          <div className="text-[11px] text-gray-500 mt-1">Add 100 more children yearly</div>
        </div>
      </div>

      {/* STORY + IMAGE7 */}
      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-20 py-10 items-start">
        <div>
          <h2 className="font-black text-[24px] text-[#00BFFF]">What We Have Done So Far</h2>
          <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
            I, <span className="font-bold">Nakiyngi Maureen</span>, used to stay in Nsambya slum area. I watched many kids suffering - no education, no food, not healthy because even their parents couldn't afford to take care of them.<br/><br/>
            On <span className="font-bold">March 20th, 2024</span>, I promised when I get a better life and connections, I will start my own NGO. That became Creative Minds Initiative Uganda.<br/><br/>
            Paying fees in other schools was too expensive. So <span className="font-bold text-[#6C3BAA]">I bought land and built our own school in Makindye, Lukuli Zone.</span><br/><br/>
            <span className="font-bold">Today we have provided education and food for 100 children.</span> Every day they come to our Makindye school - they get books, they learn to read, and they get posho, beans, rice, porridge. For many, it is the only meal.<br/><br/>
            We were all born to thrive. These 100 children now know they matter, someone cares, and they have incredible potential.
          </p>

          <div className="bg-white border-l-4 border-l-[#6C3BAA] shadow-sm p-5 mt-6 rounded-r-xl">
            <h3 className="font-bold text-[#6C3BAA]">🎯 Our Goal: Add 100 More Children Every Year</h3>
            <p className="text-[13px] text-gray-600 mt-2 leading-relaxed">
              We have land, we have a school, we have 100 children. But in Nsambya and Makindye, hundreds more are still suffering - no food, no education.<br/><br/>
              <span className="font-bold">If we get a hand to help us, we will add 100 more children every year.</span><br/>
              Year 1 (2024-2025): 100 children ✅ Done<br/>
              Year 2 (2026): 200 children - Need your help<br/>
              Year 3 (2027): 300 children - With more classrooms<br/><br/>
              Your donation is not just food or books - it is a future. $10 feeds 5 children for a week. $30 buys books for 10 children. $50 supports 1 child for a whole month.
            </p>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            <button onClick={() => window.open('https://wa.me/256773242118?text=Hello Maureen, I saw your Impact page - 100 children helped - I want to help add 100 more')} className="bg-[#6C3BAA] text-white px-6 py-3 rounded-lg font-bold text-sm">HELP US ADD 100 MORE - MTN</button>
            <button onClick={() => window.open('https://wa.me/256753185973?text=Hello Maureen, I saw your Impact page - I want to support')} className="bg-[#00BFFF] text-white px-6 py-3 rounded-lg font-bold text-sm">DONATE AIRTEL: 0753185973</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative h-[420px] rounded-xl overflow-hidden bg-gray-100">
            <Image src="/image7.jpg" fill alt="100 children helped in Makindye" className="object-cover" />
          </div>
          <p className="text-[11px] text-gray-400 text-center">📸 100 children receiving education and food in our Makindye, Lukuli school - March 2024 to Now</p>
          
          <div className="bg-[#00BFFF] text-white rounded-xl p-5 text-center">
            <div className="font-black text-[22px]">Be Part Of The Next 100</div>
            <p className="text-[12px] mt-2 text-white/90">Every child we add needs food + books + uniform. We have the land. We need your hand.</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$10</div><div className="text-[10px]">Feeds 5 / week</div></div>
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$30</div><div className="text-[10px]">Books for 10</div></div>
              <div className="bg-white text-[#00BFFF] rounded-lg p-2"><div className="font-black text-sm">$50</div><div className="text-[10px]">1 child / month</div></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white text-gray-400 text-[11px] py-6 text-center border-t">© 2026 Creative Minds Initiative Uganda • Impact: 100 Children • Goal: +100 Every Year • Makindye, Lukuli Zone</footer>
    </main>
  );
}