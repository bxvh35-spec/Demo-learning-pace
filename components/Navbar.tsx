
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="material-symbols-outlined text-secondary text-4xl">auto_stories</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-secondary bg-clip-text text-transparent">ইসলামি লাইব্রেরি</span>
        </div>
        
        <div className="hidden md:flex gap-10 font-medium">
          <a className="text-gray-300 hover:text-secondary transition-colors" href="#included-books">বইসমূহ</a>
          <a className="text-gray-300 hover:text-secondary transition-colors" href="#features">কেন আমাদের বই?</a>
          <a className="text-gray-300 hover:text-secondary transition-colors" href="#pricing">অফার</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary group-hover:rotate-12 transition-transform cursor-help" title="Verified Seller">verified_user</span>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
