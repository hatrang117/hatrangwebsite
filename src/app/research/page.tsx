"use client";

import { useState, useEffect, useRef } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const researchPapers = [
  { title: "The Magic of Ecosystems", description: "Exploring how enchanted gardens sustain themselves." },
  { title: "Melodic Resonance", description: "A study on how piano frequencies affect growth." },
  { title: "Sensory Play Psychology", description: "The therapeutic benefits of slime." },
  { title: "Theatre as Reflection", description: "Performance as a mirror to inner worlds." },
];

export default function Research() {
  const [activeItem, setActiveItem] = useState<null | {
    title: string;
    description: string;
    index: number;
    aspectRatio: "square" | "video";
  }>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // 🔥 WINDOW-LEVEL ESC + CLICK
  useEffect(() => {
    if (!activeItem) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // nếu click KHÔNG nằm trong modal content → đóng
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClick, true); // 👈 CAPTURE PHASE

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousedown", handleClick, true);
    };
  }, [activeItem]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 bg-[#feeaf0] relative overflow-hidden">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6">
          Research & Journals
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Investigating the wonders of the enchanted world
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
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
        >
          <MagicalFrame
            title="Featured Study: The Symbiosis of Art & Nature"
            description="A comprehensive analysis of how creative expression flourishes when nurtured by the organic rhythms of an enchanted garden environment."
            index={0}
            aspectRatio="video"
          />
        </button>

        <div className="grid grid-cols-2 gap-8">
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
            >
              <MagicalFrame
                title={paper.title}
                description={paper.description}
                index={index + 1}
                aspectRatio="square"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ===== MODAL (KHÔNG DỰA CLICK REACT) ===== */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-[#fff1f5] rounded-[2.5rem] max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8"
          >
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

            <p className="mt-6 text-center text-sm text-[#9a7c85] italic">
              (Press ESC or click anywhere outside to close)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
