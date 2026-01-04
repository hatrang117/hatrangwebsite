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
  const [activeItem, setActiveItem] = useState<null | {
    title: string;
    description: string;
    index: number;
  }>(null);

  return (
    <div className="min-h-screen py-16 px-6 bg-[#feeaf0] relative overflow-hidden">
      <FloatingElements />

      <h1 className="font-fairy text-6xl text-center text-[#d88a9e] mb-12">
        Slime Startup
      </h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slimeProducts.map((item, index) => (
          <MagicalFrame
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            className="hover:scale-[1.02] transition"
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
          <div className="relative w-full max-w-3xl h-[90vh] bg-[#fff5f8] rounded-[2.5rem] overflow-hidden shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 z-20 text-3xl text-[#9a7c85]"
            >
              ✕
            </button>

            {/* SCROLLABLE CONTENT */}
            <div className="h-full overflow-y-auto p-8">
              <MagicalFrame
                title={activeItem.title}
                index={activeItem.index}
                className="mb-8"
              />

              <h2 className="font-fairy text-3xl text-center text-[#d88a9e] mb-4">
                {activeItem.title}
              </h2>

              <p className="font-elegant text-lg text-[#5c4a50] leading-relaxed text-center">
                {activeItem.description}
              </p>

              {/* FAKE LONG CONTENT ĐỂ TEST SCROLL */}
              <div className="mt-10 space-y-4 text-[#5c4a50]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i}>
                    Slime is more than a texture — it’s a feeling, a memory, a moment of calm and joy.
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
