"use client";

import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";


const favoriteBooks = [
  { title: "The Secret Garden", description: "A story of healing and magic in a hidden place." },
  { title: "Little Women", description: "The beautiful journey of sisters finding their way." },
  { title: "Pride & Prejudice", description: "Witty, romantic, and timelessly elegant." },
  { title: "Anne of Green Gables", description: "Finding wonder in every corner of the world." },
  { title: "Alice in Wonderland", description: "A curious adventure through a magical world." },
  { title: "Stardust", description: "A fairy tale that captures the essence of dreams." },
  { title: "Jane Eyre", description: "A tale of strength, love, and independence." },
];

export default function Books() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6 tracking-tight">
          Books
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Pages of magic gathered in my reading garden
        </p>


      </header>

        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            <MagicalFrame
              title="Featured Treasure: The Secret Garden"
              description="Frances Hodgson Burnett's masterpiece that perfectly encapsulates the magic of nature and the human spirit's ability to bloom."
              index={0}
              aspectRatio="video"
              className="shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {favoriteBooks.slice(1).map((book, index) => (
              <div key={index} className="w-full">
                <MagicalFrame
                  title={book.title}
                  description={book.description}
                  index={index + 1}
                  aspectRatio="square"
                  className="shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>


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
