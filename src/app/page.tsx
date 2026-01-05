"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const profileSections = [
  {
    title: "Welcome to My World",
    description:
      "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
    mediaUrl:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    mediaType: "image",
  },
  {
    title: "About Me",
    description:
      "I'm passionate about music, theatre, books, and building creative businesses.",
    mediaUrl:
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    mediaType: "image",
  },
  {
    title: "My Passions",
    description:
      "From playing piano to running a slime startup, I embrace every creative adventure.",
    mediaUrl:
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    mediaType: "image",
  },
  {
    title: "Dream & Create",
    description:
      "I believe in the magic of following your dreams. Join me on this journey!",
    mediaUrl:
      "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
    mediaType: "image",
  },
];

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#feeaf0] px-6 py-12 md:px-12 lg:px-20">
      {/* background decor */}
      <FloatingElements />

      {/* HEADER */}
      <header className="relative z-10 mb-20 text-center">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#b86b7e] mb-6">
          Le Ha Trang
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#7a5a65]">
          Welcome to my enchanted garden
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="w-20 h-px bg-[#e8a4b8]/40" />
          <span className="text-[#f7e1b5]">✦</span>
          <span className="w-20 h-px bg-[#e8a4b8]/40" />
        </div>
      </header>

      {/* GRID */}
      <section className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 gap-10 lg:gap-16">
        {profileSections.map((section, index) => (
          <MagicalFrame
            key={index}
            title={section.title}
            description={section.description}
            mediaUrl={section.mediaUrl}
            mediaType={section.mediaType}
            index={index}
            aspectRatio="square"
            className="shadow-xl"
            onClick={() => openGallery(index)}
          />
        ))}
      </section>

      {/* GALLERY MODAL */}
      <GalleryDialog
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        items={profileSections}
        activeIndex={activeIndex}
      />

      {/* FOOTER */}
      <footer className="relative z-10 mt-24 pb-12 text-center">
        <p className="font-aesthetic text-lg text-[#7a5a65]">
          Designed with magic, strawberries & flowers
        </p>
      </footer>
    </div>
  );
}
