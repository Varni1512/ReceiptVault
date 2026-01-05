import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sarah Chen", role: "Small Business Owner", avatar: "https://i.pravatar.cc/150?img=32", review: "This app is a game-changer! No more shoeboxes of receipts. Everything is organized perfectly.", rating: 5 },
    { id: 2, name: "Mark Johnson", role: "Tech Enthusiast", avatar: "https://i.pravatar.cc/150?img=60", review: "Keeping track of warranties was a nightmare. Now, it's effortless. AI extraction is accurate!", rating: 5 },
    { id: 3, name: "Emily White", role: "Busy Parent", avatar: "https://i.pravatar.cc/150?img=40", review: "Between kids' toys and appliances, I used to lose receipts. This app keeps me sane.", rating: 5 },
    { id: 4, name: "David Lee", role: "Freelancer", avatar: "https://i.pravatar.cc/150?img=65", review: "Fantastic for expense tracking! Accessing old receipts for tax season is now a breeze.", rating: 5 },
    { id: 5, name: "Jessica Kim", role: "Online Shopper", avatar: "https://i.pravatar.cc/150?img=25", review: "I buy a lot online. This organizes everything beautifully. Highly recommend!", rating: 5 },
  ];

  // Tripled to ensure there's no gap during the loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white py-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-blue-50 p-2 rounded-full"><MessageCircle className="text-blue-600" size={18} /></div>
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em]">User Feedback</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-black text-[#061A3A] tracking-tight mb-6">Thousands Trust Us.</h2>
        <p className="text-slate-500 font-medium text-lg max-w-4xl mx-auto">Our users love the peace of mind our platform brings to managing purchase documents.</p>
      </div>

      {/* --- SCROLLER --- */}
      <div className="relative">
        {/* Fading side blurs */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6"
            // The animation loop
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 40,
                ease: 'linear',
              },
            }}
            // FIXED: Standard CSS 'hover' is more reliable for simple pausing without resets
            style={{ width: 'max-content' }}
            // We use Tailwind's 'pause' utility if you have the plugin, or standard CSS:
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="w-[320px] md:w-[400px] flex-shrink-0">
                <div className="bg-[#F8FAFC] p-5 rounded-[2.5rem] border border-slate-100 h-full flex flex-col group/card">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
                      ))}
                    </div>
                    <Quote className="text-blue-100 group-hover/card:text-blue-200 transition-colors" size={32} />
                  </div>

                  <p className="text-slate-600 font-medium text-md leading-relaxed mb-8 flex-grow">"{testimonial.review}"</p>

                  <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                    <div>
                      <h4 className="text-sm font-black text-[#061A3A] tracking-tight">{testimonial.name}</h4>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-20">
        <button className="bg-[#061A3A] text-white px-10 py-4 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all cursor-pointer">
          See All Reviews
        </button>
      </div>
    </section>
  );
};

export default Testimonials;