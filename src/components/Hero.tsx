import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-[100px] bg-white">
      {/* Main Hero Content */}
      <div className="flex-grow flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-school-primary" />
                <span className="text-school-primary font-bold uppercase tracking-[0.3em] text-[10px]">
                  Welcome to Crescent
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Nurturing <span className="text-school-primary">Excellence</span> Since 2018
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
                A child-focused curriculum emphasizing activity-based learning, STEM education, and holistic development in a secure environment.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a
                  href="#admissions"
                  className="bg-school-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-school-accent transition-all shadow-xl shadow-school-primary/20 active:scale-95"
                >
                  Admission Now
                </a>
                <a
                  href="#about"
                  className="bg-white text-school-primary border-2 border-school-primary px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-school-primary hover:text-white transition-all active:scale-95"
                >
                  Our Story
                </a>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
                <div>
                  <p className="text-3xl font-bold text-school-primary">8+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years Legacy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-school-primary">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Smart Classes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-school-primary">STEM</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Focused</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="../public/Crescent-School-pic-1.jpg" 
                  alt="Students Learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-primary/40 to-transparent" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-school-secondary rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-[3rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="bg-school-primary py-4 overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                <span className="w-2 h-2 bg-school-secondary rounded-full" />
                Admissions Open for 2026-27
              </span>
              <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                <span className="w-2 h-2 bg-school-secondary rounded-full" />
                Smart Classrooms with Interactive Boards
              </span>
              <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                <span className="w-2 h-2 bg-school-secondary rounded-full" />
                STEM Integrated Curriculum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
