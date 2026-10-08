import React from "react";
import WebPageWrapper from "../WebPageWrapper";
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

export default function HomeWhyJapan() {
  const reasons = [
    {
      number: "01",
      title: "World-Class Education",
      description:
        "Access to globally recognized universities, colleges, and specialized language institutes.",
      icon: GraduationCap,
    },
    {
      number: "02",
      title: "Strong Career Opportunities",
      description:
        "High demand for skilled professionals across technology, healthcare, and engineering.",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "Safe & Organized Society",
      description:
        "One of the lowest crime rates and most disciplined public infrastructures in the world.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-20 bg-[#f4f7fa] overflow-hidden">
      <WebPageWrapper>
        <div className="relative z-10">
          {/* Asymmetric Split Layout: Left Text/Cards, Right Immersive Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Header & Overview */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 text-blue-800 text-xs font-extrabold uppercase tracking-[0.2em]">
                Why Japan
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-900 leading-tight">
                Why{" "}
                <span className="italic font-normal text-red-600">Japan</span>{" "}
                is your best{" "}
                <span className="italic font-normal text-blue-800">choice</span>
              </h2>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Discover why thousands of international students and
                professionals choose Japan as their ultimate destination for
                career growth, education, and secure living.
              </p>
            </div>

            {/* Right Side: Immersive Clean Image Block with Rounded Corner */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[450px] sm:h-[520px] bg-zinc-200 ring-8 ring-white">
                <img
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Tokyo Architecture and Life"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards Grid (Overlapping or aligned neatly below) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
            {reasons.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.number}
                  className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-red-50 border border-blue-100 group-hover:border-red-100 flex items-center justify-center text-blue-600 group-hover:text-red-600 transition-colors">
                        <IconComponent className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <span className="text-3xl font-black text-zinc-300 group-hover:text-red-500 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
