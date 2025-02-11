import React from 'react';
import { Heart, Eye, ArrowLeft,X } from 'lucide-react';
import { useState } from 'react';


import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

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
const Modal = ({ title, children, onClose, isDone }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden">
        <div className="flex items-center justify-between p-3 border-b">
          <h2 className="text-base font-medium">{title}</h2>
          <div className="flex items-center gap-2">
            {isDone && (
              <>
                <span className="text-green-600">Done</span>
                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </>
            )}
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const CompareWithMyRIG = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  
  if (!isOpen) return null;
  
  return (
    <div>
      <Modal title="Compare With My RIG" onClose={onClose}>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tslv6-ucy5f-fuqbs-kc2qn-e34h5-jpp4t-2lq3d-kzlr7-d5g"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </Modal>
    </div>
  );
};

const NewWatchlistModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');
  
  if (!isOpen) return null;
  
  return (
    <Modal title="New watchlist" onClose={onClose} isDone={true}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Recipient Address"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-500 font-medium"
        >
          Paste
        </button>
      </div>
    </Modal>
  );
};

const NewAddNewPID = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');
  
  if (!isOpen) return null;
  
  return (
    <Modal title="Add New PID" onClose={onClose} isDone={true}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Recipient Address"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-500 font-medium"
        >
          Paste
        </button>
      </div>
    </Modal>
  );
};

const RIGDetails = ({ address }) => {
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isWatchlistModalOpen, setIsWatchlistModalOpen] = useState(false);
  const [isNewPIDModalOpen,setNewPIDModalOpen]=useState(false)

  const stats = [
    { label: "Total Blocks Mined", value: "3066" },
    { label: "Total Cycles Burned", value: "38.89T" },
    { label: "Total Cycle Balance", value: "6117.80T" },
    { label: "Total Miners", value: "20", extra: <div className="text-xs"><span className="text-green-500">Active: 8</span> <span className="text-red-500">Inactive: 2</span></div> },
    { label: "Average Time to Run Out", value: "3 hours 57 minutes" }
  ];

  const tableData = [
    { canisterId: "6imfd-3yaaa-aaaas-akxca-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "1" },
    { canisterId: "6imrdx-waaaa-aaaas-akxcq-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
    { canisterId: "6imfd-3yaaa-aaaas-akxca-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "1" },
    { canisterId: "6imrdx-waaaa-aaaas-akxcq-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
    { canisterId: "6imfd-3yaaa-aaaas-akxca-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "1" },
    { canisterId: "6imrdx-waaaa-aaaas-akxcq-cai", blocksMined: "2625", lastRoundCycles: "8073.53T", consumptionLimit: "6944.41T", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
    
    // Add more rows as needed
  ];

  
  const HeaderCell = ({ title }) => (
    <th className="px-4 py-2 text-left text-sm text-gray-600 border-r last:border-r-0">
      <div className="flex items-center gap-2">
        {title}
        <ChevronsUpDown size={16} className="text-gray-400" />
      </div>
    </th>
  );

  return (
    
    <div className=" p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-center gap-2">
          <div className=" flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-medium">RIG Details</h2></div>

          <div className=''><div className="text-gray-600 text-sm">of {address} 6imfd-3yaaa-aaaas-akxca-cai</div></div>
          
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-red-500" onClick={()=>setIsWatchlistModalOpen(true)}>
            <span>Add to watchlist</span>
            <Heart size={18} />
          </button>
          <button className="flex items-center gap-2 text-blue-600"  onClick={()=>setNewPIDModalOpen(true)} >
            <span>Add to my PIDs</span>
            <Eye size={18} />
          </button>
          <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg" onClick={() => setIsTopUpModalOpen(true)}>
            Top up Miner
          </button>
          <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg" onClick={()=>setIsSearchModalOpen(true)} >
            Compare with my RIG
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-5 gap-4 mb-8 ">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
            <div className="text-2xl font-mono font-bold">{stat.value}</div>
            {stat.extra && <div>{stat.extra}</div>}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            <HeaderCell title="Canister Id" />
            <HeaderCell title="Block Mined" />
            <HeaderCell title="Last Round Cycles Burned" />
            <HeaderCell title="Consumption Limit (cycles/day)" />
            <HeaderCell title="Cycle Balance" />
            <HeaderCell title="Estimated Time to Run Out" />
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="px-4 py-2 font-mono text-sm border-r">{row.canisterId}</td>
              <td className="px-4 py-2 border-r">{row.blocksMined}</td>
              <td className="px-4 py-2 border-r">{row.lastRoundCycles}</td>
              <td className="px-4 py-2 border-r">{row.consumptionLimit}</td>
              <td className="px-4 py-2 border-r">{row.cycleBalance}</td>
              <td className="px-4 py-2">{row.timeToRunOut}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
    <div className="flex justify-center gap-2 mt-4 mb-4">
        <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">2</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">3</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">4</button>
        <button className="px-4 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">Next</button>
      </div>
      <TopUpMinersModal isOpen={isTopUpModalOpen} onClose={() => setIsTopUpModalOpen(false)} />
      <CompareWithMyRIG isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <NewWatchlistModal isOpen={isWatchlistModalOpen} onClose={() => setIsWatchlistModalOpen(false)} />
       <NewAddNewPID isOpen={isNewPIDModalOpen} onClose={()=>setNewPIDModalOpen(false )} />
    </div>
  );
};

export default RIGDetails



