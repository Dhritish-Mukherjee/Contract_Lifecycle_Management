import React from "react";
import { TbContract } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { FcApproval } from "react-icons/fc";

const DashboardHome = () => {
  return (
    <div className="">
      {/* all the Contracts cards  */}
      <div className="flex flex-col gap-3  sm:flex sm:flex-row sm:justify-start sm:gap-5 ">
        <div className="flex gap-2 px-5 py-6 sm:p-4 border border-gray-300 rounded-lg ">
          <div className="p-3 bg-green-50 rounded-lg">
            <TbContract size={30} />
          </div>
          <div>
            <h4 className="text-xl font-semibold ">4</h4>
            <p className="text-zinc-500">Contracts</p>
          </div>
        </div>

        <div className="flex gap-2 px-5 py-6 sm:p-4 border border-gray-300 rounded-lg ">
          <div className="p-3 bg-green-50 rounded-lg">
            <MdRateReview size={30} />
          </div>
          <div>
            <h4 className="text-xl font-semibold ">4</h4>
            <p className="text-zinc-500">Under Review</p>
          </div>
        </div>

        <div className="flex gap-2 px-5 py-6 sm:p-4 border border-gray-300 rounded-lg ">
          <div className="p-3 bg-green-50 rounded-lg">
            <MdOutlinePendingActions size={30} />
          </div>
          <div>
            <h4 className="text-xl font-semibold ">4</h4>
            <p className="text-zinc-500">Pending Contracts</p>
          </div>
        </div>

        <div className="flex gap-2 px-5 py-6 sm:p-4 border border-gray-300 rounded-lg ">
          <div className="p-3 bg-green-50 rounded-lg">
            <FcApproval size={30} />
          </div>
          <div>
            <h4 className="text-xl font-semibold ">4</h4>
            <p className="text-zinc-500">Approved Contracts</p>
          </div>
        </div>
      </div>

      {/* all the latest contracts  */}
      <div className="flex flex-col gap-3 mt-10 ">
        <p className="text-xl">#Latest Contracts</p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Publish Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">
                  Website Development Contract
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">12 Sep 2025</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">
                  Mobile App Maintenance
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">05 Sep 2025</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    Reviewed
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-800">
                  Cloud Infrastructure Setup
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">28 Aug 2025</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Approved
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
