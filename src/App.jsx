import React, { useState } from 'react';
import { Search, Printer, BookOpen, Shirt, Star, CreditCard, ShoppingCart } from 'lucide-react';

const productsList = [
  // --- AFAQ SUN SERIES ---
  { id: "pg1", name: "Urdu (PG)", price: 560, category: "Books" },
  { id: "pg2", name: "English (PG)", price: 515, category: "Books" },
  { id: "pg3", name: "Math (PG)", price: 500, category: "Books" },
  { id: "nr1", name: "Urdu (Nursery)", price: 610, category: "Books" },
  { id: "nr2", name: "English (Nursery)", price: 620, category: "Books" },
  { id: "nr3", name: "Math (Nursery)", price: 490, category: "Books" },
  { id: "kg1", name: "Urdu (KG)", price: 625, category: "Books" },
  { id: "kg2", name: "English (KG)", price: 550, category: "Books" },
  { id: "kg3", name: "Math (KG)", price: 500, category: "Books" },
  { id: "kg4", name: "Science (KG)", price: 470, category: "Books" },
  { id: "kg5", name: "Islamiat (KG)", price: 345, category: "Books" },
  { id: "kg6", name: "Social Studies UM (KG)", price: 370, category: "Books" },
  { id: "kg7", name: "Social Studies EM (KG)", price: 455, category: "Books" },
  { id: "c1-1", name: "Urdu (1st)", price: 725, category: "Books" },
  { id: "c1-2", name: "English (1st)", price: 705, category: "Books" },
  { id: "c1-3", name: "Math (1st)", price: 750, category: "Books" },
  { id: "c1-4", name: "Science (1st)", price: 670, category: "Books" },
  { id: "c1-5", name: "Islamiat (1st)", price: 415, category: "Books" },
  { id: "c1-6", name: "Social Studies EM (1st)", price: 530, category: "Books" },
  { id: "c1-7", name: "General Knowledge (1st)", price: 500, category: "Books" },
  { id: "c2-1", name: "Urdu (2nd)", price: 725, category: "Books" },
  { id: "c2-2", name: "English (2nd)", price: 720, category: "Books" },
  { id: "c2-3", name: "Math (2nd)", price: 750, category: "Books" },
  { id: "c2-4", name: "Science (2nd)", price: 725, category: "Books" },
  { id: "c2-5", name: "Islamiat (2nd)", price: 450, category: "Books" },
  { id: "c2-6", name: "Social Studies EM (2nd)", price: 540, category: "Books" },
  { id: "c2-7", name: "General Knowledge (2nd)", price: 550, category: "Books" },
  { id: "c3-1", name: "Urdu (3rd)", price: 760, category: "Books" },
  { id: "c3-2", name: "English (3rd)", price: 755, category: "Books" },
  { id: "c3-3", name: "Math (3rd)", price: 775, category: "Books" },
  { id: "c3-4", name: "Science (3rd)", price: 765, category: "Books" },
  { id: "c3-5", name: "Islamiat (3rd)", price: 520, category: "Books" },
  { id: "c3-6", name: "Social Studies EM (3rd)", price: 620, category: "Books" },
  { id: "c3-7", name: "General Knowledge (3rd)", price: 570, category: "Books" },
  { id: "c4-1", name: "Urdu (4th)", price: 750, category: "Books" },
  { id: "c4-2", name: "English (4th)", price: 730, category: "Books" },
  { id: "c4-3", name: "Math (4th)", price: 760, category: "Books" },
  { id: "c4-4", name: "Science (4th)", price: 750, category: "Books" },
  { id: "c4-5", name: "Islamiat (4th)", price: 580, category: "Books" },
  { id: "c4-6", name: "Social Studies UM (4th)", price: 630, category: "Books" },
  { id: "c5-1", name: "Urdu (5th)", price: 795, category: "Books" },
  { id: "c5-2", name: "English (5th)", price: 780, category: "Books" },
  { id: "c5-3", name: "Math (5th)", price: 795, category: "Books" },
  { id: "c5-4", name: "Science (5th)", price: 795, category: "Books" },
  { id: "c5-5", name: "Islamiat (5th)", price: 595, category: "Books" },
  { id: "c5-6", name: "Social Studies UM (5th)", price: 630, category: "Books" },

  // --- UNIFORM ---
  { id: "uq1", name: "Qameez Suit 24", price: 870, category: "Uniform" },
  { id: "uq2", name: "Qameez Suit 26", price: 930, category: "Uniform" },
  { id: "uq3", name: "Qameez Suit 28", price: 990, category: "Uniform" },
  { id: "uq4", name: "Qameez Suit 30", price: 1050, category: "Uniform" },
  { id: "uq5", name: "Qameez Suit 32", price: 1110, category: "Uniform" },
  { id: "uq6", name: "Qameez Suit 34", price: 1170, category: "Uniform" },
  { id: "uq7", name: "Qameez Suit 36", price: 1245, category: "Uniform" },
  { id: "uq8", name: "Qameez Suit 38", price: 1320, category: "Uniform" },
  { id: "uq9", name: "Qameez Suit 40", price: 1380, category: "Uniform" },
  { id: "up1", name: "Pant Size 22", price: 650, category: "Uniform" },
  { id: "up2", name: "Pant Size 24", price: 700, category: "Uniform" },
  { id: "up3", name: "Pant Size 26", price: 741, category: "Uniform" },
  { id: "up4", name: "Pant Size 28", price: 798, category: "Uniform" },
  { id: "up5", name: "Pant Size 30", price: 855, category: "Uniform" },
  { id: "up6", name: "Pant Size 32", price: 912, category: "Uniform" },
  { id: "up7", name: "Pant Size 34", price: 969, category: "Uniform" },
  { id: "up8", name: "Pant Size 36", price: 1083, category: "Uniform" },
  { id: "up9", name: "Pant Size 38", price: 1140, category: "Uniform" },
  { id: "us1", name: "Shirt Size 20", price: 890, category: "Uniform" },
  { id: "us2", name: "Shirt Size 22", price: 950, category: "Uniform" },
  { id: "us3", name: "Shirt Size 24", price: 1035, category: "Uniform" },
  { id: "us4", name: "Shirt Size 26", price: 1110, category: "Uniform" },
  { id: "us5", name: "Shirt Size 28", price: 1185, category: "Uniform" },
  { id: "us6", name: "Shirt Size S", price: 1260, category: "Uniform" },
  { id: "us7", name: "Shirt Size L", price: 1350, category: "Uniform" },
  { id: "us8", name: "Shirt Size M", price: 1440, category: "Uniform" },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [paid, setPaid] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Books");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (p) => {
    const exist = cart.find(x => x.id === p.id);
    if (exist) {
      setCart(cart.map(x => x.id === p.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCart([...cart, { ...p, qty: 1 }]);
    }
  };

  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const balance = (Number(paid) || 0) - total;

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans flex flex-col md:flex-row overflow-x-hidden">
      
      {/* SIDEBAR - Top on Mobile, Left on Desktop */}
      <div className="w-full md:w-20 bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 flex md:flex-col items-center py-4 md:py-8 justify-around md:justify-start gap-0 md:gap-8 print:hidden shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
          <Star className="text-black fill-black" size={20}/>
        </div>
        <button onClick={() => setActiveTab("Books")} className={`p-3 md:p-4 rounded-xl transition-all ${activeTab === "Books" ? "bg-emerald-500/10 text-emerald-500" : "text-zinc-600 hover:text-white"}`}><BookOpen size={20}/></button>
        <button onClick={() => setActiveTab("Uniform")} className={`p-3 md:p-4 rounded-xl transition-all ${activeTab === "Uniform" ? "bg-emerald-500/10 text-emerald-500" : "text-zinc-600 hover:text-white"}`}><Shirt size={20}/></button>
        <button onClick={() => setShowCart(!showCart)} className="md:hidden p-3 text-emerald-500 relative">
          <ShoppingCart size={20}/>
          {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>}
        </button>
      </div>

      {/* PRODUCTS SECTION */}
      <div className={`flex-1 flex flex-col p-4 md:p-8 ${showCart ? 'hidden md:flex' : 'flex'} print:hidden`}>
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">GHAZALI BOOK SHOP</h1>
            <p className="text-emerald-500 text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase">Owner: Malik Zahoor Ahmad</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-2.5 text-zinc-500" size={16} />
            <input 
              type="text" placeholder="Search..." 
              className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 outline-none focus:border-emerald-500 w-full text-xs"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pb-20 md:pb-0">
          {productsList
            .filter(p => p.category === activeTab && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(p => (
              <button key={p.id} onClick={() => addToCart(p)} className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 rounded-xl hover:border-emerald-500 transition-all text-left">
                <h3 className="font-bold text-[9px] md:text-[10px] text-zinc-400 mb-1 uppercase h-8 overflow-hidden line-clamp-2">{p.name}</h3>
                <p className="text-lg md:text-xl font-black text-white tracking-tighter">Rs.{p.price}</p>
              </button>
            ))}
        </div>
      </div>

      {/* BILLING PANEL */}
      <div className={`${showCart ? 'flex' : 'hidden'} md:flex w-full md:w-[360px] bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-800 p-4 md:p-6 flex-col shadow-2xl h-screen md:h-auto fixed md:relative top-0 left-0 z-50 md:z-auto print:bg-white print:w-full print:border-none print:p-0 print:static`}>
        
        <div className="flex justify-between items-center mb-4 print:hidden">
          <button onClick={() => setShowCart(false)} className="md:hidden text-zinc-500 text-xs">← Back</button>
          <h2 className="text-sm font-black text-white flex items-center gap-2 tracking-widest"><CreditCard size={18}/> SLIP</h2>
          <button onClick={() => setCart([])} className="text-[9px] text-zinc-500 uppercase font-bold">Clear</button>
        </div>

        <div className="flex-1 bg-white rounded-xl mb-4 overflow-hidden flex flex-col shadow-inner print:rounded-none print:shadow-none">
          <div id="printable-slip" className="flex-1 overflow-y-auto p-4 md:p-6 bg-white text-black font-mono text-[10px] leading-tight print:overflow-visible">
            
            <div className="text-center border-b border-black pb-3 mb-4 uppercase">
              <h1 className="text-lg font-black tracking-tighter">GHAZALI BOOK SHOP</h1>
              <p className="text-[8px] font-bold">Owner: Malik Zahoor Ahmad</p>
              <div className="flex justify-between mt-3 text-[7px] border-t border-black pt-1">
                <span>{new Date().toLocaleDateString()}</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-black text-left text-[8px]">
                  <th className="pb-1">ITEM</th>
                  <th className="pb-1 text-right">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b border-dotted border-gray-300">
                    <td className="py-2 pr-1 uppercase text-[8px] font-bold">{item.qty}x {item.name}</td>
                    <td className="text-right font-black">Rs.{item.qty * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="border-t border-black pt-3 space-y-1">
              <div className="flex justify-between font-black text-xs">
                <span>TOTAL:</span>
                <span>Rs.{total}</span>
              </div>
              <div className="flex justify-between text-[8px] italic opacity-80">
                <span>RECEIVED:</span>
                <span>Rs.{paid || 0}</span>
              </div>
              <div className="flex justify-between border-t border-black pt-1 font-black text-sm">
                <span>CHANGE:</span>
                <span>Rs.{balance}</span>
              </div>
            </div>
            
            <div className="mt-8 text-center border-t border-dashed border-gray-400 pt-4">
               <p className="text-[9px] font-black uppercase tracking-widest italic">Designed by Malik Danial</p>
               <p className="text-[7px] mt-1">Thank you for shopping!</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 print:hidden">
          <div className="bg-black border border-zinc-800 p-3 rounded-lg flex items-center justify-between">
            <span className="text-[9px] font-black text-zinc-500 uppercase">Received</span>
            <input 
              type="number" className="bg-transparent text-right outline-none w-24 font-black text-lg text-emerald-500"
              placeholder="0" value={paid} onChange={(e) => setPaid(e.target.value)}
            />
          </div>
          <button 
            onClick={() => window.print()} disabled={cart.length === 0}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all text-xs uppercase"
          >
            <Printer size={18}/> Print Slip
          </button>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-slip, #printable-slip * { visibility: visible; }
          #printable-slip { position: fixed; left: 0; top: 0; width: 80mm; }
        }
        @page { size: auto; margin: 0mm; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}