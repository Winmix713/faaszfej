import React, { useRef, useEffect } from 'react';
import { BTTSData } from '../../types/matches';

const BttsChart = ({ data }: { data: BTTSData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const render = () => {
        container.innerHTML = '';
        const w = container.clientWidth;
        const h = container.clientHeight;
        const pad = { t: 20, r: 20, b: 30, l: 30 };
        if (w <= 0) return;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        grad.setAttribute("id", "limeGrad");
        grad.setAttribute("x1", "0"); grad.setAttribute("y1", "0");
        grad.setAttribute("x2", "0"); grad.setAttribute("y2", "1");
        grad.innerHTML = `<stop offset="0%" stop-color="#ccff00" stop-opacity="0.3"/><stop offset="100%" stop-color="#ccff00" stop-opacity="0"/>`;
        defs.appendChild(grad);
        svg.appendChild(defs);

        const getX = (i: number) => pad.l + (i / (data.length - 1)) * (w - pad.l - pad.r);
        const getY = (v: number) => h - pad.b - (v / 8) * (h - pad.b - pad.t);

        let dArea = `M ${getX(0)} ${h - pad.b}`;
        data.forEach((p, i) => dArea += ` L ${getX(i)} ${getY(p.bttsCount)}`);
        dArea += ` L ${getX(data.length - 1)} ${h - pad.b} Z`;

        const pathArea = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathArea.setAttribute("d", dArea);
        pathArea.setAttribute("fill", "url(#limeGrad)");
        svg.appendChild(pathArea);

        let dLine = `M ${getX(0)} ${getY(data[0].bttsCount)}`;
        data.forEach((p, i) => dLine += ` L ${getX(i)} ${getY(p.bttsCount)}`);

        const pathLine = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathLine.setAttribute("d", dLine);
        pathLine.setAttribute("fill", "none");
        pathLine.setAttribute("stroke", "#ccff00");
        pathLine.setAttribute("stroke-width", "2");
        svg.appendChild(pathLine);

        data.forEach((p, i) => {
            if (i % 5 === 0 || i === data.length-1) {
                const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                c.setAttribute("cx", getX(i).toString());
                c.setAttribute("cy", getY(p.bttsCount).toString());
                c.setAttribute("r", "3");
                c.setAttribute("fill", "#000");
                c.setAttribute("stroke", "#ccff00");
                c.setAttribute("stroke-width", "2");
                svg.appendChild(c);
            }
        });

        const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        axisLine.setAttribute("x1", pad.l.toString());
        axisLine.setAttribute("y1", (h - pad.b).toString());
        axisLine.setAttribute("x2", (w - pad.r).toString());
        axisLine.setAttribute("y2", (h - pad.b).toString());
        axisLine.setAttribute("stroke", "#333");
        svg.appendChild(axisLine);

        container.appendChild(svg);
    };

    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, [data]);

  return (
    <div className="lg:col-span-2 bg-[#0a0a0a] border border-[#222] rounded-2xl p-8 flex flex-col h-[400px] relative group hover:border-[rgba(204,255,0,0.3)] transition-colors">
      <div className="flex items-center justify-between mb-4 z-10">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            BTTS Trend Analysis
            <span className="text-[10px] bg-[#1a1a1a] px-2 py-0.5 rounded text-[var(--color-text-muted)] uppercase border border-[#222]">Last 30 Rounds</span>
          </h3>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span> High Volatility
            </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden" ref={containerRef}></div>
    </div>
  );
};

export default BttsChart;
