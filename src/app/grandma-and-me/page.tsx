"use client";

import { useState, useEffect } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const photos = [
  { title: "Together Forever", description: "Precious moments with my beloved grandma." },
  { title: "Sweet Memories", description: "Every moment spent together is a treasure." },
  { title: "Grandma's Love", description: "Her warmth fills my heart with joy." },
  { title: "Our Adventures", description: "Exploring the world, hand in hand." },
  { title: "Cozy Days", description: "The comfort of her embrace." },
  { title: "Forever Grateful", description: "For all the love and wisdom she shares." },
];

export default function GrandmaAndMe() {
  const [activePhoto, setActivePhoto] = useState<{
    title: string;
    description: string;
    index: number;
  } | null>(null);

  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (activePhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6 tracking-tight">
          Grandma & Me
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Cherished moments woven with threads of love
        </p>
      </header>

      {/* PHOTO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setActivePhoto({ ...photo, index })}
          >
            <MagicalFrame
              title={photo.title}
              description={photo.description}
              index={index}
              aspectRatio="square"
              className="shadow-xl hover:scale-[1.03] transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md overflow-y-auto"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="min-h-screen flex items-start justify-center py-16 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-3xl w-full glass-card rounded-[3rem] p-10 md:p-14">
              {/* Close */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-6 right-6 text-2xl text-[#9a7c85] hover:opacity-70"
              >
                ×
              </button>

              {/* IMAGE */}
              <div className="mb-10">
                <MagicalFrame
                  title={activePhoto.title}
                  description=""
                  index={activePhoto.index}
                  aspectRatio="square"
                  className="shadow-2xl pointer-events-none"
                />
              </div>

              {/* CAPTION */}
              <h2 className="font-fairy text-4xl text-[#d88a9e] mb-6 text-center">
                {activePhoto.title}
              </h2>

              <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] leading-relaxed text-center whitespace-pre-line">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LEGACY SECTION */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            A Legacy Of Love
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            “A grandmother&apos;s love is the richest treasure—sweet, nourishing,
            and filled with wisdom. Every moment we share is a petal I keep forever.”
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Love", "Wisdom", "Warmth", "Family", "Heritage"].map((word, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Love is the magic that makes the garden grow
        </p>
      </footer>
    </div>
  );
}
