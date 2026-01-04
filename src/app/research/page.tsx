"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const researchPapers = [
  {
    title: "The Magic of Ecosystems",
    description: "Exploring how enchanted gardens sustain themselves.",
  },
  {
    title: "Melodic Resonance",
    description: "A study on how piano frequencies affect growth.",
  },
  {
    title: "Sensory Play Psychology",
    description: "The therapeutic benefits of slime.",
  },
  {
    title: "Theatre as Reflection",
    description: "Performance as a mirror to inner worlds.",
  },
];

export default function Research() {
  const [activeItem, setActiveItem] = useState<null | {
    title: string;
    description: string;
    index: number;
    aspectRatio: "square" | "video";
  }>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll + ESC to close
  useEffect(() => {
    if (!activeItem) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 bg-[#feeaf0] relative overflow-hidden">
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
        <button
          onClick={() =>
            setActiveItem({
              title: "The Symbiosis of Art & Nature",
              description:
                "A comprehensive analysis of how creative expression flourishes when nurtured by the organic rhythms of an enchanted garden environment.",
              index: 0,
              aspectRatio: "video",
            })
          }
          className="w-full text-left"
        >
          <MagicalFrame
            title="Featured Study: The Symbiosis of Art & Nature"
            description="A comprehensive analysis of how creative expression flourishes when nurtured by the organic rhythms of an enchanted garden environment."
            index={0}
            aspectRatio="video"
            className="shadow-2xl cursor-pointer"
          />
        </button>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12">
          {researchPapers.map((paper, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveItem({
                  title: paper.title,
                  description: paper.description,
                  index: index + 1,
                  aspectRatio: "square",
                })
              }
              className="text-left"
            >
              <MagicalFrame
                title={paper.title}
                description={paper.description}
                index={index + 1}
                aspectRatio="square"
                className="shadow-xl cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ===== MODAL (PORTAL – KHÔNG KẸT) ===== */}
      {mounted &&
        activeItem &&
        createPortal(
          <>
            {/* OVERLAY */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999]" />

            {/* CLOSE BUTTON – FIXED */}
            <button
              onClick={() => setActiveItem(null)}
              className="fixed top-6 right-6 z-[10000] text-white text-5xl hover:scale-110 transition"
              aria-label="Close"
            >
              ×
            </button>

            {/* MODAL CONTENT */}
            <div className="fixed inset-0 z-[9998] flex items-center justify-center px-4">
              <div className="bg-[#fff1f5] rounded-[2.5rem] max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8">
                <div className="mb-8 pointer-events-none">
                  <MagicalFrame
                    title={activeItem.title}
                    description=""
                    index={activeItem.index}
                    aspectRatio={activeItem.aspectRatio}
                  />
                </div>

                <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-4">
                  {activeItem.title}
                </h2>

                <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] text-center leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </>,
          document.body
        )}

      {/* QUOTE */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Quest for Knowledge
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Research is the magnifying glass of the garden. It allows us to
            see the magic in the smallest seed and understand the grand
            symphony.&quot;
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Science", "Art", "Sensory", "Expression", "Magic"].map(
              (field, i) => (
                <span
                  key={i}
                  className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card"
                >
                  {field}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          Curiosity is the sunlight of the garden
        </p>
      </footer>
    </div>
  );
}

