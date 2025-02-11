import React from 'react';
import { Search, Home, Heart } from 'lucide-react';
import { X, Copy } from 'lucide-react';


const MinerTable = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const minerData = [
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" },
    { pid: "yckou-24b36-....cs2eh-gqe", mined: 10, activeMiners: "59/72" }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center z-50">
      <div className="bg-white rounded-b-xl w-full max-w-3xl transform transition-transform duration-300">
        {/* Header */}
        <div className="bg-slate-800 text-white px-4 py-3 flex justify-between items-center">
          <h2 className="text-lg">Miner Details</h2>
          <button onClick={onClose} className="bg-red-500 rounded-full p-1">
            <X size={16} className="text-white" />
          </button>
        </div>

        {/* Table Content */}
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-medium text-gray-600">PID</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Mined (10)</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Active Miners</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {minerData.map((miner, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 px-4 font-mono text-sm">{miner.pid}</td>
                  <td className="py-3 px-4">{miner.mined}</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 px-2 py-1 rounded text-sm">
                      {miner.activeMiners}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 bg-green-100 rounded hover:bg-green-200 transition-colors">
                        <Copy size={16} className="text-green-600" />
                      </button>
                      <button className="p-1.5 bg-red-100 rounded hover:bg-red-200 transition-colors">
                        <X size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex gap-2 justify-center mt-6">
            <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              2
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              3
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              4
            </button>
            <button className="px-4 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div 
      className={`fixed right-4 top-16 bg-white rounded-lg shadow-lg w-64 transform transition-transform duration-200 z-50 ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 z-50'
      }`}
    > <div className="bg-slate-800 text-white px-4 py-3 flex justify-between items-center">
    <h2 className="text-lg">ICP - Funds Details</h2>
    <button onClick={onClose} className="bg-red-500 rounded-full p-1">
      <X size={16} className="text-white" />
    </button>
  </div>


      <div className="p-4">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b">
        <div className="flex items-center rounded-full p-2">
      <img
        src="/images/profile.png"
        alt="BOBITS Logo"
        className="h-8 object-contain rounded-full "
      />
    </div>
          <div>
            <div className="font-medium">Satoshi Nakamoto</div>
            <div className="text-sm text-gray-500 font-mono">satoshi-........-asdf-ik3e6-lae</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enable to Others</span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>Enable Chat Notifications</span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          <button className="flex items-center gap-2 text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Manage Profile
          </button>

          <button className="flex items-center gap-2 text-red-500">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchPIDModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg transform transition-all">
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-medium">Search PID</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="tslv6-ucy5f-fuqbs-kc2qn-e34h5-jpp4t-2lq3d-kzlr7-d5g"
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium">
              Paste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const FundICPModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md transform transition-transform duration-300 p-4 shadow-lg">
        {/* Header */}
        <div className="bg-slate-800 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
          <h2 className="text-sm font-semibold">ICP - Funds Details</h2>
          <button onClick={onClose} className="bg-red-500 rounded-full p-1">
            <X size={14} className="text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 space-y-3">
          {/* Balance Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="text-white text-xl">∞</div>
            </div>
            <div>
              <div className="text-xs text-gray-600">Available Balance</div>
              <div className="text-sm font-medium">6,200 USD</div>
              <div className="text-gray-600 text-xs">992 ICP</div>
            </div>
            <button className="ml-auto text-green-500">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </button>
          </div>

          {/* PID Section */}
          <div className="bg-green-50 p-2 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-xs text-gray-600">Your Bobits principal ID:</div>
              <div className="font-mono text-xs truncate">satoshi-hsrqs-e3pse-leofy-hekpg-4pfnq-...-5jwj5-w5lfp-jqe</div>
            </div>
            <button className="text-gray-400">
              <Copy size={14} />
            </button>
          </div>

          {/* Withdraw Section */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm">Withdraw funds</h3>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Recipient Address</span>
                <span className="text-orange-500">Available: 990 ICP</span>
              </div>
              <input type="text" placeholder="Enter Recipient Address" className="w-full p-2 border rounded-md text-sm mb-1" />
              <input type="text" placeholder="Re-enter Recipient Address" className="w-full p-2 border rounded-md text-sm mb-2" />
            </div>

            <div>
              <div className="text-xs mb-1">Amount (ICP)</div>
              <input type="text" placeholder="Enter Amount" className="w-full p-2 border rounded-md text-sm" />
            </div>

            <label className="flex items-center gap-2 text-xs">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">I agree to Bobits withdrawal conditions.</span>
            </label>

            <button className="w-full bg-yellow-400 py-2 rounded-md font-medium text-sm">
              Withdraw Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

  
const RingPIDsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md transform transition-transform duration-300 p-4 shadow-lg">
        {/* Header */}
        <div className="bg-slate-800 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
          <h2 className="text-sm font-semibold">My PIDs</h2>
          <button onClick={onClose} className="bg-red-500 rounded-full p-1">
            <X size={14} className="text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 space-y-3">
          {/* PID Section */}
          <div className="bg-green-50 p-2 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-xs text-gray-600">Your principal ID:</div>
              <div className="font-mono text-xs truncate">
                yckou-24b36-.....-cs2eh-qge
              </div>
            </div>
            <button className="text-gray-400">
              <Copy size={14} />
            </button>
          </div>

          {/* PID Table */}
          <div className="bg-gray-100 p-3 rounded-lg">
            <h3 className="font-medium text-sm mb-2">Active PIDs</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-600">
                  <th className="text-left py-1">PID</th>
                  <th className="text-center py-1">Miners</th>
                  <th className="text-right py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array(5).fill(null).map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 font-mono text-xs">yckou-24b36-...</td>
                    <td className="py-2 text-center">
                      <span className="bg-yellow-100 rounded-full px-2 py-0.5 text-xs">
                        59/72
                      </span>
                    </td>
                    <td className="py-2 flex justify-end gap-1">
                      <button className="p-1 bg-green-100 rounded">
                        <Copy size={12} className="text-green-600" />
                      </button>
                      <button className="p-1 bg-red-100 rounded">
                        <X size={12} className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <button className="w-7 h-7 rounded-full bg-slate-800 text-white text-xs">1</button>
            <button className="w-7 h-7 rounded-full text-gray-600 text-xs">2</button>
            <button className="w-7 h-7 rounded-full text-gray-600 text-xs">3</button>
            <button className="px-2 h-7 rounded-full text-gray-600 text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};



const Header = () => {
    const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);
    const [isRingPIDsModalOpen, setIsRingPIDsModalOpen] = React.useState(false);
    const [isFundICPModalOpen, setIsFundICPModalOpen] = React.useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = React.useState(false);
    const [isMinerTableOpen, setIsMinerTableOpen] = React.useState(false);
  return (
    <div className="bg-slate-900/95 m-3 mx-12 mt-8 rounded-xl p-2 flex justify-between items-center ">
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
        <button className="p-2 bg-white hover:bg-slate-800 rounded-full" onClick={() => setIsSearchModalOpen(true)}>
          <Search className="w-5 h-5 " />
        </button>
        <button className="p-2 bg-red-400 hover:bg-slate-800 rounded-full" onClick={() => setIsMinerTableOpen(true)}>
          <Heart className="w-5 h-5 text-white" />
        </button>

        {/* My RIG PIDs */}
        <button className="flex items-center gap-2 bg-[#486379] px-4 py-2 rounded-lg text-white" onClick={() => setIsRingPIDsModalOpen(true)}>
          <span>My RIG PIDs</span>
          <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-sm">↻</span>
          </div>
        </button>

        {/* Funds ICP */}
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg" onClick={() => setIsFundICPModalOpen(true)}>
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
        <button className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-lg" onClick={() => setIsProfileModalOpen(true)}>
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
        <SearchPIDModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
        <FundICPModal isOpen={isFundICPModalOpen} onClose={() => setIsFundICPModalOpen(false)} />
        <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
        <RingPIDsModal isOpen={isRingPIDsModalOpen} onClose={() => setIsRingPIDsModalOpen(false)} />
        <MinerTable isOpen={isMinerTableOpen} onClose={() => setIsMinerTableOpen(false)} />
    </div>
  );
};

export default Header;