"use client";

import { useState } from "react";
import Image from "next/image";

const profileSections = [
  {
    title: "Welcome to My World",
    description:
      "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
    mediaUrl:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  },
  {
    title: "About Me",
    description:
      "I'm passionate about music, theatre, books, and building creative businesses.",
    mediaUrl:
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
  },
  {
    title: "My Passions",
    description:
      "From playing piano to running a slime startup, I embrace every creative adventure.",
    mediaUrl:
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
  },
  {
    title: "Dream & Create",
    description:
      "I believe in the magic of following your dreams. Join me on this journey!",
    mediaUrl:
      "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = profileSections[activeIndex];

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      {/* HEADER */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-pink-700 mb-4">
          Le Ha Trang
        </h1>
        <p className="text-xl md:text-2xl text-pink-600">
          Welcome to my enchanted garden
        </p>
      </header>

      {/* GRID */}
      <section className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {profileSections.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setOpen(true);
            }}
            className="rounded-2xl overflow-hidden bg-white shadow hover:scale-[1.02] transition text-left"
          >
            <div className="relative aspect-square">
              <Image
                src={item.mediaUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-pink-700 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <Image
                src={activeItem.mediaUrl}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
              {activeItem.title}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              {activeItem.description}
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 block mx-auto px-6 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-20 text-center text-pink-600">
        Designed with love & imagination
      </footer>
    </main>
  );
}
