import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';

const DashboardLayout = () => {
  return (
    <div className="bg-[#030303] text-[#e5e5e5] font-sans min-h-screen flex overflow-hidden selection:bg-[var(--color-accent)] selection:text-black">
      <Sidebar />
      <main className="flex-1 lg:ml-20 flex flex-col h-screen overflow-hidden bg-[#030303] relative">
        <PageHeader />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth pb-20">
          <div className="max-w-[1600px] mx-auto space-y-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
