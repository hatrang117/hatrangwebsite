"use client";

import { useState } from "react";

interface MagicalFrameProps {
  title: string;
  description: string;
  index: number;
  showVideo?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

export default function MagicalFrame({
  title,
  description,
  index,
  showVideo = false,
  aspectRatio = "square",
  className = "",
}: MagicalFrameProps) {
  const [open, setOpen] = useState(false);

  const ratioClass =
    aspectRatio === "portrait"
      ? "aspect-[3/4]"
      : aspectRatio === "landscape"
      ? "aspect-[4/3]"
      : "aspect-square";

  const imageSrc = `/images/${index + 1}.jpg`;
  const videoSrc = `/videos/${index + 1}.mp4`;

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer glass-card rounded-3xl overflow-hidden ${className}`}
      >
        <div className={`w-full ${ratioClass}`}>
          {showVideo ? (
            <video
              src={videoSrc}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6 text-center">
          <h3 className="font-fairy text-2xl text-[#d88a9e] mb-2">
            {title}
          </h3>
          <p className="font-aesthetic text-[#7a5c64] line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-auto my-10 w-full max-w-4xl bg-[#fff6f9] rounded-[2.5rem]
                       flex flex-col max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGE / VIDEO */}
            <div className="w-full flex-shrink-0 max-h-[60vh] overflow-hidden">
              {showVideo ? (
                <video
                  src={videoSrc}
                  controls
                  className="w-full h-full object-contain rounded-t-[2.5rem]"
                />
              ) : (
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-contain rounded-t-[2.5rem]"
                />
              )}
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-8 py-8 text-center">
              <h3 className="font-fairy text-3xl text-[#d88a9e] mb-4">
                {title}
              </h3>
              <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
