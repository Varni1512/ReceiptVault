import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthPage from './pages/AuthPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import MyReceipts from './pages/MyReceipts';
import Contact from './pages/Contact';
import WarrantyHub from './pages/WarrantyHub';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* 🔓 Auth route without Navbar & Footer */}
        <Route path="/signin" element={<AuthPage />} />

        {/* 🌐 All other routes with Navbar & Footer */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
              <Navbar />
              <ScrollToTop />
              <main className="flex-grow pt-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/receipts" element={<MyReceipts />} />
                  <Route path="/warranty-hub" element={<WarrantyHub />} />
                  <Route path="/support" element={<Contact />} />
                  {/* <Route path="/profile" element={<Profile />} /> */}
                  {/* <Route path="/alerts" element={<Warranty />} /> */}
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

      </Routes>
    </Router>
  );
};


export default App