import HeroCanvas from "./components/HeroCanvas.jsx";
import MenuMarquee from "./components/MenuMarquee.jsx";
import useGsapReveals from "./components/useGsapReveals.js";

export default function App() {
  useGsapReveals();

  return (
    <>
      {/* NAV */}
      <nav className=+c+>
        <div className=+c+>
          <div className=+c+>
            <div className=+c+>
              <a href="#" className=+c+>
                <img
                  src="/logo.png"
                  alt="태백생연탄구이"
                  style={{ width: 200, height: "auto", objectFit: "contain" }}
                />
              </a>
            </div>

            <div className=+c+>
              <div className=+c+>
                <a href="#about" className=+c+>브랜드 소개</a>
                <a href="#menu" className=+c+>메뉴 안내</a>
                <a href="#business" className=+c+>창업 안내</a>
                <a href="#locations" className=+c+>매장 찾기</a>
              </div>
            </div>

            <div>
              <a
                href="#inquiry" className=+c+>
                가맹 문의하기
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO (Three.js canvas + UI overlay) */}
      <div className=+c+>
      <HeroCanvas>
  <img src="/logo.png" width="600" height="400" alt="태백생연탄구이 로고" />
  <p className=+c+>
    추억의 연탄불 위에서 피어나는 육즙의 향연.<br />
    <span className=+c+>태백생연탄구이</span>와 함께 성공의 역사를 쓰세요.
  </p>
  <div className=+c+>
    <a
      href="#inquiry" className=+c+>
      가맹 상담 신청
    </a>
    <a
      href="#menu" className=+c+>
      메뉴 둘러보기
    </a>
  </div>
</HeroCanvas>

        
      </div>

      {/* ABOUT */}
      <section id="about" className=+c+>
        <div className=+c+></div>

        <div className=+c+>
          <div className=+c+>
            <span className=+c+>SINCE 1990</span>
            <h2 className=+c+>고집스러운 원칙</h2>
            <div className=+c+></div>
            <p className=+c+>
              화려함보다는 기본에 충실합니다. 타협하지 않는 식재료와 정성으로 연탄구이의 참맛을 지켜갑니다.
            </p>
          </div>

          <div className=+c+>
            <div className=+c+>
              <div className=+c+>
                <span className=+c+>🔥</span>
              </div>
              <h3 className=+c+>연탄 불맛의 정수</h3>
              <p className=+c+>
                특허받은 청정 연탄 화로를 사용하여 유해 가스는 잡고, 은은하고 깊은 불향만을 고기에 입힙니다.
              </p>
            </div>

            <div className=+c+>
              <div className=+c+>
                <span className=+c+>🥩</span>
              </div>
              <h3 className=+c+>최상급 한돈 선별</h3>
              <p className=+c+>
                엄격한 기준으로 선별된 1+ 등급 이상의 국내산 암퇘지만을 사용하여 최상의 육질을 보장합니다.
              </p>
            </div>

            <div className=+c+>
              <div className=+c+>
                <span className=+c+>🧂</span>
              </div>
              <h3 className=+c+>비법 숙성과 찬</h3>
              <p className=+c+>
                저온 숙성으로 풍미를 높이고, 매장에서 직접 담근 정갈한 반찬으로 고기 맛을 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU (UI 동일 + 레일만 무한 마퀴로 교체) */}
      <section id="menu" className=+c+>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/menu/10.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className=+c+></div>

        <div className=+c+>
          <div className=+c+>
            <span className=+c+>Signature Menu</span>
            <h2 className=+c+>대표 차림상</h2>
            <p className=+c+>태백의 자부심을 담아 정갈하게 차려냅니다.</p>
          </div>

          <div className=+c+>
            {/* direction: left/right 가능, hover pause 없음 */}
            <MenuMarquee speed={70} direction="left" />
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className=+c+>
        <div className=+c+>
          <div className=+c+>
            <div className=+c+>
              <div className=+c+>
                <div className=+c+></div>
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
                  alt="매장 인테리어"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-105"
                />
              </div>
            </div>

            <div className=+c+>
              <span className=+c+>성공 창업의 열쇠</span>
              <h2 className=+c+>왜 태백생연탄구이인가?</h2>

              <div className=+c+>
                <div className=+c+>
                  <div className=+c+>
                    <span className=+c+>💰</span>
                  </div>
                  <div className=+c+>
                    <h4 className=+c+>[검증된 수익성]</h4>
                    <p className=+c+>[높은 테이블 단가와 회전율로 검증된 안정적인 수익 모델을 제시합니다.]</p>
                  </div>
                </div>

                <div className=+c+>
                  <div className=+c+>
                    <span className=+c+>👨‍🍳</span>
                  </div>
                  <div className=+c+>
                    <h4 className=+c+>[손쉬운 운영 시스템]</h4>
                    <p className=+c+>[전문 주방장 없이도 운영 가능한 표준화된 레시피와 교육을 제공합니다.]</p>
                  </div>
                </div>

                <div className=+c+>
                  <div className=+c+>
                    <span className=+c+>📈</span>
                  </div>
                  <div className=+c+>
                    <h4 className=+c+>[지속적인 마케팅 지원]</h4>
                    <p className=+c+>[브랜드 인지도 향상과 가맹점 매출 증대를 위한 온/오프라인 마케팅을 지원합니다.]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className=+c+>
        <div className=+c+>
          <div className=+c+>
            <span className=+c+>Our Locations</span>
            <h2 className=+c+>매장 안내</h2>
            <p className=+c+>전국 어디서나 태백의 맛을 만나보세요.</p>
          </div>

          <div className=+c+>
            <div className=+c+>
              <div className=+c+>
                <h3 className=+c+>본점 (수원 권선)</h3>
                <span className=+c+>MAIN</span>
              </div>
              <p className=+c+>
                <span className=+c+>📍</span> 경기 수원시 권선구 세권로 304번길 30-2
              </p>
              <p className=+c+>(지번: 권선동 1259-2)</p>
              <a
                href="https://map.naver.com/p/entry/place/1626802639"
                target="_blank"
                rel="noreferrer" className=+c+>
                네이버 지도 보기 <span className=+c+>→</span>
              </a>
            </div>

            <div className=+c+>
              <div className=+c+>
                <h3 className=+c+>2호점 (수원 인계)</h3>
                <span className=+c+>BRANCH</span>
              </div>
              <p className=+c+>
                <span className=+c+>📍</span> 경기 수원시 팔달구 장다리로 266
              </p>
              <p className=+c+>(지번: 인계동 965-1)</p>
              <a
                href="https://map.naver.com/p/entry/place/2065542755"
                target="_blank"
                rel="noreferrer" className=+c+>
                네이버 지도 보기 <span className=+c+>→</span>
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
        <div className=+c+>
          <h2 className=+c+>가맹 개설 문의</h2>
          <p className=+c+>
            성공 창업의 파트너가 되어드리겠습니다.<br />
            아래 양식을 남겨주시면 신속히 안내해 드립니다.
          </p>

          <form className=+c+>
            <div className=+c+>
              <div className=+c+>
                <div>
                  <label className=+c+>
                    성함 <span className=+c+>*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                    placeholder="예: 홍길동"
                  />
                </div>
                <div>
                  <label className=+c+>
                    연락처 <span className=+c+>*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                    placeholder="예: 010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className=+c+>창업 희망 지역</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg"
                  placeholder="예: 서울 강남구, 수원 영통구"
                />
              </div>

              <div>
                <label className=+c+>문의 내용</label>
                <textarea
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-sm px-5 py-4 focus:outline-none focus:border-fire focus:bg-white transition text-lg h-40 resize-none"
                  placeholder="궁금하신 점을 자유롭게 적어주세요."
                />
              </div>

              <button
                type="button" className=+c+>
                상담 신청하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className=+c+>
        <div className=+c+>
          <div className=+c+>
            <div className=+c+>
              <span className=+c+>
                태백<span className=+c+>生</span>연탄구이
              </span>
              <p className=+c+>
                대표: 홍길동 | 사업자등록번호: 000-00-00000<br />
                주소: 경기도 수원시 권선구 세권로 304번길 30-2 (본점)<br />
                가맹문의: 02-1234-5678 | 이메일: contact@taebaek.com<br />
                <span className=+c+>
                  Copyright © 2024 Taebaek Saeng Yeontan-gui. All rights reserved.
                </span>
              </p>
            </div>
            <div className=+c+>
              <a href="#" className=+c+>인스타그램</a>
              <a href="#" className=+c+>블로그</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
