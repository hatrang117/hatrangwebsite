"use client";

import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";


const photos = [
  { title: "Together Forever", description: "Precious moments with my beloved grandma." },
  { title: "Sweet Memories", description: "Every moment spent together is a treasure." },
  { title: "Grandma's Love", description: "Her warmth fills my heart with joy." },
  { title: "Our Adventures", description: "Exploring the world, hand in hand." },
  { title: "Cozy Days", description: "The comfort of her embrace." },
  { title: "Forever Grateful", description: "For all the love and wisdom she shares." },
];

export default function GrandmaAndMe() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6 tracking-tight">
          Grandma & Me
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Cherished moments woven with threads of love
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {photos.map((photo, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={photo.title}
              description={photo.description}
              index={index}
              aspectRatio="square"
              className="shadow-xl"
            />
          </div>
        ))}
      </div>

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            A Legacy of Love
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;A grandmother&apos;s love is the richest treasure—sweet, nourishing, 
            and filled with wisdom. Every moment we share is a petal I keep forever.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Love", "Wisdom", "Warmth", "Family", "Heritage"].map((word, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Love is the magic that makes the garden grow
        </p>
      </footer>
    </div>
  );
}
