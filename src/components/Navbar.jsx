import React, { useState, useEffect } from 'react';
import { Bell, User, Menu, X, LogIn, LogOut, Settings } from 'lucide-react';
import { auth } from '../firebase'; // Firebase config import karein
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null); // Firebase user status
    const navigate = useNavigate();

    // Track Login Status
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'My Receipts', href: '/receipts' },
        { name: 'Warranty Hub', href: '/warranty-hub' },
        { name: 'Support', href: '/support' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-3 
            ${isScrolled ? 'bg-white/70 backdrop-blur-lg  shadow-sm' : 'bg-transparent'}`}>
            
            <div className="max-w-8xl mx-auto flex justify-between items-center">
                {/* LOGO */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src="/logo.png" alt="Logo" className="h-20 w-auto object-contain" />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-7 text-[15px] font-bold text-slate-700">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.href} className="hover:text-blue-600 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-5">
                                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-800 relative group">
                                    <Bell size={22} />
                                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>

                                {/* PROFILE HOVER MENU */}
                                <div className="relative group pt-2">
                                    <button className="p-2 rounded-full bg-slate-900 text-white hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all">
                                        <User size={22} />
                                    </button>

                                    {/* DROPDOWN CARD */}
                                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        <div className="p-4 border-b border-slate-50">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Account</p>
                                            <p className="text-sm font-bold text-slate-800 truncate">{user.displayName || "User"}</p>
                                        </div>
                                        
                                        <Link to="/profile" className="flex items-center space-x-3 p-3 hover:bg-slate-50 text-slate-700 font-semibold transition-colors">
                                            <Settings size={18} className="text-slate-400" />
                                            <span>Profile</span>
                                        </Link>
                                        
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full flex items-center space-x-3 p-3 hover:bg-red-50 text-red-600 font-semibold transition-colors border-t border-slate-50"
                                        >
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to="/signin">
                                <button className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                                    <LogIn size={18} />
                                    <span>Sign In</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>

                {/* MOBILE BUTTON */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-6 flex flex-col space-y-5 animate-in slide-in-from-top">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className="text-slate-900 font-bold text-lg" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-slate-100" />
                    {user ? (
                        <div className="flex flex-col space-y-4">
                            <Link to="/profile" className="flex items-center space-x-3 text-slate-800 font-bold" onClick={() => setIsOpen(false)}>
                                <User size={22} /> <span>Profile</span>
                            </Link>
                            <button onClick={handleLogout} className="flex items-center space-x-3 text-red-600 font-bold">
                                <LogOut size={22} /> <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link to="/signin" onClick={() => setIsOpen(false)}>
                            <button className="bg-slate-900 text-white w-full py-4 rounded-2xl font-bold flex justify-center items-center space-x-2">
                                <LogIn size={20} />
                                <span>Sign In</span>
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;