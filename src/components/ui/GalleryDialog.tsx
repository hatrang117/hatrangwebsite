"use client";

import { useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
}

interface GalleryDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  items: GalleryItem[];
  activeIndex: number;
}

export default function GalleryDialog({
  isOpen,
  onOpenChange,
  items,
  activeIndex,
}: GalleryDialogProps) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && itemRefs.current[activeIndex]) {
      // Small delay to ensure the dialog is fully rendered
      const timer = setTimeout(() => {
        itemRefs.current[activeIndex]?.scrollIntoView({ behavior: "auto", block: "start" });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeIndex]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] w-screen h-screen p-0 border-none bg-black/95 sm:rounded-none overflow-hidden flex flex-col z-[100]">
        <div className="absolute top-6 right-6 z-[110]">
          <button 
            onClick={() => onOpenChange(false)}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all border border-white/20"
          >
            <X size={24} className="transition-transform group-hover:rotate-90" />
          </button>
        </div>

        <ScrollArea className="flex-1 w-full h-full">
          <div className="flex flex-col items-center gap-12 py-12 px-4 md:px-0">
            {items.map((item, index) => (
              <div 
                key={index} 
                ref={el => { itemRefs.current[index] = el; }}
                className="w-full max-w-4xl bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-white/10 mb-8"
              >
                {/* Media */}
                <div className="w-full relative bg-black/50 flex items-center justify-center">
                  {item.mediaType === "video" ? (
                    <video 
                      src={item.mediaUrl} 
                      controls 
                      className="w-full h-auto max-h-[85vh] object-contain" 
                    />
                  ) : item.mediaUrl ? (
                    <img 
                      src={item.mediaUrl} 
                      alt={item.title} 
                      className="w-full h-auto block max-h-[85vh] object-contain"
                    />
                  ) : (
                    <div className="w-full aspect-video flex flex-col items-center justify-center text-white/40 bg-white/5">
                      <ImageIcon size={48} className="mb-4 opacity-20" />
                      <p className="font-aesthetic italic">Visual coming soon...</p>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 bg-white text-[#5c4a50]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-[#d88a9e]" />
                    <span className="font-aesthetic text-xs uppercase tracking-[0.3em] text-[#d88a9e]">Memoir</span>
                  </div>
                  <h2 className="font-fairy text-4xl md:text-6xl text-[#d88a9e] leading-[1.1] mb-6">
                    {item.title}
                  </h2>
                  <div className="relative mb-10">
                    <span className="absolute -left-4 md:-left-8 top-0 text-6xl text-[#e8a4b8]/20 font-serif line-height-1 pointer-events-none">&ldquo;</span>
                    <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] leading-[1.6] whitespace-pre-wrap relative z-10 first-letter:text-4xl first-letter:font-fairy first-letter:text-[#d88a9e] first-letter:mr-1">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-[#e8a4b8]/15">
                    <div className="flex gap-4">
                      <ImageIcon size={18} className="text-[#e8a4b8]" />
                      <span className="font-elegant text-sm text-[#9a7c85] italic">Chapter {index + 1} of {items.length}</span>
                    </div>
                    <div className="h-10 w-px bg-[#e8a4b8]/20" />
                    <div className="text-right">
                      <span className="block font-aesthetic text-[10px] uppercase tracking-widest text-[#9a7c85]">Mood</span>
                      <span className="block font-elegant text-sm text-[#5c4a50]">Dreamy & Nostalgic</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="py-20 text-center">
              <p className="font-aesthetic text-[#e8a4b8] opacity-50">End of Gallery</p>
              <div className="mt-4 flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-[#e8a4b8]/40 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
