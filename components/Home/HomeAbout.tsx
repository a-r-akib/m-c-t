import { Car, ShieldCheck, Users } from "lucide-react";
import WebPageWrapperLarge from "../WebpageWrapperLarge";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeAbout() {
  return (
    <section id="About" className="py-20 lg:py-20 bg-white">
      <WebPageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Red Accent Badge */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
              <img
                src="/img/home/2.jpeg"
                alt="Quality Vehicles Showroom"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-[2px] bg-red-600"></span>
                  <span className="text-red-500 text-xs font-bold uppercase tracking-wider">
                    Quality Vehicles
                  </span>
                </div>
                <p className="text-white font-semibold text-lg">
                  Trusted Service & Certified Inspection
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content and 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3 text-zinc-600 text-xs font-semibold uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-red-600"></span>
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Company Overview
            </h2>

            <p className="text-zinc-600 leading-relaxed text-base">
              Muhammad Cars Trading is a reputable name in the automotive
              industry, offering a wide range of quality vehicles and
              professional car trading services. We are dedicated to providing
              our customers with reliable vehicles and a smooth, transparent
              buying experience.
            </p>

            {/* Three Footer Cards matching the design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200">
              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-xl hover:border-red-500/50 transition shadow-sm">
                <div className="w-10 h-10 mb-3 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-zinc-900 text-sm">
                  Quality Vehicles
                </h4>
                <p className="text-xs text-zinc-500 mt-1">Well Inspected</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-xl hover:border-red-500/50 transition shadow-sm">
                <div className="w-10 h-10 mb-3 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-zinc-900 text-sm">
                  Trusted Service
                </h4>
                <p className="text-xs text-zinc-500 mt-1">Customer Focused</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-xl hover:border-red-500/50 transition shadow-sm">
                <div className="w-10 h-10 mb-3 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-zinc-900 text-sm">
                  Professional Team
                </h4>
                <p className="text-xs text-zinc-500 mt-1">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
