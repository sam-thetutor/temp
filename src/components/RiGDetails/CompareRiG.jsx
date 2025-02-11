import React from 'react';
import { ArrowLeft, ChevronsUpDown,Heart } from 'lucide-react';


const RIGComparison = () => {
  const opponentStats = [
    { label: "Total Blocks Mined", value: "3066" },
    { label: "Total Cycles Burned", value: "38.89T" },
    { label: "Total Cycle Balance", value: "6117.80T" },
    { label: "Total Miners", value: "20" },
    { label: "Average Time to Run Out", value: "3 hours 57 minutes" }
  ];

  const yourStats = [
    { label: "Total Blocks Mined", value: "3001", diff: "-65 blocks" },
    { label: "Total Cycles Burned", value: "48.89T", diff: "+10T Cycles" },
    { label: "Total Cycle Balance", value: "600.80T", diff: "-117 blocks" },
    { label: "Total Miners", value: "26", diff: "+6 Miners" },
    { label: "Average Time to Run Out", value: "7 hours 59 minutes", diff: "+4 hours and 2 minutes" }
  ];

  const tableData = {
    opponent: [
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" }
    ],
    yourRig: [
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" }
    ]
  };

  const HeaderCell = ({ title, type }) => (
    <th className={`px-4 py-2 text-left text-sm border-r border-black last:border-r-0 ${type === "Opponent" ? "bg-yellow-100" : "bg-green-100"}`}>
      <div className="flex items-center gap-2">
        {title}
        <ChevronsUpDown size={16} className="text-gray-400" />
      </div>
    </th>
  );

  const Table = ({ data, type }) => (
    <div className="w-1/2 ">
      <div className={`text-lg font-medium mb-4 ${type === "Opponent" ? "text-orange-600" : "text-green-600"}`}>{type}</div>
      <table className="w-full border border-black rounded-lg overflow-hidden bg-white border-b">
        <thead>
          <tr>
            <HeaderCell title="Cycles Burned/Round (T)" type={type} />
            <HeaderCell title="Total Miners" type={type} />
            <HeaderCell title="Active Miners" type={type} />
            <HeaderCell title="Cycle Balance" type={type} />
            <HeaderCell title="Estimated Time to Run Out" type={type} />
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t border-black">
              <td className="px-4 py-2 border-r border-black">{row.cyclesBurned}</td>
              <td className="px-4 py-2 border-r border-black">{row.totalMiners}</td>
              <td className="px-4 py-2 border-r border-black">{row.activeMiners}</td>
              <td className="px-4 py-2 border-r border-black">{row.cycleBalance}</td>
              <td className="px-4 py-2">{row.timeToRunOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-2 mt-5">
        <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">2</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">3</button>
        <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">4</button>
        <button className="px-4 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">Next</button>
      </div>
    </div>
  );
  const hashId = "yuckme-hsnqs-s3pse-leofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5ifp-jqe";
  return (
    <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3   my-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <div className='p-1 rounded-full bg-black'>
            <ArrowLeft className="w-5 h-5  text-white" />
            </div>
            
          </button>
          
          <div>
            <h1 className="text-lg font-semibold">Compare RIG</h1>
            <p className="text-sm text-gray-600 font-mono">with {hashId}</p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 rounded-lg">
          
          <span>Add to watchlist</span>
          <div className='p-1 rounded-full bg-red-400'>
          <Heart className="w-5 h-5 text-white" />
          </div>
        
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {/* Opponent Section */}
        <div>
          <div className="text-orange-600 mb-2">Opponent:<span className='ml-2'>hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5ifp-jqe</span></div>
          <div className="grid grid-cols-5 gap-4">
            {opponentStats.map((stat, index) => (
              <div key={index} className="bg-[#FFFDEA] rounded-lg p-4">
                <div className="text-gray-500 text-sm">{stat.label}</div>
                <div className="font-mono text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Your RIG Section */}
        <div>
          <div className="text-green-600 mb-2">Your RIG:<span className='ml-2'>hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5ifp-jqe</span></div>
          <div className="grid grid-cols-5 gap-4">
            {yourStats.map((stat, index) => (
              <div key={index} className="bg-green-100 rounded-lg p-4">
                <div className="text-gray-500 text-sm">{stat.label}</div>
                <div className="font-mono text-2xl font-bold">{stat.value}</div>
                {stat.diff && (
                  <div className={stat.diff.startsWith('-') ? "text-red-500 text-sm" : "text-green-500 text-sm"}>
                    {stat.diff}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tables */}
        <div className="flex gap-4">
          <Table data={tableData.opponent} type="Opponent" />
          <Table data={tableData.yourRig} type="Your RIG" />
        </div>
      </div>
    </div>
  );
};

export default RIGComparison;