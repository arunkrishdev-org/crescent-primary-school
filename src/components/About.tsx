import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="Crescent-School-pic-4.jpg"
                alt="School Building"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-school-secondary rounded-2xl -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-slate-100 rounded-[2rem] md:rounded-[3rem] -z-10" />
            
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-school-primary text-white p-4 md:p-6 rounded-xl shadow-2xl z-20">
              <p className="text-2xl md:text-3xl font-bold mb-0.5">8 Years</p>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-school-secondary">Of Legacy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <span className="text-school-secondary bg-school-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6 inline-block">
              Our Story
            </span>
            <h2 className="section-title mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl">
              A Tradition of Excellence in Thanjavur
            </h2>
            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg px-4 lg:px-0">
              Crescent Nursery and Primary School, Thanjavur, has been dedicated to imparting quality education and moral values among young minds for the past 8 years. Our child-focused curriculum emphasizes activity-based learning, art-based teaching, and STEM education.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 text-center sm:text-left">
              {[
                { title: "Smart Learning", desc: "Interactive smart boards in every room" },
                { title: "STEM Focus", desc: "Science & Tech integrated curriculum" },
                { title: "Safe Campus", desc: "24/7 Solar power & RO water" },
                { title: "Expert Faculty", desc: "Highly trained & caring educators" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start gap-2 sm:gap-3">
                  <div className="p-1 bg-school-secondary rounded-full text-school-primary flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="text-center sm:text-left min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
