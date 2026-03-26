import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

type AdmissionForm = {
  parentName: string;
  phone: string;
  childAge: string;
  targetClass: string;
};

export default function Admissions() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<AdmissionForm>();

  const onSubmit = async (data: AdmissionForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted:', data);
    alert('Thank you for your interest! We will contact you soon.');
    reset();
  };

  return (
    <section id="admissions" className="py-24 bg-school-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-school-secondary font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Enrolment</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Admissions Open for <span className="text-school-secondary">2026-27</span>
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light">
              Join a community where every child is valued and nurtured. Our admissions process is simple and transparent.
            </p>
            
            <div className="space-y-6">
              {[
                "Activity-Based Learning Curriculum",
                "STEM Integrated Education",
                "Smart Classrooms & Modern Labs",
                "Safe & Secure Campus Environment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/90">
                  <div className="w-6 h-6 bg-school-secondary rounded-full flex items-center justify-center text-school-primary shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-school-primary mb-8 uppercase tracking-tight">Admission Enquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6">
                <div className="relative">
                  <input
                    {...register('parentName', { required: true })}
                    type="text"
                    placeholder="Parent's Name"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-school-primary transition-all outline-none text-slate-700 font-medium placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <input
                    {...register('phone', { required: true })}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-school-primary transition-all outline-none text-slate-700 font-medium placeholder:text-slate-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      {...register('childAge', { required: true })}
                      type="number"
                      placeholder="Child's Age"
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-school-primary transition-all outline-none text-slate-700 font-medium placeholder:text-slate-400"
                    />
                  </div>
                  <div className="relative">
                    <select
                      {...register('targetClass', { required: true })}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-100 focus:border-school-primary transition-all outline-none text-slate-700 font-medium appearance-none"
                    >
                      <option value="">Select Class</option>
                      <option value="pre-kg">Pre-KG</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      <option value="grade1">Grade 1</option>
                      <option value="grade2">Grade 2</option>
                      <option value="grade3">Grade 3</option>
                      <option value="grade4">Grade 4</option>
                      <option value="grade5">Grade 5</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-school-primary text-white py-5 rounded-md font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-school-accent transition-all flex items-center justify-center gap-3 disabled:opacity-70 active:scale-95"
              >
                {isSubmitting ? 'Processing...' : (
                  <>Send Enquiry <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
