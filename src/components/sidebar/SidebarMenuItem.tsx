import React, { ReactNode } from 'react';

interface SidebarMenuItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  badge?: ReactNode;
  size?: 'normal' | 'small';
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
  badge,
  size = 'normal'
}) => {
  const baseClasses = 'group relative flex items-center w-full rounded-xl transition-all duration-200 border border-transparent';
  const sizeClasses = size === 'normal' ? 'p-2.5 text-sm' : 'p-2 text-xs';
  const activeClasses = isActive
    ? 'bg-k-surfaceHighlight text-k-lime border-k-borderLight shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
    : 'text-k-textMutedLight hover:text-white hover:bg-[#151515]';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${activeClasses}`}
    >
      <span className={`${size === 'normal' ? 'w-5 h-5 mr-3' : 'w-3.5 h-3.5 mr-2'} flex items-center justify-center ${isActive ? 'text-k-lime' : 'text-gray-500 group-hover:text-white'}`}>
        {icon}
      </span>
      <span className="font-medium flex-1 text-left">{label}</span>
      {badge && <span className="ml-auto">{badge}</span>}
    </button>
  );
};

export default SidebarMenuItem;
