"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroBook = {
  title: "The Ultimate Reading Journey",
  description: "A collection of stories that have shaped my imagination and filled my heart with wonder. From classic literature to modern masterpieces.",
  mediaUrl: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
  mediaType: "image" 
};

const favoriteBooks = [
  { 
    title: "The Secret Garden", 
    description: "Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom.",
    mediaUrl: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Little Women", 
    description: "The beautiful journey of sisters finding their way. A tale of strength, love, and independence in a world full of possibilities.",
    mediaUrl: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Pride & Prejudice", 
    description: "Witty, romantic, and timelessly elegant. Finding wonder in every corner of the world through the lens of classic storytelling.",
    mediaUrl: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Anne of Green Gables", 
    description: "Finding wonder in every corner of the world. A curious adventure through a magical world of imagination and beauty.",
    mediaUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    mediaType: "image" 
  },
  { 
    title: "The Great Gatsby", 
    description: "A story of dreams, love, and the pursuit of happiness. A timeless classic that explores the human condition with grace.",
    mediaUrl: "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
    mediaType: "image" 
  },
  { 
    title: "Wonder", 
    description: "A beautiful reminder of the power of kindness and the strength of the human spirit. A story that touches every heart.",
    mediaUrl: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
    mediaType: "image" 
  },
];

const allBooks = [heroBook, ...favoriteBooks];

export default function Books() {
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
          Books I Love
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Pages of magic gathered in my reading garden
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto">
          <MagicalFrame
            title={heroBook.title}
            description={heroBook.description}
            mediaUrl={heroBook.mediaUrl}
            mediaType={heroBook.mediaType}
            index={0}
            aspectRatio="video"
            className="shadow-2xl"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {favoriteBooks.map((book, index) => (
            <div key={index} className="w-full">
              <MagicalFrame
                title={book.title}
                description={book.description}
                mediaUrl={book.mediaUrl}
                mediaType={book.mediaType}
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
        items={allBooks} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            A Garden of Stories
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Books are like seeds planted in the mind. They grow into gardens 
            of imagination where we can wander whenever we please.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Classic Literature", "Poetry", "Fantasy", "Biography", "Art"].map((tag, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Every page turned is a new bloom in the heart
        </p>
      </footer>
    </div>
  );
}
