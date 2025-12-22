import React from 'react';
import { BarChart3, Target, Activity } from 'lucide-react';
import { useMatchData } from '../hooks/useMatchData';
import { useCounter } from '../hooks/useCounter';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import MatchVisualizerCard from '../components/dashboard/MatchVisualizerCard';
import WinProbabilityCard from '../components/dashboard/WinProbabilityCard';
import StatCard from '../components/dashboard/StatCard';
import BttsChart from '../components/dashboard/BttsChart';
import LeagueTable from '../components/dashboard/LeagueTable';

const HomePage = () => {
  const { loading, bttsData, leagueTable } = useMatchData();
  const homeScore = useCounter(2, 2500);
  const awayScore = useCounter(1, 2500);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MatchVisualizerCard homeScore={homeScore} awayScore={awayScore} />
        <WinProbabilityCard />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Possession"
          value="64" subValue="%"
          subLabel="Dominating Midfield"
          percentage={64}
          icon={<BarChart3 className="w-3 h-3 text-[var(--color-text-muted)]" />}
        />
        <StatCard
          title="Expected Goals (xG)"
          value="2.42"
          subLabel="+0.8 vs Avg"
          percentage={82}
          icon={<Target className="w-3 h-3 text-[var(--color-text-muted)]" />}
        />
        <StatCard
          title="Pass Accuracy"
          value="91" subValue="%"
          subLabel="428 Completed"
          percentage={91}
          icon={<Activity className="w-3 h-3 text-[var(--color-text-muted)]" />}
        />
        <StatCard
          title="Total Shots"
          value="18"
          subLabel="6 On Target"
          percentage={45}
          icon={<Target className="w-3 h-3 text-[var(--color-text-muted)]" />}
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BttsChart data={bttsData} />
        <LeagueTable teams={leagueTable} />
      </section>
    </>
  );
};

export default HomePage;
