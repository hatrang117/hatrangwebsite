"use client";

import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";


const theatreShows = [
  { title: "Leading Role", description: "My debut as a lead performer on stage." },
  { title: "Musical Magic", description: "Singing my heart out in the spotlight." },
  { title: "Dance & Drama", description: "Where movement tells the story." },
  { title: "Backstage Moments", description: "The excitement before the curtain rises." },
  { title: "Ensemble Joy", description: "Creating magic with amazing castmates." },
  { title: "Standing Ovation", description: "The most rewarding feeling." },
];

export default function Theatre() {
  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6 tracking-tight">
          Theatre Life
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          The stage is my garden, every performance a bloom
        </p>


      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {theatreShows.map((show, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={show.title}
              description={show.description}
              index={index}
              aspectRatio="square"
              className="shadow-lg hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
        ))}
      </div>

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The World is a Stage
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Theatre is sweet, bold, and full of surprises. In every role, 
            I plant a seed of emotion and watch it bloom into a performance.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Acting", "Singing", "Dancing", "Expression", "Magic"].map((item, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          The curtain never falls in my heart
        </p>
      </footer>
    </div>
  );
}
