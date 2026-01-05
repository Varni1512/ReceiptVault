import React from 'react';
import { motion } from 'framer-motion';
import { Headset, ArrowRight, Sparkles } from 'lucide-react';

const SupportStrip = () => {
    return (
        <section className="bg-[#F5F7FA] py-10 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="relative overflow-hidden bg-gradient-to-r from-[#061A3A] via-[#0a2a5e] to-[#061A3A] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-900/20">

                    {/* Decorative Background Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left Side: Content */}
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                                <Headset className="text-sky-400" size={32} />
                            </div>

                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.3em]">
                                        Live Support Available
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                    Need assistance? Our support is always live.
                                </h2>
                                <p className="text-blue-100/60 text-sm mt-2 font-medium">
                                    Speak to our team about receipt extraction, security, or plan upgrades.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Action */}
                        <a href="/support">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white text-[#061A3A] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-sky-50 transition-all shadow-xl shadow-black/20 cursor-pointer"
                            >
                                Contact Support
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </a>

                    </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="flex justify-center items-center gap-8 mt-8 opacity-40">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        <Sparkles size={12} /> Average response: 2 mins
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full" />
                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        24/7 Priority Tickets
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SupportStrip;