import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRADE_TILES_DATA } from '../data/companyData';
import { TradeTileItem } from '../types';
import {
  Cpu,
  Package,
  Layers,
  Wrench,
  Box,
  Gauge,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  FileCheck2,
  CheckCircle2,
  Boxes,
} from 'lucide-react';

interface InteractiveTilesShowcaseProps {
  onSelectTileForInquiry: (tileTitle: string) => void;
}

export const InteractiveTilesShowcase: React.FC<InteractiveTilesShowcaseProps> = ({
  onSelectTileForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTileId, setActiveTileId] = useState<string>(TRADE_TILES_DATA[0].id);
  const [inspectingTile, setInspectingTile] = useState<TradeTileItem | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Commercial Electronics', 'Fast-Moving Consumer Goods', 'Industrial Textiles & Apparel', 'Industrial & Building Hardware', 'Sustainable Packaging', 'Precision Trade Equipment'];

  const filteredTiles =
    selectedCategory === 'All'
      ? TRADE_TILES_DATA
      : TRADE_TILES_DATA.filter((tile) => tile.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getTileIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'Package':
        return <Package className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-sky-600" />;
      case 'Box':
        return <Box className="w-5 h-5 text-teal-600" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-rose-600" />;
      default:
        return <Boxes className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section
      id="trade-sectors"
      className="py-24 relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Interactive Trade Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Explore Active Trade Tiles
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Scroll through active commercial commodity lines managed through Zone Souq's UAE hub.
              Click any tile to inspect logistics specifications, origin corridors, and order volumes.
            </p>
          </div>

          {/* Controls: Scroll Buttons & Counter */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-medium text-slate-500 hidden sm:block">
              Showing <span className="font-semibold text-slate-900">{filteredTiles.length}</span> active corridors
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-600 flex items-center justify-center transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-600 flex items-center justify-center transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Horizontal Scrolling Tiles Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredTiles.map((tile, index) => {
            const isSelected = activeTileId === tile.id;

            return (
              <motion.div
                key={tile.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveTileId(tile.id)}
                className={`w-[320px] sm:w-[360px] shrink-0 snap-start rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-300 relative cursor-pointer group shadow-xs ${
                  isSelected
                    ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-lg shadow-amber-500/5'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Top: Category Pill & Status Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md truncate">
                      {tile.category}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full shrink-0">
                      {tile.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform group-hover:bg-amber-50 group-hover:border-amber-200">
                      {getTileIcon(tile.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-amber-700 transition-colors">
                        {tile.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5 font-normal">
                    {tile.description}
                  </p>
                </div>

                {/* Logistics Micro Specs */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      Origin
                    </span>
                    <span className="font-medium text-slate-800 text-right truncate max-w-[190px]">
                      {tile.origin}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Transit
                    </span>
                    <span className="font-semibold text-slate-800">{tile.leadTime}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Boxes className="w-3.5 h-3.5 text-slate-400" />
                      Min. Volume
                    </span>
                    <span className="font-medium text-slate-700 truncate max-w-[170px]">{tile.moq}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Compliance
                    </span>
                    <span className="text-emerald-700 font-medium truncate max-w-[170px]">
                      {tile.compliance}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectingTile(tile);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Specifications</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTileForInquiry(tile.title);
                    }}
                    className="py-2 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Helper Hint */}
        <div className="flex items-center justify-between text-xs text-slate-400 mt-2 px-2">
          <span>← Swipe or scroll horizontally to inspect more lines →</span>
          <span className="font-medium text-slate-500">Zone Souq Multi-Corridor Dispatch</span>
        </div>
      </div>

      {/* Modal / Slide-out for Tile Detail Inspection */}
      <AnimatePresence>
        {inspectingTile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    {getTileIcon(inspectingTile.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                      {inspectingTile.badge}
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
                      {inspectingTile.title}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectingTile(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center text-sm font-semibold transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {inspectingTile.description}
              </p>

              <div className="space-y-3 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs mb-6">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Origin Corridor:</span>
                  <span className="font-semibold text-slate-800 text-right">{inspectingTile.origin}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Delivery Hub:</span>
                  <span className="font-semibold text-slate-800 text-right">{inspectingTile.destination}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Transit Duration:</span>
                  <span className="font-semibold text-slate-800">{inspectingTile.leadTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Minimum Order Volume:</span>
                  <span className="font-semibold text-slate-800">{inspectingTile.moq}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Regulatory Certifications:</span>
                  <span className="font-semibold text-emerald-700">{inspectingTile.compliance}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Verification Protocol:</span>
                  <span className="font-semibold text-amber-700">{inspectingTile.inspectionTier}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setInspectingTile(null)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = inspectingTile.title;
                    setInspectingTile(null);
                    onSelectTileForInquiry(title);
                  }}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Request Consignment Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
