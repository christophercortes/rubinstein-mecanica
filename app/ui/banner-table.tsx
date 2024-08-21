'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Carousel as CarouselType } from '@/app/lib/definitions'; // Adjust the import path as needed

interface CarouselProps {
  slides: CarouselType[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [goToNextSlide]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative">
              <div className="w-full h-[400px] overflow-hidden relative">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-10 left-0 bg-black bg-opacity-50 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          onClick={goToPrevSlide}
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          onClick={goToNextSlide}
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
