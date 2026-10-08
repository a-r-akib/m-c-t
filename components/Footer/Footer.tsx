import { MapPin, Mail, ChevronRight, ExternalLink, Phone } from "lucide-react";
import Image from "next/image";
import WebPageWrapper from "../WebPageWrapper";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-12">
      <WebPageWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="px-2 bg-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-red-600/30 h-[50] overflow-hidden">
              <Image
                src="/img/logo/mct.png"
                alt=""
                height={200}
                width={70}
                className=" h-[100] object-cover"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Connecting You to a Better Tomorrow. Professional automotive
              dealership and vehicle trading services based in Dhaka,
              Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "Companies", "Vehicles", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <button className="hover:text-red-500 transition flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                      {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Our Partners */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Our Partners
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#partner"
                  className="hover:text-red-500 transition flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                  Muhammad Cars Trading
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>+880 1XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>info@rijikinternational.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Mahamud Car Tradings. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </WebPageWrapper>
    </footer>
  );
}
