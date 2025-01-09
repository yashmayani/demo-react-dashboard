import React from 'react';
import { TbGraph } from "react-icons/tb";
import { PiBookmarksSimpleThin } from "react-icons/pi";
import { RiShoppingBag2Line } from "react-icons/ri";
import TeamPerformanceChart from './TeamPerformanceChart';
import DashboardChart from './DashboardChart';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        {/* Main content section */}
        <div className="w-full lg:w-2/3">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="flex gap-3 items-start">
                <div className="bg-gray-300 p-2 rounded-lg">
                  <PiBookmarksSimpleThin />
                </div>
                <div>
                  <div>
                    <b>Total Projects</b>
                  </div>
                  <div className="mt-2">
                    <b>10,724</b>
                  </div>
                  <div>All Running & Completed Projects</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="flex gap-3 items-start">
                <div className="bg-gray-300 p-2 rounded-lg">
                  <RiShoppingBag2Line />
                </div>
                <div>
                  <div>
                    <b>Completed Projects</b>
                  </div>
                  <div className="mt-2">
                    <b>9,801</b>
                  </div>
                  <div>
                    <span className="text-blue-500"> +12% </span> Completion rate this month
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="flex gap-3 items-start">
                <div className="bg-gray-300 p-2 rounded-lg">
                  <TbGraph />
                </div>
                <div>
                  <div>
                    <b>Running Projects</b>
                  </div>
                  <div className="mt-2">
                    <b>923</b>
                  </div>
                  <div>
                    <span className="text-blue-500"> +8% </span> Running projects increase
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Charts */}
          <div className="mt-6">
            <DashboardChart />
          </div>

          {/* Dashboard Table */}
          <div className="mt-6">
            <DashboardTable />
          </div>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          {/* Team Review Section */}
          <div className="bg-white p-4 rounded-lg">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Team Review
            </span>

            <div className="mt-2">
              <div className="text-2xl font-semibold">Oxis Project Team</div>
              <div className="text-xs text-gray-500 my-2">Oxis is built for every user of your project team to plan, manage.</div>
            </div>

            <div className="flex gap-5">
              <div>14. 10. 2023</div>
              <span className="bg-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">15 Members</span>
            </div>

            <div className="mt-5 flex justify-between">
              <button type="button" className="bg-gray-200 font-medium rounded-lg text-sm px-5 py-2">
                Notion File
              </button>
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?ga=GA1.1.2109491867.1729845871&semt=ais_hybrid"
                  alt="team member"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://img.freepik.com/premium-vector/video-game-design-software-abstract-concept-vector-illustration-professional-it-developer-creating-game-design-using-special-software-modern-technology-programming-process-abstract-metaphor_107173-45842.jpg?ga=GA1.1.2109491867.1729845871&semt=ais_hybrid"
                  alt="team member"
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full"
                  src="https://img.freepik.com/free-vector/it-job-concept-illustration_114360-27000.jpg?ga=GA1.1.2109491867.1729845871&semt=ais_hybrid"
                  alt="team member"
                />
              </div>
            </div>
          </div>

          {/* Meeting Section */}
          <div className="bg-white p-4 rounded-lg">
            <div className="text-md font-semibold">Meeting</div>
            <div className="mt-2">
              <div className="text-2xl font-semibold">Upcoming Event Planning Discussion</div>
              <div className="text-xs text-gray-500 my-2">Oxis is built for every user of your project team to plan, manage.</div>
            </div>

            <div className="flex gap-2">
              <span className="bg-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">16th Oct</span>
              <span className="bg-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">11:00 - 12:00</span>
            </div>

            <div className="mt-5">
              <button type="button" className="bg-gray-200 font-medium rounded-lg text-sm px-5 py-2 w-full">
                Meeting Zoom Link
              </button>
            </div>
          </div>

          {/* Team Performance Chart */}
          <div className="mt-6">
            <TeamPerformanceChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
