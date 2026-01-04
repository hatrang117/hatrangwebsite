"use client";

import { useState, useEffect } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const favoriteBooks = [
  {
    title: "The Secret Garden",
    description:
      "A story of healing and magic in a hidden place. Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom.",
  },
  {
    title: "Little Women",
    description: "The beautiful journey of sisters finding their way.",
  },
  {
    title: "Pride & Prejudice",
    description: "Witty, romantic, and timelessly elegant.",
  },
  {
    title: "Anne of Green Gables",
    description: "Finding wonder in every corner of the world.",
  },
  {
    title: "Alice in Wonderland",
    description: "A curious adventure through a magical world.",
  },
  {
    title: "Stardust",
    description: "A fairy tale that captures the essence of dreams.",
  },
  {
    title: "Jane Eyre",
    description: "A tale of strength, love, and independence.",
  },
];

export default function Books() {
  const [activeBook, setActiveBook] = useState<null | {
    title: string;
    description: string;
    index: number;
    aspectRatio: "square" | "video";
  }>(null);

  // Lock background scroll
  useEffect(() => {
    if (activeBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeBook]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6">
          Books
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Pages of magic gathered in my reading garden
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* FEATURED */}
        <button
          onClick={() =>
            setActiveBook({
              title: favoriteBooks[0].title,
              description: favoriteBooks[0].description,
              index: 0,
              aspectRatio: "video",
            })
          }
          className="w-full max-w-5xl mx-auto text-left focus:outline-none"
        >
          <MagicalFrame
            title="Featured Treasure: The Secret Garden"
            description="Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom."
            index={0}
            aspectRatio="video"
            className="shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
          />
        </button>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {favoriteBooks.slice(1).map((book, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveBook({
                  title: book.title,
                  description: book.description,
                  index: index + 1,
                  aspectRatio: "square",
                })
              }
              className="text-left focus:outline-none"
            >
              <MagicalFrame
                title={book.title}
                description={book.description}
                index={index + 1}
                aspectRatio="square"
                className="shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-500 cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {/* MODAL ZOOM */}
      {activeBook && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center px-4"
          onClick={() => setActiveBook(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-[#fff1f5] shadow-2xl p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveBook(null)}
              className="absolute top-5 right-6 z-[1000] text-4xl text-[#9a7c85] hover:text-[#d88a9e] transition"
              aria-label="Close"
            >
              ×
            </button>

            {/* ZOOMED FRAME */}
            <div className="mb-8 pointer-events-none">
              <MagicalFrame
                title={activeBook.title}
                description=""
                index={activeBook.index}
                aspectRatio={activeBook.aspectRatio}
              />
            </div>

            {/* DESCRIPTION */}
            <div className="text-center px-4 pb-6">
              <h2 className="font-fairy text-4xl text-[#d88a9e] mb-4">
                {activeBook.title}
              </h2>
              <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] leading-relaxed">
                {activeBook.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* QUOTE SECTION */}
      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            A Garden of Stories
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Books are like seeds planted in the mind. They grow into gardens
            of imagination where we can wander whenever we please.&quot;
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Classic Literature", "Poetry", "Fantasy", "Biography", "Art"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85]">
          Every page turned is a new bloom in the heart
        </p>
      </footer>
    </div>
  );
}
