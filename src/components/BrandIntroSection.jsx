import React from "react";
// ✅ 너가 올린 이미지 파일을 src/assets/ 안에 넣고 경로만 맞춰줘
import greetingBg from "../assets/background.png";

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-900/40 bg-emerald-950/30 backdrop-blur">
      <span className="w-2 h-2 rounded-full bg-emerald-400" />
      <span className="text-emerald-100 font-semibold tracking-widest text-sm">
        BRAND INTRO
      </span>
    </div>
  );
}

export default function BrandIntroSection() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 bg-black overflow-hidden"
    >
      {/* background subtle */}
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* floating dots */}
      <div className="tb-dots pointer-events-none absolute inset-0 opacity-[0.35]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12 md:mb-16 js-reveal">
          <Badge />

          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white">
            브랜드 소개
          </h2>
          <p className="mt-4 text-lg md:text-xl text-zinc-300">
            태백생연탄구이가 지켜온 기준과 마음가짐을 전합니다.
          </p>
        </div>

        {/* big paper card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: paper greeting */}
          <div className="lg:col-span-8 js-reveal">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              {/* image background */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${greetingBg})` }}
              />
              {/* readability overlay */}
              <div className="absolute inset-0 bg-white/78 mix-blend-normal" />
              {/* vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/75" />

              <div className="relative p-10 md:p-14">
                <div className="text-zinc-900">
                  <div className="flex items-end justify-between gap-6">
                    <div className="text-2xl md:text-3xl font-black tracking-tight">
                      인사말
                    </div>
                  </div>

                  <div className="mt-8 space-y-6 text-lg md:text-xl leading-relaxed font-semibold">
                    <p>
                      강력한 연탄 불로 첫 점부터 마지막까지
                      <br />
                      남녀노소, 연령층을 불문하고 모두에게 만족을 더하며
                      <br />
                      고물가 시대에도 맛과 가성비까지 모두 잡은
                      <br />
                      대한민국 대표 원조 생고기전문점,{" "}
                      <span className="font-black text-fire">
                        태백생연탄구이
                      </span>{" "}
                      입니다.
                    </p>

                    <p>
                      앞으로도 지속적인 연구개발과
                      <br />
                      프랜차이즈로서 끊임없는 성장을 통해
                      <br />
                      선택에 대한 확신을 약속드리겠습니다.
                    </p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-zinc-900/10 flex items-center justify-end">
                    <div className="text-right">
                      <div className="text-zinc-700 font-bold">
                        (주)한양그린푸드
                      </div>
                      <div className="text-zinc-900 font-black text-xl">
                        대표이사 최승현
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: key points */}
          <div className="lg:col-span-4 js-reveal">
            <div className="sticky top-28 space-y-6">
              {/* Card 1: 연탄 × 분위기 */}
              <div className="relative rounded-3xl p-7 md:p-8 border border-emerald-500/20 bg-zinc-950/70 backdrop-blur shadow-xl shadow-emerald-900/20 overflow-hidden tb-card">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-emerald-500/10" />
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="text-white font-black text-xl mb-3">
                    연탄이 만드는 분위기
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-base md:text-[15px]">
                    타오르는 연탄 불빛과 은은한 열기,
                    <br />
                    노포 감성의 중심에
                    <span className="text-white font-bold"> 연탄</span>이
                    있습니다.
                    <br />
                    <br />
                    불 앞에 둘러앉아 고기를 굽는 순간,
                    <br />
                    자연스럽게 완성되는
                    <span className="text-white font-bold">
                      {" "}
                      편안하고 정겨운 분위기
                    </span>
                    를 경험하게 됩니다.
                  </p>
                </div>
              </div>

              {/* Card 2: 100g */}
              <div className="relative rounded-3xl p-7 md:p-8 border border-emerald-500/20 bg-zinc-950/70 backdrop-blur shadow-xl shadow-emerald-900/20 overflow-hidden tb-card">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-emerald-500/10" />
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="text-white font-black text-xl mb-3">
                    100g 단위로 다양하게
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-base md:text-[15px]">
                    다양한 부위를
                    <span className="text-white font-bold"> 100g 단위</span>로
                    제공해
                    <br />
                    선택의 부담은 줄이고,
                    <br />
                    <span className="text-white font-bold">
                      매일 방문해도 질리지 않는
                    </span>
                    구성을 만듭니다.
                  </p>
                </div>
              </div>

              {/* Card 3: 사이드 메뉴 */}
              <div className="relative rounded-3xl p-7 md:p-8 border border-emerald-500/20 bg-zinc-950/70 backdrop-blur shadow-xl shadow-emerald-900/20 overflow-hidden tb-card">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-emerald-500/10" />
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="text-white font-black text-xl mb-3">
                    사이드로 완성되는 한 상
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-base md:text-[15px]">
                    트렌드를 반영한 사이드 메뉴로
                    <br />
                    고기 한 점, 술 한 잔까지
                    <br />
                    <span className="text-white font-bold">
                      테이블 경험의 완성도
                    </span>
                    를 높입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component-scoped CSS (연출/애니메이션) */}
      <style>{`
        /* 카드 등장 + 살짝 떠있는 느낌 */
        .tb-card {
          transform: translateY(10px);
          opacity: 0;
          animation: tbPop 700ms cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: var(--tb-delay, 0ms);
          will-change: transform, opacity;
        }
        @keyframes tbPop {
          to { transform: translateY(0); opacity: 1; }
        }

        /* hover 연출 */
        .tb-card:hover {
          transform: translateY(-4px);
          transition: transform 250ms ease;
        }

        /* 배경 점(미세한 인포그래픽 감) */
        .tb-dots {
          background-image:
            radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: radial-gradient(circle at 30% 20%, rgba(0,0,0,.9), transparent 60%);
        }

        /* 모션 최소화 */
        @media (prefers-reduced-motion: reduce) {
          .tb-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
