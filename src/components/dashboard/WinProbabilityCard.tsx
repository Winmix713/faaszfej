import React, { useState } from 'react';
import { Sparkles, TrendingUp, ChevronRight, Target, Activity, Zap } from 'lucide-react';
import HeadlessDialog from '../ui/HeadlessDialog';

const WinProbabilityCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
  <>
  <div className="lg:col-span-1 rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#151515] shadow-card border border-[#222] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[rgba(204,255,0,0.3)] transition-colors h-full">
    <div className="absolute top-0 right-0 p-32 bg-[var(--color-accent)] opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>

    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)] text-black flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.4)]">
          <Sparkles className="w-5 h-5 fill-current" />
        </div>
        <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-widest border border-[rgba(204,255,0,0.2)] px-2 py-1 rounded-md bg-[rgba(204,255,0,0.1)] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            AI v2.1 Live
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-1">Win Probability</h3>
      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Calculating real-time outcome based on current xG momentum and field tilt.</p>
    </div>

    <div className="mt-6 relative z-10">
      <div className="flex justify-between items-end mb-3">
        <div className="flex items-baseline gap-1">
            <span className="text-5xl font-mono font-bold text-white tracking-tighter">78</span>
            <span className="text-xl text-[var(--color-accent)] font-bold">%</span>
        </div>
        <span className="text-sm font-bold text-[var(--color-accent)] bg-[rgba(204,255,0,0.2)] px-2 py-1 rounded flex items-center gap-1 border border-[rgba(204,255,0,0.2)]">
          <TrendingUp className="w-3 h-3" /> +4.2%
        </span>
      </div>

      <div className="space-y-2">
        <div className="h-3 w-full bg-black rounded-full overflow-hidden border border-white/10 relative">
            <div className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[#aadd00] shadow-[0_0_15px_rgba(204,255,0,0.5)] relative z-10" style={{ width: '78%', transition: 'width 1s ease-out' }}>
                <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white opacity-50"></div>
            </div>
        </div>

        <div className="flex justify-between text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
            <span>Home (78%)</span>
            <span>Draw (12%)</span>
            <span>Away (10%)</span>
        </div>
      </div>

      <button
        onClick={() => setIsDialogOpen(true)}
        className="w-full mt-6 py-3 rounded-xl bg-[#1a1a1a] hover:bg-white hover:text-black text-white text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn border border-[#222] hover:border-white focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
      >
          View Detailed Model
          <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>

  <HeadlessDialog
    isOpen={isDialogOpen}
    onClose={() => setIsDialogOpen(false)}
    title="AI Win Probability Model - Detailed Analysis"
    size="lg"
  >
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-[#CCFF00]" />
            <span className="text-xs font-bold text-gray-400 uppercase">Home Win</span>
          </div>
          <div className="text-3xl font-mono font-bold text-white">78%</div>
          <div className="text-xs text-[#CCFF00] font-bold mt-1">+4.2% trend</div>
        </div>
        <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 uppercase">Draw</span>
          </div>
          <div className="text-3xl font-mono font-bold text-white">12%</div>
          <div className="text-xs text-gray-400 font-bold mt-1">-1.5% trend</div>
        </div>
        <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 uppercase">Away Win</span>
          </div>
          <div className="text-3xl font-mono font-bold text-white">10%</div>
          <div className="text-xs text-gray-400 font-bold mt-1">-2.7% trend</div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-5">
        <h4 className="text-sm font-bold text-white mb-4">Model Factors</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Expected Goals (xG)</span>
              <span className="text-xs font-bold text-white">2.42 vs 0.87</span>
            </div>
            <div className="h-2 bg-black rounded-full overflow-hidden">
              <div className="h-full bg-[#CCFF00]" style={{ width: '73%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Possession</span>
              <span className="text-xs font-bold text-white">64% vs 36%</span>
            </div>
            <div className="h-2 bg-black rounded-full overflow-hidden">
              <div className="h-full bg-[#CCFF00]" style={{ width: '64%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Shot Accuracy</span>
              <span className="text-xs font-bold text-white">89% vs 45%</span>
            </div>
            <div className="h-2 bg-black rounded-full overflow-hidden">
              <div className="h-full bg-[#CCFF00]" style={{ width: '89%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Field Tilt</span>
              <span className="text-xs font-bold text-white">71% attacking third</span>
            </div>
            <div className="h-2 bg-black rounded-full overflow-hidden">
              <div className="h-full bg-[#CCFF00]" style={{ width: '71%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-5">
        <h4 className="text-sm font-bold text-white mb-3">AI Model Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-gray-400">Model Version</span>
            <div className="text-sm font-bold text-white mt-1">v2.1 Neural Network</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Confidence Level</span>
            <div className="text-sm font-bold text-[#CCFF00] mt-1">94.7%</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Data Points</span>
            <div className="text-sm font-bold text-white mt-1">1,247 features</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Update Frequency</span>
            <div className="text-sm font-bold text-white mt-1">Real-time</div>
          </div>
        </div>
      </div>
    </div>
  </HeadlessDialog>
  </>
  );
};

export default WinProbabilityCard;
