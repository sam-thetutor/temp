import { useState } from "react";
import { Clipboard, ChevronLeft, ChevronRight } from "lucide-react";

const TopUpHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const data = [
    {
      blockIndex:
        "y7ft2-gt62s-kbudz-idw25-ysi5g-ulxgq-x4gb4-k5efu-tashu-c5jnd-jqe",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
    {
      blockIndex:
        "g5f3d-cjopr-kx46o-pyrzr-qnlm2-xtmij-ordmh-vdufi-irwxr-6uhmb-pae",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
    {
      blockIndex:
        "g5f3d-cjopr-kx46o-pyrzr-qnlm2-xtmij-ordmh-vdufi-irwxr-6uhmb-pae",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
    {
      blockIndex:
        "g5f3d-cjopr-kx46o-pyrzr-qnlm2-xtmij-ordmh-vdufi-irwxr-6uhmb-pae",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
    {
      blockIndex:
        "w33mx-uvdft-r6b4b-ukqgd-egesp-ejeq4-pnr5s-5tuqi-q6kho-xmdnn-7ae",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
    {
      blockIndex:
        "o5242-wjhby-kngz7-6lo7p-hmiqr-lxng3-uvpgr-kolcn-3spsr-4hqbf-iae",
      requestId: 2625,
      icpSpent: "8073.53T",
      totalCycles: "16 hours 6 minutes",
      canistersTopped: 1,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top up history</h2>
        <button className="text-orange-500 hover:text-orange-600 font-medium">
          Refresh
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-50 text-left">
              <th className="p-3 font-medium text-gray-600 border-r border-gray-200">
                <div className="flex items-center gap-1">
                  Block Index
                  <ChevronRight className="h-4 w-4 rotate-90 opacity-50" />
                </div>
              </th>
              <th className="p-3 font-medium text-gray-600 border-r border-gray-200">
                <div className="flex items-center gap-1">
                  Request ID
                  <ChevronRight className="h-4 w-4 rotate-90 opacity-50" />
                </div>
              </th>
              <th className="p-3 font-medium text-gray-600 border-r border-gray-200">
                <div className="flex items-center gap-1">
                  Total ICP spent
                  <ChevronRight className="h-4 w-4 rotate-90 opacity-50" />
                </div>
              </th>
              <th className="p-3 font-medium text-gray-600 border-r border-gray-200">
                <div className="flex items-center gap-1">
                  Total cycles
                  <ChevronRight className="h-4 w-4 rotate-90 opacity-50" />
                </div>
              </th>
              <th className="p-3 font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  Canisters topped up
                  <ChevronRight className="h-4 w-4 rotate-90 opacity-50" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">{item.blockIndex}</span>
                    <button className="hover:bg-gray-100 p-1 rounded">
                      <Clipboard className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </td>
                <td className="p-3 text-gray-600 border-r border-gray-200">{item.requestId}</td>
                <td className="p-3 text-gray-600 border-r border-gray-200">{item.icpSpent}</td>
                <td className="p-3 text-gray-600 border-r border-gray-200">{item.totalCycles}</td>
                <td className="p-3 text-gray-600">{item.canistersTopped}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center gap-1 mt-6">
        <button
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`p-2 w-8 h-8 rounded text-sm font-medium ${
              currentPage === page
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        {currentPage !== totalPages && (
          <button
            className="ml-1 p-2 rounded text-sm text-gray-600 hover:bg-gray-100"
            onClick={() => setCurrentPage(totalPages)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TopUpHistory;