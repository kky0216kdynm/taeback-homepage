import HeroCanvas from "./components/HeroCanvas.jsx";
import MenuMarquee from "./components/MenuMarquee.jsx";
import useGsapReveals from "./components/useGsapReveals.js";
import ProfitabilityShowcase from "./components/ProfitabilityShowcase.jsx";
import BrandIntroSection from "./components/BrandIntroSection.jsx";
import OrgChartSplitSection from "./components/OrgChartSplitSection.jsx";
import BrandCompetitivenessSection from "./components/BrandCompetitivenessSection.jsx";





export default function App() {
  useGsapReveals();

  return (
    <div className="bg-coal text-gray-100 overflow-x-hidden leading-relaxed">
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 js-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 flex items-center justify-start">
              <a href="#" className="block">
                <img
                  src="/logo.png"
                  alt="태백생연탄구이"
                  style={{ width: 200, height: "auto", objectFit: "contain" }}
                />
              </a>
            </div>

            
              <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  브랜드 소개
                </a>

                <a
                  href="#org"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  조직현황
                </a>

                <a
                  href="#menu"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  메뉴 안내
                </a>

                <a
                  href="#business"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  창업 안내
                </a>

                <a
                  href="#profitability"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  수익성
                </a>

                <a
                  href="#locations"
                  className="hover:text-[#006400] transition duration-300 px-3 py-2 rounded-md font-medium"
                >
                  매장 찾기
                </a>
              </div>
            </div>


            <div>
              <a
                href="#inquiry"
                className="bg-bio hover:bg-green-800 text-white font-bold py-3 px-8 rounded-sm transition duration-300 shadow-lg shadow-green-900/30 title-font"
              >
                가맹 문의하기
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <HeroCanvas>
        <img
          src="/logo.png"
          width="600"
          height="400"
          alt="태백생연탄구이 로고"
        />
        <p className="text-gray-200 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
          추억의 연탄불 위에서 피어나는 육즙의 향연.
          <br />
          <span className="font-bold text-white">태백생연탄구이</span>와 함께
          성공의 역사를 쓰세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#inquiry"
            className="bg-white text-black title-font font-bold py-4 px-12 rounded-sm text-xl hover:bg-gray-200 transition duration-300"
          >
            가맹 상담 신청
          </a>
          <a
            href="#menu"
            className="border-2 border-white text-white title-font font-bold py-4 px-12 rounded-sm text-xl hover:bg-white hover:text-black transition duration-300"
          >
            메뉴 둘러보기
          </a>
        </div>
        
      </HeroCanvas>

      {/* ABOUT */}
      <BrandIntroSection />


      {/* MENU */}
      <section id="menu" className="py-32 bg-black relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/menu/menu-10.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 js-reveal">
            <span className="text-fire font-bold tracking-[0.3em] uppercase title-font">
              Signature Menu
            </span>
            <h2 className="text-5xl md:text-6xl text-white mt-3 mb-6">
              대표 차림상
            </h2>
            <p className="text-xl text-gray-300 font-medium">
              태백의 자부심을 담아 정갈하게 차려냅니다.
            </p>
          </div>

          <div className="mt-16 js-reveal">
            <MenuMarquee />
          </div>
        </div>
      </section>
      <OrgChartSplitSection />
      <BrandCompetitivenessSection />
      <ProfitabilityShowcase/>

      {/* LOCATIONS */}
      <section id="locations" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 js-reveal">
            <span className="text-bio font-bold tracking-[0.3em] uppercase title-font">
              Our Locations
            </span>
            <h2 className="text-5xl md:text-6xl text-white mt-3 mb-6">
              매장 안내
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              전국 어디서나 태백의 맛을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-900/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-fire transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">
                  본점 (용인역북점)
                </h3>
                <span className="bg-fire text-white text-sm font-bold px-3 py-1 rounded-sm title-font">
                  MAIN
                </span>
              </div>
              <p className="text-gray-300 text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">📍</span> 경기 용인시 처인구 명지로60번길 8-3 j1 주차타워 203호 태백생연탄구이 용인역북점
              </p>
              <p className="text-gray-500 text-lg mb-10 ml-8">
                (지번: 경기 용인시 처인구 역북동 757)
              </p>
              <a
                href="https://map.naver.com/p/entry/place/1626802639"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full border-2 border-zinc-600 text-gray-300 title-font font-bold px-6 py-4 rounded-sm hover:bg-white hover:text-black hover:border-white transition duration-300 text-lg"
              >
                네이버 지도 보기 <span className="ml-2 text-xl">→</span>
              </a>
            </div>

            <div className="bg-zinc-900/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-bio transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">
                  2호점 (수원아주대점)
                </h3>
                <span className="bg-bio text-white text-sm font-bold px-3 py-1 rounded-sm title-font">
                  BRANCH
                </span>
              </div>
              <p className="text-gray-300 text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">📍</span> 경기 수원시 영통구 월드컵로179번길 14-12 1층
              </p>
              <p className="text-gray-500 text-lg mb-10 ml-8">
                (지번: 경기 수원시 영통구 원천동 29-35)
              </p>
              <a
                href="https://map.naver.com/p/entry/place/2065542755"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full border-2 border-zinc-600 text-gray-300 title-font font-bold px-6 py-4 rounded-sm hover:bg-white hover:text-black hover:border-white transition duration-300 text-lg"
              >
                네이버 지도 보기 <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section
        id="inquiry"
        className="py-32 relative"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1466208722951-c6f69b48f471?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl text-white font-black mb-8">
            가맹 개설 문의
          </h2>
          <p className="text-white/90 text-2xl mb-16 font-medium">
            성공 창업의 파트너가 되어드리겠습니다.
            <br />
            아래 양식을 남겨주시면 신속히 안내해 드립니다.
          </p>

          <form className="bg-white/95 p-10 md:p-14 rounded-sm shadow-2xl max-w-3xl mx-auto backdrop-blur-md text-left js-reveal">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg title-font">
                    성함 <span className="text-fire">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                    placeholder="예: 홍길동"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg title-font">
                    연락처 <span className="text-fire">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                    placeholder="예: 010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-3 text-lg title-font">
                  창업 희망 지역
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                  placeholder="예: 서울 강남구, 수원 영통구"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-3 text-lg title-font">
                  문의 내용
                </label>
                <textarea
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg h-40 resize-none"
                  placeholder="궁금하신 점을 자유롭게 적어주세요."
                />
              </div>

              <button
                type="button"
                className="w-full bg-fire hover:bg-gray-500 text-white font-bold py-5 rounded-sm transition duration-300 text-2xl title-font shadow-lg mt-4"
              >
                상담 신청하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="brand-font text-3xl text-white tracking-widest">
                태백<span className="text-bio">生</span>연탄구이
              </span>
              <p className="text-gray-500 mt-4 text-base leading-relaxed">
                대표: 최승현 | 사업자등록번호: 000-00-00000
                <br />
                주소: 경기도 안산시 상록구 한양대학로 55, 창업보육센터 55호
                <br />
                가맹문의: 010-9540-5257 | 이메일: 1010jeus@naver.com
                <br />
                <span className="mt-2 block">
                  Copyright © 2026. 한양그린푸드. All rights
                  reserved.
                </span>
              </p>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-[#006400] hover:text-fire transition text-lg">
                인스타그램
              </a>
              <a href="#" className="text-[#006400] hover:text-bio transition text-lg">
                블로그
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
