"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeReviews() {
  const testimonials = [
    {
      quote:
        "Great treatment right form the get go. Was looking at a car that had just arrived on the lot so it wasn't immediately available for a test drive and didn't have a price yet, but my salesman kept me fully apprised of the situation. Offered a refundable deposit until I could test drive it and make a decision. Great car, great sales team.",
      author: "Charles M. Worsham",
      vehicle: "Toyota C-HR Eclipse",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    },
    // Add additional testimonials here as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 bg-zinc-950 border-t border-zinc-800/80 overflow-hidden">
      <WebPageWrapper>
        <div className="relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Red Frame Box with Car Image */}
            <div className="lg:col-span-6 relative">
              {/* Pink / Red Accent Border Frame */}
              {/* <div className="absolute -inset-4 border-6 border-red-600 rounded-none pointer-events-none -translate-x-10 -translate-y-8 z-0"></div> */}

              {/* Car Image Container */}
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">
                <img
                  src={current.image}
                  alt={current.vehicle}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* Right Column: Review Text & Details */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              {/* Section Header */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Our Testimonials
                </h2>
                <div className="w-12 h-0.5 bg-red-600"></div>
              </div>

              {/* Quote Block */}
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-zinc-600 rotate-180" />
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {current.quote}
                </p>
              </div>

              {/* Author and Vehicle */}
              <div className="pt-2">
                <p className="font-bold text-white text-sm">
                  {current.author}{" "}
                  <span className="font-normal text-zinc-400">
                    {current.vehicle}
                  </span>
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 pt-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx
                        ? "w-6 bg-red-600"
                        : "w-2.5 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Top navigation arrows matching reference */}
          <div className="absolute top-0 right-4 flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}