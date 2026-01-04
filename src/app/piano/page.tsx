"use client";

import { useState, useEffect } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const pianoContent = [
  { type: "photo", title: "Classical Soul", description: "Exploring the depths of Chopin and Mozart." },
  { type: "photo", title: "Practice Garden", description: "Where notes bloom like flowers." },
  { type: "video", title: "Performance Night", description: "Sharing the magic of music." },
  { type: "photo", title: "Musical Dreams", description: "Letting the keys carry my imagination." },
  { type: "photo", title: "Stage Presence", description: "Confidence and grace under spotlight." },
  { type: "photo", title: "Heart & Keys", description: "Every melody tells a story from the heart." },
];

export default function Piano() {
  const [activeItem, setActiveItem] = useState<{
    title: string;
    description: string;
    index: number;
    type: "photo" | "video";
  } | null>(null);

  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6 tracking-tight">
          Piano Melodies
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Where every note blooms in the garden
        </p>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {pianoContent.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setActiveItem({ ...item, index })}
          >
            <MagicalFrame
              title={item.title}
              description={item.description}
              showVideo={item.type === "video"}
              index={index}
              aspectRatio="square"
              className="shadow-xl hover:scale-[1.03] transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="min-h-screen flex items-start justify-center py-16 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-3xl w-full glass-card rounded-[3rem] p-10 md:p-14">
              {/* Close */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 text-2xl text-[#9a7c85] hover:opacity-70"
              >
                ×
              </button>

              {/* MEDIA */}
              <div className="mb-10">
                <MagicalFrame
                  title={activeItem.title}
                  description=""
                  showVideo={activeItem.type === "video"}
                  index={activeItem.index}
                  aspectRatio="square"
                  className="shadow-2xl pointer-events-none"
                />
              </div>

              {/* CAPTION */}
              <h2 className="font-fairy text-4xl text-[#d88a9e] mb-6 text-center">
                {activeItem.title}
              </h2>

              <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] leading-relaxed text-center whitespace-pre-line">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SOUL SECTION */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Soul Of Music
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            “Music is the fragrance of the soul. The piano spreads seeds of
            melody into the hearts of all who wander here.”
          </p>

          {/* PIANO KEYS */}
          <div className="flex justify-center gap-1">
            {[...Array(13)].map((_, i) => (
              <div
                key={i}
                className={`h-14 rounded-b-md border border-[#e8a4b8]/20 shadow-sm ${
                  [1, 3, 6, 8, 10].includes(i)
                    ? "bg-[#5c4a50] h-9 -mx-2 z-10 w-4"
                    : "bg-white z-0 w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Every note is a petal in my garden
        </p>
      </footer>
    </div>
  );
}
