import React, { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface SidebarMenuGroupProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  collapsible?: boolean;
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({
  title,
  children,
  defaultOpen = true,
  collapsible = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-1 mb-8">
      <div
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
        className={`flex items-center justify-between px-2 mb-2 ${collapsible ? 'cursor-pointer group' : ''}`}
      >
        <div className={`text-[10px] font-bold text-k-textDisabled uppercase tracking-wider ${collapsible ? 'group-hover:text-k-textMuted' : ''}`}>
          {title}
        </div>
        {collapsible && (
          <ChevronDown className={`w-3 h-3 text-k-textDisabled transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
        )}
      </div>

      {isOpen && (
        <div className="space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarMenuGroup;
