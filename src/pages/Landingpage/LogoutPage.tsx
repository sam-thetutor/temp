import React from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { NotificationCarousel } from '../../components/notifications/Notification';
import Header from '../../components/Header/DashboardHeader';

const LogoutPage = () => {
  const stats = [
    { label: "Time Since Last Block:", value: "136" },
    { label: "Active Miners", value: "35" },
    { label: "Burned Cycles", value: "1.01T" },
    { label: "Last Block Burned", value: "291.45T" },
    { label: "Avg Block Burn", value: "262.23T" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-pink-50/30">
      <Header/>

      <div className="bg-white/40 py-2">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap px-4">
          <NotificationCarousel/>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-4 flex flex-col gap-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <div key={index} className="text-center">
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <div className="font-mono text-xl font-bold">{stat.value}</div>
                </div>
              ))}
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
          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                </svg>
              </div>
              <span>Leaderboard</span>
            </div>
            <div className="mx-2">•</div>
            <div className="flex items-center gap-2">
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

          <button className="flex items-center gap-3 bg-yellow-400 px-6 py-3 rounded-full shadow-sm">
            <MessageCircle size={20} />
            <span>Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;