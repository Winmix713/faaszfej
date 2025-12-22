import React, { useState } from 'react';
import { Home, Shield, Target, Maximize2 } from 'lucide-react';
import TeamDisplay from '../match/TeamDisplay';
import MatchScore from '../match/MatchScore';
import MatchDialog from '../match/MatchDialog';

interface MatchVisualizerCardProps {
  homeScore: number;
  awayScore: number;
}

const MatchVisualizerCard: React.FC<MatchVisualizerCardProps> = ({ homeScore, awayScore }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsDialogOpen(true)}
        className="lg:col-span-2 rounded-3xl bg-k-surface shadow-card relative overflow-hidden group border border-k-border hover:shadow-cardHover hover:border-k-lime/30 transition-all duration-300 min-h-[320px] flex flex-col cursor-pointer"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.8),rgba(20,20,20,0.8))] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none z-0"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-k-lime blur-[120px] opacity-[0.1] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-start w-full mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-k-surfaceHighlight backdrop-blur border border-k-borderDim px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Target className="w-3 h-3 text-k-lime" />
                Champions League
              </span>
              <span className="text-xs text-k-textMuted font-mono">Group B • Round 4</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-k-limeLight border border-k-limeBorder text-k-lime text-sm font-bold font-mono">
                <span className="animate-pulse">●</span> 72:43
              </div>
              <button className="w-8 h-8 rounded-lg bg-k-surfaceHighlight border border-k-borderDim flex items-center justify-center text-gray-400 hover:text-k-lime hover:border-k-lime transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <TeamDisplay
              name="LIV"
              icon={<Home className="w-10 h-10 md:w-12 md:h-12 text-white stroke-[1.5]" />}
              position="home"
            />

            <MatchScore homeScore={homeScore} awayScore={awayScore} showStats />

            <TeamDisplay
              name="RMA"
              icon={<Shield className="w-10 h-10 md:w-12 md:h-12 text-white stroke-[1.5]" />}
              position="away"
            />
          </div>
        </div>
      </div>

      <MatchDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        homeScore={homeScore}
        awayScore={awayScore}
      />
    </>
  );
};

export default MatchVisualizerCard;
