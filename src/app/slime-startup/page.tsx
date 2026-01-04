"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#fff6f9] rounded-[2.5rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-full ${ratioClass}`}>
              {showVideo ? (
                <video
                  src={videoSrc}
                  controls
                  className="w-full h-full object-cover rounded-t-[2.5rem]"
                />
              ) : (
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover rounded-t-[2.5rem]"
                />
              )}
            </div>

            <div className="px-8 py-8 text-center">
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
