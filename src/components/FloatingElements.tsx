"use client";

const Butterfly = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 120 90" fill="none">
    <path d="M60 45 C40 15 10 20 15 40 C20 55 45 55 60 45" fill="#F5B5C8" />
    <path d="M60 45 C80 15 110 20 105 40 C100 55 75 55 60 45" fill="#F5B5C8" />
    <path d="M60 45 C35 60 15 75 25 80 C40 85 50 65 60 45" fill="#F5B5C8" />
    <path d="M60 45 C85 60 105 75 95 80 C80 85 70 65 60 45" fill="#F5B5C8" />
    <ellipse cx="35" cy="30" rx="8" ry="6" fill="#FBDCE5" opacity="0.8" />
    <ellipse cx="85" cy="30" rx="8" ry="6" fill="#FBDCE5" opacity="0.8" />
    <ellipse cx="25" cy="40" rx="5" ry="4" fill="#FBDCE5" opacity="0.7" />
    <ellipse cx="95" cy="40" rx="5" ry="4" fill="#FBDCE5" opacity="0.7" />
    <ellipse cx="40" cy="65" rx="4" ry="3" fill="#FBDCE5" opacity="0.6" />
    <ellipse cx="80" cy="65" rx="4" ry="3" fill="#FBDCE5" opacity="0.6" />
    <ellipse cx="60" cy="45" rx="3" ry="8" fill="#8B5A6B" />
    <path d="M60 37 Q55 20 52 12" stroke="#8B5A6B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M60 37 Q65 20 68 12" stroke="#8B5A6B" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="52" cy="10" r="3" fill="#8B5A6B" />
    <circle cx="68" cy="10" r="3" fill="#8B5A6B" />
  </svg>
);

const Flower = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="25" rx="22" ry="25" fill="#F5B5C8" />
    <ellipse cx="25" cy="50" rx="22" ry="25" fill="#F5B5C8" transform="rotate(-72 50 50)" />
    <ellipse cx="35" cy="80" rx="22" ry="25" fill="#F5B5C8" transform="rotate(-144 50 50)" />
    <ellipse cx="65" cy="80" rx="22" ry="25" fill="#F5B5C8" transform="rotate(-216 50 50)" />
    <ellipse cx="75" cy="50" rx="22" ry="25" fill="#F5B5C8" transform="rotate(-288 50 50)" />
    <circle cx="50" cy="50" r="14" fill="#E58FAA" />
  </svg>
);

const Strawberry = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 50 55" fill="none">
    <path d="M25 15 C10 15 5 30 5 38 C5 50 15 52 25 52 C35 52 45 50 45 38 C45 30 40 15 25 15Z" fill="#F5B5C8" />
    <ellipse cx="15" cy="30" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="35" cy="32" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="25" cy="42" rx="3" ry="4" fill="#FEE8EE" />
    <ellipse cx="20" cy="25" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="30" cy="25" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="18" cy="38" rx="2" ry="3" fill="#FEE8EE" />
    <ellipse cx="32" cy="38" rx="2" ry="3" fill="#FEE8EE" />
    <path d="M25 15 L20 8 Q15 5 12 10 L18 15" fill="#C5D98A" />
    <path d="M25 15 L30 8 Q35 5 38 10 L32 15" fill="#C5D98A" />
    <path d="M25 15 L25 5 Q25 2 28 6 L25 15" fill="#C5D98A" />
  </svg>
);

const LeafDecor = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path d="M10 40 Q5 25 15 15 Q25 5 40 10 Q50 15 45 30 Q40 45 25 45 Q15 45 10 40Z" fill="#B8D468" />
    <path d="M12 38 Q20 25 38 12" stroke="#9ABF4A" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M18 35 Q22 28 30 22" stroke="#9ABF4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M25 38 Q28 32 35 28" stroke="#9ABF4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

const FloatingElements = () => {
  const elements = [
    { id: 1, type: "butterfly", top: "5%", left: "10%", size: 38, animType: "float-1" },
    { id: 2, type: "flower", top: "8%", left: "30%", size: 32, animType: "float-2" },
    { id: 3, type: "strawberry", top: "12%", left: "55%", size: 30, animType: "float-3" },
    { id: 4, type: "leaf", top: "6%", left: "85%", size: 34, animType: "float-4" },
    { id: 5, type: "flower", top: "25%", left: "15%", size: 28, animType: "float-2" },
    { id: 6, type: "butterfly", top: "28%", left: "45%", size: 36, animType: "float-1" },
    { id: 7, type: "leaf", top: "22%", left: "75%", size: 32, animType: "float-4" },
    { id: 8, type: "strawberry", top: "45%", left: "5%", size: 28, animType: "float-3" },
    { id: 9, type: "butterfly", top: "48%", left: "35%", size: 34, animType: "float-1" },
    { id: 10, type: "flower", top: "42%", left: "65%", size: 30, animType: "float-2" },
    { id: 11, type: "leaf", top: "46%", left: "90%", size: 36, animType: "float-4" },
    { id: 12, type: "strawberry", top: "65%", left: "20%", size: 32, animType: "float-3" },
    { id: 13, type: "flower", top: "68%", left: "50%", size: 28, animType: "float-2" },
    { id: 14, type: "butterfly", top: "62%", left: "80%", size: 32, animType: "float-1" },
    { id: 15, type: "leaf", top: "85%", left: "12%", size: 36, animType: "float-4" },
    { id: 16, type: "strawberry", top: "88%", left: "40%", size: 30, animType: "float-3" },
    { id: 17, type: "flower", top: "82%", left: "68%", size: 34, animType: "float-2" },
    { id: 18, type: "butterfly", top: "90%", left: "92%", size: 32, animType: "float-1" },
    { id: 19, type: "strawberry", top: "35%", left: "94%", size: 30, animType: "float-3" },
    { id: 20, type: "leaf", top: "15%", left: "3%", size: 32, animType: "float-4" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <div
          key={el.id}
          className={`absolute animate-${el.animType}`}
          style={{
            top: el.top,
            left: el.left,
            opacity: 0.55,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {el.type === "butterfly" && <Butterfly size={el.size} />}
          {el.type === "flower" && <Flower size={el.size} />}
          {el.type === "strawberry" && <Strawberry size={el.size} />}
          {el.type === "leaf" && <LeafDecor size={el.size} />}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
