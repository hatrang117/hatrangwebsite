"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";

const favoriteBooks = [
  {
    title: "The Secret Garden",
    description:
      "A story of healing and magic in a hidden place. Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom.",
  },
  { title: "Little Women", description: "The beautiful journey of sisters finding their way." },
  { title: "Pride & Prejudice", description: "Witty, romantic, and timelessly elegant." },
  { title: "Anne of Green Gables", description: "Finding wonder in every corner of the world." },
  { title: "Alice in Wonderland", description: "A curious adventure through a magical world." },
  { title: "Stardust", description: "A fairy tale that captures the essence of dreams." },
  { title: "Jane Eyre", description: "A tale of strength, love, and independence." },
];

export default function Books() {
  const [activeBook, setActiveBook] = useState<null | {
    title: string;
    description: string;
    index: number;
    aspectRatio: "square" | "video";
  }>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll + ESC close
  useEffect(() => {
    if (!activeBook) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveBook(null);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeBook]);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 bg-[#feeaf0] relative">
      <FloatingElements />

      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] mb-6">
          Books
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Pages of magic gathered in my reading garden
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <button
          onClick={() =>
            setActiveBook({
              title: favoriteBooks[0].title,
              description: favoriteBooks[0].description,
              index: 0,
              aspectRatio: "video",
            })
          }
          className="w-full max-w-5xl mx-auto"
        >
          <MagicalFrame
            title="Featured Treasure: The Secret Garden"
            description="Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom."
            index={0}
            aspectRatio="video"
          />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
            >
              <MagicalFrame
                title={book.title}
                description={book.description}
                index={index + 1}
                aspectRatio="square"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ===== MODAL PORTAL ===== */}
      {mounted && activeBook &&
        createPortal(
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999]" />

            {/* ❌ FIXED CLOSE */}
            <button
              onClick={() => setActiveBook(null)}
              className="fixed top-6 right-6 z-[10000] text-white text-5xl hover:scale-110 transition"
              aria-label="Close"
            >
              ×
            </button>

            {/* MODAL CONTENT */}
            <div className="fixed inset-0 z-[9998] flex justify-center items-center px-4">
              <div className="bg-[#fff1f5] rounded-[2.5rem] max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8">
                <div className="mb-8 pointer-events-none">
                  <MagicalFrame
                    title={activeBook.title}
                    description=""
                    index={activeBook.index}
                    aspectRatio={activeBook.aspectRatio}
                  />
                </div>

                <h2 className="font-fairy text-4xl text-center text-[#d88a9e] mb-4">
                  {activeBook.title}
                </h2>

                <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] text-center leading-relaxed">
                  {activeBook.description}
                </p>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
