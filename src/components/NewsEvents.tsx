import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: "25",
    month: "MAR",
    title: "Annual Sports Day 2026",
    description: "A day filled with energy, sportsmanship, and incredible performances by our young athletes.",
    category: "Events"
  },
  {
    date: "12",
    month: "MAR",
    title: "Science Exhibition",
    description: "Our students showcased their innovative STEM projects and creative experiments.",
    category: "Academic"
  },
  {
    date: "05",
    month: "MAR",
    title: "Admissions Open",
    description: "Enrolment for the academic year 2026-27 is now open for Pre-KG to Grade 5.",
    category: "Admissions"
  }
];

export default function NewsEvents() {
  return (
    <section id="news" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-school-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Updates</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            News & <span className="text-school-primary">Events</span>
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-school-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
            View All News <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-school-primary text-white p-4 rounded-2xl text-center min-w-[70px] shadow-lg group-hover:scale-110 transition-transform">
                  <span className="block text-2xl font-bold leading-none">{item.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{item.month}</span>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-school-secondary/20 text-school-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-school-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              <button className="text-school-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
