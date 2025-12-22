import React, { ReactNode } from 'react';
import { Activity, TrendingUp, Info } from 'lucide-react';
import HeadlessPopover from '../ui/HeadlessPopover';
import StatCardPopover from './StatCardPopover';
import { useStatMetrics } from '../../hooks/useStatMetrics';

interface StatCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  subLabel: string;
  percentage: number;
  icon: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subValue, subLabel, percentage, icon }) => {
  const metrics = useStatMetrics(title, value);
  const strokeColor = percentage === 91 ? '#fff' : '#CCFF00';

  return (
    <div className="bg-k-surface border border-k-borderLight rounded-2xl p-6 hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      <div className="flex justify-between items-start relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <p className="text-[10px] font-bold text-k-textMuted uppercase tracking-wider">{title}</p>
            <HeadlessPopover
              button={
                <button className="text-gray-500 hover:text-k-lime transition-colors focus:outline-none" aria-label={`More info about ${title}`}>
                  <Info className="w-3 h-3" />
                </button>
              }
              align="left"
              className="w-80"
            >
              <StatCardPopover title={title} metrics={metrics} />
            </HeadlessPopover>
          </div>
          <h4 className="text-3xl font-bold text-white font-mono tracking-tight">
            {value}<span className="text-lg text-k-textMuted ml-0.5">{subValue}</span>
          </h4>
        </div>
        <div className="w-12 h-12 relative">
          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 36 36">
            <path className="stroke-k-borderLight fill-none stroke-[3]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path
              className="fill-none stroke-[3] transition-all duration-1000 ease-out"
              style={{ stroke: strokeColor }}
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-k-textMuted group-hover:text-white transition-colors border-t border-k-borderLight pt-3">
        {percentage > 50 ? <TrendingUp className="w-3 h-3 text-k-lime" /> : <Activity className="w-3 h-3 text-danger" />}
        {subLabel}
      </div>
    </div>
  );
};

export default StatCard;
