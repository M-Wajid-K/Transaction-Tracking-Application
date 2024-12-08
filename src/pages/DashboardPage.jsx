import React from 'react';
import { FaAndroid, FaApple, FaWindows, FaBug } from 'react-icons/fa';
import StatCard from '../components/dashboard/StatCard';
import WebsiteVisitsChart from '../components/dashboard/WebsiteVisitsChart';
import CurrentVisitsChart from '../components/dashboard/CurrentVisitsChart';
import SlideableDashboardMenu from '../components/dashboard/SlideableDashboardMenu';

const DashboardPage = () => {
  return (
    <div className="flex">
      <SlideableDashboardMenu />
      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Hi, Welcome back</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={<FaAndroid className="w-6 h-6" />}
            title="Weekly Sales"
            value="714k"
            bgColor="bg-blue-100"
          />
          <StatCard
            icon={<FaApple className="w-6 h-6" />}
            title="New Users"
            value="1.35m"
            bgColor="bg-cyan-100"
          />
          <StatCard
            icon={<FaWindows className="w-6 h-6" />}
            title="Item Orders"
            value="1.72m"
            bgColor="bg-yellow-100"
          />
          <StatCard
            icon={<FaBug className="w-6 h-6" />}
            title="Bug Reports"
            value="234"
            bgColor="bg-red-100"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WebsiteVisitsChart />
          <CurrentVisitsChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;