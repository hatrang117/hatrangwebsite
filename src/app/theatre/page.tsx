"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const theatreShows = [
  {
    title: "First Big Stage",
    description:
      "My debut performance in a large-scale show, stepping onto a major stage for the first time. The lights were blinding, my heart was racing, but the moment the music began, everything else faded away.",
  },
  {
    title: "Practice Days",
    description:
      "Endless rehearsals, sore muscles, shared laughter, and moments that made everything worth it. These were the days where discipline quietly shaped passion.",
  },
  {
    title: "Between Beats & Breath",
    description:
      "Where connection mattered more than perfection. Where silence, breath, and timing spoke louder than movement.",
  },
  {
    title: "Backstage Moments",
    description:
      "The quiet excitement before the curtain rises. The whispers, the nervous smiles, the final deep breath.",
  },
  {
    title: "Standing Ovation",
    description:
      "The most rewarding feeling. A shared moment between performers and audience where time stands still.",
  },
  {
    title: "More Than Performance",
    description:
      "What stayed with me long after the music stopped. Lessons about presence, vulnerability, and courage.",
  },
];

export default function Theatre() {
  const [activeShow, setActiveShow] = useState<null | {
    title: string;
    description: string;
  }>(null);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6">
          Theatre Life
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Between lights and quiet breaths, the stage becomes a place where I
          listen, transform, and begin again
        </p>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {theatreShows.map((show, index) => (
          <MagicalFrame
            key={index}
            title={show.title}
            description={show.description}
            index={index}
            onClick={() => setActiveShow(show)}
          />
        ))}
      </div>

      {/* MODAL */}
      {activeShow && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActiveShow(null)}
        >
          <div
            className="bg-[#fff7fa] max-w-3xl w-full max-h-[90vh] rounded-[3rem] overflow-y-auto relative p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveShow(null)}
              className="absolute top-6 right-6 text-[#9a7c85] text-2xl"
            >
              ✕
            </button>

            {/* IMAGE PLACEHOLDER */}
            <div className="w-full aspect-square rounded-2xl bg-[#f2d6dd] mb-10 flex items-center justify-center">
              <span className="font-aesthetic text-[#d88a9e]">
                Full Image Display
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-fairy text-4xl md:text-5xl text-[#d88a9e] mb-6 text-center">
              {activeShow.title}
            </h2>

            {/* FULL CAPTION */}
            <p className="font-elegant text-lg md:text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line">
              {activeShow.description}
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          The curtain never falls in my heart
        </p>
      </footer>
    </div>
  );
}
