"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Önce (Mat / Çizikli)",
  afterLabel = "Sonra (Pasta-Cila & Koruma)",
  title = "Dönüşümü Kendi Gözlerinizle Görün",
  description = "Velorax detailing stüdyomuzda uygulanan pasta-cila ve boya koruma işlemlerinin yüzey üzerindeki etkisini kaydırıcıyı sürükleyerek inceleyin."
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  
  const [beforeLoadError, setBeforeLoadError] = useState(false);
  const [afterLoadError, setAfterLoadError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  // Inline SVG Fallbacks for demonstrating car body paint before & after
  const renderPaintSvg = (type: "before" | "after") => {
    const color = type === "before" ? "#2a2f35" : "#0d0e10";
    const highlightOpacity = type === "before" ? "0.15" : "0.85";
    const blurVal = type === "before" ? "12" : "2";

    return (
      <svg className="w-full h-full object-cover bg-carbon-black" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill={color} />
        {/* Subtle metal body curves */}
        <path d="M-100 100 Q 300 250 900 100" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.08" />
        <path d="M-100 250 Q 300 350 900 250" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.08" />
        
        {/* Detailer LED Hexagonal Light pattern overlay */}
        <g stroke="#ffffff" strokeWidth="1.5" strokeOpacity={highlightOpacity} strokeLinecap="round" strokeLinejoin="round" filter={`blur(${type === "before" ? "4px" : "0px"})`}>
          <polygon points="400,100 450,130 450,190 400,220 350,190 350,130" fill="none" />
          <polygon points="520,100 570,130 570,190 520,220 470,190 470,130" fill="none" />
          <polygon points="280,100 330,130 330,190 280,220 230,190 230,130" fill="none" />
        </g>

        {/* LED Reflection highlight */}
        <circle cx="400" cy="160" r="120" fill="#43BCEB" fillOpacity="0.1" filter="blur(80px)" />
        
        {/* Swirl Scratch marks for "Before" or Glossy reflection for "After" */}
        {type === "before" ? (
          // Swirl scratches
          <g stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" filter="blur(0.5px)">
            {/* Many small curved arcs to simulate swirl marks under LED */}
            <path d="M 370 120 A 30 30 0 0 1 430 150" fill="none" />
            <path d="M 350 140 A 40 40 0 0 0 420 180" fill="none" />
            <path d="M 390 100 A 25 25 0 0 1 440 130" fill="none" />
            <path d="M 430 160 A 35 35 0 0 1 380 200" fill="none" />
            <path d="M 450 110 A 50 50 0 0 0 350 170" fill="none" />
            <path d="M 250 150 A 40 40 0 0 0 310 190" fill="none" />
            <path d="M 500 130 A 30 30 0 0 1 540 170" fill="none" />
          </g>
        ) : (
          // Mirror reflections
          <g>
            <circle cx="400" cy="160" r="80" fill="#FFFFFF" fillOpacity="0.4" filter={`blur(${blurVal}px)`} />
            <circle cx="520" cy="160" r="80" fill="#FFFFFF" fillOpacity="0.4" filter={`blur(${blurVal}px)`} />
            <circle cx="280" cy="160" r="80" fill="#FFFFFF" fillOpacity="0.4" filter={`blur(${blurVal}px)`} />
          </g>
        )}

        {/* Text inside SVG as extra fallback helper */}
        <rect x="20" y="20" width="160" height="30" rx="4" fill="#000000" fillOpacity="0.6" />
        <text x="35" y="40" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
          {type === "before" ? "KILCAL ÇİZİKLER" : "AYNA GİBİ PARLAKLIK"}
        </text>
      </svg>
    );
  };

  return (
    <div className="w-full">
      {/* Header Info */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white mb-4">
          {title}
        </h2>
        <p className="text-base text-chrome-silver leading-relaxed">
          {description}
        </p>
      </div>

      {/* Slider Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize touch-pan-y"
      >
        {/* AFTER IMAGE (Background - Full width) */}
        <div className="absolute inset-0 w-full h-full">
          {afterLoadError ? (
            renderPaintSvg("after")
          ) : (
            <img 
              src={afterImage} 
              alt="Uygulama Sonrası Detailing" 
              className="w-full h-full object-cover"
              onError={() => setAfterLoadError(true)}
              loading="lazy"
            />
          )}
          {/* Label After */}
          <div className="absolute right-4 bottom-4 px-3 py-1.5 rounded bg-brand-red/90 text-white text-xs font-bold uppercase tracking-wider z-20 shadow-md">
            {afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Overlay - Width controlled by slider position) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden z-10 border-r-2 border-brand-red"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full aspect-[16/9]" style={{ width: containerWidth }}>
            {beforeLoadError ? (
              renderPaintSvg("before")
            ) : (
              <img 
                src={beforeImage} 
                alt="Uygulama Öncesi Detailing" 
                className="w-full h-full object-cover max-w-none"
                style={{ width: containerWidth }}
                onError={() => setBeforeLoadError(true)}
                loading="lazy"
              />
            )}
            {/* Label Before */}
            <div className="absolute left-4 bottom-4 px-3 py-1.5 rounded bg-carbon-black/80 border border-white/10 text-white text-xs font-bold uppercase tracking-wider z-20 shadow-md whitespace-nowrap">
              {beforeLabel}
            </div>
          </div>
        </div>

        {/* SLIDER BAR HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-30 w-1 bg-brand-red cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Handle button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-red text-white border-2 border-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
