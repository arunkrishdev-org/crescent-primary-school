import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-school-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8 text-left">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-school-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    58, Dabeer Kulam Rd, East Gate,<br />
                    Thanjavur, Tamil Nadu 613001
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">Phone Number</h4>
                  <p className="text-slate-600 leading-relaxed">
                    04362 296 161
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-lg">School Timings</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 4:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.227236540643!2d79.1378333!3d10.7938333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89999999999%3A0x9999999999999999!2sCrescent%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sin!4v1648210000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
