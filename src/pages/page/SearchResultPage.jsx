import React from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { X, Copy } from 'lucide-react';
import { NotificationCarousel } from '../../components/notifications/Notification';
import Header from '../../components/Header/DashboardHeader';
import  { useState } from 'react';
import RIGDetails from '../../components/RiGDetails/Rigdetails';
import RIGComparison from '../../components/RiGDetails/CompareRiG';



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

const LeaderboardModal = ({ isOpen, onClose }) => {
  const [timeframe, setTimeframe] = useState('Daily');
  const miners = Array(10).fill({
    address: 'gd7sd-csgr-...-xmxj-oudrh',
    blocks: 10
  });
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-sm">🏆</span>
            </div>
            <h2 className="font-medium text-base">Top 10 winners</h2>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600">
            <X size={18} />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 p-3">
          {['Daily', 'Weekly', 'Monthly'].map((tab) => (
            <button
              key={tab}
              onClick={() => setTimeframe(tab)}
              className={`px-3 py-1 rounded-full text-sm ${
                timeframe === tab
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Leaderboard Table */}
        <div className="px-3 pb-3">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600">
                <th className="py-2 px-3">Rank</th>
                <th className="py-2 px-3">Miner</th>
                <th className="py-2 px-3 text-right">Blocks Mined</th>
              </tr>
            </thead>
            <tbody>
              {miners.map((miner, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-3">{index + 1}</td>
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">{miner.address}</span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-right">{miner.blocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

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
      <div className="bg-white rounded-xl w-full max-w-3xl">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-lg">Top Up miners</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FDF8EE]">
                <th className="text-left p-3 rounded-l">Cycles Burned/<br/>Round (T)</th>
                <th className="text-left p-3">
                  <div className="flex items-center gap-1">
                    Total<br/>Miners
                    <ChevronsUpDown size={16} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-left p-3">
                  <div className="flex items-center gap-1">
                    Active<br/>Miners
                    <ChevronsUpDown size={16} className="text-gray-400" />
                  </div>
                </th>
                <th className="text-center p-3" colSpan={2}>Miners to Top-Up</th>
              </tr>
            </thead>
            <tbody>
              {minerData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{row.cyclesBurned}</td>
                  <td className="p-3">{row.totalMiners}</td>
                  <td className="p-3">{row.activeMiners}</td>
                  <td className="p-3">
                    <input 
                      type="text" 
                      placeholder="Enter"
                      className="w-full p-2 border rounded text-center"
                    />
                  </td>
                  <td className="p-3">
                    <input 
                      type="text" 
                      placeholder="Enter"
                      className="w-full p-2 border rounded text-center"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cost Section */}
        <div className="p-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl">∞</div>
            </div>
            <div>
              <div className="font-medium">Estimated Cost</div>
              <div className="text-lg font-bold">0.0000 ICP</div>
            </div>
          </div>
          <div className="ml-auto text-right">
            <div>Total Miners Selected: {selectedMiners}</div>
            <div>Total Cycles to Add: {totalCycles}T</div>
          </div>
        </div>

        {/* Warning */}
        <div className="mx-4 mb-4 p-4 bg-red-50 rounded-lg text-center text-red-600">
          <div className="font-medium mb-1">Warning!</div>
          <p>Please ensure you are only topping up your own miners. Topping up competitors' miners will result in lost funds and help your competition.</p>
        </div>

        {/* Action Button */}
        <div className="p-4">
          <button className="w-full py-3 bg-yellow-400 rounded-lg font-medium hover:bg-yellow-500">
            Top Up Selected Miners
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const stats = [
    { label: "Time Since Last Block:", value: "136" },
    { label: "Active Miners", value: "35" },
    { label: "Burned Cycles", value: "1.01T" },
    { label: "Last Block Burned", value: "291.45T" },
    { label: "Avg Block Burn", value: "262.23T" }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [showRIGDetails, setShowRIGDetails] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      setShowRIGDetails(true);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-pink-50/30">
      <Header/>

      <div className=" py-2">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap px-4">
          <NotificationCarousel/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-4 flex flex-col gap-6  ">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-8 ">
          {/* Last Winner Card */}
          <div className="bg-teal-900 text-white p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm">Last Winner</div>
              <div className="text-xs text-gray-300">56 seconds ago</div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-gray-400"></div>
              <div className="text-sm font-mono">yckou-24b36-.....-cs2eh-qge</div>
              <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-xs">5</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Cycles Burned:</span>
                <span className="font-mono">55.56T</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Reward:</span>
                <span className="text-yellow-400 font-mono">600 BOB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Cycles Burned:</span>
                <span className="font-mono">295.22T</span>
              </div>
            </div>
          </div>

          {/* New Block Stats Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-white rounded-xl p-4">
            <h2 className="text-center font-mono font-bold mb-4 text-lg tracking-wide">NEW BLOCK</h2>
            <p className="text-center text-gray-500 mb-6">Lacus amet, elementum ex. Ut venenatis eget urna, amet</p>
            
            <div className="grid grid-cols-5 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="text-center  border-1 border-slate-400 rounded-sm">
                  <div className="text-sm text-gray-900 mb-2 ">{stat.label}</div>
                  <div className="font-mono text-2xl font-bold rounde">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Search Section */}
       
       <RIGDetails/>
  

        {/* Bottom Navigation */}
        <div className="flex justify-center gap-4">
        <button 
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm"
          onClick={() => setShowLeaderboardModal(true)}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </div>
            <span>Leaderboard</span>
          </div>
          <div className="mx-2">•</div>
          <div 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.stopPropagation();
              setShowPriceModal(true);
            }}
          >
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="font-bold">$</span>
            </div>
            <span>Block Price info</span>
          </div>
        </button>
        <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="font-bold">?</span>
        </div>
        <span>How to Mine</span>
      </button>

      </div>

         {/* Modals */}
      
      </div>
      <BlockPriceModal 
        isOpen={showPriceModal} 
        onClose={() => setShowPriceModal(false)} 
      />
      <LeaderboardModal 
        isOpen={showLeaderboardModal} 
        onClose={() => setShowLeaderboardModal(false)} 
      />
     
    </div>
  );
};

export default SearchResult;