
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#050d08] text-gray-500 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-4xl">auto_stories</span>
              <span className="text-2xl font-bold text-white tracking-tight">ইসলামি লাইব্রেরি</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              সারা বাংলাদেশে শুদ্ধ জ্ঞানের আলো ছড়িয়ে দিতে আমরা বদ্ধপরিকর। আমাদের প্রতিটি বই আপনার জ্ঞান এবং আমল বৃদ্ধিতে সহায়ক হবে ইনশাআল্লাহ।
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg mb-6">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-secondary transition-colors">প্রাইভেসি পলিসি</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">রিফান্ড পলিসি</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">টার্মস ও কন্ডিশন</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg mb-6">যোগাযোগ</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">call</span> ০১৭০০-০০০০০০</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">mail</span> info@library.com</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">location_on</span> ঢাকা, বাংলাদেশ</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-6">নিউজলেটার</h4>
            <p className="text-sm">নতুন অফার এবং বইয়ের আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            <div className="flex gap-2">
              <input type="email" placeholder="আপনার ইমেইল" className="bg-midnight border border-emerald-900/50 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-secondary transition-colors" />
              <button className="bg-secondary text-midnight p-3 rounded-xl hover:bg-white transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-emerald-900/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>© ২০২৪ ইসলামি লাইব্রেরি | সর্বস্বত্ব সংরক্ষিত</div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified</span> প্রিমিয়াম ল্যান্ডিং ডিজাইন</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">shield</span> সিকিউর পেমেন্ট</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
