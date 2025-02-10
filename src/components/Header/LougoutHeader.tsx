import React from 'react'
import { Search, Wallet, MessageCircle, HelpCircle } from 'lucide-react';

const LougoutHeader = () => {
  return (
   <div className="bg-slate-900/95 m-3 mx-12 mt-8 rounded-xl p-2 flex justify-between items-center">
           <div className="text-center  ">
             <img 
               src="/images/Layer1.png" 
               alt="BOBITS Logo" 
               className="h-8 mx-aut object-contain"
             />
           </div>
             <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 bg-[#486379] px-4 py-2 rounded-sm text-gray-300 hover:text-white">
                 <span>How to Mine</span>
                 <HelpCircle size={18} />
               </button>
               <button className="bg-yellow-400 px-4 py-2 rounded-lg flex items-center gap-2">
                 <span>Connect Wallet</span>
                 <Wallet size={18} />
               </button>
             </div>
           </div>
  )
}

export default LougoutHeader