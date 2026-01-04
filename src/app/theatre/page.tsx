"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MagicalFrameProps {
  title: string;
  description: string;
  index: number;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

export default function MagicalFrame({
  title,
  description,
  index,
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

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/30 ${className}`}
      >
        <div className={`relative w-full ${ratioClass}`}>
          <Image
            src={`/images/frame-${index + 1}.jpg`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="font-fairy text-2xl text-[#d88a9e] mb-2">
            {title}
          </h3>
          <p className="font-aesthetic text-[#6b555c] line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#feeaf0] rounded-[2.5rem] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* SCROLL AREA */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* IMAGE */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={`/images/frame-${index + 1}.jpg`}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CAPTION */}
                <div className="p-10 text-center">
                  <h3 className="font-fairy text-4xl text-[#d88a9e] mb-6">
                    {title}
                  </h3>
                  <p className="font-elegant text-xl text-[#5c4a50] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-[#d88a9e] text-2xl font-bold"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
