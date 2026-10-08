import { ArrowRight, Car, ShieldCheck, HelpCircle, Star } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeOffer() {
  return (
    <section id="Service" className="py-20 lg:py-20 bg-zinc-950">
      <WebPageWrapper>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-3 text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-8 h-[2px] bg-red-600"></span>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What We Offer
            </h2>
            <p className="text-zinc-400 mt-2 text-base max-w-xl">
              We provide a range of automotive services to ensure you find the
              right vehicle with confidence and ease.
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-red-500 hover:text-red-400 text-sm font-semibold flex items-center gap-1 group">
            View All Services & Inventory{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Services Grid (4 boxes) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-500/50 p-6 rounded-2xl transition group shadow-sm">
              <div className="w-12 h-12 bg-zinc-100/10 rounded-xl flex items-center justify-center text-zinc-500 mb-6 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Vehicle Trading</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Wide selection of quality vehicles ready for immediate purchase
                or trade-in.
              </p>
              <div className="mt-6 flex items-center text-zinc-500 text-sm font-semibold">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-500/50 p-6 rounded-2xl transition group shadow-sm">
              <div className="w-12 h-12 bg-zinc-100/10 rounded-xl flex items-center justify-center text-zinc-500 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Vehicle Inspection
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Ensuring reliability and performance through rigorous
                multi-point checks.
              </p>
              <div className="mt-6 flex items-center text-zinc-500 text-sm font-semibold">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-500/50 p-6 rounded-2xl transition group shadow-sm">
              <div className="w-12 h-12 bg-zinc-100/10 rounded-xl flex items-center justify-center text-zinc-500 mb-6 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Customer Support</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Dedicated assistance throughout your car buying and ownership
                journey.
              </p>
              <div className="mt-6 flex items-center text-zinc-500 text-sm font-semibold">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-500/50 p-6 rounded-2xl transition group shadow-sm">
              <div className="w-12 h-12 bg-zinc-100/10 rounded-xl flex items-center justify-center text-zinc-500 mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Trusted Dealership
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Built on integrity, transparency, and total customer
                satisfaction.
              </p>
              <div className="mt-6 flex items-center text-zinc-500 text-sm font-semibold">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Showroom Image Card (Right) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop"
                alt="Your Next Car Is Here"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex flex-col justify-end p-8">
                <div className="inline-block px-3 py-1 bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded w-fit mb-3 shadow-lg shadow-red-600/30">
                  Exclusive Inventory
                </div>
                <h3 className="text-2xl font-black text-white tracking-wide">
                  YOUR NEXT CAR <br />
                  IS HERE
                </h3>
                <p className="text-zinc-300 text-xs mt-2">
                  Browse top-tier luxury SUVs, sedans, and family vehicles with
                  verified documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
