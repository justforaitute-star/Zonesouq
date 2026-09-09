import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'accessibility') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-100/90 border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Identity & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-display font-bold text-base shadow-xs">
                ZS
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
                {COMPANY_DETAILS.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              {COMPANY_DETAILS.positioning}
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 transition-colors shadow-xs"
                aria-label="Zone Souq LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 transition-colors shadow-xs"
                aria-label="Zone Souq Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 transition-colors shadow-xs"
                aria-label="Zone Souq Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/971568777245`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-emerald-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-xs"
                aria-label="Zone Souq WhatsApp Business"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-amber-600 transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#trading" className="hover:text-amber-600 transition-colors">
                  Global Trade Corridors
                </a>
              </li>
              <li>
                <a href="#trade-sectors" className="hover:text-amber-600 transition-colors">
                  Active Trade Tiles
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-600 transition-colors">
                  Commercial Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900">
              Contact Credentials
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-amber-600 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-amber-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_DETAILS.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-medium">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('accessibility')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Accessibility Statement
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
