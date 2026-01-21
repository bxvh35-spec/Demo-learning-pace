
import React from 'react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 text-secondary border border-secondary/30 font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">workspace_premium</span>
              সেরা সংকলন ২০২৪
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              আন্তর্জাতিক স্কলারদের সাজেস্টকৃত <br/>
              <span className="text-secondary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">বেস্ট সেলিং ৪০টি বই কম্বো প্যাকেজ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl">
              ইসলামের ইতিহাসের শ্রেষ্ঠ ব্যক্তিদের জীবনী নিয়ে সাজানো এক অনন্য সংগ্রহ। আপনার জ্ঞান বৃদ্ধি ও আত্মিক উন্নতির জন্য এটি হতে পারে জীবনের সেরা ইনভেস্টমেন্ট।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={onOrderClick}
                className="px-10 py-5 bg-primary hover:bg-emerald-700 text-white text-xl font-bold rounded-full shadow-[0_10px_40px_rgba(27,94,32,0.4)] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group"
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">shopping_cart</span>
                অর্ডার করতে ক্লিক করুন
              </button>
              
              <div className="flex items-center gap-3 px-8 py-5 rounded-full border-2 border-emerald-900/50 bg-emerald-950/20 font-semibold text-white">
                আজকের অফার: <span className="text-3xl font-bold text-secondary ml-2">৯৯০৳</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-midnight" src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-midnight bg-emerald-900 flex items-center justify-center text-xs font-bold text-white">
                  +৫ক
                </div>
              </div>
              <p className="text-gray-400 text-sm">৫০০০+ মানুষ ইতিমধ্যে সংগ্রহ করেছেন</p>
            </div>
          </div>
          
          <div className="relative animate-in zoom-in duration-1000">
            <div className="absolute inset-0 bg-secondary/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="relative z-10 animate-float">
              <img 
                alt="Islamic Book Bundle" 
                className="w-full max-w-2xl mx-auto book-glow rounded-3xl shadow-2xl rotate-1 border border-secondary/20 hover:rotate-0 transition-transform duration-700" 
                src="https://i.postimg.cc/9F8j5LZs/file-0000000002b07207a559d25dc5eb2ab5.jpg"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl z-20 hidden lg:block hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full text-midnight">
                  <span className="material-symbols-outlined">card_giftcard</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary/80 uppercase tracking-wider">উপহার</p>
                  <p className="font-bold text-white text-lg">৫টি প্রিমিয়াম বুকমার্ক ফ্রি!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
