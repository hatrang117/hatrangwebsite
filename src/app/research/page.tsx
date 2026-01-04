"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const researchPapers = [
  {
    title: "The Magic of Ecosystems",
    description:
      "Exploring how enchanted gardens sustain themselves through balance, care, and unseen connections between every living element. This paper dives deep into how harmony emerges naturally when systems are nurtured with patience and respect.",
    index: 1,
  },
  {
    title: "Melodic Resonance",
    description:
      "A study on how piano frequencies affect growth, emotion, and memory. Sound is not just heard—it is felt, shaping both the environment and the soul in subtle, powerful ways.",
    index: 2,
  },
  {
    title: "Sensory Play Psychology",
    description:
      "An exploration of the therapeutic benefits of slime and tactile play. Touch, movement, and texture help ground emotions, reduce anxiety, and reconnect us with childlike curiosity.",
    index: 3,
  },
  {
    title: "Theatre as Reflection",
    description:
      "Performance as a mirror to inner worlds. Theatre becomes a safe space where identity, emotion, and vulnerability can be explored, expressed, and ultimately understood.",
    index: 4,
  },
];

export default function Research() {
  const [activeItem, setActiveItem] = useState<null | typeof researchPapers[0]>(
    null
  );

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6">
          Research & Journals
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Investigating the wonders of the enchanted world
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* FEATURED */}
        <div onClick={() => setActiveItem(researchPapers[0])} className="cursor-pointer">
          <MagicalFrame
            title="Featured Study: The Symbiosis of Art & Nature"
            description="A comprehensive analysis of how creative expression flourishes when nurtured by organic rhythms."
            index={0}
            aspectRatio="video"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12">
          {researchPapers.map((paper) => (
            <div
              key={paper.index}
              onClick={() => setActiveItem(paper)}
              className="cursor-pointer"
            >
              <MagicalFrame
                title={paper.title}
                description={paper.description}
                index={paper.index}
                aspectRatio="square"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
          <div className="relative bg-[#fff1f5] rounded-[2.5rem] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8">

            {/* CLOSE */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-6 text-4xl text-[#9a7c85] hover:text-[#d88a9e]"
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="w-full aspect-square rounded-2xl bg-[#f6c1cf] flex items-center justify-center mb-8 shadow-inner">
              <span className="font-fairy text-3xl text-white opacity-80">
                Image {activeItem.index} ✨
              </span>
            </div>

            {/* TEXT */}
            <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-6">
              {activeItem.title}
            </h2>

            <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] text-center leading-relaxed">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          Curiosity is the sunlight of the garden
        </p>
      </footer>
    </div>
  );
}
