"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroProduct = {
  title: "Slime World",
  description: "This is a small local slime shop that I co-founded and currently co-lead with two friends. What began as a fun, lighthearted project to bring joy to our fellow students - and earn a bit of extra income - soon became much more. Through running the shop, I learned valuable lessons in business strategy, marketing, and teamwork beyond what any classroom could teach. Our signature products quickly stood out for their creativity and appeal, especially through our marketing initiatives.",
  mediaUrl: "/1slime.png",
  mediaType: "image" 
};

const slimeProducts = [
  { 
    title: "CEO & Founder", 
    description: "Having loved playing with slime since childhood and being deeply passionate about entrepreneurship, I’ve always dreamed of seeing our slime shop grow stronger and more successful - a small brand that brings joy, creativity, and color to everyone who discovers it.",
    mediaUrl: "/2slime.jpg",
    mediaType: "image" 
  },
  { 
    title: "Being creative with Slime", 
    description: "We also created creative customer appreciation initiatives for our slime shop. For example, we offered a 10% discount to customers who purchased and shared feedback on Instagram, special discounts on October 20th for female customers, and even opportunities for customers to design their own slime - choosing their favorite colors, charms, and textures. These programs allowed us to engage directly with our audience while making the slime experience more personal and fun.",
    mediaUrl: "/3 slime.png",
    mediaType: "image" 
  },
  { 
    title: "SLIME: LOVELY MEOMEO", 
    description: "The Sweet Basic Slime, made for loving hearts 💗 Perfect for gifting to someone special or pampering yourself on days when you need a little “self-love.” Soft, stretchy, and carrying a gentle pink hue just like its name. You can also shape it into hearts or bows as you like using the included clay!",
    mediaUrl: "/4slime.png",
    mediaType: "image" 
  },
  { 
    title: "SLIME: PANCAT", 
    description: "Inspired by soft, fluffy pancakes, Pancat is our Cloud Cream Slime line - light and airy like a cloud, melting at your touch~ You can shape your very own pancake using the included clay. Its gentle sweet scent and super smooth texture make it perfect for relaxing after a long, tiring day!",
    mediaUrl: "/5slime.png",
    mediaType: "image" 
  },
  { 
    title: "SLIME: FURROSTIE", 
    description: "Inspired by the cool Frostie drink, Furrostie is our Icy Slime line, with soft, chilly icy slime that feels amazing to touch ☁️ Its soothing sea-blue color brings a fresh, relaxing vibe!",
    mediaUrl: "/6slime.jpg",
    mediaType: "image" 
  },
  { 
    title: "SLIME: MEOWCHA", 
    description: "Inspired by matcha - a drink popular among young people today - Meowcha is our Basic Slime line, coming with foam and clay, giving a soft, relaxing, and pleasant feel.",
    mediaUrl: "/7slime.jpg",
    mediaType: "image" 
  },
  { 
    title: "Instagram", 
    description: "This is our Instagram page - our main sales channel. We aim to build this account with visually appealing posts and maintain steady engagement with our audience.",
    mediaUrl: "/8slime.png",
    mediaType: "image" 
  },
  { 
    title: "Slime combo", 
    description: "FURROSTIE, MEOWCHA, AND CHOCOLATE - A SPECIAL GIFT AND UNIQUE KIND OF SLIME",
    mediaUrl: "/9slime.jpg",
    mediaType: "image" 
  },
  { 
    title: "PLAY SLIME, AND SMILE", 
    description: "Pop, squish, and mix these delightful jelly cubes. A textured adventure in every container!",
    mediaUrl: "/10slime.jpg",
    mediaType: "image" 
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
