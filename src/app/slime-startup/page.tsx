"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroProduct = {
  title: "The Ultimate Slime Experience",
  description: "Our signature collection that started it all. A masterpiece of texture, color, and scent, designed to bring joy and relaxation to your world.",
  mediaUrl: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
  mediaType: "image" as const
};

const slimeProducts = [
  { 
    title: "CEO & Founder", 
    description: "Leading with creativity and passion. My vision is to bring magic to every touch and create sensory wonders for everyone.",
    mediaUrl: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Cloud Slime", 
    description: "Soft, fluffy, and dreamy like cotton candy clouds. A sensory experience that transports you to a world of fluff and sweetness.",
    mediaUrl: "https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Strawberry Special", 
    description: "Our signature berry-themed creation. Scented with fresh strawberries and filled with magical glitters.",
    mediaUrl: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Galaxy Swirl", 
    description: "Swirls of cosmic colors and sparkle. A mesmerizing journey through the stars, right in the palm of your hand.",
    mediaUrl: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Ocean Breeze", 
    description: "Cool, crisp, and refreshing. Like a day at the beach, this slime brings the serenity of the waves to your fingertips.",
    mediaUrl: "https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Lavender Dream", 
    description: "Calming scent and soothing texture. Perfect for unwinding after a long day in the garden of imagination.",
    mediaUrl: "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Minty Fresh", 
    description: "A burst of cool mint energy. Invigorating and satisfying, this slime is as refreshing as a morning dew.",
    mediaUrl: "https://images.pexels.com/photos/1037991/pexels-photo-1037991.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Gold Leaf", 
    description: "Elegant and luxurious. Shimmering with gold flakes, this slime is a treasure for the senses.",
    mediaUrl: "https://images.pexels.com/photos/1037997/pexels-photo-1037997.jpeg",
    mediaType: "image" as const
  },
  { 
    title: "Midnight Sparkle", 
    description: "Deep, mysterious, and full of light. A glittery masterpiece that shines like the night sky.",
    mediaUrl: "https://images.pexels.com/photos/1037998/pexels-photo-1037998.jpeg",
    mediaType: "image" as const
  },
];

const allMedia = [heroProduct, ...slimeProducts];

export default function SlimeStartup() {
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
          Slime Startup
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Sensory magic handcrafted with love
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto">
          <MagicalFrame
            title={heroProduct.title}
            description={heroProduct.description}
            mediaUrl={heroProduct.mediaUrl}
            mediaType={heroProduct.mediaType}
            index={0}
            aspectRatio="video"
            className="shadow-2xl"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {slimeProducts.map((product, index) => (
            <div key={index} className="w-full">
              <MagicalFrame
                title={product.title}
                description={product.description}
                mediaUrl={product.mediaUrl}
                mediaType={product.mediaType}
                index={index + 1}
                aspectRatio="square"
                className="shadow-lg"
                onClick={() => openGallery(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryDialog 
        isOpen={isGalleryOpen} 
        onOpenChange={setIsGalleryOpen} 
        items={allMedia} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Science of Squish
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Creating slime is like mixing a magic potion. You need the right 
            amount of sparkle, a dash of color, and a whole lot of heart.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Handmade", "Non-toxic", "Aesthetic", "Sparkly"].map((badge, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Spread the magic, one squish at a time
        </p>
      </footer>
    </div>
  );
}
