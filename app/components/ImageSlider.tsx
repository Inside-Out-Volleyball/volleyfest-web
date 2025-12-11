'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const baseUrl = (process.env.NEXT_PUBLIC_SLIDER_BASE_URL || "https://volleyfest.blob.core.windows.net/frontpage-slider").replace(/\/$/, "");

const slides = [
  "IMG_0014.JPG",
  "IMG_0022.JPG",
  "IMG_0332.JPG",
  "IMG_0625.JPG",
  "IMG_9978.JPG",
].map((name) => `${baseUrl}/${name}`);

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === current}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === current
                ? 'bg-white w-8'
                : 'bg-white/60 hover:bg-white/80 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
}
