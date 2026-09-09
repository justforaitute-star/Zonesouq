import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRADE_PROCESS_STEPS } from '../data/companyData';
import { Search, FileSpreadsheet, ShieldAlert, CheckCircle2, ChevronRight, Workflow, CheckCheck } from 'lucide-react';

export const TradeProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-amber-600" />
            <span>End-to-End Operational Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Global Sourcing to Local Distribution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A structured, transparent four-phase execution pipeline that guarantees product fidelity, full customs adherence, and punctual dispatch.
          </p>
        </motion.div>

        {/* Step Progression Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {TRADE_PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <motion.button
                key={step.step}
                type="button"
                whileHover={{ y: -2 }}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-200 relative cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-amber-500 shadow-md shadow-amber-500/10 ring-2 ring-amber-400/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-display font-bold text-xs px-2.5 py-0.5 rounded-full ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Phase {step.step}
                  </span>
                  {idx < 3 && (
                    <ChevronRight className="w-4 h-4 text-slate-400 hidden md:block" />
                  )}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">{step.title}</div>
                <div className="text-xs text-slate-600 line-clamp-2">
                  {step.description}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card with Motion Animation */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-amber-700">
                  <span>Active Phase {TRADE_PROCESS_STEPS[activeStep].step}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {TRADE_PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {TRADE_PROCESS_STEPS[activeStep].description}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    Quality & Operational Safeguards
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {TRADE_PROCESS_STEPS[activeStep].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    Documentation & Verification Standard
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Zone Souq Protocol Specification
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Certified commercial oversight ensuring shipments comply with UAE port customs, chamber of commerce regulations, and destination requirements.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-emerald-800 font-semibold flex items-center gap-2">
                  <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Phase Compliance & Audit Trail</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
