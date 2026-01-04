"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const theatreShows = [
  {
    title: "First Big Stage",
    description:
      "My debut performance in a large-scale show, stepping onto a major stage for the first time.",
  },
  {
    title: "Practice Days",
    description:
      "Endless rehearsals, sore muscles, shared laughter, and moments that made everything worth it.",
  },
  {
    title: "Between Beats & Breath",
    description: "Where connection mattered more than perfection.",
  },
  {
    title: "Backstage Moments",
    description: "The excitement before the curtain rises.",
  },
  {
    title: "Standing Ovation",
    description: "The most rewarding feeling.",
  },
  {
    title: "More Than Performance",
    description: "What stayed with me long after the music stopped.",
  },
];

export default function Theatre() {
  const [activeShow, setActiveShow] = useState<null | {
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
            aspectRatio="square"
            className="cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            onClick={() =>
              setActiveShow({
                title: show.title,
                description: show.description,
                index,
              })
            }
          />
        ))}
      </div>

      {/* MODAL */}
      {activeShow && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#fff5f8] rounded-[2.5rem] shadow-2xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveShow(null)}
              className="absolute top-6 right-6 z-20 text-3xl text-[#9a7c85] hover:text-[#d88a9e]"
            >
              ✕
            </button>

            {/* SCROLL AREA */}
            <div className="h-full overflow-y-auto p-8 md:p-14">
              <MagicalFrame
                title={activeShow.title}
                description=""
                index={activeShow.index}
                aspectRatio="square"
                className="shadow-xl"
              />

              <div className="mt-10 text-center">
                <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
                  {activeShow.title}
                </h2>

                <p className="font-elegant text-lg md:text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line">
                  {activeShow.description}
                </p>
              </div>
            </div>
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
