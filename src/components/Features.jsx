import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  History, 
  BellRing, 
  CloudUpload, 
  Smartphone, 
  Search 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Secure Receipt Vault",
      desc: "Bank-grade 256-bit encryption to keep your purchase records private and safe.",
      icon: <ShieldCheck size={32} />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Warranty Tracking",
      desc: "Never hunt for a paper bill again. See all active coverages in one smart dashboard.",
      icon: <History size={32} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Reminder Alerts",
      desc: "Smart notifications via push and email before your warranty or return window closes.",
      icon: <BellRing size={32} />,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Cloud Backup",
      desc: "Automatic real-time sync across all your devices. Your data is never lost, even if you lose your phone.",
      icon: <CloudUpload size={32} />,
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      title: "Easy Management",
      desc: "Organize receipts by category, store, or price with a single tap for taxes or returns.",
      icon: <Smartphone size={32} />,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Instant Search",
      desc: "Find any document in seconds using our AI-powered deep search filters.",
      icon: <Search size={32} />,
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-[#061A3A] tracking-tight mb-4"
            >
              Powerful Features for <br/> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-600 to-blue-900">Smart Asset Management</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 font-medium text-lg"
            >
              Everything you need to manage your shopping records and protect your investments.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  Joined by <br/><span className="text-slate-900">2k+ users today</span>
               </p>
            </div>
          </motion.div>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;