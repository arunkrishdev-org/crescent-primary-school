import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Cpu, Palette, Sun, Droplets } from 'lucide-react';

const features = [
  {
    title: "Activity-Based Learning",
    description: "Learning through doing, making education fun and memorable for children.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Smart Classrooms",
    description: "All classrooms are equipped with interactive smart boards for modern learning.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Individual Attention",
    description: "Small class sizes ensure every child receives the care and guidance they need.",
    icon: Users,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "STEM Education",
    description: "Early introduction to Science, Technology, Engineering, and Mathematics.",
    icon: Palette,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Solar Powered Campus",
    description: "24/7 green energy ensuring uninterrupted learning environment.",
    icon: Sun,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Safe RO Water",
    description: "Access to clean and safe RO drinking water for all students.",
    icon: Droplets,
    color: "bg-cyan-50 text-cyan-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-school-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-school-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Excellence</span>
          <h2 className="section-title">Why Choose Crescent?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-sm">
            We combine traditional values with modern technology to provide an unparalleled learning experience for your child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-xl card-shadow border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-school-primary transition-all group-hover:h-full" />
              <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-school-primary mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
