"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SteelScroll() {
  const images = ["/tmtbar3.png", "/tmtbar2.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="steel-scroll-section"
      className="relative w-full min-h-screen overflow-hidden -mt-20 md:-mt-24"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Hero Background"
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay for bottom text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[1]" />

      {/* Content at Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-end pb-16 md:pb-24">
        <div className="w-full max-w-xl text-left">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            Building India&apos;s Future
          </h2>

          <p className="mt-5 text-white/90 text-base md:text-lg leading-relaxed max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Premium TMT bars and structural steel solutions engineered for
            strength, durability, and trust in every project.
          </p>

          <button className="mt-8 px-8 py-4 bg-[#f4c400] text-black font-bold text-sm md:text-lg uppercase tracking-wider rounded-sm shadow-[0_0_20px_rgba(244,196,0,0.25)] hover:scale-105 transition duration-300">
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
}
