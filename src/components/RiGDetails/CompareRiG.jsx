import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChevronsUpDown } from 'lucide-react';

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
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" }
    ],
    yourRig: [
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "Ran out of cycles" },
      { cyclesBurned: "8073.53T", totalMiners: "2625", activeMiners: "1", cycleBalance: "0.04T", timeToRunOut: "18 hours 17 minutes" }
    ]
  };

  const HeaderCell = ({ title }) => (
    <th className="px-4 py-2 text-left text-sm text-gray-600">
      <div className="flex items-center gap-2">
        {title}
        <ChevronsUpDown size={16} className="text-gray-400" />
      </div>
    </th>
  );

  const Table = ({ data, type }) => (
    <div className="w-1/2">
      <div className="text-lg font-medium mb-4">{type}</div>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <HeaderCell title="Cycles Burned/Round (T)" />
            <HeaderCell title="Total Miners" />
            <HeaderCell title="Active Miners" />
            <HeaderCell title="Cycle Balance" />
            <HeaderCell title="Estimated Time to Run Out" />
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{row.cyclesBurned}</td>
              <td className="px-4 py-2">{row.totalMiners}</td>
              <td className="px-4 py-2">{row.activeMiners}</td>
              <td className="px-4 py-2">{row.cycleBalance}</td>
              <td className="px-4 py-2">{row.timeToRunOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-medium">Compare RIG</h2>
        <div className="text-gray-600 text-sm">with yuckme-hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5lfp-jqe</div>
      </div>

      <div className="flex flex-col gap-8">
      <div className="p-6">
      {/* Opponent Section */}
      <div className="mb-6">
        <div className="text-orange-400 mb-2">
          Opponent : <span className="font-mono">yuckme-hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5lfp-jqe</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Blocks Mined</div>
            <div className="font-mono text-2xl font-bold">3066</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Cycles Burned</div>
            <div className="font-mono text-2xl font-bold">38.89T</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Cycle Balance</div>
            <div className="font-mono text-2xl font-bold">6117.80T</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Miners</div>
            <div className="font-mono text-2xl font-bold">20</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Average Time to Run Out</div>
            <div className="font-mono text-2xl font-bold">3 hours 57 minutes</div>
          </div>
        </div>
      </div>

      {/* Your RIG Section */}
      <div>
        <div className="text-green-600 mb-2">
          Your RIG: <span className="font-mono">satoshi-hsnqs-s3pse-ieofy-hekpg-4pfnq-rdthu-jx4pf-5jwj5-w5lfp-jqe</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Blocks Mined</div>
            <div className="font-mono text-2xl font-bold">3001</div>
            <div className="text-red-500 text-sm">-65 blocks</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Cycles Burned</div>
            <div className="font-mono text-2xl font-bold">48.89T</div>
            <div className="text-green-500 text-sm">+10T Cycles</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Cycle Balance</div>
            <div className="font-mono text-2xl font-bold">600.80T</div>
            <div className="text-red-500 text-sm">-117 blocks</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Total Miners</div>
            <div className="font-mono text-2xl font-bold">26</div>
            <div className="text-green-500 text-sm">+6 Miners</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-gray-500 text-sm mb-1">Average Time to Run Out</div>
            <div className="font-mono text-2xl font-bold">7 hours 59 minutes</div>
            <div className="text-green-500 text-sm">+4 hours and 2 minutes</div>
          </div>
        </div>
      </div>
    </div>

        <div className="flex gap-4">
          <Table data={tableData.opponent} type="Opponent" />
          <Table data={tableData.yourRig} type="Your RIG" />
        </div>

        <div className="flex justify-center gap-2">
          <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">2</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">3</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">4</button>
          <button className="px-4 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RIGComparison;