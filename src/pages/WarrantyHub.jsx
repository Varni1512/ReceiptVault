import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../firebase'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { 
  ShieldCheck, Plus, Maximize2, Download, X, Calendar, 
  Clock, Search, ChevronLeft, ChevronRight, ExternalLink, History, Upload, CheckCircle2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WarrantyHub = () => {
  // --- STATES ---
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  
  // Form States
  const [newProductName, setNewProductName] = useState('');
  const [expiryDate, setExpiryDate] = useState(''); 
  const [expiryTime, setExpiryTime] = useState(''); 
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // --- AUTH CHECK ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => unsubscribe();
  }, []);

  const handleOpenRegisterModal = () => {
    if (!currentUser) {
      alert("Please login to register a warranty.");
      navigate('/signin'); 
      return;
    }
    setIsRegisterModalOpen(true);
  };

  // --- DUMMY DATA ---
  // Generating more cards to demonstrate pagination (9 per page)
  const [warranties, setWarranties] = useState([
    { id: 1, product: "MacBook Pro M3", addedOn: "04 Jan 2026", addedTime: "10:30 AM", expiry: "2027-12-12", expiryTime: "10:30 AM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500" },
    { id: 2, product: "iPhone 15 Pro", addedOn: "04 Jan 2026", addedTime: "11:00 AM", expiry: "2026-09-20", expiryTime: "11:00 AM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=500" },
    { id: 3, product: "iPad Air", addedOn: "04 Jan 2026", addedTime: "11:30 AM", expiry: "2026-08-15", expiryTime: "11:30 AM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500" },
    { id: 4, product: "Apple Watch S9", addedOn: "04 Jan 2026", addedTime: "12:00 PM", expiry: "2026-05-10", expiryTime: "12:00 PM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500" },
    { id: 5, product: "AirPods Pro", addedOn: "04 Jan 2026", addedTime: "12:30 PM", expiry: "2026-03-05", expiryTime: "12:30 PM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1588423770574-91993ca5a3f2?q=80&w=500" },
    { id: 6, product: "Magic Keyboard", addedOn: "04 Jan 2026", addedTime: "01:00 PM", expiry: "2026-02-28", expiryTime: "01:00 PM", status: "ACTIVE", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=500" },
    { id: 7, product: "Sony Headphones", addedOn: "01 Jan 2026", addedTime: "09:15 AM", expiry: "2026-01-08", expiryTime: "09:15 AM", status: "EXPIRING", img: "https://images.unsplash.com/photo-1675243003000-888998246401?q=80&w=500" },
    { id: 8, product: "Logitech Mouse", addedOn: "01 Jan 2026", addedTime: "10:00 AM", expiry: "2026-01-10", expiryTime: "10:00 AM", status: "EXPIRING", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500" },
    { id: 9, product: "Samsung Monitor", addedOn: "10 Dec 2024", addedTime: "04:00 PM", expiry: "2025-12-10", expiryTime: "04:00 PM", status: "EXPIRED", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500" },
    { id: 10, product: "Old Laptop", addedOn: "05 Aug 2023", addedTime: "12:30 PM", expiry: "2024-08-05", expiryTime: "12:30 PM", status: "EXPIRED", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500" },
  ]);

  // --- PAGINATION & FILTER LOGIC ---
  const cardsPerPage = 9;
  
  const filteredData = warranties.filter(item => {
    const matchesTab = activeTab === 'ALL' || item.status === activeTab;
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

  // Reset to page 1 if filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchTerm]);

  // --- STATS CALCULATION ---
  const stats = [
    { label: "TOTAL PROTECTED", count: warranties.length.toString().padStart(2, '0'), icon: <ShieldCheck size={20}/>, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "EXPIRING SOON", count: warranties.filter(w => w.status === 'EXPIRING').length.toString().padStart(2, '0'), icon: <Clock size={20}/>, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "ACTIVE", count: warranties.filter(w => w.status === 'ACTIVE').length.toString().padStart(2, '0'), icon: <ExternalLink size={20}/>, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "EXPIRED", count: warranties.filter(w => w.status === 'EXPIRED').length.toString().padStart(2, '0'), icon: <History size={20}/>, color: "text-slate-400", bg: "bg-slate-50" },
  ];

  // --- HANDLERS ---
  const handleDownload = (imgUrl, fileName) => {
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `${fileName}_Warranty.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) return;
    if (!newProductName || !expiryDate) return;

    const now = new Date();
    const selectedDateTime = new Date(`${expiryDate}T${expiryTime || '00:00'}`);
    const diffTime = selectedDateTime - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let finalStatus = "ACTIVE";
    if (diffTime < 0) finalStatus = "EXPIRED";
    else if (diffDays <= 7) finalStatus = "EXPIRING";

    const newEntry = {
      id: Date.now(),
      product: newProductName,
      addedOn: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      addedTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      expiry: expiryDate, 
      expiryTime: expiryTime || "12:00 PM",
      status: finalStatus,
      img: selectedFile ? URL.createObjectURL(selectedFile) : "https://images.unsplash.com/photo-1611000607216-839ca3ad3e07?q=80&w=500"
    };

    setWarranties([newEntry, ...warranties]);
    setNewProductName(''); setExpiryDate(''); setExpiryTime(''); setSelectedFile(null);
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-10 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto"> 
        
        {/* --- PAGE HEADER --- */}
        <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Warranty Hub</h1>
            <p className="text-slate-500 text-sm mt-1">Manage and store your digital purchase proofs.</p>
          </div>
          <button 
            onClick={handleOpenRegisterModal}
            className="bg-[#061A3A] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer transition-all shadow-lg active:scale-95"
          >
            <Plus size={20} />
            <span>Register Warranty</span>
          </button>
        </div>

        {/* --- STATS DASHBOARD --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-start">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl mb-4 w-fit`}>{stat.icon}</div>
              <p className="text-slate-400 text-[10px] font-black tracking-widest mb-1 uppercase">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* --- CONTROLS: TABS & SEARCH --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {['ALL', 'ACTIVE', 'EXPIRING', 'EXPIRED'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-[11px] cursor-pointer font-black tracking-widest transition-all ${
                  activeTab === tab ? 'bg-[#061A3A] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products or brands..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-600 shadow-sm transition-all text-sm font-bold text-slate-700"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- GRID (MAX 9 PER PAGE) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          <AnimatePresence mode="popLayout">
            {currentCards.map((item) => (
              <motion.div 
                key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 group relative shadow-sm hover:shadow-md transition-all h-fit"
              >
                <div className="h-52 bg-slate-100 relative overflow-hidden">
                  <img src={item.img} alt="card" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <button onClick={() => setPreviewDoc(item)} className="bg-white p-2 rounded-lg text-slate-900 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer hover:text-white shadow-md"><Maximize2 size={18} /></button>
                    <button onClick={() => handleDownload(item.img, item.product)} className="bg-white p-2 rounded-lg text-slate-900 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer hover:text-white shadow-md"><Download size={18} /></button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm ${
                      item.status === 'EXPIRED' ? 'bg-red-500 text-white' : 
                      item.status === 'EXPIRING' ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                    }`}>{item.status}</span>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="font-bold text-slate-800 truncate text-lg mb-4">{item.product}</h3>
                  <div className="flex items-center justify-between text-slate-400 text-[9px] font-black uppercase tracking-widest border-b border-slate-200 pb-3 mb-3">
                    <span>Added On</span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-slate-600 font-bold"><Calendar size={12} className="text-blue-500"/> {item.addedOn}</span>
                      <span className="flex items-center gap-1.5 text-slate-600 font-bold"><Clock size={12} className="text-blue-500"/> {item.addedTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[9px] font-black uppercase tracking-widest">
                    <span>Expires</span>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-red-500 font-bold"><Calendar size={12}/> {item.expiry}</span>
                      <span className="flex items-center gap-1.5 text-slate-600 font-bold"><Clock size={12}/> {item.expiryTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12 pb-10">
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(p => p - 1)} 
              className="p-3 rounded-xl border border-slate-200 bg-white disabled:opacity-30 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentPage(i + 1)} 
                  className={`w-11 h-11 rounded-xl font-bold text-sm transition-all cursor-pointer ${currentPage === i + 1 ? 'bg-[#061A3A] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage(p => p + 1)} 
              className="p-3 rounded-xl border border-slate-200 bg-white disabled:opacity-30 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* --- REGISTER MODAL (PROTECTED) --- */}
        <AnimatePresence>
          {isRegisterModalOpen && currentUser && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsRegisterModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 overflow-hidden">
                <div className="flex justify-between items-center mb-6 text-slate-900">
                  <h2 className="text-xl font-bold">Register Warranty</h2>
                  <button className='cursor-pointer' onClick={() => setIsRegisterModalOpen(false)}><X size={24}/></button>
                </div>
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => setSelectedFile(e.target.files[0])} accept="image/*" />
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block ml-1">Product Name</label>
                    <input type="text" placeholder="e.g. iPhone 15" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 font-bold text-slate-700" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block ml-1">Expiry Date</label>
                      <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none cursor-pointer focus:border-blue-600 font-bold text-slate-700" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block ml-1">Expiry Time</label>
                      <input type="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none cursor-pointer focus:border-blue-600 font-bold text-slate-700" value={expiryTime} onChange={(e) => setExpiryTime(e.target.value)} />
                    </div>
                  </div>
                  <div onClick={() => fileInputRef.current.click()} className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${selectedFile ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-blue-600'}`}>
                    {selectedFile ? <><CheckCircle2 size={32} className="mx-auto text-emerald-500 mb-2"/><p className="text-xs font-bold text-emerald-700">{selectedFile.name}</p></> : <><Upload size={32} className="mx-auto text-slate-300 mb-2"/><p className="text-sm font-bold text-slate-600">Select Warranty Card</p></>}
                  </div>
                  <button type="submit" className="w-full bg-[#061A3A] text-white font-bold py-4 rounded-xl hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer shadow-xl transition-all">Add to Vault</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- PREVIEW MODAL --- */}
        <AnimatePresence>
          {previewDoc && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreviewDoc(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl">
                <div className="p-4 bg-white border-b flex justify-between items-center px-6">
                  <h2 className="font-bold text-slate-900">{previewDoc.product}</h2>
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleDownload(previewDoc.img, previewDoc.product)} className="flex items-center gap-2 bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all"><Download size={18} /> Download</button>
                    <button onClick={() => setPreviewDoc(null)} className="p-2 text-slate-400 cursor-pointer hover:text-slate-900 transition-all bg-slate-100 rounded-lg"><X size={20} /></button>
                  </div>
                </div>
                <div className="flex-1 bg-slate-200 overflow-auto flex items-center justify-center p-6 text-slate-900">
                  <img src={previewDoc.img} alt="full-preview" className="max-w-full max-h-full shadow-2xl rounded-sm" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WarrantyHub;