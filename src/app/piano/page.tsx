"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const pianoContent = [
  { 
    title: "Where It All Began", 
    description: "From a young age, I developed a deep passion for the piano and began formal lessons in kindergarten with the support of my parents. Although I no longer pursue it at an advanced level, piano has remained a meaningful hobby—one that continues to bring me calm, focus, and a quiet sense of joy.",
    mediaUrl: "/tapluyen.jpg",
    mediaType: "image" 
  },
  { 
    title: "First Recitals", 
    description: "This photo was taken with my mother right after the performance. She was overjoyed and deeply proud, holding me close with the brightest smile. In that moment, her happiness became mine as well, turning the performance into more than an achievement—it became a shared memory of encouragement, love, and unwavering support.",
    mediaUrl: "/luyentap.jpg",
    mediaType: "image" 
  },
  { 
    title: "Growing Together", 
    description: "This photo was taken with my piano classmates after we finished our recital. Each of us was holding a bouquet of flowers, smiling with pure excitement and pride. It was a deeply memorable moment that captured not only the joy of performing, but also the sense of friendship and shared effort we built in piano class. Those lessons were filled with laughter, encouragement, and some of my happiest memories of learning alongside others.",
    mediaUrl: "/loptapthe.jpg",
    mediaType: "image" 
  },
  { 
    title: "Music in Motion", 
    description: "This photo captures me at the piano in front of an audience, fully immersed in the performance. In that moment, everything else faded away—the nerves, the surroundings—leaving only the music and my connection with the listeners. Playing in front of others taught me how to stay present under pressure and transform emotion into expression, making the piano not just an instrument, but a bridge between myself and the audience.",
    mediaUrl: "/bieudien.jpg",
    mediaType: "image" 
  },
  { 
    title: "A Bigger Stage", 
    description: "This video marks my first performance in a large auditorium, with rows of seats and a full stage set for the piano. I was incredibly nervous leading up to the performance, spending the entire night before preparing carefully with my mother. The recital went exactly as I had hoped, and the experience became a memorable milestone—one that taught me the value of preparation, support, and stepping confidently into unfamiliar spaces.",
    mediaUrl: "/vid (1).mp4",
    mediaType: "video" 
  },
  { 
    title: "Shared Pride", 
    description: "This photo was taken with my mother right after the performance. She was overjoyed and deeply proud, holding me close with the brightest smile. In that moment, her happiness became mine as well, turning the performance into more than an achievement—it became a shared memory of encouragement, love, and unwavering support.",
    mediaUrl: "/voimom.jpg",
    mediaType: "image" 
  },
];

export default function Piano() {
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
          Piano Melodies
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Where every note blooms in the garden
        </p>
      </header>

      <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
        {pianoContent.map((item, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={item.title}
              description={item.description}
              mediaUrl={item.mediaUrl}
              mediaType={item.mediaType}
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
        items={pianoContent} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Soul Of Music
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Music is the fragrance of the soul. The piano spreads seeds of 
            melody into the hearts of all who wander here.&quot;
          </p>
          
          <div className="flex justify-center gap-1">
            {[...Array(13)].map((_, i) => (
              <div 
                key={i} 
                className={`h-14 rounded-b-md border border-[#e8a4b8]/20 shadow-sm ${
                  [1, 3, 6, 8, 10].includes(i) ? "bg-[#5c4a50] h-9 -mx-2 z-10 w-4" : "bg-white z-0 w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Every note is a petal in my garden
        </p>
      </footer>
    </div>
  );
}
