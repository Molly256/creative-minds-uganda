"use client";
import Image from "next/image";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-[#00BFFF] text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-[40px] font-black">Our Programs</h1>
        <p className="mt-3 text-[14px] max-w-[600px] mx-auto text-white/90">
          We were all born to thrive. We empower children in Makindye, Lukuli Zone through The Mind and The Body - Education and Food for 100 children.
        </p>
      </div>

      {/* EDUCATION PROGRAM */}
      <div className="px-6 lg:px-20 py-14">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6C3BAA] rounded-full flex items-center justify-center text-white font-black">1</div>
          <h2 className="text-[#6C3BAA] font-black text-[28px]">Education Program - The Mind</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <div>
            <h3 className="font-bold text-[18px]">Why We Built Our Own School</h3>
            <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
              When I started Creative Minds Initiative Uganda on March 20th, 2024, I was staying in Nsambya slum. I saw many children suffering - no education, no food, not healthy because their parents couldn't afford to take care of them.<br/><br/>
              At first, we tried to pay school fees in other schools, but it was too expensive and not sustainable. So I made a big decision - <span className="font-bold text-[#6C3BAA]">I bought land and built our own school in Makindye, Lukuli Zone.</span><br/><br/>
              Now, instead of begging other schools to take our children, we teach <span className="font-bold">100 children</span> in our own classrooms. Our teachers are from the community. They understand the pain of Nsambya because they lived it too.<br/><br/>
              We provide free education because we believe <span className="font-bold text-[#00BFFF]">every child was born to thrive</span> - with God's unique stamp, a plan and a purpose. Education is how they discover they matter.
            </p>
            <div className="bg-[#F6F7F9] rounded-xl p-4 mt-6">
              <h4 className="font-bold text-sm">What Education Program Includes:</h4>
              <ul className="text-[13px] text-gray-600 mt-2 list-disc ml-5 space-y-1">
                <li>Free classes in our own school in Makindye, Lukuli Zone</li>
                <li>Books, uniforms, pens, and scholastic materials</li>
                <li>Literacy, numeracy, reading clubs</li>
                <li>Creative Minds workshops - art, storytelling, skills</li>
                <li>Girls stay-in-school support</li>
                <li>Teachers who care, from our own community</li>
              </ul>
            </div>
            <button onClick={() => window.open('https://wa.me/256773242118?text=Hello, I want to support EDUCATION program')} className="bg-[#6C3BAA] text-white font-bold px-6 py-3 rounded-lg mt-6 text-sm">SUPPORT EDUCATION - MTN 0773242118</button>
          </div>

          {/* IMAGES FOR EDUCATION */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image src="/image1.jpg" fill alt="Kids learning in Makindye school" className="object-cover" />
              </div>
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image src="/image2.jpg" fill alt="Children in classroom" className="object-cover" />
              </div>
            </div>
            <div className="relative h-[260px] rounded-xl overflow-hidden bg-gray-100">
              <Image src="/image3.jpg" fill alt="Education program Makindye Lukuli" className="object-cover" />
            </div>
            <p className="text-[11px] text-gray-400 text-center">📚 100 children learning in our own school in Makindye, Lukuli Zone</p>
          </div>
        </div>
      </div>

      {/* FOOD PROGRAM */}
      <div className="bg-[#F6F7F9] px-6 lg:px-20 py-14">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00BFFF] rounded-full flex items-center justify-center text-white font-black">2</div>
          <h2 className="text-[#00BFFF] font-black text-[28px]">Food Program - The Body</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          {/* IMAGES FOR FOOD */}
          <div className="space-y-4 order-2 lg:order-1">
            <div className="relative h-[260px] rounded-xl overflow-hidden bg-gray-100">
              <Image src="/image4.jpg" fill alt="Children eating food" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image src="/image5.jpg" fill alt="Feeding program" className="object-cover" />
              </div>
              <div className="relative h-[180px] rounded-xl overflow-hidden bg-gray-100">
                <Image src="/image6.jpg" fill alt="Daily meals Makindye" className="object-cover" />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 text-center">🍲 Daily nutritious meals for 100 children - No child learns on empty stomach</p>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-bold text-[18px]">A Hungry Child Cannot Learn</h3>
            <p className="text-gray-600 text-[14px] mt-4 leading-relaxed">
              In Nsambya slum, I watched children sitting at home, weak, not healthy, because there was no food. Even when we took them to other schools, they could not concentrate - how can you learn when you have not eaten since yesterday?<br/><br/>
              That is why in our school in <span className="font-bold">Makindye, Lukuli Zone</span>, we start with food. <span className="font-bold text-[#00BFFF]">Every child gets daily nutritious meals - posho, beans, rice, porridge.</span> For many of our 100 children, this is the only meal of the day.<br/><br/>
              Their parents love them but earn less than $2 a day. Choosing between food and school is not a choice. So we provide both.<br/><br/>
              Healthy body first, then healthy mind. When the body is fed, the mind can finally thrive and learn that they matter, that someone cares, and that they have incredible potential.
            </p>
            <div className="bg-white rounded-xl p-4 mt-6 border">
              <h4 className="font-bold text-sm">What Food Program Includes:</h4>
              <ul className="text-[13px] text-gray-600 mt-2 list-disc ml-5 space-y-1">
                <li>Daily lunch - posho, beans, rice for 100 children</li>
                <li>Morning porridge for younger children</li>
                <li>Food parcels for the most vulnerable families from Nsambya</li>
                <li>Clean drinking water</li>
                <li>Nutrition support for sick/malnourished children</li>
              </ul>
            </div>
            <button onClick={() => window.open('https://wa.me/256753185973?text=Hello, I want to support FOOD program')} className="bg-[#00BFFF] text-white font-bold px-6 py-3 rounded-lg mt-6 text-sm">SUPPORT FOOD - AIRTEL 0753185973</button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#6C3BAA] text-white text-center py-12 px-6">
        <h2 className="font-black text-[24px]">Your Support Feeds The Mind And The Body</h2>
        <p className="text-sm mt-2 text-white/80">We bought land and built a school in Makindye, Lukuli. Now we need your help to keep 100 children learning and eating every day.</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <div className="bg-white text-[#6C3BAA] px-5 py-3 rounded-lg font-bold text-xs"> $10 = Food for 5 children for a week </div>
          <div className="bg-white text-[#00BFFF] px-5 py-3 rounded-lg font-bold text-xs"> $30 = Books for 10 children </div>
          <div className="bg-white text-[#6C3BAA] px-5 py-3 rounded-lg font-bold text-xs"> $50 = Food + Education for 1 child / month </div>
        </div>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button onClick={() => window.open('https://wa.me/256773242118')} className="bg-[#00BFFF] px-6 py-3 rounded-lg font-bold text-sm">DONATE MTN: 0773242118</button>
          <button onClick={() => window.open('https://wa.me/256753185973')} className="bg-white text-[#6C3BAA] px-6 py-3 rounded-lg font-bold text-sm">DONATE AIRTEL: 0753185973</button>
        </div>
      </div>

      <footer className="bg-white text-gray-400 text-[11px] py-4 text-center">© 2026 Creative Minds Initiative Uganda • Makindye, Lukuli Zone • 100 Children • Education + Food</footer>
    </main>
  );
}