import React from 'react';
import { Heart, Eye, ArrowLeft } from 'lucide-react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

const RIGDetails = ({ address }) => {
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
          
          <div className='bg-green-400'><div className="text-gray-600 text-sm">of {address} 6imfd-3yaaa-aaaas-akxca-cai</div></div>
          
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-red-500">
            <span>Add to watchlist</span>
            <Heart size={18} />
          </button>
          <button className="flex items-center gap-2 text-blue-600">
            <span>Add to my PIDs</span>
            <Eye size={18} />
          </button>
          <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
            Top up Miner
          </button>
          <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
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
    </div>
  );
};

export default RIGDetails;