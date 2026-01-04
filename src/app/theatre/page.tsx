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
      "Endless rehearsals, sore muscles, shared laughter, and moments that made everything worth it.",
  },
  {
    title: "Between Beats & Breath",
    description:
      "Where connection mattered more than perfection.",
  },
];

export default function Theatre() {
  const [activeShow, setActiveShow] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#feeaf0] py-16 px-6 relative overflow-hidden">
      <FloatingElements />

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {theatreShows.map((show, index) => (
          <MagicalFrame
            key={index}
            title={show.title}
            description={show.description}
            onClick={() => setActiveShow(show)}
          />
        ))}
      </div>

      {/* 🔥 FIXED MODAL */}
      {activeShow && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveShow(null)}
        >
          {/* SCROLL CONTAINER */}
          <div
            className="w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-screen flex flex-col items-center py-20 px-6">
              {/* IMAGE FULL */}
              <div className="w-full max-w-5xl">
                <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-[#f2d6dd] rounded-3xl flex items-center justify-center">
                  <span className="text-[#d88a9e] font-aesthetic">
                    FULL IMAGE
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <div className="max-w-3xl mt-12 text-center">
                <h2 className="font-fairy text-5xl text-[#f5c1cf] mb-6">
                  {activeShow.title}
                </h2>

                <p className="font-elegant text-xl text-[#fff] leading-relaxed">
                  {activeShow.description}
                </p>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setActiveShow(null)}
                className="mt-16 text-[#f5c1cf] text-lg underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
