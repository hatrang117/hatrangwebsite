"use client";

import { useState, useEffect } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const profileSections = [
  {
    title: "About myself",
    image: "/hatrang.jpg",
    description:
      "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
  },
  {
    title: "My beloved ones",
    image: "/hatrang.jpg",
    description:
      "I hold relationships close to my heart. Family and friends are my grounding force.",
  },
  {
    title: "My Passions",
    image: "/hatrang.jpg",
    description:
      "I find joy in simple, creative moments—music, baking, books, and slime.",
  },
  {
    title: "Once Upon a Time",
    image: "/hatrang.jpg",
    description: `Where It All Began

Where my story began—soft memories, curious eyes, and endless wonder.`,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    (typeof profileSections)[0] | null
  >(null);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeSection ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#feeaf0] py-12 px-6 relative">
      <FloatingElements />

      {/* HEADER */}
      <header className="text-center mb-20 relative z-10">
        <h1 className="text-6xl md:text-8xl text-[#b86b7e] mb-6">
          Le Ha Trang
        </h1>
        <p className="text-2xl text-[#7a5a65]">
          Welcome to my enchanted garden
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {profileSections.map((section, index) => (
          <div
            key={index}
            onClick={() => setActiveSection(section)}
            className="cursor-pointer"
          >
            <MagicalFrame
              title={section.title}
              image={section.image}
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
            className="min-h-screen flex justify-center py-16 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-[32px] max-w-3xl w-full p-10 relative">
              {/* CLOSE */}
              <button
                onClick={() => setActiveSection(null)}
                className="absolute top-6 right-6 text-3xl text-gray-500"
              >
                ×
              </button>

              {/* IMAGE */}
              <div className="w-full h-[420px] overflow-hidden rounded-[24px] mb-10 bg-gray-200">
                <img
                  src={activeSection.image}
                  alt={activeSection.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <h2 className="text-4xl text-[#b86b7e] mb-6 text-center">
                {activeSection.title}
              </h2>

              <p className="text-lg text-[#5c4a50] leading-relaxed whitespace-pre-line text-center">
                {activeSection.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-24 text-center text-[#7a5a65]">
        Designed with care and soft dreams ✨
      </footer>
    </div>
  );
}
