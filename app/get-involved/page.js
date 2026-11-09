"use client";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black leading-tight">Get Involved<br/>Together, We Can Reach More Children</h1>
        <p className="mt-4 text-[14px] max-w-[700px] mx-auto text-white/90 leading-relaxed">
          At Creative Minds Initiative Uganda, we believe every child deserves access to education, nutritious food, and life skills to become someone in life. We currently support 100 children in Makindye, Lukuli Zone. Our goal is to add 100 more children every year — but we cannot achieve this alone without your support.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 lg:px-20 py-12 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-black text-[24px] text-[#6C3BAA]">Why Your Support Matters</h2>
          <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
            I am <span className="font-bold">Nakiyngi Maureen</span>, Founder of Creative Minds Initiative Uganda. I lived in Nsambya slum area and witnessed firsthand children suffering without access to education, food, or healthcare, simply because their parents could not afford to provide for them.<br/><br/>
            On <span className="font-bold">March 20th, 2024</span>, I made a commitment to change this reality. I promised that when I had the opportunity and connections, I would start an organization to support these children. That commitment became Creative Minds Initiative Uganda.<br/><br/>
            Initially, we attempted to pay school fees in other private schools, but the costs were unsustainable. Therefore, we made a strategic decision to <span className="font-bold text-[#6C3BAA]">acquire land and establish our own school in Makindye, Lukuli Zone, Kampala.</span><br/><br/>
            Today, we provide holistic support — education and daily meals — to <span className="font-bold">100 vulnerable children</span>.<br/><br/>
            <span className="font-bold text-[#00BFFF] text-[15px]">However, hundreds more children in Nsambya and Makindye still lack basic needs. Our strategic goal is to expand our reach by enrolling an additional 100 children each year. To achieve this, we need partners like you. Without external support, this growth is not possible.</span>
          </p>

          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="border-l-4 border-l-[#00BFFF] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-bold text-sm">1. Make a Donation — Direct Impact</h4>
              <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">Your contribution directly funds education and nutrition. $10 provides meals for 5 children for a week, $30 supplies learning materials for 10 children, and $50 provides comprehensive support for one child for a full month.</p>
            </div>
            <div className="border-l-4 border-l-[#6C3BAA] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-bold text-sm">2. Sponsor a Child — Transform a Life</h4>
              <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">Through child sponsorship, you ensure a child in our Makindye school receives quality education, daily meals, and essential life skills. Sponsors receive regular updates, photographs, and academic progress reports.</p>
            </div>
            <div className="border-l-4 border-l-[#00BFFF] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-bold text-sm">3. Invest in Infrastructure — Build for the Future</h4>
              <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">We own land in Makindye, Lukuli Zone, but require additional classrooms, desks, learning materials, and sleeping facilities to accommodate the next 100 children.</p>
            </div>
            <div className="border-l-4 border-l-[#6C3BAA] bg-[#F6F7F9] p-4 rounded-r-xl">
              <h4 className="font-bold text-sm">4. Amplify Our Mission — Share Our Story</h4>
              <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">By sharing our work with your network, you help us reach potential donors and partners. One share can secure education and food for multiple children.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#6C3BAA] text-white rounded-2xl p-8 sticky top-6">
          <h3 className="font-black text-[22px]">Support Our Growth Today</h3>
          <p className="text-[13px] text-white/80 mt-3 leading-relaxed">Help us reach our annual goal of adding 100 more children. Every child deserves the opportunity to learn, eat, and acquire skills to build a meaningful future.</p>
          
          <div className="mt-6 space-y-3">
            <button onClick={() => window.open('https://wa.me/256773242118?text=Hello Maureen, I would like to support your goal of adding 100 more children each year. Every child deserves education, food, and skills.')} className="w-full bg-white text-[#6C3BAA] font-bold py-3.5 rounded-xl text-sm">DONATE VIA MTN MONEY: 0773242118</button>
            <button onClick={() => window.open('https://wa.me/256753185973?text=Hello Maureen, I would like to support your mission to add 100 more children annually.')} className="w-full bg-[#00BFFF] text-white font-bold py-3.5 rounded-xl text-sm">DONATE VIA AIRTEL MONEY: 0753185973</button>
            <button onClick={() => window.open('https://wa.me/256753185973?text=Hello Maureen, I am interested in sponsoring a child to provide education, food, and skills for a better future.')} className="w-full bg-transparent border-2 border-white text-white font-bold py-3.5 rounded-xl text-sm">SPONSOR A CHILD VIA WHATSAPP</button>
          </div>

          <div className="mt-6 bg-white/10 rounded-xl p-4 text-center">
            <div className="font-bold text-sm">Our School Location</div>
            <div className="text-xs mt-2 text-white/80 leading-relaxed">Makindye, Lukuli Zone, Kampala, Uganda<br/>Established March 20th, 2024 — Originating from Nsambya</div>
            <div className="text-[11px] mt-3 text-white/60">Email: creativemindsinitiativeugandan@gmail.com</div>
          </div>

          <p className="text-[11px] text-white/60 mt-6 text-center italic">Every child deserves access to education, food, and life skills to become someone in life. Your support makes this possible.</p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[#00BFFF] text-white text-center py-12 px-6">
        <h2 className="font-black text-[26px]">We Cannot Reach the Next 100 Without You</h2>
        <p className="text-sm mt-3 max-w-[650px] mx-auto leading-relaxed">We have successfully provided education and nutrition to 100 children. With your partnership, we will enroll 100 additional children next year, and continue expanding annually. Every child deserves the opportunity to thrive.</p>
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256773242118')} className="bg-[#6C3BAA] px-8 py-3 rounded-xl font-bold text-sm">YES, I WANT TO HELP</button>
        </div>
      </div>

      <footer className="bg-white text-gray-400 text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Strategic Goal: Enroll 100 Additional Children Annually • Every Child Deserves Education, Food, and Skills</footer>
    </main>
  );
}