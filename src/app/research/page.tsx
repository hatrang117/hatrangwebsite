"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroResearch = {
  title: "Startup intention of university students in the economic sector in Hanoi using structural equation modeling",
  description:
    "This research examines the startup intentions of university students in the economic sector in Hanoi, using Structural Equation Modeling (SEM) as the primary analytical method. The study explores how key factors—such as entrepreneurial attitude, perceived behavioral control, and social influence—interact to shape students’ intentions to start a business. By applying SEM, the research provides a structured and data-driven understanding of the relationships between these variables, offering insights into the entrepreneurial mindset of young people in an urban academic context.",
  mediaUrl: "/RE.png",
  mediaType: "image" 
};

const researchPapers = [
  {
    title: "VIETNAM'S STRATEGIC LOCATION AND WHY IT AFFECTS WORLD POLITICAL INFLUENCE",
    description: `Vietnam's location has consistently been regarded as a strategic advantage which had a profound impact on its political standing within the global scene. Vietnam is a Southeast Asian country sharing its borders with China in the north, Laos and Cambodia in the west, and the South China Sea in the east. Vietnam is an important player in regional and international geopolitics because it is located at the crossroads of major land and sea trade routes.

Vietnam geographically and spatially is in a very advantageous location. Vietnam is a natural bridge linking Asia's continental and maritime economic zones on the regional geopolitical map. Vietnam serves as a gateway to the Southeast Asian and Asian overland transport systems and a portal into the regional maritime economies.

Being a sea nation, Vietnam is blessed with rich natural endowments, such as massive offshore deposits of oil and gas, vital to the Vietnamese economy and regional and global energy chain.`,
    mediaUrl: "/re1.png",
    mediaType: "image" 
  },
  {
    title: "Is the Gig Economy a Hustle or a Bust for Young Workers?",
    description: `The gig economy has transformed the modern workforce, offering flexibility and autonomy to millions of workers worldwide. However, this shift towards freelance and contract work presents significant financial challenges, particularly for young adults entering the job market.

Income instability, lack of benefits, tax burdens, and difficulty accessing credit make it challenging for young gig workers to build long-term financial security.`,
    mediaUrl: "/re2.png",
    mediaType: "image" 
  },
  {
    title: "WOMEN IN STEM",
    description: `In recent years, the underrepresentation of women in STEM fields has become a topic of growing concern. Although remarkable progress has been made in gender equality, women are still less likely to pursue careers in science, technology, engineering, and mathematics compared to men.

Encouraging more women to join and remain in STEM is not only a matter of fairness but also of practical necessity, as diversity drives innovation and global progress.`,
    mediaUrl: "/re3.png",
    mediaType: "image" 
  },
  {
    title: "MERGING PROVINCES IN VIETNAM: OPPORTUNITIES AND CHALLENGES",
    description: `The Politburo’s proposal to merge provinces has created a wide range of opinions across society. While the policy offers opportunities to optimize administration and promote regional development, it also raises challenges related to governance, economic disparities, and cultural identity.

For Vietnam, successful implementation requires careful planning, transparency, and a strong focus on improving public services.`,
    mediaUrl: "/re4.jpeg",
    mediaType: "image" 
  }
];

const allResearch = [heroResearch, ...researchPapers];

export default function Research() {
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
          Research & Journals
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Exploring ideas, questions, and perspectives through research and journals
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto">
          <MagicalFrame
            title={heroResearch.title}
            description={heroResearch.description}
            mediaUrl={heroResearch.mediaUrl}
            mediaType={heroResearch.mediaType}
            index={0}
            aspectRatio="video"
            className="shadow-2xl"
            titleClassName="text-sm md:text-lg"
            descriptionClassName="text-[11px] md:text-xs"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* 4x4 grid */}
        <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {researchPapers.map((paper, index) => (
            <div key={index} className="w-full">
              <MagicalFrame
                title={paper.title}
                description={paper.description}
                mediaUrl={paper.mediaUrl}
                mediaType={paper.mediaType}
                index={index + 1}
                aspectRatio="square"
                className="shadow-xl"
               titleClassName="text-[11px] sm:text-xs md:text-sm lg:text-base"
               descriptionClassName="text-[9px] sm:text-[10px] leading-snug"
                contentClassName="p-3 sm:p-4"
                onClick={() => openGallery(index + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryDialog
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        items={allResearch}
        activeIndex={activeIndex}
      />

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Curiosity is where every inquiry begins
        </p>
      </footer>
    </div>
  );
}
