
import React, { useState } from 'react';

interface OrderModalProps {
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash on Delivery',
    transactionId: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FORMSPREE_URL = "https://formspree.io/f/xwvvwqdw";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Order from ${formData.name}`,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
      }
    } catch (err) {
      setError("নেটওয়ার্ক সমস্যা। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const paymentNumber = "01353214607";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-midnight/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative glass-card w-full max-w-xl rounded-[2.5rem] p-6 md:p-10 shadow-2xl animate-in zoom-in duration-300 my-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">অর্ডার কনফার্ম করুন</h3>
              <p className="text-gray-400">নিচে আপনার সঠিক তথ্য দিয়ে অর্ডারটি সম্পন্ন করুন।</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">আপনার নাম *</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-xl">person</span>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="পুরো নাম"
                      className="w-full bg-midnight/50 border border-emerald-900/50 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-secondary transition-colors text-white text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">মোবাইল নাম্বার *</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-xl">call</span>
                    <input 
                      name="phone"
                      required
                      type="tel" 
                      placeholder="০১XXX-XXXXXX"
                      className="w-full bg-midnight/50 border border-emerald-900/50 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-secondary transition-colors text-white text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">পূর্ণ ঠিকানা *</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3 text-secondary/50 text-xl">location_on</span>
                  <textarea 
                    name="address"
                    required
                    rows={2}
                    placeholder="গ্রাম/রোড, উপজেলা, জেলা"
                    className="w-full bg-midnight/50 border border-emerald-900/50 rounded-xl pt-3 pl-11 pr-4 focus:outline-none focus:border-secondary transition-colors text-white text-sm resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  ></textarea>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">পেমেন্ট মেথড নির্বাচন করুন</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Cash on Delivery', label: 'Cash', icon: 'payments' },
                    { id: 'bKash', label: 'bKash', icon: 'account_balance_wallet' },
                    { id: 'Nagad', label: 'Nagad', icon: 'account_balance_wallet' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({...formData, paymentMethod: method.id})}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all ${
                        formData.paymentMethod === method.id 
                        ? 'border-secondary bg-secondary/10 text-secondary' 
                        : 'border-emerald-900/30 bg-midnight/30 text-gray-500 hover:border-emerald-700'
                      }`}
                    >
                      <span className="material-symbols-outlined mb-1">{method.icon}</span>
                      <span className="text-xs font-bold">{method.label}</span>
                    </button>
                  ))}
                </div>

                {formData.paymentMethod !== 'Cash on Delivery' && (
                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-secondary/20 space-y-3 animate-in slide-in-from-top-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">এই নাম্বারে টাকা পাঠান (Send Money):</span>
                      <span className="text-secondary font-bold text-lg">{paymentNumber}</span>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Transaction ID (টাকা পাঠানোর পর লিখুন)</label>
                      <input 
                        name="transactionId"
                        type="text" 
                        placeholder="TrxID এখানে দিন"
                        className="w-full bg-midnight/50 border border-secondary/30 rounded-lg py-2 px-4 focus:outline-none focus:border-secondary transition-colors text-white text-sm"
                        value={formData.transactionId}
                        onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                      />
                    </div>
                  </div>
                )}
              </div>

              {error && <p className="text-red-400 text-xs text-center font-medium">{error}</p>}

              <div className="pt-2">
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="text-gray-400 font-medium">ডেলিভারি সহ মোট:</span>
                  <span className="text-3xl font-black text-secondary">৯৯০ ৳</span>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl text-xl font-black shadow-xl transition-all flex items-center justify-center gap-3 ${
                    isSubmitting 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-secondary text-midnight shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-6 w-6 text-midnight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      অর্ডার প্রসেস হচ্ছে...
                    </span>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-3xl">shopping_cart_checkout</span>
                      অর্ডার কনফার্ম করুন
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[12px] align-middle mr-1">security</span>
              আপনার তথ্য আমাদের কাছে ১০০% নিরাপদ
            </p>
          </div>
        ) : (
          <div className="text-center py-12 space-y-8 animate-in fade-in zoom-in">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
              <span className="material-symbols-outlined text-white text-6xl">check_circle</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white">অর্ডার সফল হয়েছে!</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                ধন্যবাদ <span className="text-secondary font-bold">{formData.name}</span>! <br/> 
                আপনার অর্ডারটি আমরা পেয়েছি। খুব শীঘ্রই আমাদের প্রতিনিধি আপনাকে কল করবেন।
              </p>
            </div>
            <button 
              onClick={onClose}
              className="px-12 py-4 bg-emerald-900/30 border-2 border-emerald-900/50 rounded-xl text-white font-bold hover:bg-emerald-800/40 transition-all"
            >
              বন্ধ করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
