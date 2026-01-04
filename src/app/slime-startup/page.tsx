"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const slimeProducts = [
  {
    title: "Founder & Financial Lead",
    description:
      "Leading with creativity and passion. My vision is to bring magic to every touch.",
  },
  { title: "Cloud Slime", description: "Soft, fluffy, and dreamy like cotton candy clouds." },
  { title: "Butter Slime", description: "Smooth and spreadable, utterly satisfying." },
  { title: "Clear Slime", description: "Crystal clear and mesmerizing." },
  { title: "Glitter Slime", description: "Sparkly magic in every stretch." },
  { title: "Strawberry Special", description: "Our signature berry-themed creation." },
  { title: "Galaxy Slime", description: "Swirls of cosmic colors and sparkle." },
  { title: "Honey Slime", description: "Golden, thick, and oh-so-satisfying." },
  { title: "Foam Slime", description: "Light, airy, and fun to squish." },
  { title: "Crunchy Slime", description: "Satisfying crunch with every poke." },
];

type ActiveItem = {
  title: string;
  description: string;
  index: number;
};

export default function SlimeStartup() {
  const [activeItem, setActiveItem] = useState<ActiveItem | null>(null);

  return (
    <div className="relative min-h-screen bg-[#feeaf0] py-16 px-6 overflow-hidden">
      <FloatingElements />

      <h1 className="font-fairy text-6xl text-center text-[#d88a9e] mb-16 relative z-10">
        Slime Startup
      </h1>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slimeProducts.map((item, index) => (
          <MagicalFrame
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            className="cursor-pointer hover:scale-[1.03] transition"
            onClick={() =>
              setActiveItem({
                title: item.title,
                description: item.description,
                index,
              })
            }
          />
        ))}
      </div>

      {/* MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl h-[92vh] bg-[#fff5f8] rounded-[2.5rem] shadow-2xl overflow-hidden">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 z-30 text-3xl text-[#9a7c85] hover:text-[#d88a9e]"
            >
              ✕
            </button>

            {/* IMAGE / HERO SECTION */}
            <div className="relative h-[45vh] flex items-center justify-center bg-gradient-to-b from-[#fde2ea] to-[#fff5f8]">
              <div className="scale-[1.15]">
                <MagicalFrame
                  title={activeItem.title}
                  index={activeItem.index}
                />
              </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="h-[calc(92vh-45vh)] overflow-y-auto px-10 py-8">
              <h2 className="font-fairy text-3xl text-center text-[#d88a9e] mb-4">
                {activeItem.title}
              </h2>

              <p className="font-elegant text-lg text-[#5c4a50] text-center leading-relaxed mb-10">
                {activeItem.description}
              </p>

              {/* DUMMY CONTENT */}
              {Array.from({ length: 12 }).map((_, i) => (
                <p key={i} className="text-[#5c4a50] mb-4 leading-relaxed">
                  Slime is not just a product — it is joy, texture, curiosity,
                  and calm combined. Every stretch tells a story of creativity
                  and care.
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
