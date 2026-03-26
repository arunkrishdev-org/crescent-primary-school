import React from 'react';
import { motion } from 'motion/react';

const images = [
  { src: "../public/Crescent-School-pic-5.jpg", title: "Creative Arts" },
  { src: "../public/Crescent-School-pic-2.jpg", title: "Smart Classroom" },
  { src: "../public/Crescent-School-pic-3.jpg", title: "Outdoor Play" },
  { src: "../public/Crescent-School-pic-4.jpg", title: "Teachers Day" },
  { src: "../public/Crescent-School-pic-1.jpg", title: "Extracurricular" },
  { src: "../public/Crescent-School-pic-6.jpg", title: "STEM Workshop" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-school-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Life at Crescent</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Glimpses of our students exploring, learning, and growing together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold text-xl">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
