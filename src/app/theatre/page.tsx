"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const theatreShows = [
  { 
    title: "Leading Role", 
    description: "My debut as a lead performer on stage. A moment where the spotlight met my dreams and the world stood still.",
    mediaUrl: "https://images.pexels.com/photos/236102/pexels-photo-236102.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Musical Magic", 
    description: "Singing my heart out in the spotlight. Every note carries the weight of a thousand emotions, shared with an audience.",
    mediaUrl: "https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Dance & Drama", 
    description: "Where movement tells the story. The stage becomes a canvas where every gesture is a stroke of emotion.",
    mediaUrl: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Backstage Moments", 
    description: "The excitement before the curtain rises. The smell of greasepaint, the hum of anticipation, and the bond with the cast.",
    mediaUrl: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Encore Applause", 
    description: "The final bow after a successful show. The sound of clapping hands is like music to my ears, a reward for the hard work.",
    mediaUrl: "https://images.pexels.com/photos/236102/pexels-photo-236102.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Rehearsal Flow", 
    description: "Perfecting every move and line. The journey to the stage is filled with dedication, laughter, and a passion for the craft.",
    mediaUrl: "https://images.pexels.com/photos/45258/ballet-production-performance-don-quixote-45258.jpeg",
    mediaType: "image" 
  },
];

export default function Theatre() {
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
          Theatre Life
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          The stage is my garden, every performance a bloom
        </p>
      </header>

      <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
        {theatreShows.map((show, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={show.title}
              description={show.description}
              mediaUrl={show.mediaUrl}
              mediaType={show.mediaType}
              index={index}
              aspectRatio="square"
              className="shadow-xl"
              onClick={() => openGallery(index)}
            />
          </div>
        ))}
      </div>

      <GalleryDialog 
        isOpen={isGalleryOpen} 
        onOpenChange={setIsGalleryOpen} 
        items={theatreShows} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The World is a Stage
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Theatre is sweet, bold, and full of surprises. In every role, 
            I plant a seed of emotion and watch it bloom into a performance.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Acting", "Singing", "Dancing", "Expression", "Magic"].map((item, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          The curtain never falls in my heart
        </p>
      </footer>
    </div>
  );
}
