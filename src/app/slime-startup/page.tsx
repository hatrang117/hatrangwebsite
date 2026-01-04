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

export default function SlimeStartup() {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    description: string;
    index: number;
  } | null>(null);

  return (
    <div className="relative min-h-screen bg-[#feeaf0] py-16 px-6 overflow-hidden">
      <FloatingElements />

      <h1 className="font-fairy text-6xl text-center text-[#d88a9e] mb-16 relative z-10">
        Slime Startup
      </h1>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slimeProducts.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setActiveItem({
                title: item.title,
                description: item.description,
                index,
              })
            }
            className="cursor-pointer"
          >
            <MagicalFrame
              title={item.title}
              description={item.description}
              index={index}
              className="hover:scale-[1.03] transition-transform"
            />
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-[#fff1f5] w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-6 z-20 text-4xl text-[#9a7c85] hover:text-[#d88a9e]"
            >
              ×
            </button>

            {/* SCROLL AREA */}
            <div className="h-full overflow-y-auto p-8">

              {/* IMAGE MOCK */}
              <div className="w-full aspect-square rounded-2xl bg-[#f6c1cf] flex items-center justify-center mb-10 shadow-inner">
                <span className="font-fairy text-3xl text-white opacity-80">
                  Image {activeItem.index + 1} ✨
                </span>
              </div>

              {/* TEXT */}
              <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-6">
                {activeItem.title}
              </h2>

              <p className="font-elegant text-xl text-[#5c4a50] text-center leading-relaxed mb-10">
                {activeItem.description}
              </p>

              {/* EXTRA CONTENT ĐỂ TEST SCROLL */}
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i} className="text-[#5c4a50] mb-4 leading-relaxed">
                  Slime is more than texture — it is calm, joy, and creativity blended
                  into a small moment of happiness that you can hold in your hands.
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
