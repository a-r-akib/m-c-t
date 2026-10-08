import { ArrowRight } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeService() {
  const services = [
    {
      title: "Verified Sourcing",
      description:
        "Verified offerings waic vehicle; sourcing, verhictic, aidrine services, semics and ele...",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Inspecting Inspection",
      description:
        "Professional inspectiliy soaring inspectint inspection inspection, documenterts enrd...",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Documentation",
      description:
        "Documentaring, sennmenpectarn and documentation, documentations down...",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="Blogs" className="relative bg-white pb-20">
      {/* Top Dark Header Block */}
      <div className="bg-zinc-950 py-16 text-white">
        <WebPageWrapper>
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Latest Blogs
            </h2>
          </div>
        </WebPageWrapper>
      </div>

      {/* Services Grid Overlapping or Below */}
      <WebPageWrapper>
        <div className="max-w-7xl mx-auto -mt-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <a
                      href="#learn-more"
                      className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}