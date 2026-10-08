export default function HomeJourney() {
  const steps = [
    { step: "NS", label: "Sampingan", desc: "Initial counseling & goal setting", align: "top" },
    { step: "02", label: "Resume / Less Prep", desc: "Document assembly & training", align: "bottom" },
    { step: "03", label: "Japanese Language", desc: "JLPT N5 to N1 training courses", align: "top" },
    { step: "06", label: "Visa Processing", desc: "COE & Embassy visa application", align: "bottom" },
    { step: "07", label: "Enrolled in Japan", desc: "Departure & settlement support", align: "top" },
  ];

  return (
    <section id="journey" className="py-20 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-block text-red-600 text-xs font-extrabold uppercase tracking-[0.2em]">
            Process Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            The JEJC Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A transparent, step-by-step roadmap from your first consultation to your enrollment in Japan.
          </p>
        </div>

        {/* Desktop Winding Timeline Layout */}
        <div className="relative hidden lg:block py-12">
          
          {/* SVG Winding Curve Line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 px-12">
            <svg className="w-full h-24 text-red-500/80 overflow-visible" fill="none" viewBox="0 0 1000 120" preserveAspectRatio="none">
              <path
                d="M 0,60 C 150,120 250,0 400,60 C 550,120 650,0 800,60 C 900,90 950,40 1000,20"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const isTop = item.align === "top";
              return (
                <div key={idx} className={`flex flex-col items-center ${isTop ? "-translate-y-14" : "translate-y-14"}`}>
                  
                  {/* Content Card (if top, goes above node; if bottom, goes below node) */}
                  {isTop && (
                    <div className="mb-6 w-full bg-white p-5 rounded-2xl border border-slate-200 shadow-xl text-center transition-all hover:border-red-500/50">
                      <div className="text-2xl font-black text-red-600 mb-1">{item.step}</div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}

                  {/* Node Marker on Curve */}
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-red-600 shadow-md flex items-center justify-center my-2">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  </div>

                  {/* Content Card for Bottom alignment */}
                  {!isTop && (
                    <div className="mt-6 w-full bg-white p-5 rounded-2xl border border-slate-200 shadow-xl text-center transition-all hover:border-red-500/50">
                      <div className="text-2xl font-black text-red-600 mb-1">{item.step}</div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile / Tablet Stacked Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 mx-auto rounded-2xl bg-red-600 text-white font-black text-lg flex items-center justify-center mb-4 shadow-md shadow-red-600/30">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.label}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}