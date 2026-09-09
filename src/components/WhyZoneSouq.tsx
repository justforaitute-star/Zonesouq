import React from 'react';
import { motion } from 'motion/react';
import { CORE_PILLARS, COMPANY_DETAILS } from '../data/companyData';
import { ShieldCheck, Globe2, Anchor, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyZoneSouqProps {
  onOpenContact: () => void;
}

export const WhyZoneSouq: React.FC<WhyZoneSouqProps> = ({ onOpenContact }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-emerald-600" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-sky-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section className="py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
              <span>Value Proposition</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Why Partner With Zone Souq
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              International trade demands absolute reliability, predictable timelines, and transparent documentation. Headquartered in Ras Al Khaimah, Zone Souq bridges complex overseas supply channels into seamless local market delivery.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 shadow-xs">
              <div className="text-xs uppercase font-bold tracking-wider text-amber-700">
                Corporate Location Advantage
              </div>
              <div className="text-slate-900 font-bold text-sm">
                {COMPANY_DETAILS.address.building}, {COMPANY_DETAILS.address.zone}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Positioned within the UAE’s premier free zone corridor with rapid multimodal transit access across sea lanes, air transport terminals, and highway logistics.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors group cursor-pointer"
            >
              <span>Speak with a Trade Specialist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: 4 Clean Architectural Bento Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-amber-300 hover:bg-white transition-all duration-200 group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform group-hover:border-amber-200">
                    {getPillarIcon(pillar.iconName)}
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-amber-700">
                      {pillar.tagline}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
