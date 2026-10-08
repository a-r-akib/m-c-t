import {
  ArrowRight,
  Globe,
  Award,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeWhyChoose() {
  return (
    <section className="py-20 bg-[#f4f7fa] relative overflow-hidden">
      <WebPageWrapper>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* TOP SECTION: Asymmetric Image Collage (Left) & Content (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Side: Modern Multi-Image Collage matching reference layout */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl h-64 bg-zinc-200 shadow-md ring-4 ring-white">
                    <img
                      src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80"
                      alt="Student consulting at JEJC"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl h-40 bg-zinc-200 shadow-md ring-4 ring-white">
                    <img
                      src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
                      alt="Tokyo Skyline"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="relative overflow-hidden rounded-2xl h-40 bg-zinc-200 shadow-md ring-4 ring-white">
                    <img
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                      alt="Language class"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl h-64 bg-zinc-200 shadow-md ring-4 ring-white">
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                      alt="Professional career"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Header & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-red-600 text-xs font-extrabold uppercase tracking-[0.2em]">
                Our Pillars
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-900 tracking-tight leading-tight">
                Why choose{" "}
                <span className="italic font-normal text-blue-800">JEJC</span>{" "}
                for your{" "}
                <span className="italic font-normal text-red-600">Japan</span>{" "}
                journey
              </h2>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                Four core pillars that set us apart as the premier Japan
                guidance consultancy in Bangladesh, ensuring complete
                transparency from counseling to career placement.
              </p>

              {/* Quick Checklist Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-800 flex-shrink-0" />
                  <span className="font-semibold text-zinc-800 text-sm">
                    Flawless Documentation
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="font-semibold text-zinc-800 text-sm">
                    End-to-End Tokyo Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM: 4 Pillars Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Admin / Financial Expertise",
                desc: "Flawless document verification and bank statement guidance.",
                icon: <ShieldCheck className="w-7 h-7 text-blue-800" />,
                badgeBg: "bg-blue-50 border-blue-100",
              },
              {
                title: "End-to-End Support",
                desc: "From Dhaka counseling to touchdown in Tokyo.",
                icon: <Globe className="w-7 h-7 text-red-600" />,
                badgeBg: "bg-red-50 border-red-100",
              },
              {
                title: "Professional Guidance",
                desc: "Experienced mentors with deep Japanese industry ties.",
                icon: <Award className="w-7 h-7 text-blue-800" />,
                badgeBg: "bg-blue-50 border-blue-100",
              },
              {
                title: "Language + Career",
                desc: "Integrated JLPT training combined with direct job placement.",
                icon: <Sparkles className="w-7 h-7 text-red-600" />,
                badgeBg: "bg-red-50 border-red-100",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:border-red-500/50 transition-all text-center space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl ${pillar.badgeBg} border flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-14">
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
