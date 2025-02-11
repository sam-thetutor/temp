import React from 'react';
import { Heart, Eye, ArrowLeft } from 'lucide-react';
import { ChevronDown, ChevronUp, ChevronsUpDown, X } from 'lucide-react';
import { useState } from 'react';

const TopUpMinersModal = ({ isOpen, onClose }) => {
  const [selectedMiners, setSelectedMiners] = useState(0);
  const [totalCycles, setTotalCycles] = useState(0);

  const minerData = [
    { cyclesBurned: "8073.53T", totalMiners: 1, activeMiners: 1 },
    { cyclesBurned: "8073.53T", totalMiners: 0, activeMiners: 0 },
    { cyclesBurned: "8073.53T", totalMiners: 56, activeMiners: 2 },
    { cyclesBurned: "8073.53T", totalMiners: 23, activeMiners: 0 },
    { cyclesBurned: "8073.53T", totalMiners: 5, activeMiners: 2 },
    { cyclesBurned: "8073.53T", totalMiners: 78, activeMiners: 0 }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-3 rounded-t-xl flex justify-between items-center">
          <h2 className="text-base">Top Up miners</h2>
          
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="p-3 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FDF8EE]">
                <th className="text-left p-2 text-sm rounded-l">Cycles Burned/<br/>Round (T)</th>
                <th className="text-left p-2 text-sm">
                  <div className="flex items-center gap-1">
                    Total<br/>Miners
                    <ChevronsUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left p-2 text-sm">
                  <div className="flex items-center gap-1">
                    Active<br/>Miners
                    <ChevronsUpDown size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-center p-2 text-sm" colSpan={2}>Miners to Top-Up</th>
              </tr>
            </thead>
            <tbody>
              {minerData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 text-sm">{row.cyclesBurned}</td>
                  <td className="p-2 text-sm">{row.totalMiners}</td>
                  <td className="p-2 text-sm">{row.activeMiners}</td>
                  <td className="p-2">
                    <input 
                      type="text" 
                      placeholder="Enter"
                      className="w-full p-1.5 border rounded text-center text-sm"
                    />
                  </td>
                  <td className="p-2">
                    <input 
                      type="text" 
                      placeholder="Enter"
                      className="w-full p-1.5 border rounded text-center text-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cost Section */}
        <div className="p-3 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <div className="text-white text-xl">∞</div>
            </div>
            <div>
              <div className="text-sm font-medium">Estimated Cost</div>
              <div className="text-base font-bold">0.0000 ICP</div>
            </div>
          </div>
          <div className="ml-auto text-right text-sm">
            <div>Total Miners Selected: {selectedMiners}</div>
            <div>Total Cycles to Add: {totalCycles}T</div>
          </div>
        </div>

        {/* Warning */}
        <div className="mx-3 mb-3 p-3 bg-red-50 rounded-lg text-center text-red-600 text-sm">
          <div className="font-medium mb-1">Warning!</div>
          <p>Please ensure you are only topping up your own miners. Topping up competitors' miners will result in lost funds and help your competition.</p>
        </div>

        {/* Action Button */}
        <div className="p-3">
          <button className="w-full py-2 bg-yellow-400 rounded-lg font-medium hover:bg-yellow-500 text-sm">
            Top Up Selected Miners
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopUpMinersModal;