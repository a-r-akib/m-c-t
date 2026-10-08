import { ArrowRight, Phone, Mail, Car, ShieldCheck } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeHero() {
  return (
    <section id="Home" className="relative overflow-hidden bg-zinc-950 py-20 lg:py-32">
      {/* Background Image with Dark Gradient Overlay to match the design */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-cover bg-right bg-[url('/img/home/2.jpeg')]"></div>

      <WebPageWrapper className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          <div className="lg:col-span-7 space-y-6 ">
            {/* Top Badge matching the reference image */}
            <div className="inline-flex items-center gap-3 text-zinc-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-red-600" />
              Trusted Automotive Partner
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
              Muhammad <br />
              <span className="text-white">Cars Trading</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
              A reliable destination for quality vehicles and professional car
              trading services. Muhammad Cars Trading is committed to delivering
              the best automotive solutions to meet your needs.
            </p>

            {/* Action Buttons matching the screenshot style */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact-form"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-7 py-3.5 rounded-lg shadow-xl shadow-red-600/30 transition flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Contact Company
              </a>
              <a
                href="#details"
                className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium px-7 py-3.5 rounded-lg transition flex items-center gap-2 group text-sm"
              >
                Explore Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
