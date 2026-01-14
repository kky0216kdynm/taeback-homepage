import React, { useMemo } from "react";

/** ---------- Small UI helpers ---------- */
function Pill({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-bold " +
        className
      }
    >
      {children}
    </span>
  );
}




/** ---------- Donut Chart (SVG) + draw animation ---------- */
function AnimatedArc({ d, color, strokeWidth, delay = 0 }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
      className="tb-arc"
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
}

function DonutChart({
  size = 320,
  stroke = 46,
  segments = [],
  centerPercentText = "0%",
  centerLabel = "순이익",
}) {
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;

  const totalCost = useMemo(
    () => segments.reduce((sum, s) => sum + (Number(s.value) || 0), 0),
    [segments]
  );
  const profit = Math.max(0, 100 - totalCost);

  // Profit is remainder. We render profit as light gray first then costs.
  const all = useMemo(() => {
    const profitSeg = {
      label: "순이익(나머지)",
      value: profit,
      color: "#E7E9ED", // neutral
      isProfit: true,
    };
    return [profitSeg, ...segments];
  }, [profit, segments]);

  let startAngle = -90; // top
  const arcs = all.map((seg, i) => {
    const v = Math.max(0, Number(seg.value) || 0);
    const sweep = (v / 100) * 360;
    const endAngle = startAngle + sweep;
    const largeArc = sweep > 180 ? 1 : 0;

    const toXY = (angleDeg) => {
      const a = (Math.PI / 180) * angleDeg;
      return {
        x: cx + radius * Math.cos(a),
        y: cy + radius * Math.sin(a),
      };
    };

    const p0 = toXY(startAngle);
    const p1 = toXY(endAngle);

    const d = `M ${p0.x.toFixed(3)} ${p0.y.toFixed(
      3
    )} A ${radius} ${radius} 0 ${largeArc} 1 ${p1.x.toFixed(3)} ${p1.y.toFixed(
      3
    )}`;

    startAngle = endAngle;

    return {
      key: `${seg.label}-${i}`,
      d,
      color: seg.color,
    };
  });

  return (
    <div className="relative grid place-items-center">
      <svg width={size} height={size} className="block">
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth={stroke}
        />

        {/* Arcs: sequential draw */}
        {arcs.map((a, i) => (
          <AnimatedArc
            key={a.key}
            d={a.d}
            color={a.color}
            strokeWidth={stroke}
            delay={i * 0.12} // <-- “돌면서 생성” 느낌: 순차 그리기
          />
        ))}
      </svg>

      {/* Center label */}
      <div className="absolute text-center select-none">

        <div className="text-5xl font-black tracking-tight text-emerald-950">
          {centerPercentText}
        </div>
        <div className="mt-1 text-lg font-semibold text-zinc-700">
          {centerLabel}
        </div>
      </div>
    </div>
  );
}

function LegendRow({ color, label, value }) {
  return (
    <div className="flex items-center justify-between gap-6 py-2">
      <div className="flex items-center gap-3">
        <span className="inline-block w-3 h-3 rounded-full" style={{ background: color }} />
        <span className="text-zinc-800 font-medium">{label}</span>
      </div>
      <div className="text-zinc-900 font-semibold">{value}</div>
    </div>
  );
}

function ProfitCard({ title, netText, icon, items, profitPercent }) {
  return (
    <div className="bg-white rounded-[28px] shadow-xl shadow-black/10 border border-black/5 overflow-hidden">
      <div className="px-10 pt-10 pb-8">
        <div className="text-center">
          <div className="text-2xl font-black tracking-tight text-zinc-900">
            {title}
          </div>

          <div className="mt-5">
            <Pill className="bg-emerald-50 text-emerald-900">
              {netText}
            </Pill>
          </div>
        </div>

        <div className="mt-10">
          <DonutChart
            size={340}
            stroke={46}
            segments={items.map(({ label, value, color }) => ({ label, value, color }))}
            centerIcon={icon}
            centerPercentText={`${profitPercent}%`}
            centerLabel="순이익"
          />
        </div>
      </div>

      <div className="px-10 pb-10">
        <div className="mt-2">
          {items.map((it) => (
            <LegendRow
              key={it.label}
              color={it.color}
              label={it.label}
              value={`${it.value}%`}
            />
          ))}
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: "#22C55E" }} />
            <span className="text-zinc-900 font-bold">로얄티</span>
          </div>
          <div className="text-emerald-900 font-black">*1년간 면제*</div>
        </div>

        <div className="mt-6 text-sm text-zinc-500 leading-relaxed">
          * 예시 수치이며 상권/운영 방식에 따라 달라질 수 있습니다. (점주 1인 운영 기준 포함)
        </div>
      </div>
    </div>
  );
}

/** ---------- Main Section (A안) ---------- */
export default function ProfitabilityShowcaseA() {
  // Green palette
  const palette = useMemo(
    () => ({
      // deep -> light greens
      g1: "#14532D",
      g2: "#166534",
      g3: "#16A34A",
      g4: "#22C55E",
      g5: "#4ADE80",
      g6: "#86EFAC",
      g7: "#BBF7D0",
    }),
    []
  );

  const case3000 = useMemo(
    () => ({
      title: "월 매출 3000만원 기준",
      netText: "손익 월 1140만원",
      icon: "💲",
      items: [
        { label: "식자재", value: 27, color: palette.g1 },
        { label: "주류", value: 6, color: palette.g2 },
        { label: "임차료", value: 8, color: palette.g3 },
        { label: "연탄 및 불판 세척", value: 2, color: palette.g4 },
        { label: "공과금 및 기타 비용", value: 5, color: palette.g5 },
        { label: "인건비 (점주 1인 운영 시)", value: 12, color: palette.g6 },
        { label: "기타 잡비", value: 2, color: palette.g7 },
      ],
    }),
    [palette]
  );

  const case4500 = useMemo(
    () => ({
      title: "월 매출 4500만원 기준",
      netText: "손익 월 1575만원",
      icon: "📈",
      items: [
        { label: "식자재", value: 27, color: palette.g1 },
        { label: "주류", value: 6, color: palette.g2 },
        { label: "임차료", value: 8, color: palette.g3 },
        { label: "연탄 및 불판 세척", value: 2, color: palette.g4 },
        { label: "공과금 및 기타 비용", value: 6, color: palette.g5 },
        { label: "인건비 (점주 1인 운영 시)", value: 14, color: palette.g6 },
        { label: "기타 잡비", value: 2, color: palette.g7 },
      ],
    }),
    [palette]
  );

  const profitPct3000 = useMemo(
    () => Math.max(0, 100 - case3000.items.reduce((s, it) => s + it.value, 0)),
    [case3000]
  );
  const profitPct4500 = useMemo(
    () => Math.max(0, 100 - case4500.items.reduce((s, it) => s + it.value, 0)),
    [case4500]
  );

  return (
    <section id="profitability" className="py-24 md:py-32 bg-[#f3f0ea] relative">
      {/* subtle paper bg */}
      <div className="absolute inset-0 opacity-[0.18] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <Pill className="bg-emerald-950 text-white">PROFIT GUIDE</Pill>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-zinc-900">
            수익성 안내
          </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-600">
            “순이익 중심” 요약 + 구성비 근거를 함께 보여드립니다.
          </p>
        </div>

       
      

        {/* Donut cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProfitCard
            title={case3000.title}
            netText={case3000.netText}
            icon={case3000.icon}
            items={case3000.items}
            profitPercent={profitPct3000}
          />
          <ProfitCard
            title={case4500.title}
            netText={case4500.netText}
            icon={case4500.icon}
            items={case4500.items}
            profitPercent={profitPct4500}
          />
        </div>

        
      </div>
    </section>
  );
}
