"use client";

import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";


const pianoContent = [
  { type: "photo", title: "Classical Soul", description: "Exploring the depths of Chopin and Mozart." },
  { type: "photo", title: "Practice Garden", description: "Where notes bloom like flowers." },
  { type: "video", title: "Performance Night", description: "Sharing the magic of music." },
  { type: "photo", title: "Musical Dreams", description: "Letting the keys carry my imagination." },
  { type: "photo", title: "Stage Presence", description: "Confidence and grace under spotlight." },
  { type: "photo", title: "Heart & Keys", description: "Every melody tells a story from the heart." },
];

export default function Piano() {
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

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
        {pianoContent.map((item, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={item.title}
              description={item.description}
              showVideo={item.type === "video"}
              index={index}
              aspectRatio="square"
              className="shadow-xl"
            />
          </div>
        ))}
      </div>

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
