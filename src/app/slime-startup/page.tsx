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
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6">
          Slime Startup
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Sensory magic handcrafted with love
        </p>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* FEATURED */}
        <div
          className="flex justify-center cursor-pointer"
          onClick={() =>
            setActiveItem({
              title: slimeProducts[0].title,
              description: slimeProducts[0].description,
              index: 0,
            })
          }
        >
          <div className="w-full max-w-3xl">
            <MagicalFrame
              title={slimeProducts[0].title}
              description={slimeProducts[0].description}
              index={0}
              aspectRatio="square"
              className="shadow-2xl hover:scale-[1.02] transition"
            />
          </div>
        </div>

        {/* OTHERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slimeProducts.slice(1).map((product, index) => (
            <div
              key={index}
              className="w-full cursor-pointer"
              onClick={() =>
                setActiveItem({
                  title: product.title,
                  description: product.description,
                  index: index + 1,
                })
              }
            >
              <MagicalFrame
                title={product.title}
                description={product.description}
                index={index + 1}
                aspectRatio="square"
                className="shadow-lg hover:scale-[1.03] transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-[#fff1f5] w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-6 text-4xl text-[#9a7c85] hover:text-[#d88a9e] z-20"
            >
              ×
            </button>

            {/* SCROLL AREA */}
            <div className="h-full overflow-y-auto p-8">

              {/* IMAGE */}
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

              {/* EXTRA CONTENT (SCROLL DEMO) */}
              {Array.from({ length: 8 }).map((_, i) => (
                <p key={i} className="text-[#5c4a50] mb-4 leading-relaxed">
                  Slime is more than texture — it is joy, calm, curiosity, and a small
                  pocket of magic you can return to whenever the world feels too loud.
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          Spread the magic, one squish at a time
        </p>
      </footer>
    </div>
  );
}
