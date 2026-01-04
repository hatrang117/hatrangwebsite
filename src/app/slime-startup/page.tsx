"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  // LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ratioClass =
    aspectRatio === "portrait"
      ? "aspect-[3/4]"
      : aspectRatio === "landscape"
      ? "aspect-[4/3]"
      : "aspect-square";

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition ${className}`}
      >
        <div className={`relative w-full ${ratioClass}`}>
          <Image
            src={`/images/${index + 1}.jpg`}
            alt={title}
            fill
            className="object-cover"
          />
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
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#fff6f9] rounded-[2.5rem] w-[92vw] max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MEDIA */}
            <div className="relative w-full aspect-square shrink-0">
              {showVideo ? (
                <video
                  src={`/videos/${index + 1}.mp4`}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={`/images/${index + 1}.jpg`}
                  alt={title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* SCROLLABLE CAPTION */}
            <div className="px-8 py-6 overflow-y-auto">
              <h3 className="font-fairy text-3xl text-[#d88a9e] mb-4 text-center">
                {title}
              </h3>
              <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed text-center whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
