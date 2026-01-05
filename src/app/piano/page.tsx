"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const pianoContent = [
  { 
    title: "Classical Soul", 
    description: "Exploring the depths of Chopin and Mozart. Every note is a journey through time and emotion, played with heart.",
    mediaUrl: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Practice Garden", 
    description: "Where notes bloom like flowers. The daily ritual of connecting with the keys and finding peace in the melody.",
    mediaUrl: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Performance Night", 
    description: "Sharing the magic of music with the world. The stage, the lights, and the connection with the audience through every chord.",
    mediaUrl: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Musical Dreams", 
    description: "Letting the keys carry my imagination. A world where sound becomes color and every melody tells a secret story.",
    mediaUrl: "https://images.pexels.com/photos/45243/piano-keys-music-instrument-45243.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "The Golden Hour", 
    description: "The sunlight dancing on the keys. A perfect moment to compose and reflect on the beauty of sound.",
    mediaUrl: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Melody in Motion", 
    description: "Watch the magic happen as fingers dance across the ivory. A visual journey of rhythm and harmony.",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-playing-the-piano-in-close-up-4447-large.mp4",
    mediaType: "video" as const
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
            The Soul of Music
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
