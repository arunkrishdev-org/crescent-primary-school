import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={cn(
        "bg-school-primary text-white py-2 px-4 transition-all duration-300 overflow-hidden",
        isScrolled ? "h-0 py-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="flex items-center gap-2"><Phone size={14} className="text-school-secondary" /> 04362 296 161</span>
            <span className="hidden sm:flex items-center gap-2"><MapPin size={14} className="text-school-secondary" /> 58, Dabeer Kulam Rd, Thanjavur</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 border-r border-white/20 pr-6 mr-2">
              <a href="#" className="hover:text-school-secondary transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-school-secondary transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-school-secondary transition-colors"><Twitter size={14} /></a>
            </div>
            <a href="#admissions" className="text-school-secondary hover:text-white transition-colors animate-pulse">Admissions 2026-27 Open</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          'transition-all duration-300 px-4 py-3',
          isScrolled ? 'glass-morphism shadow-md py-2' : 'bg-white/90 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center text-school-secondary font-bold text-2xl shadow-inner">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-school-primary leading-tight tracking-tight">
                CRESCENT
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                Nursery & Primary School
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.15em] font-bold text-slate-700 hover:text-school-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-school-secondary transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#admissions"
              className="bg-school-primary text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-school-accent transition-all shadow-lg hover:shadow-school-primary/20 active:scale-95"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-school-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-t mt-3 absolute left-0 right-0 shadow-xl"
            >
              <div className="flex flex-col p-6 gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold text-slate-700 uppercase tracking-widest"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#admissions"
                  className="bg-school-primary text-white px-5 py-4 rounded-md text-center font-bold uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
