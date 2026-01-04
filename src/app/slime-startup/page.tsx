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

      <h1 className="font-fairy text-6xl text-center text-[#d88a9e] mb-16">
        Slime Startup
      </h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="cursor-pointer hover:scale-[1.04] transition-transform"
          >
            <MagicalFrame
              title={item.title}
              description={item.description}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center">
          <div className="relative w-[90vw] max-w-4xl h-[90vh] bg-[#fff5f8] rounded-[2.5rem] overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-6 text-4xl z-20"
            >
              ✕
            </button>

            {/* SCROLL CONTENT */}
            <div className="h-full overflow-y-auto p-10">
              {/* ZOOM IMAGE */}
              <div className="scale-110 mb-10">
                <MagicalFrame
                  title={activeItem.title}
                  index={activeItem.index}
                />
              </div>

              {/* TEXT */}
              <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-6">
                {activeItem.title}
              </h2>

              <p className="text-center text-lg mb-10">
                {activeItem.description}
              </p>

              {Array.from({ length: 15 }).map((_, i) => (
                <p key={i} className="mb-4">
                  Slime is joy, texture, calm, and magic blended together.
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
