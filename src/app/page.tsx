"use client";

import { useState, useEffect } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const profileSections = [
  {
    title: "About myself",
    imageUrl: "/hatrang.jpg",
    description:
      "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
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

export default function Home() {
  const [activeSection, setActiveSection] = useState<{
    title: string;
    image: string;
    description: string;
    index: number;
  } | null>(null);

  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-[#feeaf0] relative">
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

      {/* GRID – 4 KHUNG */}
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
              image={section.image}
              aspectRatio="square"
              className="shadow-xl hover:scale-[1.03] transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeSection && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="min-h-screen flex items-start justify-center py-16 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-3xl w-full glass-card rounded-[3rem] p-10 md:p-14">
              {/* CLOSE */}
              <button
                onClick={() => setActiveSection(null)}
                className="absolute top-6 right-6 text-2xl text-[#7a5a65] hover:opacity-70"
              >
                ×
              </button>

              {/* IMAGE (PHÓNG TO) */}
              <div className="mb-10">
                <MagicalFrame
                  title={activeSection.title}
                  description=""
                  image={activeSection.image}
                  aspectRatio="square"
                  className="shadow-2xl pointer-events-none"
                />
              </div>

              {/* FULL CAPTION */}
              <h2 className="font-fairy text-4xl text-[#b86b7e] mb-6 text-center">
                {activeSection.title}
              </h2>

              <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line text-center">
                {activeSection.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 text-center text-[#7a5a65] relative z-10">
        Designed with care, soft dreams, and a love for little details
      </footer>
    </div>
  );
}
