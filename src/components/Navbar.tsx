import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'trading', 'services', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Trading Hub', href: '#trading', id: 'trading' },
    { label: 'Trade Sectors', href: '#trade-sectors', id: 'trade-sectors' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm shadow-slate-200/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-logo"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 group-hover:border-amber-500 transition-colors shadow-xs">
                <span className="font-display font-bold text-lg tracking-wider text-amber-700">ZS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
                  {COMPANY_DETAILS.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold -mt-0.5">
                  Regional Trading Hub · UAE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with animated active indicator */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-slate-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBubble"
                        className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Hub Status Beacon & Contact Button */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium tracking-wide">RAK Hub Active</span>
              </div>

              <button
                id="nav-contact-cta"
                type="button"
                onClick={() => onOpenInquiry()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-amber-600 transition-all shadow-xs hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="mobile-contact-trigger"
                type="button"
                onClick={() => onOpenInquiry()}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400"
              >
                Contact
              </button>
              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-2">
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-3 border-b border-slate-100 text-base font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="space-y-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-amber-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-amber-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-amber-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-amber-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">{COMPANY_DETAILS.email}</span>
                </a>
              </div>

              <button
                id="mobile-drawer-contact-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-center hover:bg-amber-600 transition-colors shadow-md"
              >
                Contact Us Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
