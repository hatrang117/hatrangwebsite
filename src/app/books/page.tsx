"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroBook = {
  title: "A Lifelong Habit",
  description: "This photo captures a quiet moment of me lying down with a book, something that has been a constant part of my life since childhood. I have always loved reading and collecting books across many genres—from novels and short stories to comics and graphic works. Reading has never felt like a task to me; it is a hobby I turn to for relaxation, curiosity, and the freedom to explore ideas and topics that genuinely interest me.",
  mediaUrl: "/b11.jpg",
  mediaType: "image" 
};

const favoriteBooks = [
  { 
    title: "A Shelf of Memories", 
    description: "This photo shows my personal bookshelf, which has been part of my room since childhood. When I was younger, it held the books I carefully collected one by one, forming my very first reading corner. As I grew older, my mother donated many of my childhood books to children in need and to younger kids in rural areas. Even so, my bookshelf has always remained full—preserving countless memories, along with the books I have cherished and grown up with over the years.",
    mediaUrl: "/b2.jpg",
    mediaType: "image" 
  },
  { 
    title: "Stormy Childhood", 
    description: "This is one of my favorite books of all time: Stormy Childhood by Phung Quan. It is a powerful historical novel that vividly portrays the lives of young Vietnamese teenagers—around 12 to 14 years old—who joined the youth reconnaissance squad during the resistance against French colonial forces in Huế. Rather than a simple adventure story, it is a deeply moving and realistic depiction of courage, sacrifice, friendship, and love of country seen through the eyes of children whose “childhood” was shaped by war and hardship. The narrative brings into sharp focus the brutality of conflict alongside the extraordinary spirit of those who lived through it, reminding me of the immense sacrifices made by earlier generations and inspiring deep gratitude for the peace and happiness I enjoy today.",
    mediaUrl: "/b3.jpg",
    mediaType: "image" 
  },
  { 
    title: "Harriet the Spy", 
    description: "This photo features Harriet the Spy by Louise Fitzhugh, a book that felt like a quiet companion during my most rebellious years. Through Harriet’s sharp observations, honesty, and inner conflicts, the story reshaped how I viewed the world and myself. It encouraged me to think independently, question freely, and reflect more deeply—making Harriet feel less like a character and more like a friend who helped shift my perspective at a formative time.",
    mediaUrl: "/b4.jpg",
    mediaType: "image" 
  },
  { 
    title: "The Paul Street Boys", 
    description: "This photo features The Paul Street Boys by Ferenc Molnár, a coming-of-age novel about a group of boys who turn a simple vacant lot into a world of loyalty, courage, and belonging. Through childhood games that mirror real conflicts, the story captures themes of friendship, sacrifice, and standing up for what matters—leaving a lasting impression on how I understand bravery and growing up.",
    mediaUrl: "/b5.jpg",
    mediaType: "image" 
  },
  { 
    title: "Rose Fairy Tale", 
    description: "This photo features the Rose Fairy Tale collection, a bedtime story series from my early childhood. When I was very young, my mother and I slowly collected every volume together, from Grimm’s fairy tales to Andersen’s stories and many others. Each night, she would read a story to me, making this collection a constant companion throughout my childhood. Later on, I read these same books to my younger brother. More than just stories, this series played a meaningful role in shaping how I first understood the world during my formative years.",
    mediaUrl: "/b6.jpg",
    mediaType: "image" 
  },
  { 
    title: "Shaped By Stories", 
    description: "Books have always played a deeply important role in my life, especially throughout my childhood, shaping how I see the world and helping form the way I think. Even as I grow older and life becomes busier, I continue to make space for reading—holding onto it as a habit that grounds me, inspires me, and remains a lasting part of who I am.",
    mediaUrl: "/b7.jpg",
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
            A Garden Of Stories
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
