import React from 'react';
import { Trophy, Target, TrendingUp } from 'lucide-react';
import { LeagueTeam } from '../../types/matches';
import HeadlessTabs from '../ui/HeadlessTabs';

const LeagueTable = ({ teams }: { teams: LeagueTeam[] }) => {
  const standingsContent = (
    <>
      <div className="grid grid-cols-12 px-4 py-3 bg-[#1a1a1a]/30 text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
        <span className="col-span-1 text-center">#</span>
        <span className="col-span-5">Team</span>
        <span className="col-span-4 text-center">Form</span>
        <span className="col-span-2 text-right">Pts</span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">
        {teams.map((team) => (
          <div key={team.position} className={`grid grid-cols-12 px-3 py-2.5 rounded-lg text-[11px] items-center transition-all cursor-pointer ${team.position === 1 ? 'bg-[rgba(204,255,0,0.1)] border border-[rgba(204,255,0,0.2)]' : 'hover:bg-white/5 border border-transparent'}`}>
              <span className={`col-span-1 text-center font-mono font-bold ${team.position === 1 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>{team.position}</span>
              <span className="col-span-5 font-bold text-white truncate flex items-center gap-2">
                   {team.name}
              </span>
              <div className="col-span-4 flex justify-center gap-1">
                  {team.form.slice(-3).map((result, i) => (
                      <span key={i} className={`w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold ${result === 'W' ? 'bg-green-500/20 text-green-500' : result === 'L' ? 'bg-red-500/20 text-red-500' : 'bg-gray-500/20 text-gray-400'}`}>
                          {result}
                      </span>
                  ))}
              </div>
              <span className="col-span-2 text-right font-mono font-bold text-white">{team.points}</span>
          </div>
        ))}
      </div>
    </>
  );

  const topScorersContent = (
    <>
      <div className="grid grid-cols-12 px-4 py-3 bg-[#1a1a1a]/30 text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
        <span className="col-span-1 text-center">#</span>
        <span className="col-span-6">Player</span>
        <span className="col-span-3 text-center">Team</span>
        <span className="col-span-2 text-right">Goals</span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">
        {[
          { rank: 1, player: 'M. Salah', team: 'LIV', goals: 12 },
          { rank: 2, player: 'E. Haaland', team: 'MCI', goals: 11 },
          { rank: 3, player: 'H. Kane', team: 'LEI', goals: 9 },
          { rank: 4, player: 'B. Saka', team: 'ARS', goals: 8 },
          { rank: 5, player: 'C. Palmer', team: 'CHE', goals: 7 },
          { rank: 6, player: 'J. Mateta', team: 'CRY', goals: 7 },
          { rank: 7, player: 'O. Watkins', team: 'BUR', goals: 6 },
          { rank: 8, player: 'J. Bowen', team: 'WHU', goals: 6 },
        ].map((scorer) => (
          <div key={scorer.rank} className={`grid grid-cols-12 px-3 py-2.5 rounded-lg text-[11px] items-center transition-all cursor-pointer ${scorer.rank === 1 ? 'bg-[rgba(204,255,0,0.1)] border border-[rgba(204,255,0,0.2)]' : 'hover:bg-white/5 border border-transparent'}`}>
              <span className={`col-span-1 text-center font-mono font-bold ${scorer.rank === 1 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>{scorer.rank}</span>
              <span className="col-span-6 font-bold text-white truncate">{scorer.player}</span>
              <span className="col-span-3 text-center text-gray-400 text-[10px]">{scorer.team}</span>
              <span className="col-span-2 text-right font-mono font-bold text-white">{scorer.goals}</span>
          </div>
        ))}
      </div>
    </>
  );

  const formGuideContent = (
    <>
      <div className="grid grid-cols-12 px-4 py-3 bg-[#1a1a1a]/30 text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
        <span className="col-span-1 text-center">#</span>
        <span className="col-span-5">Team</span>
        <span className="col-span-6 text-center">Last 5 Games</span>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">
        {teams.map((team) => (
          <div key={team.position} className="grid grid-cols-12 px-3 py-2.5 rounded-lg text-[11px] items-center transition-all cursor-pointer hover:bg-white/5 border border-transparent">
              <span className="col-span-1 text-center font-mono font-bold text-[var(--color-text-muted)]">{team.position}</span>
              <span className="col-span-5 font-bold text-white truncate">{team.name}</span>
              <div className="col-span-6 flex justify-center gap-1">
                  {team.form.map((result, i) => (
                      <span key={i} className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold ${result === 'W' ? 'bg-green-500/20 text-green-500' : result === 'L' ? 'bg-red-500/20 text-red-500' : 'bg-gray-500/20 text-gray-400'}`}>
                          {result}
                      </span>
                  ))}
              </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="lg:col-span-1 bg-[#0a0a0a] border border-[#222] rounded-2xl flex flex-col h-[400px] relative overflow-hidden">
      <div className="p-4">
        <HeadlessTabs
          tabs={[
            {
              name: 'Standings',
              icon: <Trophy className="w-3 h-3" />,
              content: standingsContent
            },
            {
              name: 'Top Scorers',
              icon: <Target className="w-3 h-3" />,
              content: topScorersContent
            },
            {
              name: 'Form',
              icon: <TrendingUp className="w-3 h-3" />,
              content: formGuideContent
            }
          ]}
        />
      </div>
    </div>
  );
};

export default LeagueTable;
