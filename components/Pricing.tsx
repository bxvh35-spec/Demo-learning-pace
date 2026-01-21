
import React from 'react';

interface PricingProps {
  onOrderClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOrderClick }) => {
  return (
    <section className="py-24 bg-[#08150d] relative" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-secondary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">অর্ডার করুন এখনই</h2>
          <p className="text-gray-400 text-lg">সারা দেশে ক্যাশ অন ডেলিভারি সুবিধায় সংগ্রহ করুন</p>
        </div>
        
        <div className="glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden border-2 border-secondary/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 bg-secondary text-midnight px-12 py-4 rounded-bl-[3rem] font-black text-xl shadow-lg">
            ৮০% ছাড়
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ul className="space-y-6">
                {[
                  { icon: 'done_all', text: '৪০ টি জীবনী বইয়ের সেট', color: 'emerald' },
                  { icon: 'redeem', text: '৫ টি সুন্দর বুকমার্ক একদম ফ্রি', color: 'emerald' },
                  { icon: 'local_shipping', text: 'সারাদেশে ক্যাশ অন ডেলিভারি', color: 'emerald' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <span className={`material-symbols-outlined text-${item.color}-400 bg-${item.color}-900/40 p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </span>
                    <span className="text-2xl font-medium text-white">{item.text}</span>
                  </li>
                ))}
                <li className="flex items-center gap-4 opacity-50">
                  <span className="material-symbols-outlined text-red-400 bg-red-900/20 p-3 rounded-2xl">close</span>
                  <span className="text-xl font-medium line-through">বাজার মূল্য: ৫৯০০ টাকা</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center space-y-8 p-8 rounded-[2.5rem] bg-midnight/40 border border-emerald-900/50">
              <div className="space-y-2">
                <p className="text-lg font-bold text-secondary tracking-widest uppercase">স্পেশাল অফার প্রাইজ</p>
                <div className="text-8xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-1">
                  ৯৯০ <span className="text-4xl">৳</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-400 bg-emerald-900/20 py-3 rounded-xl border border-emerald-900/30 font-medium">
                  <span className="material-symbols-outlined text-xs align-middle mr-1">timer</span>
                  অফারটি শুধুমাত্র আজকের জন্য প্রযোজ্য
                </p>
                <button 
                  onClick={onOrderClick}
                  className="w-full py-6 bg-secondary text-midnight text-3xl font-black rounded-3xl shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all hover:bg-[#e5be47] flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-4xl">shopping_basket</span>
                  অর্ডার করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
