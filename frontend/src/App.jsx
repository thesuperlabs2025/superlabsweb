import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import GarmentsERPIndia from './pages/GarmentsERPIndia';
import GarmentsERPTirupur from './pages/GarmentsERPTirupur';
import GarmentManagement from './pages/GarmentManagement';
import TextileERP from './pages/TextileERP';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <div className="mesh-container"></div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/garments-erp-india" element={<GarmentsERPIndia />} />
            <Route path="/garments-erp-tirupur" element={<GarmentsERPTirupur />} />
            <Route path="/garment-management" element={<GarmentManagement />} />
            <Route path="/textile-erp-software" element={<TextileERP />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
