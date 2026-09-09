import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight, ShieldCheck, FileCheck, PackageCheck, Truck, Navigation, CheckCircle2 } from 'lucide-react';

interface Corridor {
  id: string;
  name: string;
  region: string;
  type: string;
  transitType: string;
  leadFocus: string;
  coordinates: { x: number; y: number };
}

const CORRIDORS: Corridor[] = [
  {
    id: 'east-asia',
    name: 'East Asia Manufacturing Corridor',
    region: 'China, Taiwan, South Korea',
    type: 'High-Volume Production & Consumer Goods',
    transitType: 'Sea Freight & Containerized Cargo',
    leadFocus: 'Bulk Manufactured Goods & High-Demand Commodities',
    coordinates: { x: 780, y: 190 },
  },
  {
    id: 'south-asia',
    name: 'South Asia Trade Corridor',
    region: 'India, Pakistan, Southeast Asia',
    type: 'Raw Materials, Textiles & Food Commodities',
    transitType: 'Maritime & Direct Airfreight',
    leadFocus: 'Fast-Moving Consumer Goods & Bulk Supplies',
    coordinates: { x: 670, y: 240 },
  },
  {
    id: 'europe',
    name: 'European Specialty Corridor',
    region: 'Western & Central Europe',
    type: 'Precision Goods, Tools & Packaged Commodities',
    transitType: 'Intermodal Air & Maritime Routing',
    leadFocus: 'Certified Standardized Products',
    coordinates: { x: 470, y: 150 },
  },
  {
    id: 'americas',
    name: 'Americas Trade Corridor',
    region: 'North & South American Exporters',
    type: 'Industrial Materials & Agricultural Products',
    transitType: 'Trans-Oceanic Freight Routes',
    leadFocus: 'Specialized Industrial Bulk Consignments',
    coordinates: { x: 190, y: 180 },
  },
];

export const GlobalTradeVisualizer: React.FC = () => {
  const [selectedCorridor, setSelectedCorridor] = useState<Corridor>(CORRIDORS[0]);

  // Center UAE Hub coordinates in SVG (x: 580, y: 220)
  const hubCoords = { x: 580, y: 220 };

  return (
    <section id="trading" className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>International Trade Corridors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Connecting Global Suppliers With Local Markets
            </h2>
            <p className="text-slate-600 text-base">
              Zone Souq acts as an agile trading nexus headquartered in Ras Al Khaimah (UAE), orchestrating bulk procurement from world manufacturing centers directly to regional merchant channels.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <Navigation className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Select any corridor to inspect trade logistics and verification</span>
          </div>
        </motion.div>

        {/* Interactive Map Visualizer Container */}
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm">
          {/* Top visualizer status bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 px-6 py-4 bg-white gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-800">
                Central Hub: Zone Souq (Ras Al Khaimah, UAE)
              </span>
            </div>

            {/* Quick corridor selector buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {CORRIDORS.map((corridor) => {
                const isActive = selectedCorridor.id === corridor.id;
                return (
                  <button
                    key={corridor.id}
                    type="button"
                    onClick={() => setSelectedCorridor(corridor)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {corridor.name.split(' ')[0]} {corridor.name.split(' ')[1]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Vector Graphic */}
          <div className="relative h-[340px] sm:h-[420px] w-full bg-[#f8fafc] overflow-hidden flex items-center justify-center p-4">
            <svg
              viewBox="0 0 960 460"
              className="w-full h-full object-contain select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="lightGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
                </pattern>
                <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              <rect width="100%" height="100%" fill="url(#lightGrid)" />

              {/* Simplified Abstract Continental Shapes in Light Theme */}
              <g fill="#e2e8f0" opacity="0.6">
                {/* North America */}
                <path d="M 120,70 Q 180,50 250,90 Q 230,190 170,200 Q 130,160 120,70 Z" />
                {/* South America */}
                <path d="M 230,220 Q 290,240 280,350 Q 230,410 210,340 Q 200,270 230,220 Z" />
                {/* Europe */}
                <path d="M 430,70 Q 520,60 520,130 Q 480,180 430,150 Q 410,100 430,70 Z" />
                {/* Africa */}
                <path d="M 440,180 Q 530,170 540,260 Q 510,380 460,340 Q 420,240 440,180 Z" />
                {/* Asia */}
                <path d="M 550,70 Q 770,50 830,160 Q 780,270 660,260 Q 590,180 550,70 Z" />
                {/* Australia */}
                <path d="M 750,300 Q 840,310 830,390 Q 740,390 750,300 Z" />
              </g>

              {/* Connecting Trade Route Curves */}
              {CORRIDORS.map((corridor) => {
                const isActive = selectedCorridor.id === corridor.id;
                const midX = (corridor.coordinates.x + hubCoords.x) / 2;
                const midY = (corridor.coordinates.y + hubCoords.y) / 2 - 35;

                return (
                  <g key={`path-${corridor.id}`}>
                    <path
                      d={`M ${corridor.coordinates.x},${corridor.coordinates.y} Q ${midX},${midY} ${hubCoords.x},${hubCoords.y}`}
                      fill="none"
                      stroke={isActive ? '#d97706' : '#cbd5e1'}
                      strokeWidth={isActive ? '3' : '1.5'}
                      strokeDasharray={isActive ? '6 6' : '3 3'}
                      className={isActive ? 'animate-[dash_25s_linear_infinite]' : ''}
                      opacity={isActive ? 1 : 0.6}
                    />

                    {/* Origin Node Circle */}
                    <circle
                      cx={corridor.coordinates.x}
                      cy={corridor.coordinates.y}
                      r={isActive ? 7 : 4}
                      fill={isActive ? '#d97706' : '#94a3b8'}
                      className="transition-all duration-300"
                    />

                    {/* Origin Label */}
                    <text
                      x={corridor.coordinates.x}
                      y={corridor.coordinates.y - 12}
                      textAnchor="middle"
                      fill={isActive ? '#0f172a' : '#64748b'}
                      fontSize={isActive ? '12' : '10'}
                      fontWeight={isActive ? 'bold' : 'normal'}
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      {corridor.name.split(' ')[0]} Node
                    </text>
                  </g>
                );
              })}

              {/* UAE Central Hub Target Beacon */}
              <g>
                <circle
                  cx={hubCoords.x}
                  cy={hubCoords.y}
                  r="24"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="1.5"
                  opacity="0.3"
                  className="animate-ping origin-center"
                />
                <circle
                  cx={hubCoords.x}
                  cy={hubCoords.y}
                  r="12"
                  fill="#059669"
                  opacity="0.2"
                />
                <circle
                  cx={hubCoords.x}
                  cy={hubCoords.y}
                  r="6"
                  fill="#059669"
                />
                <text
                  x={hubCoords.x}
                  y={hubCoords.y + 24}
                  textAnchor="middle"
                  fill="#059669"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="Space Grotesk, sans-serif"
                >
                  Zone Souq (RAK-FZ Hub)
                </text>
              </g>
            </svg>
          </div>

          {/* Active Corridor Logistics Spec Banner */}
          <div className="p-6 bg-white border-t border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCorridor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Active Corridor
                  </div>
                  <div className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    {selectedCorridor.name}
                  </div>
                  <div className="text-xs text-slate-500">{selectedCorridor.region}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Cargo Profile
                  </div>
                  <div className="text-xs font-semibold text-slate-800">{selectedCorridor.type}</div>
                  <div className="text-xs text-slate-500 truncate">{selectedCorridor.leadFocus}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Transit & Documentation
                  </div>
                  <div className="text-xs font-semibold text-slate-800">{selectedCorridor.transitType}</div>
                  <div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>RAKEZ Customs Pre-Cleared</span>
                  </div>
                </div>

                <div className="flex md:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full md:w-auto px-5 py-2.5 rounded-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire Corridor Rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
