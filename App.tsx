
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookShowcase from './components/BookShowcase';
import Pricing from './components/Pricing';
import Features from './components/Features';
import OrderSteps from './components/OrderSteps';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openOrderModal = () => setIsModalOpen(true);
  const closeOrderModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Handle hash links for smooth scrolling in React environment
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-midnight text-gray-300">
      <Navbar />
      <main>
        <Hero onOrderClick={openOrderModal} />
        <BookShowcase />
        <Pricing onOrderClick={openOrderModal} />
        <Features />
        <OrderSteps onOrderClick={openOrderModal} />
      </main>
      <Footer />
      
      {isModalOpen && <OrderModal onClose={closeOrderModal} />}
    </div>
  );
};

export default App;
