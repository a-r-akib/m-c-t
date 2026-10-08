"use client";

import { useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeStudyAndWork() {
  const [activeTab, setActiveTab] = useState("study");

  return (
    <section
      id="study&job"
      className="py-20 bg-[#f4f7fa] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <WebPageWrapper>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header with Signature Typography */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-blue-800 text-xs font-extrabold uppercase tracking-[0.2em]">
              Programs & Placement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-900 tracking-tight leading-tight">
              Academic{" "}
              <span className="italic font-normal text-blue-800">
                excellence
              </span>{" "}
              & professional{" "}
              <span className="italic font-normal text-red-600">careers</span>{" "}
              in Japan
            </h2>

            <p className="text-zinc-600 text-base leading-relaxed">
              Whether you want to study at world-class Japanese institutions or
              secure a direct professional career, JEJC provides end-to-end
              expert support.
            </p>

            {/* Interactive Toggle Tabs */}
            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={() => setActiveTab("study")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === "study"
                    ? "bg-blue-800 text-white shadow-lg shadow-blue-600/25 scale-105"
                    : "bg-white text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Study Programs
              </button>
              <button
                onClick={() => setActiveTab("work")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === "work"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105"
                    : "bg-white text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Work Opportunities
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Dynamic Content Based on Active Tab */}
            <div className="lg:col-span-6 space-y-6">
              {activeTab === "study" ? (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Study & Build Your Future in Japan 🎓
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Gain world-class education from esteemed Japanese
                    institutions. We guide you through school selection,
                    applications, scholarships, and visa documentation.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        🏫 Language Schools
                      </h4>
                      <p className="text-xs text-slate-500">
                        Foundation for fluency and higher studies.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        🎓 Vocational Colleges
                      </h4>
                      <p className="text-xs text-slate-500">
                        Specialized technical training & skills.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        🏛️ Universities
                      </h4>
                      <p className="text-xs text-slate-500">
                        Bachelor's degrees with global recognition.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                        🔬 Graduate Schools
                      </h4>
                      <p className="text-xs text-slate-500">
                        Master's & Ph.D. research programs.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all"
                    >
                      <span>Start Your Study Journey</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
                    Direct Professional Careers in Japan 💼
                  </h3>
                  <p className="text-zinc-600 text-base leading-relaxed">
                    Secure high-demand jobs across thriving Japanese industries
                    with complete visa processing, language training, and
                    official placement support.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                      <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        🏥 Caregiving & Nursing
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Essential healthcare career placements.
                      </p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                      <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        💻 Engineering & IT
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Tech roles in top metropolitan firms.
                      </p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                      <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        🏨 Hospitality & Tourism
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Hotel management & customer service.
                      </p>
                    </div>
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                      <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        ⚙️ Specified Skilled Worker
                      </h4>
                      <p className="text-xs text-zinc-500">
                        Manufacturing & construction visas.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/25 transition-all"
                    >
                      <span>Explore Career Opportunities</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Immersive Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-zinc-200 h-[450px] bg-zinc-100">
                <img
                  src={
                    activeTab === "study"
                      ? "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
                      : "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  }
                  alt="Japan Study and Career"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-bold ${activeTab === "study" ? "bg-blue-600" : "bg-red-600"}`}
                    >
                      {activeTab === "study"
                        ? "Academic Program"
                        : "Professional Placement"}
                    </span>
                    <h3 className="text-xl font-black mt-2">
                      {activeTab === "study"
                        ? "Achieve your academic dreams in Tokyo & Kyoto"
                        : "Build a stable, long-term career in Japan"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
