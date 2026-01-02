"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", type: "home" },
  { href: "/grandma-and-me", label: "Grandma & Me", type: "heart" },
  { href: "/piano", label: "Piano", type: "note" },
  { href: "/slime-startup", label: "Slime Startup", type: "strawberry" },
  { href: "/theatre", label: "Theatre", type: "mask" },
  { href: "/books", label: "Books I Love", type: "book" },
  { href: "/research", label: "Research", type: "sparkle" },
];

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 10L12 3L21 10V20C21 21 20 22 19 22H5C4 22 3 21 3 20V10Z" fill="#d88a9e" opacity="0.6" />
    <rect x="9" y="14" width="6" height="8" fill="#fff" opacity="0.8" rx="1" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#fbc4ab" opacity="0.8" />
  </svg>
);

const StrawberryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="14" rx="7" ry="8" fill="#ffcccb" />
    <circle cx="9" cy="12" r="0.8" fill="#fff" opacity="0.6" />
    <circle cx="15" cy="14" r="0.8" fill="#fff" opacity="0.6" />
    <circle cx="11" cy="17" r="0.8" fill="#fff" opacity="0.6" />
    <path d="M8 8 Q12 5 16 8" fill="#c1e1c1" />
    <path d="M10 7 L9 5" stroke="#c1e1c1" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 7 L15 5" stroke="#c1e1c1" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <ellipse cx="8" cy="18" rx="3" ry="2.5" fill="#a29bfe" opacity="0.7" />
    <path d="M11 18V6L18 8V11" stroke="#a29bfe" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const MaskIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M2 10C2 10 4 7 12 7C20 7 22 10 22 10V20C22 20 20 17 12 17C4 17 2 20 2 20V10Z" fill="#f9d5e5" />
    <path d="M7 11C7 11 8 10 9 10C10 10 11 11 11 11" stroke="white" strokeWidth="1.2" />
    <path d="M13 11C13 11 14 10 15 10C16 10 17 11 17 11" stroke="white" strokeWidth="1.2" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="14" height="16" rx="1" fill="#d4a5c9" opacity="0.7" />
    <path d="M7 4 V20" stroke="#fff" strokeWidth="1" opacity="0.4" />
    <rect x="18" y="4" width="2" height="16" fill="#a29bfe" opacity="0.5" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="#f7e1b5" />
  </svg>
);

const IconMapper = ({ type }: { type: string }) => {
  switch (type) {
    case "home": return <HomeIcon />;
    case "heart": return <HeartIcon />;
    case "note": return <NoteIcon />;
    case "strawberry": return <StrawberryIcon />;
    case "mask": return <MaskIcon />;
    case "book": return <BookIcon />;
    case "sparkle": return <SparkleIcon />;
    default: return <HomeIcon />;
  }
};

const Butterfly = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <g>
      <ellipse cx="10" cy="12" rx="7" ry="9" fill="#d4a5c9" opacity="0.8" />
      <ellipse cx="22" cy="12" rx="7" ry="9" fill="#a29bfe" opacity="0.8" />
      <ellipse cx="10" cy="20" rx="5" ry="6" fill="#a29bfe" opacity="0.7" />
      <ellipse cx="22" cy="20" rx="5" ry="6" fill="#d4a5c9" opacity="0.7" />
    </g>
  </svg>
);

const LeafIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 4C12 4 6 10 6 18C6 22 10 28 16 28C22 28 26 22 26 18C26 10 20 4 16 4Z" fill="#c1e1c1" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center hover-lift md:hidden border border-[#e8a4b8]/30"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5c4a50" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <StrawberryIcon />
        )}
      </button>

        <nav
          className={`fixed top-0 left-0 h-screen w-72 z-40 transform transition-transform duration-700 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
          style={{
            background: "var(--sidebar)",
            borderRight: "1px solid rgba(232, 164, 184, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        >

        <div className="p-8 h-full flex flex-col relative">
            <div className="mb-12 mt-6">
              <div className="flex items-center gap-2 mb-1">
                <LeafIcon size={14} />
                <h1 className="font-fairy text-3xl text-[#b86b7e] text-shadow-fairy tracking-tight">
                  Le Ha Trang
                </h1>
              </div>
              <p className="font-aesthetic text-sm text-[#5c4a50] opacity-80 pl-6">
                Enchanted Garden
              </p>
            </div>

          <div className="flex-1 flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? "bg-[#e8a4b8]/10 shadow-sm"
                      : "hover:bg-white/40"
                  }`}
                >
                  <span className={`transition-all duration-500 ${isActive ? "scale-110" : "group-hover:scale-105 opacity-80 group-hover:opacity-100"}`}>
                    <IconMapper type={item.type} />
                  </span>
                  <span className={`font-aesthetic text-lg transition-colors duration-300 ${isActive ? "text-[#d88a9e] font-semibold" : "text-[#5c4a50] group-hover:text-[#d88a9e]"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-8 border-t border-[#e8a4b8]/10">
            <div className="flex items-center justify-between px-2">
              <Butterfly size={18} />
              <div className="flex flex-col items-center">
                <span className="font-aesthetic text-[10px] uppercase tracking-widest text-[#9a7c85] opacity-60">
                  EST. 2024
                </span>
                <span className="font-aesthetic text-xs text-[#9a7c85] italic">
                  Magic & Love
                </span>
              </div>
              <div className="rotate-12">
                <StrawberryIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#5c4a50]/5 backdrop-blur-sm z-30 md:hidden animate-in fade-in duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
