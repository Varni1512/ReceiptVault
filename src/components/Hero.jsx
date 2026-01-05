import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ShieldCheck, ArrowRight, Zap, Lock } from 'lucide-react';

const Hero = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate('/receipts');
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="relative bg-[#F5F7FA] overflow-hidden pt-10 pb-10">
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <ShieldCheck className="text-blue-600" size={18} />
            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">
              Trusted by 10,000+ Users
            </span>
          </motion.div>

          {/* Main Headline: Problem + Solution */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-black text-[#061A3A] tracking-tight leading-[1.1] mb-8"
          >
            Stop Losing Receipts  <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-600 to-blue-900">
              Secure Your Purchases Instantly.
            </span>
          </motion.h1>

          {/* Subtext: Benefit Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The ultimate digital vault for your receipts and warranties. Track expiry dates, 
            organize purchase proofs, and never miss a claim window again.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleGetStarted}
              className="group bg-[#061A3A] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all active:scale-95 cursor-pointer"
            >
              Get Started for Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;