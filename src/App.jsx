import React, { useState } from 'react';
import { Search, Printer, BookOpen, Shirt, Star, CreditCard } from 'lucide-react';

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen bg-black text-slate-300 font-sans overflow-hidden">
      
      {/* SIDEBAR - Hidden on Print */}
      <div className="w-20 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-8 gap-8 print:hidden">
        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
          <Star className="text-black fill-black" size={24}/>
        </div>
        <button onClick={() => setActiveTab("Books")} className={`p-4 rounded-xl transition-all ${activeTab === "Books" ? "bg-emerald-500/10 text-emerald-500" : "text-zinc-600 hover:text-white"}`}><BookOpen/></button>
        <button onClick={() => setActiveTab("Uniform")} className={`p-4 rounded-xl transition-all ${activeTab === "Uniform" ? "bg-emerald-500/10 text-emerald-500" : "text-zinc-600 hover:text-white"}`}><Shirt/></button>
      </div>

      {/* PRODUCTS SECTION - Hidden on Print */}
      <div className="flex-1 flex flex-col p-8 overflow-hidden print:hidden">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase">GHAZALI BOOK SHOP</h1>
            <p className="text-emerald-500 text-[9px] font-bold tracking-[0.3em] uppercase">Owner: Malik Zahoor Ahmad</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-2.5 text-zinc-500" size={16} />
            <input 
              type="text" placeholder="Search..." 
              className="bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 outline-none focus:border-emerald-500 w-64 text-xs"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto grid grid-cols-2 lg:grid-cols-4 gap-4 pr-2">
          {productsList
            .filter(p => p.category === activeTab && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(p => (
              <button key={p.id} onClick={() => addToCart(p)} className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:border-emerald-500 transition-all text-left">
                <h3 className="font-bold text-[10px] text-zinc-400 mb-1 uppercase h-8 overflow-hidden">{p.name}</h3>
                <p className="text-xl font-black text-white tracking-tighter">Rs.{p.price}</p>
              </button>
            ))}
        </div>
      </div>

      {/* BILLING PANEL & PRINT AREA */}
      <div className="w-[360px] bg-zinc-900 border-l border-zinc-800 p-6 flex flex-col shadow-2xl print:bg-white print:w-full print:border-none print:p-0 print:absolute print:inset-0 print:z-50">
        
        <div className="flex justify-between items-center mb-4 print:hidden">
          <h2 className="text-sm font-black text-white flex items-center gap-2 tracking-widest"><CreditCard size={18}/> SLIP</h2>
          <button onClick={() => setCart([])} className="text-[9px] text-zinc-500 uppercase hover:text-red-500 font-bold">Clear</button>
        </div>

        {/* THE SLIP */}
        <div className="flex-1 bg-white rounded-2xl mb-4 overflow-hidden flex flex-col shadow-inner print:shadow-none print:rounded-none">
          <div id="printable-slip" className="flex-1 overflow-y-auto p-6 bg-white text-black font-mono text-[10px] leading-tight print:overflow-visible">
            
            <div className="text-center border-b border-black pb-4 mb-4 uppercase">
              <h1 className="text-xl font-black tracking-tighter">GHAZALI BOOK SHOP</h1>
              <p className="text-[9px] font-bold">Owner: Malik Zahoor Ahmad</p>
              <p className="text-[8px]">Miani, District Sargodha</p>
              <div className="flex justify-between mt-4 text-[8px] border-t border-black pt-1">
                <span>{new Date().toLocaleDateString()}</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-black text-left">
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

            <div className="border-t border-black pt-4 space-y-1">
              <div className="flex justify-between font-black text-sm">
                <span>TOTAL:</span>
                <span>Rs.{total}</span>
              </div>
              <div className="flex justify-between text-[9px] italic opacity-80">
                <span>CASH RECEIVED:</span>
                <span>Rs.{paid || 0}</span>
              </div>
              <div className="flex justify-between border-t border-black pt-2 font-black text-base text-black">
                <span>CHANGE:</span>
                <span>Rs.{balance}</span>
              </div>
            </div>
            
            <div className="mt-10 text-center border-t border-dashed border-gray-400 pt-6">
               <p className="text-[9px] font-black uppercase tracking-widest italic">Designed by Malik Danial</p>
               <p className="text-[7px] mt-1">Thank you for your visit!</p>
            </div>
          </div>
        </div>

        {/* ACTION PANEL - Hidden on Print */}
        <div className="space-y-4 print:hidden">
          <div className="bg-black border border-zinc-800 p-4 rounded-xl flex items-center justify-between">
            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Received</span>
            <input 
              type="number" className="bg-transparent text-right outline-none w-24 font-black text-xl text-emerald-500"
              placeholder="0" value={paid} onChange={(e) => setPaid(e.target.value)}
            />
          </div>
          <button 
            onClick={handlePrint} disabled={cart.length === 0}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all text-xs uppercase"
          >
            <Printer size={18}/> Print Slip
          </button>
        </div>
      </div>

      {/* Global CSS for Printing */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-slip, #printable-slip * { visibility: visible; }
          #printable-slip { position: absolute; left: 0; top: 0; width: 80mm; }
        }
        @page { size: auto; margin: 0mm; }
      `}</style>
    </div>
  );
}