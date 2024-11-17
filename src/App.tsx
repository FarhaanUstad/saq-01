import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GeneralContracting from './pages/GeneralContracting';
import ElectromechanicalServices from './pages/ElectromechanicalServices';
import LMIEquipment from './pages/LMIEquipment';
import Contact from './pages/Contact';
import { useScrollToTop } from './hooks/useScrollToTop';

function AppContent() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general-contracting" element={<GeneralContracting />} />
          <Route path="/electromechanical-services" element={<ElectromechanicalServices />} />
          <Route path="/lmi-equipment" element={<LMIEquipment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;