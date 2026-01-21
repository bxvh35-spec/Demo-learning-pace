
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="text-center p-10 rounded-[2.5rem] bg-card-dark border border-emerald-900/30 hover:border-secondary/50 transition-all hover:-translate-y-3 shadow-2xl group">
    <div className="w-24 h-24 bg-emerald-900/30 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-800/50 group-hover:bg-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary text-5xl group-hover:rotate-12 transition-transform">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-28" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white">
          কেন আমাদের থেকে <span className="text-secondary">কিনবেন?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FeatureCard 
            icon="local_shipping" 
            title="দ্রুত ডেলিভারি" 
            desc="সারা বাংলাদেশে অত্যন্ত দ্রুততার সাথে এবং নিরাপদে ক্যাশ অন ডেলিভারি সুবিধা প্রদান করি।" 
          />
          <FeatureCard 
            icon="verified" 
            title="প্রিমিয়াম কোয়ালিটি" 
            desc="১০০% সন্তুষ্টির নিশ্চয়তা সহ প্রতিটি বই ঝকঝকে আধুনিক মানের এবং উন্নত বাইন্ডিং যুক্ত।" 
          />
          <FeatureCard 
            icon="headset_mic" 
            title="২৪/৭ সাপোর্ট" 
            desc="যেকোনো প্রয়োজনে আমাদের ডেডিকেটেড কাস্টমার সাপোর্ট টিম আপনার সেবায় সর্বদা নিয়োজিত।" 
          />
          <FeatureCard 
            icon="package_2" 
            title="নিরাপদ প্যাকিং" 
            desc="বইয়ের কোনো প্রকার ক্ষতি ছাড়া আপনার হাতে পৌঁছাতে আমরা ব্যবহার করি কয়েক স্তরের প্যাকিং।" 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
