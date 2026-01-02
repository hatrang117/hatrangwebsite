"use client";

import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";


const profileSections = [
  {
    title: "About myself",
    description: "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
  },
  {
    title: "My beloved ones",
    description: "I hold relationships close to my heart. Family and friends are my grounding force—the people who shape who I am and make life feel fuller. I treasure shared meals, long conversations, and the quiet comfort of simply being together. To me, love is time spent, moments shared, and the choice to show up for one another, always.",
  },
  {
    title: "My Passions",
    description: "I find joy in simple, creative moments—playing the piano and letting melodies carry my thoughts, baking for the people I love, and experimenting with colors and textures through my small slime shop. When I need quiet inspiration, I turn to books, where stories help me slow down, imagine freely, and see the world from new perspectives. These passions shape how I create, how I rest, and how I express myself every day.",
  },
  {
    title: "Once Upon a Time",
    description: "Where It All Began
Where my story began—soft memories, curious eyes, and endless wonder. Wrapped in love and gentle care, I grew up dreaming freely, collecting little moments of joy and imagination. In that safe, happy world, curiosity bloomed, dreams felt possible, and the dreamer I am today quietly began to grow.",
  },
];

const Strawberry = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 50 55" fill="none">
    <path d="M25 15 C10 15 5 30 5 38 C5 50 15 52 25 52 C35 52 45 50 45 38 C45 30 40 15 25 15Z" fill="#F5B5C8" />
    <ellipse cx="15" cy="30" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="35" cy="32" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="25" cy="42" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="20" cy="25" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="30" cy="25" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="18" cy="38" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="32" cy="38" rx="2" ry="3" fill="#FEE8EE" />
    <path d="M25 15 L20 8 Q15 5 12 10 L18 15" fill="#C5D98A" />
    <path d="M25 15 L30 8 Q35 5 38 10 L32 15" fill="#C5D98A" />
    <path d="M25 15 L25 5 Q25 2 28 6 L25 15" fill="#C5D98A" />
  </svg>
);

const LeafDecor = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path d="M10 40 Q5 25 15 15 Q25 5 40 10 Q50 15 45 30 Q40 45 25 45 Q15 45 10 40Z" fill="#B8D468" />
    <path d="M12 38 Q20 25 38 12" stroke="#9ABF4A" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M18 35 Q22 28 30 22" stroke="#9ABF4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M25 38 Q28 32 35 28" stroke="#9ABF4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20 relative bg-[#feeaf0]">
      <FloatingElements />
      
      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#b86b7e] text-shadow-fairy mb-6 tracking-tight">
          Le Ha Trang
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#7a5a65]">
          Welcome to my enchanted garden
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="w-20 h-px bg-[#e8a4b8]/40" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#f7e1b5" className="animate-twinkle">
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          <span className="w-20 h-px bg-[#e8a4b8]/40" />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
        {profileSections.map((section, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={section.title}
              description={section.description}
              index={index}
              aspectRatio="square"
              className="shadow-xl"
            />
          </div>
        ))}
      </div>

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-50">
            <Strawberry size={40} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-50">
            <LeafDecor size={36} />
          </div>
          
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Magic of Being
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] leading-relaxed mb-10 italic">
            &quot;In this garden of dreams, every petal tells a story, every breeze carries a melody, 
            and every strawberry holds a bit of magic.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Piano", "Theatre", "Books", "Slime", "Research", "Dreaming"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full glass-card font-aesthetic text-sm text-[#d88a9e] border border-[#e8a4b8]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#7a5a65]">
          Designed with magic, strawberries & flowers
        </p>
      </footer>
    </div>
  );
}
