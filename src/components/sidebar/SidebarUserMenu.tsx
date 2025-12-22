import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import HeadlessMenu from '../ui/HeadlessMenu';

const SidebarUserMenu = () => {
  const userMenuItems = [
    {
      label: 'Profile',
      icon: <User className="w-4 h-4" />,
      onClick: () => console.log('Profile clicked')
    },
    {
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      onClick: () => console.log('Settings clicked')
    },
    {
      label: 'Logout',
      icon: <LogOut className="w-4 h-4" />,
      onClick: () => console.log('Logout clicked'),
      danger: true
    },
  ];

  return (
    <div className="p-4 border-t border-k-borderLight bg-k-surface">
      <HeadlessMenu
        button={
          <button className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-[#151515] border border-transparent hover:border-k-borderLight transition-all group focus:outline-none">
            <div className="relative">
              <div className="w-9 h-9 rounded-full border border-k-borderDim bg-k-surfaceHighlight overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Win+Mix&background=111&color=CCFF00"
                  alt="User"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-k-lime rounded-full border-2 border-k-surface"></div>
            </div>
            <div className="flex-1 text-left overflow-hidden">
              <div className="text-sm font-bold text-white truncate">WinMix User</div>
              <div className="text-xs text-k-textMuted truncate">Premium Plan</div>
            </div>
            <div className="text-k-textDisabled group-hover:text-white transition-colors">
              <Settings className="w-4 h-4" />
            </div>
          </button>
        }
        items={userMenuItems}
        align="top"
      />
    </div>
  );
};

export default SidebarUserMenu;
