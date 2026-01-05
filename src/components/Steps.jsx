import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Cpu, ShieldCheck, BellRing, Sparkles, ArrowDown } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Upload/Scan Receipt",
      desc: "Snapping a photo is all it takes. Whether it's a paper bill or a digital PDF, simply drag and drop it into your vault.",
      icon: <Upload size={24} />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "02",
      title: "AI Extracts & Stores",
      desc: "Our smart AI identifies store names, totals, and dates, categorized and stored in a 256-bit encrypted secure vault.",
      icon: <Cpu size={24} />,
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      id: "03",
      title: "Track Warranty Timeline",
      desc: "The app automatically maps out your warranty duration. See a real-time countdown of your protection period.",
      icon: <ShieldCheck size={24} />,
      gradient: "from-sky-400 to-blue-500",
    },
    {
      id: "04",
      title: "Smart Expiry Reminders",
      desc: "Never miss a claim window again. Get notifications before your warranty expires to ensure your products are covered.",
      icon: <BellRing size={24} />,
      gradient: "from-amber-400 to-orange-500",
    }
  ];

  return (
    <section className="bg-[#F5F7FA] py-10 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] tracking-widest uppercase mb-4"
          >
            <Sparkles size={14} /> The Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#061A3A] tracking-tight mb-6"
          >
            How It Works
          </motion.h2>

          {/* --- ADDED DESCRIPTION --- */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-lg leading-relaxed max-w-4xl mx-auto"
          >
            Turn your cluttered shoe boxes of paper receipts into a streamlined, 
            intelligent digital archive. From instant AI scanning to automated 
            warranty tracking, we've automated the entire lifecycle of your purchase records.
          </motion.p>
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-start md:items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node (The Circle) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#F5F7FA] shadow-lg z-20 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.gradient}`} />
                </div>

                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}>
                   <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                        {step.icon}
                      </div>
                      <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-2 block">Step {step.id}</span>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        {step.desc}
                      </p>
                   </div>
                </div>

                {/* Empty Space for Desktop Balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FINAL ACTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 text-center flex flex-col items-center gap-6"
        >
          <button className="bg-[#061A3A] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all shadow-2xl shadow-blue-100 active:scale-95 cursor-pointer">
            Secure Your First Receipt
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;