"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import WebPageWrapper from "../WebPageWrapper";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md shadow-lg">
      <WebPageWrapper>
        <div className="h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="px-2 bg-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-red-600/30 h-[50] overflow-hidden">
              <Image src="/img/logo/mct.png" alt="" height={200} width={70} className=" h-[100] object-cover"/>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {["Home", "Companies", "Vehicles", "About", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  className="transition-colors hover:text-red-500"
                >
                  {item}
                </button>
              ),
            )}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-md shadow-lg shadow-red-600/20 transition transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </WebPageWrapper>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {["Home", "Companies", "Vehicles", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-red-500 transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-md text-center shadow-lg shadow-red-600/20 transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}