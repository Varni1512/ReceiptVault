import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Zap, 
  Fingerprint, 
  ShieldCheck, 
  Cloud
} from 'lucide-react';

const TrustSection = () => {
  const trustItems = [
    {
      label: "100% User-Controlled",
      desc: "Total privacy. Your data belongs to you, and we never access your personal files.",
      icon: <UserCheck size={24} />,
      color: "text-blue-600"
    },
    {
      label: "Cloud-Secured",
      desc: "Every document is protected with bank-grade 256-bit AES encryption.",
      icon: <Cloud size={24} />,
      color: "text-emerald-600"
    },
    {
      label: "Smart Expiry Alerts",
      desc: "Our AI engine monitors your dates and sends alerts before deadlines expire.",
      icon: <Zap size={24} />,
      color: "text-amber-500"
    },
    {
      label: "Fast Tracking",
      desc: "Search and retrieve any receipt or warranty in under 2 seconds.",
      icon: <Fingerprint size={24} />,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="bg-[#F5F7FA] py-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ShieldCheck className="text-blue-600" size={20} />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
              Enterprise-Grade Security
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-[#061A3A] tracking-tight"
          >
            Built for Trust. Optimized for Security.
          </motion.h2>
        </div>

        {/* --- TRUST GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-[#F5F7FA] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg ${item.color}`}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">
                {item.label}
              </h3>
              <p className="text-slate-500 text-sm font-bold leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;