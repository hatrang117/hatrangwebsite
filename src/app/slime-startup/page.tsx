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
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6">
          Slime Startup
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Sensory magic handcrafted with love
        </p>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {slimeProducts.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() =>
              setActiveItem({
                title: item.title,
                description: item.description,
                index,
              })
            }
          >
            <MagicalFrame
              title={item.title}
              description={item.description}
              index={index}
              aspectRatio="square"
              className="shadow-lg hover:scale-[1.03] transition"
            />
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-[#fff1f5] w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-6 text-4xl text-[#9a7c85] hover:text-[#d88a9e] z-20"
            >
              ×
            </button>

            {/* SCROLL */}
            <div className="h-full overflow-y-auto">

              {/* IMAGE = FRAME ĐƯỢC ZOOM LÊN */}
              <div className="w-full aspect-square bg-[#f6c1cf] flex items-center justify-center">
                <span className="font-fairy text-4xl text-white opacity-80">
                  Slime #{activeItem.index + 1}
                </span>
              </div>

              {/* TEXT CONTENT */}
              <div className="p-10">
                <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-6">
                  {activeItem.title}
                </h2>

                <p className="font-elegant text-xl text-[#5c4a50] text-center leading-relaxed mb-10">
                  {activeItem.description}
                </p>

                {/* DEMO SCROLL */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <p key={i} className="text-[#5c4a50] mb-4 leading-relaxed">
                    Slime is not just something you touch — it is a sensory pause,
                    a soft moment of calm, and a reminder that joy can be simple.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

