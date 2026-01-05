"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const theatreShows = [
  { 
    title: "The Very First Time", 
    description: "This photo captures me performing on a large stage in front of a full audience for the first time. After a long period of dedicated rehearsals, stepping into such a vast space was both nerve-racking and exhilarating. In that moment, I felt fully immersed in the music and the story, no longer just performing a role but truly becoming part of the production.",
    mediaUrl: "/t1.jpg",
    mediaType: "image" 
  },
  { 
    title: "Musical Magic", 
    description: "This image captures another moment from the same production, highlighting a different performance within the show. By this point, the stage no longer felt intimidating—it felt alive. Each movement, note, and line carried intention, allowing me to dive deeper into the character and the narrative. This performance marked a shift from simply executing choreography or music to fully inhabiting the story and sharing its emotional weight with the audience.",
    mediaUrl: "/t2.jpg",
    mediaType: "image" 
  },
  { 
    title: "Dance & Drama", 
    description: "This photo was taken after the show’s successful finale, as I stood in front of the backdrop holding the flowers I had received. The journey was exhausting, but deeply unforgettable. It gave me the chance to step into a field I had never explored before, push my limits, and grow through the process. More than just a performance, this experience marked a milestone that I am genuinely proud of—one that expanded my perspective and left a lasting impact on who I am.",
    mediaUrl: "/t3.jpg",
    mediaType: "image" 
  },
  { 
    title: "Backstage Moments", 
    description: "This photo captures the dance team coming together to chant our final slogan, marking the end of an unforgettable journey. It was a moment shaped by countless rehearsals, physical exhaustion, and shared challenges, yet filled with bright smiles, satisfaction, and pride. Standing together, we celebrated not only the performance we had delivered to the audience, but also the memories, growth, and bonds formed throughout the process.",
    mediaUrl: "/t4.jpg",
    mediaType: "image" 
  },
  { 
    title: "Before the Golden Time ", 
    description: "This photo was taken with my friend in the dressing room before the show began. Wearing our performance costumes and having our makeup done for the first time filled us with a mix of excitement and nervous anticipation. In that moment, everyone was ready to give their all—to step onto the stage with confidence and deliver performances that would truly captivate the audience.",
    mediaUrl: "/t5.jpg",
    mediaType: "image" 
  },
  { 
    title: "Leading Role", 
    description: "This final image comes from a different show, where I served as the Communications Director, managing and coordinating the work behind the scenes. Although I am not in the photo, this role allowed me to witness the entire performance from a broader perspective—to observe the contrast between rehearsals and the final show, and to experience the stage through the eyes of the audience. Unlike my earlier experience of standing under the lights and facing thousands of spectators, this position offered a new and valuable viewpoint, deepening my understanding of how a production truly comes together.",
    mediaUrl: "/t6.jpg",
    mediaType: "image" 
  },
];

export default function Theatre() {
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
          Theatre Life
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          The stage is my garden, every performance a bloom
        </p>
      </header>

      <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto relative z-10">
        {theatreShows.map((show, index) => (
          <div key={index} className="w-full">
            <MagicalFrame
              title={show.title}
              description={show.description}
              mediaUrl={show.mediaUrl}
              mediaType={show.mediaType}
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
        items={theatreShows} 
        activeIndex={activeIndex} 
      />

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
