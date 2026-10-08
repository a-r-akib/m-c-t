"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  Globe,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomePathway() {
  const [activePathway, setActivePathway] = useState("study");

  const pillars = [
    {
      title: "Admin & Financial Expertise",
      desc: "Flawless document verification and bank statement guidance.",
      icon: ShieldCheck,
    },
    {
      title: "End-to-End Support",
      desc: "From Dhaka counseling to touchdown in Tokyo.",
      icon: Globe,
    },
    {
      title: "Professional Guidance",
      desc: "Experienced mentors with deep Japanese industry ties.",
      icon: Award,
    },
    {
      title: "Language + Career Placement",
      desc: "Integrated JLPT training combined with direct job placement.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="path" className="py-24 bg-white relative overflow-hidden">
      <WebPageWrapper>
        {/* TOP HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-blue-800 text-xs font-extrabold uppercase tracking-[0.2em]">
              Why Choose JEJC
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-900 leading-tight">
              Why we are considered <br />
              <span className="italic font-normal text-blue-800">best</span> in
              the{" "}
              <span className="italic font-normal text-red-600">business</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Elevate your journey with our unrivaled expertise and passion for
              excellence! Our rich legacy is rooted in our unwavering maximum
              commitment to turning your Japan dreams into reality.
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Large Curved Image Frame (Left) + Stepped Nodes (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Side: Unique Curved Image Mask */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[480px] sm:h-[540px] bg-zinc-100 ring-4 ring-white">
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
                alt="Students consulting at JEJC"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Side: Sequential Stepped Nodes (matching image layout) */}
          <div className="lg:col-span-6 space-y-8 relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-blue-600/30 -z-0"></div>

            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-blue-50 border-2 border-blue-600 text-blue-600 flex items-center justify-center shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-blue-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM BANNER CARD (matching the green banner style converted to blue & red) */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Decorative background image overlay */}
          {/* <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div> */}

          <div className="relative z-10 space-y-2 max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Transform your future with JEJC consultancy!
            </h3>
            <p className="text-slate-300 text-sm">
              Take the first step toward studying or working in Japan with our
              expert team.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+8801000000000"
              className="inline-flex items-center gap-3 bg-blue-600/30 border border-blue-400/40 hover:bg-blue-600/50 text-white px-6 py-4 rounded-2xl font-bold text-sm backdrop-blur-md transition-all shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-blue-300 uppercase tracking-widest font-extrabold">
                  Book a Session
                </div>
                <div className="text-sm font-black">+880 1XXXXXXXXX</div>
              </div>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <span>Consult Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
