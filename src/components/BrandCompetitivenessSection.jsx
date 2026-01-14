import React from "react";
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

function PaperCard({ children, className = "" }) {
  return (
    <div
      className={[
        "relative rounded-3xl overflow-hidden border border-black/10 shadow-2xl shadow-black/15",
        className,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${paperBg})` }}
      />
      <div className="absolute inset-0 bg-white/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/75" />
      <div className="relative">{children}</div>
    </div>
  );
}

function NumberPoint({ n, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-950 text-emerald-50 grid place-items-center font-black">
        {n}
      </div>
      <div className="min-w-0">
        <div className="text-zinc-900 font-black text-base md:text-lg leading-snug">
          {title}
        </div>
        <p className="mt-2 text-zinc-700 font-semibold leading-relaxed text-sm md:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function BrandCompetitivenessSection() {
  return (
    <section
      id="competitiveness"
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* subtle bg */}
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12 md:mb-16">
          <SectionBadge>BRAND POWER</SectionBadge>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white">
            브랜드 경쟁력
          </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-300">
            ‘맛’과 ‘효율’을 동시에 잡는 구조를 만듭니다.
          </p>
        </div>

        <PaperCard className="p-10 md:p-12">
          <div className="text-zinc-900">
            <div className="text-3xl md:text-4xl font-black tracking-tight">
              브랜드 경쟁력
            </div>

            <p className="mt-6 text-zinc-800 font-semibold leading-relaxed text-base md:text-lg">
              맛과 효율성 모두 잡는 태백생연탄구이
              <br />
              본사에서 연탄 불에 가장 맛있는 원육을 직접 선별하여 도매하고 공급하고 있습니다.
              <br />
              또한 전문 개발 부서에서 직접 개발한 파우더 및 레시피로 누구나 쉽게 동일한 맛을 낼 수 있습니다.
            </p>

            <div className="mt-10 space-y-8">
              <NumberPoint
                n="1"
                title="맛과 효율성 모두 잡는 태백생연탄구이"
                desc="본사에서 연탄 불에 가장 맛있는 원육을 직접 선별·도매·공급합니다. 전문 개발 부서에서 직접 개발한 파우더 및 레시피로 누구나 쉽게 동일한 맛을 낼 수 있습니다."
              />
              <NumberPoint
                n="2"
                title="마진 구조 개선을 최우선하는 운영 철학"
                desc="점주가 살아남아야 본사가 살아남는다는 이념으로, 무분별한 확장이 아닌 지역별 상권에 맞는 입점을 제시합니다. 또한 불필요한 이익 수취를 지양합니다."
              />
              <NumberPoint
                n="3"
                title="매일 와도 질리지 않는 태백생연탄구이"
                desc="대표가 직접 현장 노하우를 살려 도면 등을 제작하고, 노포 감성을 자극하면서도 깔끔한 내부 인테리어를 합리적인 비용으로 제시해 상생 구조를 만들고자 합니다."
              />
            </div>
          </div>
        </PaperCard>
      </div>
    </section>
  );
}
