import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const profileSections = [
  {
    title: "Welcome to My World",
    description: "Hi, I'm Le Ha Trang! A dreamer, creator, and lover of all things magical.",
    mediaUrl: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    mediaType: "image",
  },
  {
    title: "About Me",
    description: "I'm passionate about music, theatre, books, and building creative businesses.",
    mediaUrl: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    mediaType: "image",
  },
  {
    title: "My Passions",
    description: "From playing piano to running a slime startup, I embrace every creative adventure.",
    mediaUrl: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    mediaType: "image",
  },
  {
    title: "Dream & Create",
    description: "I believe in the magic of following your dreams. Join me on this journey!",
    mediaUrl: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg",
    mediaType: "image",
  },
];

const Strawberry = ({ size = 28 }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 50 55" fill="none">
    <path d="M25 15 C10 15 5 30 5 38 C5 50 15 52 25 52 C35 52 45 50 45 38 C45 30 40 15 25 15Z" fill="#F5B5C8" />
    <ellipse cx="15" cy="30" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="35" cy="32" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="25" cy="42" rx="3" ry="4" fill="#FEE8EE" />
    <path d="M25 15 L20 8 L18 15" fill="#C5D98A" />
    <path d="M25 15 L30 8 L32 15" fill="#C5D98A" />
  </svg>
);

const LeafDecor = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path d="M10 40 Q5 25 15 15 Q25 5 40 10 Q50 15 45 30 Q40 45 25 45 Q15 45 10 40Z" fill="#B8D468" />
    <path d="M12 38 Q20 25 38 12" stroke="#9ABF4A" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 lg:px-20 relative bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl text-[#b86b7e] mb-6">
          Le Ha Trang
        </h1>
        <p className="text-2xl md:text-3xl text-[#7a5a65]">
          Welcome to my enchanted garden
        </p>
      </header>

      <div className="grid grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {profileSections.map((section, index) => (
          <MagicalFrame
            key={index}
            title={section.title}
            description={section.description}
            mediaUrl={section.mediaUrl}
            mediaType={section.mediaType}
            aspectRatio="square"
            onClick={() => openGallery(index)}
          />
        ))}
      </div>

      <GalleryDialog
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        items={profileSections}
        activeIndex={activeIndex}
      />

      <section className="mt-24 max-w-4xl mx-auto text-center relative z-10">
        <div className="rounded-3xl p-12 border border-pink-200 bg-white/60 backdrop-blur">
          <div className="absolute top-4 right-4 opacity-50">
            <Strawberry size={40} />
          </div>
          <div className="absolute bottom-4 left-4 opacity-50">
            <LeafDecor size={36} />
          </div>

          <h2 className="text-3xl text-[#d88a9e] mb-6">
            The Magic of Being
          </h2>

          <p className="text-xl text-[#5c4a50] italic">
            "In this garden of dreams, every petal tells a story."
          </p>
        </div>
      </section>

      <footer className="mt-20 text-center text-[#7a5a65]">
        Designed with magic & strawberries 🍓
      </footer>
    </div>
  );
}
