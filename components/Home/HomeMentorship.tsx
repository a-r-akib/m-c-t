import { Sparkles, Users, Award } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeMentorship() {
  return (
    <section id="mentorship" className="py-20 bg-white relative overflow-hidden">
      <WebPageWrapper>
        {/* TOP HEADER & BANNER IMAGE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mb-5">
          {/* Left Side: Section Header */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl h-[320px] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Professional Mentoring Session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent flex items-end p-6">
                <span className="bg-red-600 text-white text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Corporate Standards
                </span>
              </div>
            </div>
          </div>
          {/* Right Side: Immersive Top Banner Image */}
          <div className="lg:col-span-6 space-y-4 p-3">
            <div className="text-blue-800 text-xs font-extrabold uppercase tracking-[0.2em]">
              Professional Mentoring
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-800 tracking-tight leading-tight">
              Career{" "}
              <span className="italic font-normal text-red-500">
                preparation
              </span>{" "}
              & expert{" "}
              <span className="italic font-normal text-blue-800">
                mentorship
              </span>
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Rigorous preparation including interview training, resume
              crafting, and Japanese corporate etiquette.
            </p>
          </div>
        </div>

        {/* BOTTOM 2 CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-3xl h-80 bg-zinc-900 transition-all">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Interview Training"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-blue-800 text-white text-xs px-3.5 py-1.5 rounded-full font-bold w-max mb-3 uppercase tracking-wider">
                Interview Training
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Master Japanese Corporate Interview Standards
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-3xl h-80 bg-zinc-900 transition-all">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Resume Building"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-red-600 text-white text-xs px-3.5 py-1.5 rounded-full font-bold w-max mb-3 uppercase tracking-wider">
                Resume Building
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Professional Rirekisho & CV Crafting for Success
              </h3>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
