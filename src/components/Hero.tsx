import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ArrowRight, ShieldCheck, Globe2, Compass, Layers, Sparkles, Building2, Anchor } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenInquiry }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50"
    >
      {/* Background Architectural Grid & Light Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-200/40 via-emerald-100/30 to-transparent blur-[120px] opacity-60 rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      {/* Decorative Animated Vector Trade Lines Overlay for Light Theme */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="tradeLineGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>
            <pattern id="dotPatternLight" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternLight)" opacity="0.5" />
          <path
            d="M 120,420 Q 450,200 720,380 T 1320,280"
            fill="none"
            stroke="url(#tradeLineGradLight)"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-[dash_35s_linear_infinite]"
          />
          <path
            d="M 220,180 Q 600,320 720,380 T 1150,560"
            fill="none"
            stroke="url(#tradeLineGradLight)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Animated Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 backdrop-blur-md shadow-xs text-xs font-semibold text-slate-700"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Ras Al Khaimah Economic Zone · United Arab Emirates</span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-700 font-bold uppercase tracking-wider text-[11px]">
              Global Gateway
            </span>
          </motion.div>

          {/* Primary Heading with Staggered Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 font-display leading-[1.08]"
            >
              Discover{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600">
                Zone Souq
              </span>
            </h1>
            <p
              id="hero-positioning"
              className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto"
            >
              {COMPANY_DETAILS.positioning}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              id="hero-cta-services"
              type="button"
              onClick={onExploreServices}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cta-contact"
              type="button"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all hover:border-slate-400 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Initiate Trade Inquiry</span>
              <Compass className="w-4 h-4 text-amber-600" />
            </button>
          </motion.div>

          {/* Core Capabilities Anchor Grid with Motion Hover */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-200/80 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 text-amber-700 mb-1.5">
                <Globe2 className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider text-slate-800">
                  Global Sourcing
                </span>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Direct connections to certified overseas manufacturers and bulk producers.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 text-emerald-700 mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider text-slate-800">
                  Trade Compliance
                </span>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Full documentation, transparent customs clearance & quality verification.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 text-sky-700 mb-1.5">
                <Layers className="w-4 h-4" />
                <span className="text-xs uppercase font-bold tracking-wider text-slate-800">
                  Local Distribution
                </span>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Fast-track dispatch into UAE & GCC wholesale channels from our free zone hub.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
