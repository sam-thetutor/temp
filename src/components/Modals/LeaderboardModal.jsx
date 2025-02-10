
import { useState } from "react";

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
  export default LeaderboardModal
  