import React from 'react';
import { Search, Home, Heart } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-slate-900/95 m-3 mx-12 mt-8 rounded-xl p-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/Layer1.png"
          alt="BOBITS Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center gap-4 ml-auto">
        <button className="p-2 bg-white hover:bg-slate-800 rounded-full">
          <Home className="w-5 h-5 " />
        </button>
        <button className="p-2 bg-white hover:bg-slate-800 rounded-full">
          <Search className="w-5 h-5 " />
        </button>
        <button className="p-2 bg-red-400 hover:bg-slate-800 rounded-full">
          <Heart className="w-5 h-5 text-white" />
        </button>

        {/* My RIG PIDs */}
        <button className="flex items-center gap-2 bg-[#486379] px-4 py-2 rounded-lg text-white">
          <span>My RIG PIDs</span>
          <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-sm">↻</span>
          </div>
        </button>

        {/* Funds ICP */}
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
          <span>Funds (ICP)</span>
          <div className="w-5 h-5 mb-2">

          <img
          src="images/ICP_Icon.png"
          alt="BOBITS Logo"
          className="h-8 object-contain "
        />
            {/* <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M 8 8 L 16 8 L 16 16 L 8 16 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(45, 12, 12)"
              />
              <path
                d="M 8 8 L 16 8 L 16 16 L 8 16 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg> */}
          </div>
        </button>

        {/* My Profile */}
        <button className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-lg">
          <span>My Profile</span>
          <div className="w-5 h-5 bg-black/10 rounded-full flex items-center justify-center">
          <img
          src="images/Profile_Icon.png"
          alt="BOBITS Logo"
          className="h-8 object-contain "
        />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;