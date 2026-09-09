import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Target, Eye, Sparkles, CheckCircle2, Shield, TrendingUp } from 'lucide-react';

export const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'mission' | 'vision'>('both');

  return (
    <section id="about" className="py-24 relative bg-slate-50/70 border-y border-slate-200/80 overflow-hidden">
      {/* Background soft ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Organizational Mandate</span>
          </div>
          <h2
            id="mission-vision-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display"
          >
            Our Mission and Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            The guiding principles driving Zone Souq’s expansion as a trusted bridge between international suppliers and dynamic regional commerce.
          </p>

          {/* Quick tab controls with animated active pill */}
          <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 text-xs font-semibold shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`relative px-4 py-2 rounded-full transition-colors cursor-pointer ${
                activeTab === 'both' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'both' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`relative px-4 py-2 rounded-full transition-colors cursor-pointer ${
                activeTab === 'mission' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'mission' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Mission
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`relative px-4 py-2 rounded-full transition-colors cursor-pointer ${
                activeTab === 'vision' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'vision' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              Vision
            </button>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <AnimatePresence mode="wait">
            {(activeTab === 'both' || activeTab === 'mission') && (
              <motion.div
                key="mission-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                id="mission-card"
                className="relative group rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-xs group-hover:scale-105 transition-transform">
                      <Target className="w-7 h-7" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-500 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                      Mandate 01
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                      Our Mission
                    </h3>
                    <blockquote className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic border-l-3 border-amber-500 pl-4 py-1">
                      "{COMPANY_DETAILS.mission}"
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="text-xs uppercase tracking-wider font-bold text-amber-700">
                      Mission Commitments
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Reliable Delivery Schedules</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Transparent Wholesale Pricing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Multi-Tier Quality Audits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Long-Term Partner Value</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>Quality Assurance & Commercial Integrity</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vision Card */}
          <AnimatePresence mode="wait">
            {(activeTab === 'both' || activeTab === 'vision') && (
              <motion.div
                key="vision-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: activeTab === 'both' ? 0.1 : 0 }}
                whileHover={{ y: -4 }}
                id="vision-card"
                className="relative group rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-105 transition-transform">
                      <Eye className="w-7 h-7" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-500 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                      Mandate 02
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-3">
                      Our Vision
                    </h3>
                    <blockquote className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic border-l-3 border-emerald-500 pl-4 py-1">
                      "{COMPANY_DETAILS.vision}"
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                      Strategic Aspirations
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Premier Regional Hub Status</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Agile Supply Technologies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Customer-Centric Execution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Cross-Border Commercial Trust</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>Continuous Innovation & Sustainable Growth</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
