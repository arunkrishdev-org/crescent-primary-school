import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';

const googleReviews = [
  {
    name: "Arun Kumar",
    time: "2 months ago",
    content: "The individual attention my child receives at Crescent is remarkable. The activity-based learning approach has made him love going to school every day.",
    rating: 5,
    avatar: "A"
  },
  {
    name: "Priya Lakshmi",
    time: "4 months ago",
    content: "I am impressed with the smart classrooms and the focus on moral values. The school provides a very safe and nurturing environment for young children.",
    rating: 5,
    avatar: "P"
  },
  {
    name: "Rajesh Kannan",
    time: "1 month ago",
    content: "STEM education at such an early age is a great initiative. My daughter is already showing keen interest in science experiments and creative arts.",
    rating: 5,
    avatar: "R"
  }
];

export default function Testimonials() {
  const googleMapsUrl = "https://share.google/Nc9X9qJFxS1jPSSZR";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-6"
              referrerPolicy="no-referrer"
            />
            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Reviews</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Parents Say</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">4.9 / 5.0</span>
              <span className="text-slate-400 text-sm whitespace-nowrap">(Based on Google Reviews)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {googleReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{review.time}</p>
                  </div>
                </div>
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="w-4 h-4"
                />
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {review.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm group"
          >
            View All Google Reviews <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
