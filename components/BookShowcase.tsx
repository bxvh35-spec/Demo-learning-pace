
import React from 'react';

const BookShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-card-dark/30 border-y border-emerald-900/30" id="included-books">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">প্যাকেজের অন্তর্ভুক্ত ৪০টি বই</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto pt-4">
            ইসলামের ইতিহাসের শ্রেষ্ঠ মহানায়কদের জীবনী নিয়ে লেখা এই প্রিমিয়াম প্যাকেজে আপনি পাচ্ছেন ঝকঝকে আধুনিক বাইন্ডিংয়ের ৪০টি চমৎকার বই।
          </p>
        </div>
        
        <div className="glass-card p-4 md:p-8 rounded-[2.5rem] overflow-hidden shadow-2xl group relative">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-3xl bg-midnight/50 border border-emerald-900/50 flex justify-center items-center relative overflow-hidden">
            <img 
              alt="All 40 Books Collection" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://i.postimg.cc/9F8j5LZs/file-0000000002b07207a559d25dc5eb2ab5.jpg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">প্রিমিয়াম পেপার</span>
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">আধুনিক প্রচ্ছদ</span>
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">অরিজিনাল বাইন্ডিং</span>
            </div>
          </div>
          
          <div className="pt-8 text-center">
            <p className="text-secondary font-medium text-xl italic">
              "বইগুলো পড়ার সময় আপনি হারিয়ে যাবেন ইসলামের সেই স্বর্ণালি যুগে..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
