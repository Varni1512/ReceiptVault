import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Download, Maximize2, X, Upload, 
  FileText, Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';

const MyReceipts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null); // State for full screen view
  const [currentPage, setCurrentPage] = useState(1);
  const [docName, setDocName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const [receipts, setReceipts] = useState(Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Record_${i + 1}`,
    date: "04 Jan 2026",
    time: "10:30 AM",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=400"
  })));

  const cardsPerPage = 9;
  const totalPages = Math.ceil(receipts.length / cardsPerPage);
  const currentCards = receipts.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handleBoxClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Download Logic
  const handleDownload = (imgUrl, fileName) => {
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `${fileName || 'receipt'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!docName.trim()) return;

    const now = new Date();
    const newDoc = {
      id: Date.now(),
      name: docName,
      date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      img: selectedFile ? URL.createObjectURL(selectedFile) : "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?q=80&w=400"
    };

    setReceipts([newDoc, ...receipts]);
    setDocName('');
    setSelectedFile(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] pt-10 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">My Receipts</h1>
            <p className="text-slate-500 text-sm mt-1">Manage and store your digital purchase proofs.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer transition-all shadow-lg active:scale-95"
          >
            <Plus size={20} />
            <span>Upload Document</span>
          </button>
        </div>

        {/* GRID */}
        <div className="py-10"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCards.map((receipt) => (
              <motion.div key={receipt.id} layout className="bg-white rounded-2xl overflow-hidden border border-slate-200 group relative shadow-sm">
                <div className="h-56 bg-slate-100 relative overflow-hidden">
                  <img src={receipt.img} alt="receipt" className="w-full h-full object-cover" />
                  
                  {/* CARD HOVER BUTTONS */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <button 
                      onClick={() => setPreviewDoc(receipt)}
                      className="bg-white p-2 rounded-lg cursor-pointer text-slate-900 hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 hover:text-white shadow-md"
                    >
                      <Maximize2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDownload(receipt.img, receipt.name)}
                      className="bg-white p-2 rounded-lg text-slate-900 cursor-pointer hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 hover:text-white shadow-md"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 truncate text-lg mb-2">{receipt.name}</h3>
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 font-bold"><Calendar size={14} className="text-blue-500"/> {receipt.date}</span>
                    <span className="flex items-center gap-1.5 font-bold"><Clock size={14} className="text-blue-500"/> {receipt.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 rounded-xl border cursor-pointer bg-white disabled:opacity-30"><ChevronLeft size={20} /></button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 rounded-xl font-bold cursor-pointer text-sm ${currentPage === i + 1 ? 'bg-slate-900 text-white' : 'bg-white border text-slate-600'}`}>{i + 1}</button>
                ))}
              </div>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="p-2 rounded-xl cursor-pointer border bg-white disabled:opacity-30"><ChevronRight size={20} /></button>
            </div>
          )}
        </div>

        {/* UPLOAD MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
                <div className="flex justify-between items-center mb-6 text-slate-900">
                  <h2 className="text-xl font-bold">Add Receipt</h2>
                  <button className='cursor-pointer' onClick={() => setIsModalOpen(false)}><X size={24}/></button>
                </div>
                <form onSubmit={handleUploadSubmit} className="space-y-6">
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Document Name</label>
                    <input type="text" placeholder="e.g. Amazon Bill" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 font-bold" value={docName} onChange={(e) => setDocName(e.target.value)} required />
                  </div>
                  <div onClick={handleBoxClick} className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${selectedFile ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 hover:border-blue-600'}`}>
                    {selectedFile ? <><CheckCircle2 size={32} className="mx-auto text-emerald-500 mb-2" /><p className="text-sm font-bold text-emerald-700 truncate">{selectedFile.name}</p></> : <><Upload size={32} className="mx-auto text-slate-300 mb-2" /><p className="text-sm font-bold text-slate-600">Select File</p></>}
                  </div>
                  <button type="submit" className="w-full bg-slate-900 cursor-pointer text-white font-bold py-4 rounded-xl hover:bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 transition-all">Add to Vault</button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FULL SCREEN PREVIEW MODAL */}
        <AnimatePresence>
          {previewDoc && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setPreviewDoc(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Preview Header */}
                <div className="p-4 bg-white border-b flex justify-between items-center px-6">
                  <h2 className="font-bold text-slate-900 truncate pr-10">{previewDoc.name}</h2>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleDownload(previewDoc.img, previewDoc.name)}
                      className="flex items-center gap-2 bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900 cursor-pointer text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all"
                    >
                      <Download size={18} /> Download
                    </button>
                    <button 
                      onClick={() => setPreviewDoc(null)}
                      className="p-2 text-slate-400 cursor-pointer hover:text-slate-900 transition-all bg-slate-100 rounded-lg"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Preview Body */}
                <div className="flex-1 bg-slate-200 overflow-auto flex items-center justify-center p-6">
                  <img src={previewDoc.img} alt="preview" className="max-w-full max-h-full shadow-lg rounded-sm" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default MyReceipts;