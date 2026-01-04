import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form logic here (e.g., EmailJS or Firebase)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email Us",
      detail: "support@receiptvault.com",
      desc: "Our team usually responds within 24 hours."
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Call Us",
      detail: "+91 98765 43210",
      desc: "Mon-Fri from 9am to 6pm."
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Office",
      detail: "Vadodara, Gujarat, India",
      desc: "Visit our headquarters for a coffee."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-10 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Let's Stay Connected
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Have questions about your vault or need help with a claim? Our dedicated support team is here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="lg:col-span-5 space-y-8">
            {contactInfo.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex gap-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 p-4 rounded-xl h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 bg-clip-text text-transparent font-bold mb-1">{item.detail}</p>
                  <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h2>
                <p className="text-slate-500 font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700 appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can we help you today?" 
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-bold text-slate-700 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-100 active:scale-[0.98]"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;