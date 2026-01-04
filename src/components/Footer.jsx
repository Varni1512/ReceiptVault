import React from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061A3A] text-white pt-16 pb-8 px-6 mt-auto border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* LEFT SIDE: BRANDING & DESC */}
          <div className="md:w-1/3">
            <img 
              src="/logo1.png" 
              alt="ReceiptVault" 
              className="h-20 w-auto mb-6 brightness-125 object-contain" 
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              The most secure vault for your digital receipts and warranties. 
              Organize your expenses, track warranty periods, and never lose a 
              claim again. Secure. Track. Claim.
            </p>
            
            {/* SOCIAL ICONS BELOW DESCRIPTION */}
            <div className="flex space-x-4">
              <a href="https://github." target="_blank" rel="noreferrer" className="group p-3 bg-white/5 rounded-xl hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all duration-300">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group p-3 bg-white/5 rounded-xl hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all duration-300">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: 3 COLUMNS GROUPED */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 md:pl-20">
            {/* COL 1 */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/receipts" className="hover:text-blue-400 transition-colors">My Receipts</Link></li>
                <li><Link to="/warranty-hub" className="hover:text-blue-400 transition-colors">Warranty Hub</Link></li>
                <li><Link to="/support" className="hover:text-blue-400 transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* COL 2 */}
            <div>
              <h4 className="text-white font-bold text-base mb-6">Account</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><Link to="/profile" className="hover:text-blue-400 transition-colors">Profile</Link></li>
                <li><Link to="/alerts" className="hover:text-blue-400 transition-colors">Alerts</Link></li>
              </ul>
            </div>

            {/* COL 3 */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-base mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-500" />
                  <span>help@receiptvault.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-500 mt-1" />
                  <span>Vadodara, Gujarat,<br/>India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} ReceiptVault. All rights reserved.</p>
          <div className="flex items-center space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;