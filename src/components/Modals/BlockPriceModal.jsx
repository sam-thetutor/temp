
import React from 'react'




const BlockPriceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl w-full max-w-sm overflow-hidden">
          {/* Header */}
          <div className="bg-slate-800 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-medium">Block Price Info</h2>
            <button 
              onClick={onClose} 
              className="bg-red-500 rounded-full p-1 hover:bg-red-600"
            >
              <X size={16} className="text-white" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            {/* Countdown Timer */}
            <div className="mb-8">
              <div className="text-gray-600 text-center mb-3">Next Halving in</div>
              <div className="flex justify-center items-end text-4xl font-mono gap-2">
                <div className="text-center">
                  <div className="font-bold">2</div>
                  <div className="text-xs text-orange-500 mt-1">Days</div>
                </div>
                <div className="mb-2">:</div>
                <div className="text-center">
                  <div className="font-bold">12</div>
                  <div className="text-xs text-orange-500 mt-1">Hours</div>
                </div>
                <div className="mb-2">:</div>
                <div className="text-center">
                  <div className="font-bold">48</div>
                  <div className="text-xs text-orange-500 mt-1">Minutes</div>
                </div>
                <div className="mb-2">:</div>
                <div className="text-center">
                  <div className="font-bold">16</div>
                  <div className="text-xs text-orange-500 mt-1">Seconds</div>
                </div>
              </div>
            </div>
            
            {/* Price Info */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-gray-600 mb-1">Current Block Price (300 BOB)</div>
                <div className="text-4xl font-bold text-green-600">$250</div>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <div className="space-y-1">
                  <div className="flex flex-col">
                    <div className="flex justify-between gap-4">
                      <span className="text-sm">BOB Price:</span>
                      <span className="text-sm font-medium">$0.81235500</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-sm">24h Change:</span>
                      <span className="text-sm font-medium text-red-500">-2.60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default BlockPriceModal