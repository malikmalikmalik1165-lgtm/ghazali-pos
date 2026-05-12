import React, { useState } from 'react';
import { Search, Printer, Star, ShoppingBag, X, Plus, Minus, BookOpen, Shirt, Ruler } from 'lucide-react';

const productsList = [
  // PG, Nursery, KG (Data from previous context)
  { id: "pg1", name: "Urdu (PG)", price: 560, category: "PG" },
  { id: "pg2", name: "English (PG)", price: 515, category: "PG" },
  { id: "pg3", name: "Math (PG)", price: 500, category: "PG" },
  { id: "nr1", name: "Urdu (Nursery)", price: 610, category: "Nursery" },
  { id: "nr2", name: "English (Nursery)", price: 620, category: "Nursery" },
  { id: "nr3", name: "Math (Nursery)", price: 490, category: "Nursery" },
  { id: "kg1", name: "Urdu (KG)", price: 625, category: "KG" },
  { id: "kg2", name: "English (KG)", price: 550, category: "KG" },
  { id: "kg3", name: "Math (KG)", price: 500, category: "KG" },
  { id: "kg4", name: "Science (KG)", price: 470, category: "KG" },
  { id: "kg5", name: "Islamiat (KG)", price: 345, category: "KG" },
  { id: "kg6", name: "S.Studies UM (KG)", price: 370, category: "KG" },
  { id: "kg7", name: "S.Studies EM (KG)", price: 455, category: "KG" },

  // Class 1 & 2
  { id: "c1-1", name: "Urdu (1st)", price: 725, category: "Class 1" },
  { id: "c1-2", name: "English (1st)", price: 705, category: "Class 1" },
  { id: "c1-3", name: "Math (1st)", price: 750, category: "Class 1" },
  { id: "c1-4", name: "Science (1st)", price: 670, category: "Class 1" },
  { id: "c1-5", name: "Islamiat (1st)", price: 415, category: "Class 1" },
  { id: "c1-6", name: "S.Studies EM (1st)", price: 530, category: "Class 1" },
  { id: "c1-7", name: "G.Knowledge (1st)", price: 500, category: "Class 1" },
  { id: "c2-1", name: "Urdu (2nd)", price: 725, category: "Class 2" },
  { id: "c2-2", name: "English (2nd)", price: 720, category: "Class 2" },
  { id: "c2-3", name: "Math (2nd)", price: 750, category: "Class 2" },
  { id: "c2-4", name: "Science (2nd)", price: 725, category: "Class 2" },
  { id: "c2-5", name: "Islamiat (2nd)", price: 450, category: "Class 2" },
  { id: "c2-6", name: "S.Studies EM (2nd)", price: 540, category: "Class 2" },
  { id: "c2-7", name: "G.Knowledge (2nd)", price: 550, category: "Class 2" },

  // Class 3 (Complete)
  { id: "c3-1", name: "Urdu (3rd)", price: 760, category: "Class 3" },
  { id: "c3-2", name: "English (3rd)", price: 755, category: "Class 3" },
  { id: "c3-3", name: "Math (3rd)", price: 775, category: "Class 3" },
  { id: "c3-4", name: "Science (3rd)", price: 765, category: "Class 3" },
  { id: "c3-5", name: "Islamiat (3rd)", price: 520, category: "Class 3" },
  { id: "c3-6", name: "S.Studies EM (3rd)", price: 620, category: "Class 3" },
  { id: "c3-7", name: "G.Knowledge (3rd)", price: 570, category: "Class 3" },

  // Class 4 (Complete)
  { id: "c4-1", name: "Urdu (4th)", price: 750, category: "Class 4" },
  { id: "c4-2", name: "English (4th)", price: 730, category: "Class 4" },
  { id: "c4-3", name: "Math (4th)", price: 760, category: "Class 4" },
  { id: "c4-4", name: "Science (4th)", price: 750, category: "Class 4" },
  { id: "c4-5", name: "Islamiat (4th)", price: 580, category: "Class 4" },
  { id: "c4-6", name: "S.Studies UM (4th)", price: 630, category: "Class 4" },

  // Class 5 (Complete)
  { id: "c5-1", name: "Urdu (5th)", price: 795, category: "Class 5" },
  { id: "c5-2", name: "English (5th)", price: 780, category: "Class 5" },
  { id: "c5-3", name: "Math (5th)", price: 795, category: "Class 5" },
  { id: "c5-4", name: "Science (5th)", price: 795, category: "Class 5" },
  { id: "c5-5", name: "Islamiat (5th)", price: 595, category: "Class 5" },
  { id: "c5-6", name: "S.Studies UM (5th)", price: 630, category: "Class 5" },

  // Uniform - Qameez Suits
  { id: "uq1", name: "Qameez Suit 24", price: 870, category: "U-Suits" },
  { id: "uq2", name: "Qameez Suit 26", price: 930, category: "U-Suits" },
  { id: "uq3", name: "Qameez Suit 28", price: 990, category: "U-Suits" },
  { id: "uq4", name: "Qameez Suit 30", price: 1050, category: "U-Suits" },
  { id: "uq5", name: "Qameez Suit 32", price: 1110, category: "U-Suits" },
  { id: "uq6", name: "Qameez Suit 34", price: 1170, category: "U-Suits" },
  { id: "uq7", name: "Qameez Suit 36", price: 1245, category: "U-Suits" },
  { id: "uq8", name: "Qameez Suit 38", price: 1320, category: "U-Suits" },
  { id: "uq9", name: "Qameez Suit 40", price: 1380, category: "U-Suits" },

  // Uniform - Pants
  { id: "up1", name: "Pant Size 22", price: 650, category: "U-Pants" },
  { id: "up2", name: "Pant Size 24", price: 700, category: "U-Pants" },
  { id: "up3", name: "Pant Size 26", price: 741, category: "U-Pants" },
  { id: "up4", name: "Pant Size 28", price: 798, category: "U-Pants" },
  { id: "up5", name: "Pant Size 30", price: 855, category: "U-Pants" },
  { id: "up6", name: "Pant Size 32", price: 912, category: "U-Pants" },
  { id: "up7", name: "Pant Size 34", price: 969, category: "U-Pants" },
  { id: "up8", name: "Pant Size 36", price: 1083, category: "U-Pants" },
  { id: "up9", name: "Pant Size 38", price: 1140, category: "U-Pants" },

  // Uniform - Shirts
  { id: "us1", name: "Shirt Size 20", price: 890, category: "U-Shirts" },
  { id: "us2", name: "Shirt Size 22", price: 950, category: "U-Shirts" },
  { id: "us3", name: "Shirt Size 24", price: 1035, category: "U-Shirts" },
  { id: "us4", name: "Shirt Size 26", price: 1110, category: "U-Shirts" },
  { id: "us5", name: "Shirt Size 28", price: 1185, category: "U-Shirts" },
  { id: "us6", name: "Shirt Size S", price: 1260, category: "U-Shirts" },
  { id: "us7", name: "Shirt Size L", price: 1350, category: "U-Shirts" },
  { id: "us8", name: "Shirt Size M", price: 1440, category: "U-Shirts" },
];

const categories = ["PG", "Nursery", "KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "U-Suits", "U-Pants", "U-Shirts"];

export default function App() {
  const [cart, setCart] = useState([]);
  const [paid, setPaid] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("PG");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p) => {
    const exist = cart.find(x => x.id === p.id);
    if (exist) {
      setCart(cart.map(x => x.id === p.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCart([...cart, { ...p, qty: 1 }]);
    }
  };

  const updateQty = (id, val) => {
    setCart(cart.map(x => x.id === id ? { ...x, qty: Math.max(1, x.qty + val) } : x).filter(x => x.qty > 0));
  };

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const balance = (Number(paid) || 0) - total;

  return (
    <div className="flex flex-col h-screen bg-[#020617] text-slate-200 font-sans overflow-hidden">
      
      {/* HEADER SECTION */}
      <header className="p-5 pb-2 bg-[#020617]/95 backdrop-blur-md z-30 border-b border-white/5 print:hidden">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">GHAZALI POS</h1>
            <p className="text-emerald-400 text-[8px] font-bold tracking-[0.3em] uppercase">Owner: Malik Zahoor Ahmad</p>
          </div>
          <div className="w-10 h-10 bg-emerald-500 rounded-2xl rotate-3 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Star className="text-black fill-black -rotate-3" size={20}/>
          </div>
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
          <input 
            type="text" placeholder="Search item..." 
            className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 ring-emerald-500/20 text-sm transition-all shadow-inner"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* DYNAMIC CATEGORY BAR */}
        <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar scroll-smooth">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${activeTab === cat ? 'bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'bg-slate-900 border-white/5 text-slate-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* PRODUCT LIST AREA */}
      <main className="flex-1 overflow-y-auto p-5 pb-32 print:hidden">
        <div className="grid grid-cols-2 gap-4">
          {productsList
            .filter(p => p.category === activeTab && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(p => (
              <button 
                key={p.id} onClick={() => addToCart(p)} 
                className="bg-slate-900/40 border border-white/5 p-5 rounded-[32px] hover:bg-slate-800/40 active:scale-95 transition-all text-left flex flex-col justify-between h-36 relative overflow-hidden"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-emerald-500 mb-2">
                    {p.category.includes('U-') ? <Shirt size={14}/> : <BookOpen size={14}/>}
                </div>
                <div>
                  <h3 className="font-bold text-[10px] text-white leading-tight mb-2 uppercase line-clamp-2">{p.name}</h3>
                  <p className="text-emerald-400 font-black text-sm tracking-tighter">Rs.{p.price}</p>
                </div>
                {/* Visual Glow */}
                <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-emerald-500/5 blur-2xl rounded-full"></div>
              </button>
            ))}
        </div>
      </main>

      {/* FOOTER ACTION BAR */}
      <div className="fixed bottom-0 left-0 w-full p-5 z-40 print:hidden">
        <div className="bg-slate-900/90 backdrop-blur-3xl border border-white/10 p-3 rounded-[32px] flex justify-between items-center shadow-2xl shadow-black">
          <div className="flex items-center gap-4 pl-4">
             <div className="relative">
                <ShoppingBag className="text-emerald-500" size={24} />
                <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900">{cart.length}</span>
             </div>
             <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Grand Total</p>
                <p className="text-white font-black text-lg leading-none">Rs.{total}</p>
             </div>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-emerald-500 text-black px-8 py-4 rounded-[24px] font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
          >
            Check Slip
          </button>
        </div>
      </div>

      {/* CHECKOUT OVERLAY PANEL */}
      <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute bottom-0 left-0 w-full bg-slate-900 rounded-t-[48px] p-8 pb-10 transition-all duration-500 transform ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="w-16 h-1.5 bg-slate-800 rounded-full mx-auto mb-8" onClick={() => setIsCartOpen(false)}></div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-white italic tracking-tighter">SUMMARY</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-3 bg-white/5 rounded-full text-slate-400"><X size={24}/></button>
            </div>

            <div className="max-h-[35vh] overflow-y-auto mb-8 pr-2 space-y-4 no-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-center text-slate-500 uppercase font-black tracking-widest py-10">Empty Cart</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/5">
                        <div className="flex-1">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-tight line-clamp-1">{item.name}</h4>
                            <p className="text-emerald-400 font-bold text-[10px]">Rs. {item.price * item.qty}</p>
                        </div>
                        <div className="flex items-center gap-4 bg-black/40 p-2 rounded-2xl">
                            <button onClick={() => updateQty(item.id, -1)} className="p-1.5 text-slate-400"><Minus size={16}/></button>
                            <span className="font-black text-white text-sm">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="p-1.5 text-emerald-500"><Plus size={16}/></button>
                        </div>
                    </div>
                  ))
                )}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[32px] mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Paid Cash</span>
                    <input 
                        type="number" className="bg-transparent text-right outline-none w-28 font-black text-white text-2xl"
                        placeholder="0" value={paid} onChange={(e) => setPaid(e.target.value)}
                    />
                </div>
                <div className="flex justify-between items-center border-t border-emerald-500/20 pt-4">
                    <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">Return Balance</span>
                    <span className="text-white font-black text-2xl italic">Rs. {balance}</span>
                </div>
            </div>

            <button 
                onClick={() => window.print()}
                className="w-full bg-emerald-500 text-black font-black py-6 rounded-[32px] flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/30 uppercase text-xs tracking-widest active:scale-95 transition-all"
            >
                <Printer size={20}/> Generate Receipt
            </button>
        </div>
      </div>

      {/* THERMAL PRINT SLIP */}
      <div id="printable-slip" className="hidden print:block bg-white text-black p-10 font-mono text-[13px] leading-tight">
            <div className="text-center border-b-4 border-black pb-6 mb-6">
                <h1 className="text-3xl font-black italic tracking-tighter uppercase">Ghazali Book Shop</h1>
                <p className="text-xs font-bold tracking-widest mt-1">Owner: Malik Zahoor Ahmad</p>
                <p className="text-[10px] font-medium">Bhera-Malakwal Road, Miani</p>
                <div className="flex justify-between mt-6 text-[10px] font-black border-t border-black pt-2 uppercase">
                    <span>{new Date().toLocaleDateString()}</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                </div>
            </div>
            <table className="w-full mb-8">
                <thead>
                    <tr className="border-b-2 border-black text-left">
                        <th className="py-2 uppercase text-[11px]">Item Desc</th>
                        <th className="py-2 text-right uppercase text-[11px]">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id} className="border-b border-black/10">
                            <td className="py-2 font-bold uppercase text-[10px]">{item.qty}x {item.name}</td>
                            <td className="text-right font-black">Rs.{item.qty * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="border-t-4 border-black pt-4 space-y-2">
                <div className="flex justify-between text-2xl font-black italic">
                    <span>NET TOTAL:</span>
                    <span>Rs.{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>CASH PAID:</span>
                    <span>Rs.{paid || 0}</span>
                </div>
                <div className="flex justify-between font-black text-lg border-t border-black pt-1">
                    <span>BALANCE:</span>
                    <span>Rs.{balance}</span>
                </div>
            </div>
            <div className="mt-12 text-center border-t-2 border-dotted border-black pt-6">
                <p className="text-sm font-black italic tracking-widest uppercase mb-1">Developed by Malik Danial</p>
                <p className="text-[9px] font-bold">Premium Software Solutions</p>
            </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media print {
          body * { visibility: hidden; }
          #printable-slip, #printable-slip * { visibility: visible; }
          #printable-slip { position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: white; z-index: 9999; }
        }
      `}</style>
    </div>
  );
}