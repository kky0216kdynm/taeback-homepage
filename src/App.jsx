import HeroCanvas from "./components/HeroCanvas.jsx";
import MenuMarquee from "./components/MenuMarquee.jsx";
import useGsapReveals from "./components/useGsapReveals.js";

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
                <a href="#about" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">
                  브랜드 소개
                </a>
                <a href="#menu" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">
                  메뉴 안내
                </a>
                <a href="#business" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">
                  창업 안내
                </a>
                <a href="#locations" className="hover:text-fire transition duration-300 px-3 py-2 rounded-md font-medium">
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
        <img src="/logo.png" width="600" height="400" alt="태백생연탄구이 로고" />
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

      {/* ABOUT */}
      <section id="about" className="py-32 bg-zinc-900/80 relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/korean-pattern.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 js-reveal">
            <span className="text-bio font-bold tracking-widest title-font block mb-2">SINCE 1990</span>
            <h2 className="text-5xl md:text-6xl text-white mb-6">고집스러운 원칙</h2>
            <div className="w-24 h-1 bg-fire mx-auto mb-8" />
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
            <span className="text-fire font-bold tracking-[0.3em] uppercase title-font">Signature Menu</span>
            <h2 className="text-5xl md:text-6xl text-white mt-3 mb-6">대표 차림상</h2>
            <p className="text-xl text-gray-300 font-medium">태백의 자부심을 담아 정갈하게 차려냅니다.</p>
          </div>

          <div className="mt-16 js-reveal">
            <MenuMarquee />
          </div>
        </div>
      </section>

      <section id="info">
          <div className="container">
            <h2 className="sectionTitle">안내</h2>
            <p className="sectionSub">운영 시간/위치/주차 안내 등 필요한 정보를 여기에 채워 넣을 수 있어요.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14 }}>
              {[
                { t: '연탄 불향', d: '세팅부터 굽기까지 가장 맛있는 타이밍을 맞춥니다.' },
                { t: '단체 가능', d: '모임/회식도 편하게. 좌석 구성은 매장 상황에 맞춰드립니다.' },
                { t: '식사 메뉴', d: '냉면/찌개/볶음밥까지 한 자리에서.' },
              ].map((c) => (
                <div key={c.t} className="panel" style={{ padding: 16 }}>
                  <div style={{ fontWeight: 900, marginBottom: 6 }}>{c.t}</div>
                  <div style={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: 14 }}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2 className="sectionTitle">문의</h2>
            <p className="sectionSub">전화번호/카카오/네이버 지도 링크 등을 여기에 연결하면 완성입니다.</p>

            <div className="panel" style={{ padding: 18 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btn primary" href="#" onClick={(e) => e.preventDefault()}>
                  전화 걸기
                </a>
                <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                  지도 보기
                </a>
                <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                  예약하기
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} 태백 생연탄구이</div>
        </footer>
    </div>
  );
}
