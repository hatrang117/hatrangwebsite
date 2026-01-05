"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Film, Maximize2, Play } from "lucide-react";

interface MagicalFrameProps {
  mediaUrl?: string;
  mediaType?: "image" | "video";
  title?: string;
  description?: string;
  className?: string;
  index?: number;
  aspectRatio?: "square" | "video" | "portrait";
  onClick?: () => void;
}

export default function MagicalFrame({
  mediaUrl,
  mediaType = "image",
  title = "Add Title",
  description = "Add your description here...",
  className = "",
  index = 0,
  aspectRatio = "portrait",
  onClick,
}: MagicalFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      default: return "aspect-[3/4]";
    }
  };

  return (
    <div
      className={`group relative ${className} ${getAspectClass()} cursor-pointer overflow-visible`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`absolute -inset-3 rounded-[2rem] transition-all duration-700 ${
          isHovered ? "opacity-100 scale-102" : "opacity-30"
        }`}
        style={{
          background: "radial-gradient(circle at center, rgba(232,164,184,0.25) 0%, transparent 70%)",
          filter: "blur(15px)",
        }}
      />

      <div 
        className="relative h-full w-full rounded-2xl overflow-hidden glass-card transition-all duration-500 border border-[#e8a4b8]/25 shadow-sm"
        style={{
          transform: isHovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {!!mediaUrl && (
          <div className="absolute top-4 left-4 z-30 bg-white/60 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={16} className="text-[#d88a9e]" />
          </div>
        )}

        {mediaType === "video" ? (
          <div className="w-full h-full bg-gradient-to-br from-[#fef7f9] to-[#fff0f3] flex items-center justify-center relative">
            {mediaUrl ? (
              <>
                <video 
                  src={mediaUrl} 
                  className="w-full h-full object-cover" 
                  muted 
                  loop 
                  playsInline 
                  autoPlay 
                />
                <div className="absolute bottom-4 right-4 z-10 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                  <Play size={14} className="text-white fill-white" />
                </div>
              </>
            ) : (
              <div className="text-center p-8">
                <div className="mb-4 flex justify-center">
                  <Film className="text-[#e8a4b8] opacity-50" size={40} />
                </div>
                <p className="font-aesthetic text-lg text-[#d88a9e]">Video Coming Soon</p>
              </div>
            )}
          </div>
        ) : mediaUrl ? (
          <div className="relative w-full h-full">
            <Image 
              src={mediaUrl} 
              alt={title} 
              fill 
              className="object-cover transition-all duration-700 group-hover:scale-105" 
              unoptimized={mediaUrl.startsWith('http')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5c4a50]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#fef7f9] to-[#fff0f3] flex items-center justify-center">
            <div className="text-center p-6">
              <div className="mb-3 flex justify-center">
                <ImageIcon className="text-[#e8a4b8] opacity-50" size={40} />
              </div>
              <p className="font-aesthetic text-lg text-[#d88a9e]">Coming Soon</p>
            </div>
          </div>
        )}

        {!!mediaUrl && (
          <div
            className={`absolute inset-x-0 bottom-0 p-5 transform transition-all duration-500 z-10 pointer-events-none ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              background: "linear-gradient(to top, rgba(92,74,80,0.9) 0%, rgba(92,74,80,0.5) 60%, transparent 100%)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              {mediaType === "video" && <Film size={14} className="text-white/80" />}
              <h3 className="font-aesthetic text-xl text-white">{title}</h3>
            </div>
            <p className="font-elegant text-sm text-white/85 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
