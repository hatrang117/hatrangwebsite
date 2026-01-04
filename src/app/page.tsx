"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const profileSections = [
  {
    title: "About myself",
    description: "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
  },
  {
    title: "My beloved ones",
    description:
      "I hold relationships close to my heart. Family and friends are my grounding force—the people who shape who I am and make life feel fuller. I treasure shared meals, long conversations, and the quiet comfort of simply being together. To me, love is time spent, moments shared, and the choice to show up for one another, always.",
  },
  {
    title: "My Passions",
    description:
      "I find joy in simple, creative moments—playing the piano and letting melodies carry my thoughts, baking for the people I love, and experimenting with colors and textures through my small slime shop. When I need quiet inspiration, I turn to books, where stories help me slow down, imagine freely, and see the world from new perspectives. These passions shape how I create, how I rest, and how I express myself every day.",
  },
  {
    title: "Once Upon a Time",
    description: `Where It All Began

Where my story began—soft memories, curious eyes, and endless wonder. Wrapped in love and gentle care, I grew up dreaming freely, collecting little moments of joy and imagination. In that safe, happy world, curiosity bloomed, dreams felt possible, and the dreamer I am today quietly began to grow.`,
  },
];

const Strawberry = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 50 55" fill="none">
    <path d="M25 15 C10 15 5 30 5 38 C5 50 15 52 25 52 C35 52 45 50 45 38 C45 30 40 15 25 15Z" fill="#F5B5C8" />
    <ellipse cx="15" cy="30" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="35" cy="32" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="25" cy="42" rx="3" ry="4" fill="#FEE8EE" />
    <path d="M25 15 L20 8 Q15 5 12 10 L18 15" fill="#C5D98A" />
    <path d="M25 15 L30 8 Q35 5 38 10 L32 15" fill="#C5D98A" />
  </svg>
);

const LeafDecor = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path d="M10 40 Q5 25 15 15 Q25 5 40 10 Q50 15 45 30 Q40 45 25 45 Q15 45 10 40Z" fill="#B8D468" />
    <path d="M12 38 Q20 25 38 12" stroke="#9ABF4A" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<{
    title: string;
    description: string;
    index: number;
  } | null>(null);

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20 relative bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#b86b7e] mb-6">
          Le Ha Trang
        </h1>
        <p className="font-aesthetic text-2xl text-[#7a5a65]">
          Welcome to my enchanted garden
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {profileSections.map((section, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() =>
              setActiveSection({ ...section, index })
            }
          >
            <MagicalFrame
              title={section.title}
              description={section.description}
              index={index}
              aspectRatio="square"
              className="shadow-xl hover:scale-[1.03] transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeSection && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-6 glass-card rounded-[3rem] p-10 md:p-14"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveSection(null)}
              className="absolute top-6 right-6 text-2xl text-[#7a5a65]"
            >
              ×
            </button>

            {/* Image */}
            <div className="mb-8">
              <MagicalFrame
                title={activeSection.title}
                description=""
                index={activeSection.index}
                aspectRatio="square"
                className="shadow-2xl pointer-events-none"
              />
            </div>

            {/* Caption FULL */}
            <h2 className="font-fairy text-4xl text-[#b86b7e] mb-4 text-center">
              {activeSection.title}
            </h2>
            <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed text-center whitespace-pre-line">
              {activeSection.description}
            </p>
          </div>
        </div>
      )}

      {/* GENTLE CORNER */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-14 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-50">
            <Strawberry size={40} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-50">
            <LeafDecor size={36} />
          </div>

          <h2 className="font-fairy text-4xl text-[#d88a9e] mb-6">
            A Gentle Corner Of My World
          </h2>
          <p className="font-elegant text-xl text-[#5c4a50] italic">
            “A space where I collect dreams, create with heart, and share the little things that matter most to me.”
          </p>
        </div>
      </section>

      <footer className="mt-24 text-center text-[#7a5a65]">
        Designed with care, soft dreams, and a love for little details
      </footer>
    </div>
  );
}

