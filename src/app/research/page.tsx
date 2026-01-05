"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroResearch = {
  title: "The Quest for Knowledge",
  description: "A deep dive into the mysteries of the enchanted world. Our research explores the intersection of magic, science, and the human spirit.",
  mediaUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  mediaType: "image" 
};

const researchPapers = [
  { 
    title: "Ecosystem Magic", 
    description: "Exploring how enchanted gardens sustain themselves. A deep dive into the mystical flora and fauna that thrive in magical environments.",
    mediaUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Melodic Resonance", 
    description: "A study on how piano frequencies affect growth. Researching the bridge between sound waves and organic vitality in the garden.",
    mediaUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Sensory Psychology", 
    description: "The therapeutic benefits of slime. Analyzing the calming effects of tactile interaction with handcrafted sensory materials.",
    mediaUrl: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Theatre & Reflection", 
    description: "Performance as a mirror to inner worlds. Examining the transformative power of acting in personal development and emotional expression.",
    mediaUrl: "https://images.pexels.com/photos/236102/pexels-photo-236102.jpeg",
    mediaType: "image" 
  },
];

const allResearch = [heroResearch, ...researchPapers];

export default function Research() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6 tracking-tight">
          Research & Journals
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Investigating the wonders of the enchanted world
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto">
          <MagicalFrame
            title={heroResearch.title}
            description={heroResearch.description}
            mediaUrl={heroResearch.mediaUrl}
            mediaType={heroResearch.mediaType}
            index={0}
            aspectRatio="video"
            className="shadow-2xl"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {researchPapers.map((paper, index) => (
            <div key={index} className="w-full">
              <MagicalFrame
                title={paper.title}
                description={paper.description}
                mediaUrl={paper.mediaUrl}
                mediaType={paper.mediaType}
                index={index + 1}
                aspectRatio="square"
                className="shadow-xl"
                onClick={() => openGallery(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryDialog 
        isOpen={isGalleryOpen} 
        onOpenChange={setIsGalleryOpen} 
        items={allResearch} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Quest for Knowledge
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Research is the magnifying glass of the garden. It allows us to 
            see the magic in the smallest seed and understand the grand symphony.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Science", "Art", "Sensory", "Expression", "Magic"].map((field, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {field}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Curiosity is the sunlight of the garden
        </p>
      </footer>
    </div>
  );
}
