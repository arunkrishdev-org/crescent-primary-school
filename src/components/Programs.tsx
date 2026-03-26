import React from 'react';
import { motion } from 'motion/react';
import { Baby, School, BookMarked, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "Pre-KG",
    age: "2.5 - 3.5 Years",
    description: "A playful introduction to learning with focus on social skills and sensory exploration.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    icon: Baby
  },
  {
    title: "LKG & UKG",
    age: "3.5 - 5.5 Years",
    description: "Building strong foundations in literacy, numeracy, and creative expression through activities.",
    image: "Crescent-School-pic-2.jpg",
    icon: School
  },
  {
    title: "Grade 1 - 5",
    age: "5.5 - 10 Years",
    description: "Comprehensive primary education with STEM focus, smart classes, and holistic development.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
    icon: BookMarked
  }
];
export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-school-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Programs</span>
          <h2 className="section-title">Nurturing Every Stage</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-sm">
            Our curriculum is designed to evolve with your child, providing the right balance of challenge and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/30">
                    {program.age}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-school-primary/10 rounded-2xl flex items-center justify-center text-school-primary group-hover:bg-school-primary group-hover:text-white transition-all duration-500">
                    <program.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-school-primary transition-colors">
                    {program.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {program.description}
                </p>
                <a 
                  href="#admissions" 
                  className="inline-flex items-center gap-2 text-school-primary font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
