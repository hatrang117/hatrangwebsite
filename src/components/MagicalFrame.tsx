"use client";

import { useState } from "react";
import Image from "next/image";

interface MagicalFrameProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  className?: string;
  showVideo?: boolean;
  videoUrl?: string;
  index?: number;
  aspectRatio?: "square" | "video" | "portrait";
}

export default function MagicalFrame({
  imageUrl,
  title = "Add Title",
  description = "Add your description here...",
  className = "",
  showVideo = false,
  videoUrl,
  index = 0,
  aspectRatio = "portrait",
}: MagicalFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      default: return "";
    }
  };

  return (
    <div
      className={`group relative ${className} ${getAspectClass()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        className="relative h-full w-full rounded-2xl overflow-hidden glass-card transition-all duration-500 border border-[#e8a4b8]/25"
        style={{
          transform: isHovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {showVideo ? (
          <div className="w-full h-full bg-gradient-to-br from-[#fef7f9] to-[#fff0f3] flex items-center justify-center">
            {videoUrl ? (
              <video src={videoUrl} controls className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-8">
                <div className="mb-4">
                    <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="28" fill="#e8a4b8" opacity="0.2" />
                      <path d="M25 20L42 30L25 40V20Z" fill="#d88a9e" />
                    </svg>
                </div>
                <p className="font-aesthetic text-lg text-[#d88a9e]">Video</p>
              </div>
            )}
          </div>
        ) : imageUrl ? (
          <div className="relative w-full h-full">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className="object-cover transition-all duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5c4a50]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#fef7f9] to-[#fff0f3] flex items-center justify-center">
            <div className="text-center p-6">
              <p className="font-aesthetic text-lg text-[#d88a9e]">Bloom Here</p>
              <p className="font-elegant text-sm text-[#9a7c85] mt-1">Add your moment</p>
            </div>
          </div>
        )}

        <div
          className={`absolute inset-x-0 bottom-0 p-5 transform transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            background: "linear-gradient(to top, rgba(92,74,80,0.9) 0%, rgba(92,74,80,0.5) 60%, transparent 100%)",
          }}
        >
          <h3 className="font-aesthetic text-xl text-white">{title}</h3>
          <p className="font-elegant text-sm text-white/85 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
