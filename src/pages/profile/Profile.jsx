import React from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { X, Copy } from 'lucide-react';
import { NotificationCarousel } from '../../components/notifications/Notification';
// import Header from '../../components/Header/ProfileHeader';
import Header from '../../components/Header/DashboardHeader';
import  { useState } from 'react';
import { ArrowLeft } from 'lucide-react';




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


const Profile = () => {
  const stats = [
    { label: "Time Since Last Block:", value: "136" },
    { label: "Active Miners", value: "35" },
    { label: "Burned Cycles", value: "1.01T" },
    { label: "Last Block Burned", value: "291.45T" },
    { label: "Avg Block Burn", value: "262.23T" }
  ];

  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-pink-50/30">
      <Header/>

      <div className="flex justify-between items-center px-12 py-3">
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-medium">Manage Profile</span>
        </div>
        <button className="text-red-500 hover:text-red-600 flex items-center gap-1">
          Log out
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-500 text-sm">⨉</span>
          </div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-4 flex flex-col gap-6 ">
        {/* Main Content Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6 mx-6">
  {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-bold text-gray-800">Profile Info</h2>
      <button className="text-orange-500 font-medium hover:underline">Edit Profile</button>
     </div>

  {/* Bobits Principle ID */}
  <div className="flex items-center bg-gray-100 p-4 rounded-lg mb-6">
    <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full mr-4">
      <span className="text-lg font-bold">₿</span>
    </div>
    <span className="text-sm text-gray-700 font-mono overflow-hidden text-ellipsis">
      satoshi-hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5ifp-jqe
    </span>
  </div>

  {/* Additional Info */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* RIG Visibility */}
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
      <span className="text-sm text-gray-600">RIG Visibility</span>
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-2">Enable to Others</span>
        <div className="relative">
          <input type="checkbox" id="toggleVisibility" className="sr-only" />
          <div className="block w-10 h-6 bg-gray-300 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-green-500 w-4 h-4 rounded-full transition"></div>
        </div>
      </div>
    </div>

    {/* Joined */}
    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
    <div className="flex items-center rounded-full p-2">
        <img
          src="/images/profile.png"
          alt="BOBITS Logo"
          className="h-8 object-contain rounded-full"
        />
      </div>
      <div>
        <div className="text-sm text-gray-500">Joined</div>
        <div className="text-base font-bold text-gray-800">06 February 2025</div>
      </div>
    </div>

    {/* Number of Rigs */}
    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
      <div className="text-center">
        <div className="text-sm text-gray-500">Number of Rigs</div>
        <div className="text-2xl font-bold text-gray-800">12</div>
      </div>
    </div>
  </div>
    </div>


        {/* Search Section */}
        <div className="mb-16">
          <div className="text-center text-gray-600 mb-3">Search BOB Address</div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Enter Principal BOB Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-0 top-0 h-full flex">
                <button className="px-4 text-orange-400 font-medium">
                  Paste
                </button>
                <button className="h-full px-4 bg-black text-white rounded-r-lg">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

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
      <BlockPriceModal 
        isOpen={showPriceModal} 
        onClose={() => setShowPriceModal(false)} 
      />
      <LeaderboardModal 
        isOpen={showLeaderboardModal} 
        onClose={() => setShowLeaderboardModal(false)} 
      />
      </div>
    </div>
  );
};

export default Profile;