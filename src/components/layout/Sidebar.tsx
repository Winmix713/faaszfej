import React from 'react';
import { useSidebar } from '../../contexts/sidebarContext';
import SidebarHeader from '../sidebar/SidebarHeader';
import SidebarNav from '../sidebar/SidebarNav';
import SidebarUserMenu from '../sidebar/SidebarUserMenu';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-k-surface border-r border-k-borderLight flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 shadow-2xl lg:shadow-none`}
      >
        <SidebarHeader />
        <SidebarNav />
        <SidebarUserMenu />
      </aside>
    </>
  );
};

export default Sidebar;
