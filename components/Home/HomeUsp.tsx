import { Users, ShieldCheck, Globe } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeUsp() {
  const trustItems = [
    {
      icon: <Users className="w-8 h-8 text-zinc-700" />,
      title: "Verified Member Since",
      subtitle: "2018",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-zinc-700" />,
      title: "Certified Dealer",
      subtitle: null,
    },
    {
      icon: <Globe className="w-8 h-8 text-zinc-700" />,
      title: "Global Export Network",
      subtitle: null,
    },
  ];

  return (
    <section className="pb-20 bg-white">
      <WebPageWrapper>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Heading */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Trust and Credibility
            </h2>
          </div>

          {/* Trust Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-4">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-inner mb-5">
                  {item.icon}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-zinc-900 text-base">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="font-semibold text-zinc-900 text-base">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}