"use client";

import { useEffect, useState } from "react";

interface FlyingIcon {
  id: number;
  type: "butterfly" | "strawberry" | "leaf" | "flower";
  x: number;
  y: number;
  size: number;
  color1: string;
  color2: string;
  color3: string;
  speedX: number;
  speedY: number;
  wobble: number;
  wobbleSpeed: number;
  wingPhase: number;
}

export default function GardenBackground() {
  const [icons, setIcons] = useState<FlyingIcon[]>([]);

  useEffect(() => {
    const butterflyColors = [
      { c1: "#FFB6C1", c2: "#DDA0DD", c3: "#FF69B4" },
      { c1: "#E6E6FA", c2: "#D8BFD8", c3: "#BA55D3" },
      { c1: "#FFDAB9", c2: "#FFB6C1", c3: "#FF6B6B" },
      { c1: "#B0E0E6", c2: "#ADD8E6", c3: "#87CEEB" },
      { c1: "#F0E68C", c2: "#FAFAD2", c3: "#FFD700" },
      { c1: "#98FB98", c2: "#90EE90", c3: "#3CB371" },
    ];

    const initialIcons: FlyingIcon[] = [];
    
    for (let i = 0; i < 12; i++) {
      const col = butterflyColors[i % butterflyColors.length];
      initialIcons.push({
        id: i,
        type: "butterfly",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 38 + Math.random() * 12,
        color1: col.c1,
        color2: col.c2,
        color3: col.c3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.03 + Math.random() * 0.02,
        wingPhase: Math.random() * Math.PI * 2,
      });
    }

    for (let i = 0; i < 6; i++) {
      initialIcons.push({
        id: 300 + i,
        type: "flower",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 28 + Math.random() * 10,
        color1: "#FFD700", // center
        color2: ["#FFB6C1", "#FFF0F5", "#E6E6FA", "#FFFACD"][i % 4], // petals
        color3: "#000000",
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.15,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.02 + Math.random() * 0.015,
        wingPhase: 0,
      });
    }

    for (let i = 0; i < 5; i++) {
      initialIcons.push({
        id: 100 + i,
        type: "strawberry",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 24 + Math.random() * 10,
        color1: "#FF6B6B",
        color2: "#98D8AA",
        color3: "#FFB6C1",
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.12,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.015 + Math.random() * 0.01,
        wingPhase: 0,
      });
    }

    for (let i = 0; i < 6; i++) {
      initialIcons.push({
        id: 200 + i,
        type: "leaf",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 26 + Math.random() * 10,
        color1: "#98D8AA",
        color2: "#7EC8A3",
        color3: "#5DBB63",
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.14,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.012 + Math.random() * 0.01,
        wingPhase: 0,
      });
    }

    setIcons(initialIcons);

    let animationId: number;
    
    const animate = () => {
      setIcons(prev => prev.map(icon => {
        let newX = icon.x + icon.speedX;
        let newY = icon.y + icon.speedY;
        let newSpeedX = icon.speedX;
        let newSpeedY = icon.speedY;

        if (newX < -8) { newX = 108; }
        if (newX > 108) { newX = -8; }
        if (newY < -8) { newY = 108; }
        if (newY > 108) { newY = -8; }

        newSpeedX += (Math.random() - 0.5) * 0.015;
        newSpeedY += (Math.random() - 0.5) * 0.015;
        
        const maxSpeed = icon.type === "butterfly" ? 0.5 : 0.2;
        const minSpeed = 0.05;
        
        const currentSpeed = Math.sqrt(newSpeedX * newSpeedX + newSpeedY * newSpeedY);
        if (currentSpeed < minSpeed) {
          const angle = Math.random() * Math.PI * 2;
          newSpeedX = Math.cos(angle) * minSpeed * 2;
          newSpeedY = Math.sin(angle) * minSpeed * 2;
        }
        
        newSpeedX = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedX));
        newSpeedY = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedY));

        return {
          ...icon,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
          wobble: icon.wobble + icon.wobbleSpeed,
          wingPhase: icon.wingPhase + 0.15,
        };
      }));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[var(--background)] transition-colors duration-1000">
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(255,182,193,0.5) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(221,160,221,0.4) 0%, transparent 70%)" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(255,218,185,0.3) 0%, transparent 70%)" }}
        />
      </div>

      {icons.map((icon) => {
        const wobbleX = Math.sin(icon.wobble) * 5;
        const wobbleY = Math.cos(icon.wobble * 0.8) * 4;
        const rotation = Math.sin(icon.wobble * 0.3) * 15 + (icon.speedX > 0 ? -10 : 10);
        const wingFlap = Math.sin(icon.wingPhase) * 0.4 + 0.6;

        return (
          <div
            key={icon.id}
            className="absolute"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              transform: `translate(${wobbleX}px, ${wobbleY}px) rotate(${rotation}deg)`,
              opacity: icon.type === "butterfly" ? 0.85 : 0.7,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            {icon.type === "butterfly" && (
              <svg width={icon.size} height={icon.size} viewBox="0 0 64 64" fill="none">
                <g style={{ transform: `scaleX(${wingFlap})`, transformOrigin: "32px 32px" }}>
                  {/* Left Wing */}
                  <path 
                    d="M30 32 C10 32 4 10 18 10 C24 10 30 20 30 32 Z" 
                    fill={icon.color1} 
                    stroke="#000" 
                    strokeWidth="3" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M30 32 C10 32 4 54 18 54 C24 54 30 44 30 32 Z" 
                    fill={icon.color2} 
                    stroke="#000" 
                    strokeWidth="3" 
                    strokeLinejoin="round" 
                  />
                  {/* Right Wing */}
                  <path 
                    d="M34 32 C54 32 60 10 46 10 C40 10 34 20 34 32 Z" 
                    fill={icon.color2} 
                    stroke="#000" 
                    strokeWidth="3" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M34 32 C54 32 60 54 46 54 C40 54 34 44 34 32 Z" 
                    fill={icon.color1} 
                    stroke="#000" 
                    strokeWidth="3" 
                    strokeLinejoin="round" 
                  />
                </g>
                
                {/* Body */}
                <rect x="29" y="18" width="6" height="28" rx="3" fill={icon.color1} stroke="#000" strokeWidth="3" />
                
                {/* Antennas */}
                <path d="M30 18 L24 10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M34 18 L40 10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="24" cy="10" r="2" fill="#000" />
                <circle cx="40" cy="10" r="2" fill="#000" />
              </svg>
            )}
            {icon.type === "flower" && (
              <svg width={icon.size} height={icon.size} viewBox="0 0 40 40" fill="none">
                {/* Petals */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <circle 
                    key={i}
                    cx={20 + Math.cos(angle * Math.PI / 180) * 10} 
                    cy={20 + Math.sin(angle * Math.PI / 180) * 10} 
                    r="8" 
                    fill={icon.color2} 
                    stroke="#000" 
                    strokeWidth="2.5" 
                  />
                ))}
                {/* Center */}
                <circle cx="20" cy="20" r="6" fill={icon.color1} stroke="#000" strokeWidth="2.5" />
              </svg>
            )}
            {icon.type === "strawberry" && (
              <svg width={icon.size} height={icon.size * 1.3} viewBox="0 0 40 52" fill="none">
                <path 
                  d="M20 14C10 14 4 24 4 34C4 44 12 50 20 50C28 50 36 44 36 34C36 24 30 14 20 14Z" 
                  fill={icon.color1} 
                  stroke="#000" 
                  strokeWidth="3" 
                />
                <circle cx="12" cy="30" r="1.5" fill="#fff" />
                <circle cx="24" cy="34" r="1.5" fill="#fff" />
                <circle cx="18" cy="42" r="1.5" fill="#fff" />
                <path d="M20 14C20 14 14 8 8 10C8 10 12 4 20 4C28 4 32 10 32 10C26 8 20 14 20 14Z" fill="#98D8AA" stroke="#000" strokeWidth="2" />
              </svg>
            )}
            {icon.type === "leaf" && (
              <svg width={icon.size} height={icon.size} viewBox="0 0 40 40" fill="none">
                <path 
                  d="M20 4C14 4 6 12 6 22C6 28 12 36 20 36C28 36 34 28 34 22C34 12 26 4 20 4Z" 
                  fill={icon.color1} 
                  stroke="#000" 
                  strokeWidth="2.5" 
                />
                <path d="M20 8C20 8 18 16 18 24C18 30 20 34 20 34" stroke="#000" strokeWidth="1.5" opacity="0.3" fill="none" />
              </svg>
            )}

          </div>
        );
      })}
    </div>
  );
}
