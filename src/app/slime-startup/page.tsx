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
  {
    title: "Cloud Slime",
    description: "Soft, fluffy, and dreamy like cotton candy clouds.",
  },
  {
    title: "Butter Slime",
    description: "Smooth and spreadable, utterly satisfying.",
  },
  {
    title: "Clear Slime",
    description: "Crystal clear and mesmerizing.",
  },
  {
    title: "Glitter Slime",
    description: "Sparkly magic in every stretch.",
  },
  {
    title: "Strawberry Special",
    description: "Our signature berry-themed creation.",
  },
  {
    title: "Galaxy Slime",
    description: "Swirls of cosmic colors and sparkle.",
  },
  {
    title: "Honey Slime",
    description: "Golden, thick, and oh-so-satisfying.",
  },
  {
    title: "Foam Slime",
    description: "Light, airy, and fun to squish.",
  },
  {
    title: "Crunchy Slime",
    description: "Satisfying crunch with every poke.",
  },
];

export default function SlimeStartup() {
  const [activeItem, setActiveItem] = useState<null | {
    title: string;
    description: string;
    index: number;
  }>(null);

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

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* FEATURED */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <MagicalFrame
              title={slimeProducts[0].title}
              description={slimeProducts[0].description}
              index={0}
              aspectRatio="square"
              className="cursor-pointer shadow-2xl"
              onClick={() =>
                setActiveItem({
                  title: slimeProducts[0].title,
                  description: slimeProducts[0].description,
                  index: 0,
                })
              }
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slimeProducts.slice(1).map((product, index) => (
            <MagicalFrame
              key={index}
              title={product.title}
              description={product.description}
              index={index + 1}
              aspectRatio="square"
              className="cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() =>
                setActiveItem({
                  title: product.title,
                  description: product.description,
                  index: index + 1,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#fff5f8] rounded-[2.5rem] shadow-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 z-20 text-3xl text-[#9a7c85] hover:text-[#d88a9e]"
            >
              ✕
            </button>

            {/* SCROLL AREA */}
            <div className="h-full overflow-y-auto p-8 md:p-14">
              <MagicalFrame
                title={activeItem.title}
                description=""
                index={activeItem.index}
                aspectRatio="square"
                className="shadow-xl"
              />

              <div className="mt-10 text-center">
                <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
                  {activeItem.title}
                </h2>

                <p className="font-elegant text-lg md:text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUOTE */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Science of Squish
          </h2>

          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Creating slime is like mixing a magic potion. You need the right
            amount of sparkle, a dash of color, and a whole lot of heart.&quot;
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Handmade", "Non-toxic", "Aesthetic", "Sparkly"].map((badge, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          Spread the magic, one squish at a time
        </p>
      </footer>
    </div>
  );
}
