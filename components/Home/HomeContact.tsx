"use client";

import { useState } from "react";
import { ChevronDown, Send, Phone, Mail } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";

export default function HomeContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    "FAQ accordion item one",
    "FAQ accordion item two",
    "FAQ accordion item three",
    "FAQ accordion item four",
  ];

  return (
    <section id="Contact" className="py-20 bg-whiteW">
      <WebPageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: About Info & Accordions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
                About Muhammad Cars Trading
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Muhammad Cars Trading is a premier international automotive
                supplier, offering comprehensive car sourcing, inspection
                services, logistics and reliable export solutions from global
                destinations to clients worldwide.
              </p>
            </div>

            {/* FAQ / Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 rounded-xl bg-zinc-50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-zinc-900 hover:text-red-600 transition-colors"
                  >
                    <span>{faq}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180 text-red-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4 text-sm text-zinc-600 border-t border-zinc-200/60 pt-3">
                      Detailed information regarding {faq.toLowerCase()} and
                      associated trading policies, vehicle inspections, and
                      export documentation.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact/Enquiry Form Card */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  LOOKING FOR A SPECIFIC CAR?
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Fill out the form below and our team will get back to you
                  shortly.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  Request a Vehicle
                </button>
              </form>

              {/* Sub-links matching layout */}
              {/* <div className="pt-4 border-t border-zinc-200 flex flex-col space-y-2 text-xs text-zinc-600 font-medium">
                  <a href="#request" className="hover:text-red-600 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Request a Vehicle →
                  </a>
                  <a href="#contact" className="hover:text-red-600 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span> Contact methods
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
