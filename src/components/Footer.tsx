import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-school-secondary" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center text-school-secondary font-bold text-2xl shadow-inner">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight">CRESCENT</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Nursery & Primary School</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-10 text-sm">
              Empowering young minds with quality education and moral values since 2018. A leading institution in Thanjavur.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-school-secondary hover:text-school-primary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-school-secondary mb-10">Quick Links</h4>
            <ul className="space-y-5 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-school-secondary transition-colors flex items-center gap-2"><span>•</span> Home</a></li>
              <li><a href="#about" className="hover:text-school-secondary transition-colors flex items-center gap-2"><span>•</span> About Us</a></li>
              <li><a href="#programs" className="hover:text-school-secondary transition-colors flex items-center gap-2"><span>•</span> Programs</a></li>
              <li><a href="#admissions" className="hover:text-school-secondary transition-colors flex items-center gap-2"><span>•</span> Admissions</a></li>
              <li><a href="#contact" className="hover:text-school-secondary transition-colors flex items-center gap-2"><span>•</span> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-school-secondary mb-10">Contact Info</h4>
            <ul className="space-y-6 text-slate-400 text-sm leading-relaxed">
              <li className="flex gap-4">
                <MapPin size={18} className="text-school-secondary shrink-0" />
                <span>58, Dabeer Kulam Rd, East Gate, Thanjavur, Tamil Nadu 613001</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-school-secondary shrink-0" />
                <span>04362 296 161</span>
              </li>
              <li className="flex gap-4">
                <Clock size={18} className="text-school-secondary shrink-0" />
                <span>Mon - Sat: 9:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-school-secondary mb-10">Location</h4>
            <div className="rounded-xl overflow-hidden h-48 border border-slate-800 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.227236540643!2d79.1378333!3d10.7938333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89999999999%3A0x9999999999999999!2sCrescent%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sin!4v1648210000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
          <p className="text-center md:text-left">© 2026 Crescent Nursery and Primary School. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
