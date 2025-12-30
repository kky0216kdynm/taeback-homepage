import HeroCanvas from "./components/HeroCanvas.jsx";
import MenuMarquee from "./components/MenuMarquee.jsx";
import useGsapReveals from "./components/useGsapReveals.js";

export default function App() {
  useGsapReveals();

  return (
    <>
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 js-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0 flex items-center justify-start">
              <a href="#" className="block">
                <img
                  src="src/assets/logo.png"
                  alt="태백생연탄구이"
                  style={{ width: 200, height: "auto", objectFit: "contain" }}
                />
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">브랜드 소개</a>
                <a href="#menu" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">메뉴 안내</a>
                <a href="#business" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">창업 안내</a>
                <a href="#locations" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">매장 찾기</a>
              </div>
            </div>

            <div>
              <a
                href="#inquiry"
                className="bg-bio hover:bg-green-800 text-white font-bold py-3 px-8 rounded-sm transition duration-300 shadow-lg shadow-green-900/30 title-font bg-[url('src/assets/logo.png')]"
              >
                가맹 문의하기
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO (Three.js canvas + UI overlay) */}
      <div className="relative">
      <HeroCanvas>
  <img src="src/assets/logo.png" width="600" height="400" alt="태백생연탄구이 로고" />
  <p className="text-gray-200 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
    추억의 연탄불 위에서 피어나는 육즙의 향연.<br />
    <span className="font-bold text-white">태백생연탄구이</span>와 함께 성공의 역사를 쓰세요.
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

        
      </div>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-zinc-900/80 relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/korean-pattern.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 js-reveal">
            <span className="text-bio font-bold tracking-widest title-font block mb-2">SINCE 1990</span>
            <h2 className="text-5xl md:text-6xl text-white mb-6">고집스러운 원칙</h2>
            <div className="w-24 h-1 bg-fire mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              화려함보다는 기본에 충실합니다. 타협하지 않는 식재료와 정성으로 연탄구이의 참맛을 지켜갑니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-black/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-fire transition duration-500 text-center group backdrop-blur-sm">
              <div className="mb-8">
                <span className="text-5xl text-fire group-hover:scale-110 transition duration-300 inline-block">🔥</span>
              </div>
              <h3 className="text-3xl text-white mb-6">연탄 불맛의 정수</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                특허받은 청정 연탄 화로를 사용하여 유해 가스는 잡고, 은은하고 깊은 불향만을 고기에 입힙니다.
              </p>
            </div>

            <div className="bg-black/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-bio transition duration-500 text-center group backdrop-blur-sm">
              <div className="mb-8">
                <span className="text-5xl text-bio group-hover:scale-110 transition duration-300 inline-block">🥩</span>
              </div>
              <h3 className="text-3xl text-white mb-6">최상급 한돈 선별</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                엄격한 기준으로 선별된 1+ 등급 이상의 국내산 암퇘지만을 사용하여 최상의 육질을 보장합니다.
              </p>
            </div>

            <div className="bg-black/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-fire transition duration-500 text-center group backdrop-blur-sm">
              <div className="mb-8">
                <span className="text-5xl text-fire group-hover:scale-110 transition duration-300 inline-block">🧂</span>
              </div>
              <h3 className="text-3xl text-white mb-6">비법 숙성과 찬</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                저온 숙성으로 풍미를 높이고, 매장에서 직접 담근 정갈한 반찬으로 고기 맛을 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU (UI 동일 + 레일만 무한 마퀴로 교체) */}
      <section id="menu" className="py-32 bg-black relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('menu/menu-10.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 js-reveal">
            <span className="text-fire font-bold tracking-[0.3em] uppercase title-font">Signature Menu</span>
            <h2 className="text-5xl md:text-6xl text-white mt-3 mb-6">대표 차림상</h2>
            <p className="text-xl text-gray-300 font-medium">태백의 자부심을 담아 정갈하게 차려냅니다.</p>
          </div>

          <div className="mt-16 js-reveal">
            {/* direction: left/right 가능, hover pause 없음 */}
            <MenuMarquee speed={70} direction="left" />
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="py-32 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-sm shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 border-4 border-fire/20 z-10 group-hover:border-fire/50 transition duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
                  alt="매장 인테리어"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <span className="text-bio font-bold text-xl mb-4 block title-font tracking-widest">성공 창업의 열쇠</span>
              <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">왜 태백생연탄구이인가?</h2>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-fire/20 flex items-center justify-center mt-1 group-hover:bg-fire transition duration-300">
                    <span className="text-fire text-2xl group-hover:text-white transition duration-300">💰</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-2xl font-bold text-white mb-2 title-font">[검증된 수익성]</h4>
                    <p className="text-gray-400 text-lg">[높은 테이블 단가와 회전율로 검증된 안정적인 수익 모델을 제시합니다.]</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-bio/20 flex items-center justify-center mt-1 group-hover:bg-bio transition duration-300">
                    <span className="text-bio text-2xl group-hover:text-white transition duration-300">👨‍🍳</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-2xl font-bold text-white mb-2 title-font">[손쉬운 운영 시스템]</h4>
                    <p className="text-gray-400 text-lg">[전문 주방장 없이도 운영 가능한 표준화된 레시피와 교육을 제공합니다.]</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-fire/20 flex items-center justify-center mt-1 group-hover:bg-fire transition duration-300">
                    <span className="text-fire text-2xl group-hover:text-white transition duration-300">📈</span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-2xl font-bold text-white mb-2 title-font">[지속적인 마케팅 지원]</h4>
                    <p className="text-gray-400 text-lg">[브랜드 인지도 향상과 가맹점 매출 증대를 위한 온/오프라인 마케팅을 지원합니다.]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 js-reveal">
            <span className="text-bio font-bold tracking-[0.3em] uppercase title-font">Our Locations</span>
            <h2 className="text-5xl md:text-6xl text-white mt-3 mb-6">매장 안내</h2>
            <p className="text-xl text-gray-400 font-medium">전국 어디서나 태백의 맛을 만나보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-900/50 p-10 rounded-sm js-reveal border-2 border-zinc-800 hover:border-fire transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">본점 (수원 권선)</h3>
                <span className="bg-fire text-white text-sm font-bold px-3 py-1 rounded-sm title-font">MAIN</span>
              </div>
              <p className="text-gray-300 text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">📍</span> 경기 수원시 권선구 세권로 304번길 30-2
              </p>
              <p className="text-gray-500 text-lg mb-10 ml-8">(지번: 권선동 1259-2)</p>
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
                <h3 className="text-3xl font-bold text-white">2호점 (수원 인계)</h3>
                <span className="bg-bio text-white text-sm font-bold px-3 py-1 rounded-sm title-font">BRANCH</span>
              </div>
              <p className="text-gray-300 text-xl mb-3 flex items-center">
                <span className="text-2xl mr-2">📍</span> 경기 수원시 팔달구 장다리로 266
              </p>
              <p className="text-gray-500 text-lg mb-10 ml-8">(지번: 인계동 965-1)</p>
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
          <h2 className="text-5xl md:text-6xl text-white font-black mb-8">가맹 개설 문의</h2>
          <p className="text-white/90 text-2xl mb-16 font-medium">
            성공 창업의 파트너가 되어드리겠습니다.<br />
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
                <label className="block text-gray-800 font-bold mb-3 text-lg title-font">창업 희망 지역</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                  placeholder="예: 서울 강남구, 수원 영통구"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-3 text-lg title-font">문의 내용</label>
                <textarea
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg h-40 resize-none"
                  placeholder="궁금하신 점을 자유롭게 적어주세요."
                />
              </div>

              <button
                type="button"
                className="w-full bg-fire hover:bg-orange-700 text-white font-bold py-5 rounded-sm transition duration-300 text-2xl title-font shadow-lg mt-4"
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
                대표: 홍길동 | 사업자등록번호: 000-00-00000<br />
                주소: 경기도 수원시 권선구 세권로 304번길 30-2 (본점)<br />
                가맹문의: 02-1234-5678 | 이메일: contact@taebaek.com<br />
                <span className="mt-2 block">
                  Copyright © 2024 Taebaek Saeng Yeontan-gui. All rights reserved.
                </span>
              </p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-fire transition text-lg">인스타그램</a>
              <a href="#" className="text-gray-400 hover:text-bio transition text-lg">블로그</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
