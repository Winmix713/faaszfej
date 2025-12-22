import React from 'react';

const SidebarHeader = () => {
  return (
    <div className="p-6 pb-2">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-lime-gradient flex items-center justify-center text-black font-extrabold text-xl shadow-glowStrong shrink-0">
          W
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tight">WinMix</h1>
          <span className="text-[10px] font-semibold text-k-lime bg-k-limeLight px-2 py-0.5 rounded border border-k-limeBorder">
            PRO TIPSTER
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
