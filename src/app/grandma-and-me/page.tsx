"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

type PhotoItem = {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: "image";
};

const photos: PhotoItem[] = [
  { 
    title: "Together Forever", 
    description: "My grandmother is a woman deeply devoted to learning and driven by an endless curiosity about the world. Ever since I was a child, watching her immersed in books quietly taught me that knowledge is something to be cherished and pursued with discipline. She is not only my grandmother, but also my first and most rigorous teacher, guiding and accompanying me throughout my entire learning journey. Her belief that one must study seriously and strive to do well has profoundly shaped my attitude toward learning and continues to influence who I am today.",
    mediaUrl: "/bangoai.jpg",
    mediaType: "image"
  },
  { 
    title: "Sweet Memories", 
    description: "Throughout my childhood, my grandmother was not only a guide but also my closest companion. This moment of her lifting me high in the air, laughing with pure joy, captures the warmth and playfulness she brought into my early years. Her home was a place where I was free to run, imagine, and explore the world without limits. Through her laughter, games, and gentle presence, she filled my childhood with happiness, curiosity, and memories that continue to shape the way I experience joy and wonder today.",
    mediaUrl: "/babe.jpg",
    mediaType: "image"
  },
  { 
    title: "Grandma's Love", 
    description: "This photo captures one of our early outings together, when my grandmother took me out and we sat at a small café by the lake. Over time, going out together gradually became our ritual. From childhood to now, my image of Hanoi has always been inseparable from her presence. She loved taking me around the city—trying new foods, wandering familiar streets, and picking up little things along the way. Every summer, I would eagerly look forward to those days, knowing they meant more time spent exploring Hanoi and life itself by her side.",
    mediaUrl: "/minitoivaba.jpg",
    mediaType: "image"
  },
  { 
    title: "Our Adventures", 
    description: "This photo was taken during my middle school years, on a family trip. My grandmother has always had a deep love for traveling—and I inherited that from her. For us, summer meant moving from place to place together, discovering new environments, cultures, and perspectives. Those trips were not only about exploration, but also about rest and renewal after a long academic year, turning travel into a shared way for us to learn, unwind, and connect.",
    mediaUrl: "/dulich.jpg",
    mediaType: "image"
  },
  { 
    title: "Memorable Trip", 
    description: "This photo was taken during our family trip to China, marking the first time I ever traveled abroad—with my grandmother by my side. Her presence has accompanied me through many important milestones in my life, both big and small. In each of these moments, she has played a quiet yet essential role, offering support, encouragement, and a sense of continuity that has grounded me as I stepped into new experiences and wider worlds.",
    mediaUrl: "/china.jpg",
    mediaType: "image"
  },
  { 
    title: "Story Time", 
    description: "As her first grandchild, I was cared for by my grandmother from my earliest days and grew up spending more time with her than any of my siblings or cousins. Because of that, we share a bond shaped by years of closeness and countless memories. Even though she never says it aloud, I know there is a special kind of love between us—one built through everyday moments, shared experiences, and a deep, unspoken understanding that makes our relationship uniquely close.",
    mediaUrl: "/bavatoitube.jpg",
    mediaType: "image"
  },
];

export default function GrandmaAndMe() {
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
          Grandma & Me
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Cherished moments woven with threads of love
        </p>
      </header>

      <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
        {photos.map((photo, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={photo.title}
              description={photo.description}
              mediaUrl={photo.mediaUrl}
              mediaType={photo.mediaType}
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
        items={photos} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            A Legacy of Love
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;A grandmother&apos;s love is the richest treasure—sweet, nourishing, 
            and filled with wisdom. Every moment we share is a petal I keep forever.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Love", "Wisdom", "Warmth", "Family", "Heritage"].map((word, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Love is the magic that makes the garden grow
        </p>
      </footer>
    </div>
  );
}
