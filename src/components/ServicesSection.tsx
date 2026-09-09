import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';
import { Layers, Ship, Truck, ArrowUpRight, CheckCircle, Info, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'wholesale-trading':
        return <Layers className="w-6 h-6 text-amber-600" />;
      case 'import-export':
        return <Ship className="w-6 h-6 text-emerald-600" />;
      case 'procurement-distribution':
        return <Truck className="w-6 h-6 text-sky-600" />;
      default:
        return <Layers className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
            <Info className="w-3.5 h-3.5 text-amber-600" />
            <span>Trading & Commercial Capabilities</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display"
          >
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Specialized trading solutions designed to streamline cross-border commerce, maintain rigorous quality oversight, and deliver dependable bulk supply.
          </p>
        </motion.div>

        {/* 3 Interactive Service Cards with Motion Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group rounded-3xl bg-white border border-slate-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl hover:shadow-slate-200/80 hover:border-amber-400"
              >
                {/* Accent line on top */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r transition-all duration-300 ${
                    service.id === 'wholesale-trading'
                      ? 'from-amber-500 to-amber-300'
                      : service.id === 'import-export'
                      ? 'from-emerald-500 to-teal-400'
                      : 'from-sky-500 to-indigo-400'
                  }`}
                />

                <div className="p-8 space-y-6">
                  {/* Top: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform group-hover:bg-amber-50 group-hover:border-amber-200">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-1">
                      {service.tagline}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      {service.title}
                    </h3>
                  </div>

                  {/* Verbatim Factual Description Preserved */}
                  <p className="text-slate-800 text-base leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 font-medium">
                    "{service.description}"
                  </p>

                  {/* Scope details */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.scope}
                  </p>

                  {/* Operational Capabilities List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
                      Core Capabilities
                    </div>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Highlights Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    {service.highlights.map((hl, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <div className="text-[10px] text-slate-500 leading-tight truncate">{hl.label}</div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">{hl.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-slate-50/80 border-t border-slate-100 mt-auto">
                  <button
                    id={`service-btn-${service.id}`}
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-xs cursor-pointer"
                  >
                    <span>Request Trade Quotation</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
