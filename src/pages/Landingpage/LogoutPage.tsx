import React from 'react';
import { Search, Wallet, MessageCircle, HelpCircle } from 'lucide-react';
import { NotificationCarousel } from '../../components/notifications/Notification';

const LogoutPage = () => {
  const notifications = Array(5).fill({
    user: "John Doe",
    amount: "600BOB"
  });

  const stats = [
    { label: "Time Since Last Block:", value: "136" },
    { label: "Active Miners", value: "35" },
    { label: "Burned Cycles", value: "1.01T" },
    { label: "Last Block Burned", value: "291.45T" },
    { label: "Avg Block Burn", value: "262.23T" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-pink-50/30">
      {/* Main Container */}
      
        {/* Header */}
        <div className="bg-slate-900/95 m-3 mx-12 mt-8 rounded-xl p-2 flex justify-between items-center">
        <div className="text-center  ">
          <img 
            src="/public/images/Layer1.png" 
            alt="BOBITS Logo" 
            className="h-12 mx-auto"
          />
        </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              <span>How to Mine</span>
              <HelpCircle size={18} />
            </button>
            <button className="bg-yellow-400 px-4 py-2 rounded-lg flex items-center gap-2">
              <span>Connect Wallet</span>
              <Wallet size={18} />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/40 py-2">
          <div className="flex gap-6 overflow-x-auto whitespace-nowrap px-4">
            <NotificationCarousel/>
            {/* {notifications.map((notification, index) => (
              <div key={index} className="flex items-center text-sm text-blue-900">
                <span>{notification.user} just mined {notification.amount}</span>
                <div className="w-5 h-5 bg-green-100 rounded-full ml-2 flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto bg-green-300"> */}
        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 pt-4  flex flex-col gap-6">
          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-lg  p-3 mb-4">
            <h2 className="text-center font-mono font-bold mb-3 text-lg tracking-wide">NEW BLOCK</h2>
            <div className="grid grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center  border-1 border-slate-400 rounded-sm">
                  <div className="text-sm text-gray-900 mb-2 ">{stat.label}</div>
                  <div className="font-mono text-2xl font-bold rounde">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search */}
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
          <div className="flex justify-center gap-4 ">
            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                </svg>
              </div>
              <span>Leaderboard</span>
            </button>
            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-7 4-7-4V3z"/>
                </svg>
              </div>
              <span>Last Winner</span>
            </button>
            <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="font-bold">$</span>
              </div>
              <span>Block Price Info</span>
            </button>
            <button className="flex items-center gap-3 bg-yellow-400 px-6 py-3 rounded-full shadow-sm">
              <MessageCircle size={20} />
              <span>Chat</span>
            </button>
          </div>
        </div>

      {/* </div> */}
    </div>
  );
};

export default LogoutPage;