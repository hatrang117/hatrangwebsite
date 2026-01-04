"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Lock background scroll
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
      <motion.div
        whileHover={{ scale: 1.03 }}
        onClick={() => setOpen(true)}
        className={`cursor-pointer glass-card rounded-3xl overflow-hidden ${className}`}
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
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* 🔥 SCROLL CONTAINER – CHỈ THÊM PHẦN NÀY */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fff6f9] rounded-[2.5rem] w-[92vw] max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              {/* MEDIA */}
              <div className="relative w-full aspect-square">
                {showVideo ? (
                  <video
                    src={`/videos/${index + 1}.mp4`}
                    controls
                    className="w-full h-full object-cover rounded-t-[2.5rem]"
                  />
                ) : (
                  <Image
                    src={`/images/${index + 1}.jpg`}
                    alt={title}
                    fill
                    className="object-cover rounded-t-[2.5rem]"
                  />
                )}
              </div>

              {/* CAPTION */}
              <div className="px-8 py-8 text-center">
                <h3 className="font-fairy text-3xl text-[#d88a9e] mb-4">
                  {title}
                </h3>
                <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
