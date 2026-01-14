import React, { useEffect, useRef, useState } from "react";
import paperBg from "../assets/background.png";

function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-900/40 bg-emerald-950/25 backdrop-blur">
      <span className="w-2 h-2 rounded-full bg-emerald-400" />
      <span className="text-emerald-100 font-semibold tracking-widest text-xs md:text-sm">
        {children}
      </span>
    </div>
  );
}

function PaperCard({ children }) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-black/15">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${paperBg})` }}
      />
      <div className="absolute inset-0 bg-white/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/75" />
      <div className="relative p-10 md:p-12">{children}</div>
    </div>
  );
}

function DeptBox({
  myKey,
  title,
  items,
  delay,
  playKey,
  hoverKey,
  setHoverKey,
}) {
  const active = hoverKey === myKey;
  const anyHover = Boolean(hoverKey);

  return (
    <div
      key={playKey}
      onMouseEnter={() => setHoverKey(myKey)}
      onMouseLeave={() => setHoverKey(null)}
      className={[
        "tb-dept transition-transform duration-300",
        anyHover ? (active ? "scale-[1.03]" : "opacity-70") : "",
      ].join(" ")}
      style={{ "--tb-delay": `${delay}ms` }}
    >
      <div
        className={[
          "rounded-2xl px-6 py-6 border backdrop-blur shadow-lg transition-all duration-300",
          active
            ? "bg-white border-emerald-500 shadow-emerald-500/20"
            : "bg-white/55 border-black/15 shadow-black/5",
        ].join(" ")}
      >
        <div className="text-zinc-900 font-black text-base md:text-lg">
          {title}
        </div>
        <div className="mt-4 space-y-2">
          {items.map((t) => (
            <div
              key={t}
              className="text-zinc-800 font-semibold text-sm md:text-base"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OrgChartSplitSection() {
  const rootRef = useRef(null);
  const [animate, setAnimate] = useState(true);
  const [playId, setPlayId] = useState(0);
  const [hoverKey, setHoverKey] = useState(null);

  // hoverKey에 따라 svg에 class 부여
  const hoverClass = hoverKey ? `tb-hover-${hoverKey}` : "";

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setPlayId((v) => v + 1); // 스크롤 들어올 때마다 재생
        } else {
          setHoverKey(null);
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="org"
      ref={rootRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <SectionBadge>ORGANIZATION</SectionBadge>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white">
            조직현황
          </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-300">
            한양그린푸드는 3개 핵심 부서로 운영됩니다.
          </p>
        </div>

        <PaperCard>
          {/* Parent */}
          <div className="flex justify-center mb-6">
            <div
              className={[
                "inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/60 border border-black/15 shadow-lg shadow-black/5 transition-all duration-300",
                hoverKey ? "ring-2 ring-emerald-500/25" : "",
              ].join(" ")}
            >
              <span className="text-zinc-900 font-black text-xl md:text-2xl">
                한양그린푸드
              </span>
            </div>
          </div>

          {/* ✅ Connector lines: 가로를 좌/우로 분리 */}
          <div className={`flex justify-center ${hoverClass}`}>
            <svg
              key={playId}
              viewBox="0 0 900 170"
              className="w-full max-w-[900px] h-auto"
              fill="none"
            >
              {/* trunk (공통 세로) */}
              <path
                data-seg="trunk"
                className={animate ? "tb-line tb-v" : "tb-line"}
                d="M450 12 L450 78"
              />

              {/* left branch (가로) : junction -> left */}
              <path
                data-seg="left-h"
                className={animate ? "tb-line tb-hl" : "tb-line"}
                d="M450 78 L210 78"
              />

              {/* right branch (가로) : junction -> right */}
              <path
                data-seg="right-h"
                className={animate ? "tb-line tb-hr" : "tb-line"}
                d="M450 78 L690 78"
              />

              {/* down to each dept */}
              <path
                data-seg="dev-v"
                className={animate ? "tb-line tb-d1" : "tb-line"}
                d="M210 78 L210 138"
              />
              <path
                data-seg="sales-v"
                className={animate ? "tb-line tb-d2" : "tb-line"}
                d="M450 78 L450 138"
              />
              <path
                data-seg="real-v"
                className={animate ? "tb-line tb-d3" : "tb-line"}
                d="M690 78 L690 138"
              />
            </svg>
          </div>

          {/* Departments */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <DeptBox
              myKey="dev"
              title="개발사업부"
              items={["기획팀", "R&D 개발팀", "디자인팀"]}
              delay={220}
              playKey={`dev-${playId}`}
              hoverKey={hoverKey}
              setHoverKey={setHoverKey}
            />
            <DeptBox
              myKey="sales"
              title="영업사업부"
              items={["물류팀", "마케팅팀", "교육 및 관리팀"]}
              delay={320}
              playKey={`sales-${playId}`}
              hoverKey={hoverKey}
              setHoverKey={setHoverKey}
            />
            <DeptBox
              myKey="real"
              title="부동산사업부"
              items={["상권개발팀", "인테리어팀"]}
              delay={420}
              playKey={`real-${playId}`}
              hoverKey={hoverKey}
              setHoverKey={setHoverKey}
            />
          </div>

          <div className="mt-10 text-zinc-600 font-semibold text-sm md:text-base">
            * 실제 운영 상황에 따라 세부 조직은 달라질 수 있습니다.
          </div>
        </PaperCard>
      </div>

      <style>{`
        /* ===== 기본 선 스타일 ===== */
        .tb-line {
          stroke: rgba(9, 9, 11, 0.50);
          stroke-width: 3;
          stroke-linecap: round;

          stroke-dasharray: 520;
          stroke-dashoffset: 0; /* 기본은 보이게 */
          transition: stroke 220ms ease, stroke-width 220ms ease, opacity 220ms ease, filter 220ms ease;
        }

        /* ===== draw 애니메이션 (재마운트 시만) ===== */
        .tb-v  { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 80ms; }
        .tb-hl { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 420ms; }
        .tb-hr { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 420ms; }
        .tb-d1 { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 680ms; }
        .tb-d2 { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 760ms; }
        .tb-d3 { stroke-dashoffset: 520; animation: tbDraw 520ms ease forwards; animation-delay: 840ms; }

        @keyframes tbDraw { to { stroke-dashoffset: 0; } }

        /* ===== 박스 등장 ===== */
        .tb-dept {
          opacity: 0;
          transform: translateY(10px) scale(.99);
          animation: tbBoxIn 520ms cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: var(--tb-delay);
          will-change: transform, opacity;
        }
        @keyframes tbBoxIn { to { opacity: 1; transform: none; } }

        /* ===== Hover 연결감 (핵심) ===== */
        /* hover 시 전체를 살짝 죽이고 */
        .tb-hover-dev .tb-line,
        .tb-hover-sales .tb-line,
        .tb-hover-real .tb-line {
          opacity: .18;
          stroke: rgba(9,9,11,0.28);
          stroke-width: 3;
          filter: none;
        }

        /* 공통 trunk는 항상 강조(뿌리 느낌) */
        .tb-hover-dev .tb-line[data-seg="trunk"],
        .tb-hover-sales .tb-line[data-seg="trunk"],
        .tb-hover-real .tb-line[data-seg="trunk"]{
          opacity: .95;
          stroke: rgba(16,185,129,0.55);
          stroke-width: 4;
          filter: drop-shadow(0 0 6px rgba(16,185,129,0.16));
        }

        /* 개발사업부: left-h + dev-v 강조 */
        .tb-hover-dev .tb-line[data-seg="left-h"],
        .tb-hover-dev .tb-line[data-seg="dev-v"] {
          opacity: 1;
          stroke: rgba(16,185,129,0.88);
          stroke-width: 4;
          filter: drop-shadow(0 0 7px rgba(16,185,129,0.22));
        }

        /* 영업사업부: sales-v만 강조(가로 없음) */
        .tb-hover-sales .tb-line[data-seg="sales-v"] {
          opacity: 1;
          stroke: rgba(16,185,129,0.88);
          stroke-width: 4;
          filter: drop-shadow(0 0 7px rgba(16,185,129,0.22));
        }

        /* 부동산사업부: right-h + real-v 강조 */
        .tb-hover-real .tb-line[data-seg="right-h"],
        .tb-hover-real .tb-line[data-seg="real-v"] {
          opacity: 1;
          stroke: rgba(16,185,129,0.88);
          stroke-width: 4;
          filter: drop-shadow(0 0 7px rgba(16,185,129,0.22));
        }

        @media (prefers-reduced-motion: reduce) {
          .tb-v, .tb-hl, .tb-hr, .tb-d1, .tb-d2, .tb-d3, .tb-dept {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
