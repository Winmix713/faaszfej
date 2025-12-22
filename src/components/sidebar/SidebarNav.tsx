import React, { useState } from 'react';
import {
  LayoutDashboard,
  Activity,
  BarChart3,
  Sparkles,
  Calendar,
  Trophy,
  Star,
  Target,
  ChevronDown
} from 'lucide-react';
import SidebarMenuGroup from './SidebarMenuGroup';
import SidebarMenuItem from './SidebarMenuItem';

const SidebarNav = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [analyticsOpen, setAnalyticsOpen] = useState(true);

  return (
    <div className="px-4 py-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-k-borderLight scrollbar-track-transparent">
      <SidebarMenuGroup title="Main Menu">
        <SidebarMenuItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          isActive={activeItem === 'Dashboard'}
          onClick={() => setActiveItem('Dashboard')}
        />
        <SidebarMenuItem
          icon={<Activity className="w-5 h-5" />}
          label="Live Odds"
          isActive={activeItem === 'Live Odds'}
          onClick={() => setActiveItem('Live Odds')}
          badge={<span className="w-2 h-2 rounded-full bg-danger animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>}
        />
      </SidebarMenuGroup>

      <SidebarMenuGroup title="Analytics">
        <div className="relative">
          <button
            onClick={() => setAnalyticsOpen(!analyticsOpen)}
            className="group flex items-center w-full p-2.5 rounded-xl text-sm text-k-textMutedLight hover:text-white hover:bg-[#151515] transition-colors"
          >
            <BarChart3 className="w-5 h-5 mr-3 text-gray-500 group-hover:text-white" />
            <span className="font-medium flex-1 text-left">Stats Hub</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${analyticsOpen ? 'rotate-180' : ''}`} />
          </button>

          {analyticsOpen && (
            <div className="mt-1 ml-4 pl-4 border-l border-k-borderLight space-y-1">
              <SidebarMenuItem
                icon={<Sparkles className="w-3.5 h-3.5" />}
                label="AI Models"
                size="small"
                isActive={activeItem === 'AI Models'}
                onClick={() => setActiveItem('AI Models')}
              />
              <SidebarMenuItem
                icon={<Target className="w-3.5 h-3.5" />}
                label="Predictions"
                size="small"
                isActive={activeItem === 'Predictions'}
                onClick={() => setActiveItem('Predictions')}
              />
            </div>
          )}
        </div>

        <SidebarMenuItem
          icon={<Calendar className="w-5 h-5" />}
          label="Schedule"
          isActive={activeItem === 'Schedule'}
          onClick={() => setActiveItem('Schedule')}
        />
      </SidebarMenuGroup>

      <SidebarMenuGroup title="Tracked Leagues" collapsible>
        <SidebarMenuItem
          icon={
            <div className="w-5 h-5 rounded-md bg-k-surfaceHighlight border border-k-borderDim flex items-center justify-center text-[8px] font-bold text-k-lime">
              PL
            </div>
          }
          label="Premier League"
          isActive={activeItem === 'Premier League'}
          onClick={() => setActiveItem('Premier League')}
        />
        <SidebarMenuItem
          icon={
            <div className="w-5 h-5 rounded-md bg-k-surfaceHighlight border border-k-borderDim flex items-center justify-center text-[8px] font-bold text-white">
              LL
            </div>
          }
          label="La Liga"
          isActive={activeItem === 'La Liga'}
          onClick={() => setActiveItem('La Liga')}
        />
        <SidebarMenuItem
          icon={<Star className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />}
          label="Favorites"
          isActive={activeItem === 'Favorites'}
          onClick={() => setActiveItem('Favorites')}
        />
      </SidebarMenuGroup>
    </div>
  );
};

export default SidebarNav;
