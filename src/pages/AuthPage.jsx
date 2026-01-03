import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  updateProfile,
  sendPasswordResetEmail 
} from 'firebase/auth';
import { Mail, Lock, ArrowRight, Eye, EyeOff, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      }
      navigate('/');
    } catch (err) {
      setError("Authentication failed.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Enter email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent!");
      setError('');
    } catch (err) {
      setError("Failed to send email.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError("Google Login failed.");
    }
  };

  return (
    /* Changed min-h-screen to h-screen and added overflow-hidden to prevent body scroll */
    <div className="h-screen w-full flex items-center justify-center bg-[#F5F7FA] px-4 overflow-hidden">
      
      {/* Reduced padding from p-10 to p-8 to save space */}
      <div className="max-w-[400px] w-full bg-[#061A3A] rounded-[2rem] shadow-2xl p-7 md:p-8 border border-white/10 transition-all duration-500">
        
        {/* BRANDING - Compacted margins */}
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-20 mx-auto mb-3 brightness-200" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {isLogin ? 'Welcome Back' : 'Get Started'}
          </h2>
          <p className="text-slate-400 font-medium text-xs mt-1">
            {isLogin ? 'Login to your Vault' : 'Create your secure account'}
          </p>
        </div>

        {/* GOOGLE LOGIN - Slightly slimmer padding */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center cursor-pointer gap-3 bg-white py-3 rounded-2xl hover:bg-slate-100 transition-all active:scale-[0.98] mb-5 shadow-xl"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-slate-900 font-bold text-[13px]">Continue with Google</span>
        </button>

        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
          <div className="relative flex justify-center text-[9px] uppercase tracking-widest font-black text-slate-500">
            <span className="bg-[#061A3A] px-4">Or use Email</span>
          </div>
        </div>

        {/* NOTIFICATIONS - Smaller alert box */}
        {(error || message) && (
          <p className={`text-[10px] font-bold text-center mb-4 py-1.5 rounded-lg border ${error ? 'text-red-400 bg-red-400/10 border-red-400/20' : 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'}`}>
            {error || message}
          </p>
        )}

        {/* FORM - Space-y-3 instead of 4 to keep it tight */}
        <form onSubmit={handleAuth} className="space-y-3">
          
          {!isLogin && (
            <div className="space-y-1 animate-in fade-in duration-300">
              <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3 text-slate-500" size={16} />
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-blue-500 outline-none transition-all text-white text-sm"
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3 text-slate-500" size={16} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-blue-500 outline-none transition-all text-white text-sm"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3 text-slate-500" size={16} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-blue-500 outline-none transition-all text-white text-sm"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 text-slate-500 hover:text-white transition-colors">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <button type="button" onClick={handleForgotPassword} className="text-[10px] font-bold text-blue-400 hover:text-blue-300">Forgot Password?</button>
            </div>
          )}

          <button className="w-full cursor-pointer bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 text-white font-bold py-3.5 rounded-xl hover:bg-blue-500 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2 shadow-lg shadow-blue-600/20 uppercase text-[11px] tracking-widest">
            <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center mt-6 text-slate-400 text-[12px] font-medium">
          {isLogin ? "Don't have an account?" : "Already a member?"}
          <button 
            onClick={() => { setIsLogin(!isLogin); setError(''); setMessage(''); }}
            className="ml-2 text-blue-400 cursor-pointer font-bold hover:text-blue-300 transition-colors"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>

      </div>
    </div>
  );
};

export default AuthPage;