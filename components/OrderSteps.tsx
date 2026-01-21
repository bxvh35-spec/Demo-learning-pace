
import React from 'react';

const Step: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="relative group">
    <div className="text-[10rem] font-black opacity-[0.03] absolute -top-20 left-1/2 -translate-x-1/2 group-hover:opacity-[0.08] transition-opacity leading-none select-none">
      {num}
    </div>
    <div className="relative pt-12 space-y-4">
      <div className="w-16 h-16 bg-secondary text-midnight rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-secondary/20">
        {num}
      </div>
      <h3 className="text-3xl font-bold text-white group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-emerald-50/70 text-lg leading-relaxed">{desc}</p>
    </div>
  </div>
);

interface OrderStepsProps {
  onOrderClick: () => void;
}

const OrderSteps: React.FC<OrderStepsProps> = ({ onOrderClick }) => {
  return (
    <section className="py-28 bg-gradient-to-br from-primary to-emerald-900 text-white overflow-hidden relative shadow-2xl" id="how-to-order">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-32">
          অর্ডার করার <span className="text-secondary drop-shadow-md">সহজ ৩টি ধাপ</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          <Step 
            num="০১" 
            title="ফর্মটি পূরণ করুন" 
            desc="নিচের 'অর্ডার করুন' বাটনে ক্লিক করে আপনার প্রয়োজনীয় তথ্য দিয়ে ফর্মটি পূরণ করুন।" 
          />
          <Step 
            num="০২" 
            title="অর্ডার নিশ্চিত করুন" 
            desc="আমাদের প্রতিনিধি আপনাকে কল করে ঠিকানা ভেরিফাই করে আপনার অর্ডারটি কনফার্ম করবে।" 
          />
          <Step 
            num="০৩" 
            title="পণ্য বুঝে নিন" 
            desc="কুরিয়ার থেকে প্যাকেটটি চেক করে মূল্য পরিশোধ করে আপনার প্রিয় বইগুলো সংগ্রহ করুন।" 
          />
        </div>
        
        <div className="mt-32 text-center">
          <button 
            onClick={onOrderClick}
            className="px-20 py-8 bg-secondary hover:bg-[#e5be47] text-midnight text-3xl font-black rounded-full shadow-[0_20px_50px_rgba(212,175,55,0.5)] transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center gap-4 mx-auto"
          >
            এখনই অর্ডার কনফার্ম করুন
            <span className="material-symbols-outlined text-4xl animate-bounce">keyboard_double_arrow_down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;
