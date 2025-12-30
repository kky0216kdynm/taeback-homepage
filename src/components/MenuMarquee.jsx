import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const MENUS = [
  { src: "src/assets/menu/1.jpg", title: "갈매기살" },
  { src: "src/assets/menu/11.jpg", title: "삼겹살" },
  { src: "src/assets/menu/3.jpg", title: "돼지갈비" },
  { src: "src/assets/menu/5.jpg", title: "뒷고기" },
  { src: "src/assets/menu/7.jpg", title: "목살" },
  { src: "src/assets/menu/6.jpg", title: "막창" },
  { src: "src/assets/menu/12.jpg", title: "마늘고추장육회" },
  { src: "src/assets/menu/13.jpg", title: "재래식 돼지모둠" },
  { src: "src/assets/menu/9.jpg", title: "물냉면" },
  { src: "src/assets/menu/10.jpg", title: "비빔냉면" },
  { src: "src/assets/menu/2.jpg", title: "계란찜" },
  { src: "src/assets/menu/4.jpg", title: "된장찌개" },
  { src: "src/assets/menu/14.jpg", title: "된장술밥" },
  { src: "src/assets/menu/15.jpg", title: "오돌뼈볶음밥" },
];

export default function MenuMarquee({ speed = 70, direction = "left" }) {
  const trackRef = useRef(null);

  const reduceMotion = useMemo(() => {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  // 2번 반복 렌더링해서 끊김 없이 loop
  const items = useMemo(() => [...MENUS, ...MENUS], []);

  useEffect(() => {
    if (reduceMotion) return;

    const track = trackRef.current;
    if (!track) return;

    let tween = null;

    const build = () => {
      if (!track) return;

      // 이미지 로딩 전/후 폭 차이를 고려해서 일단 reset
      gsap.set(track, { x: 0 });

      const half = track.scrollWidth / 2;
      if (!half || !Number.isFinite(half)) return;

      const dist = direction === "left" ? -half : half;

      tween?.kill();
      tween = gsap.to(track, {
        x: dist,
        duration: half / speed,
        ease: "none",
        repeat: -1,
      });
    };

    // ResizeObserver로 폭 변하면 재빌드(이미지 로딩/반응형 대응)
    const ro = new ResizeObserver(() => build());
    ro.observe(track);

    // window resize도 커버
    window.addEventListener("resize", build);

    // 최초 1회 + 이미지 로딩 후 1회 더
    build();
    const imgs = Array.from(track.querySelectorAll("img"));
    let loadedCount = 0;
    const onImgLoad = () => {
      loadedCount += 1;
      if (loadedCount >= Math.min(imgs.length, 6)) build(); // 어느정도 로딩되면 재빌드
    };
    imgs.forEach((img) => img.addEventListener("load", onImgLoad, { once: true }));

    return () => {
      window.removeEventListener("resize", build);
      ro.disconnect();
      tween?.kill();
    };
  }, [reduceMotion, speed, direction]);

  useEffect(() => {
    if (reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll(".menu-card"));

    // float
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -6 : -10,
        duration: 2.4 + (i % 6) * 0.22,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // tilt (마퀴는 계속 진행 / hover pause 없음)
    const MAX = 10;
    const onMove = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -MAX;
      const ry = (px - 0.5) * MAX;
      gsap.to(card, { rotateY: ry, rotateX: rx, duration: 0.2, ease: "power2.out" });
    };
    const onLeave = (e) => {
      const card = e.currentTarget;
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.35, ease: "power2.out" });
    };

    cards.forEach((c) => {
      c.addEventListener("mousemove", onMove);
      c.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mousemove", onMove);
        c.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [reduceMotion]);

  return (
    <div className="menu-showcase rounded-sm border border-zinc-800 bg-black/35 backdrop-blur-sm">
      <div className="menu-fade menu-fade-left"></div>
      <div className="menu-fade menu-fade-right"></div>

      <div className="menu-viewport" aria-label="메뉴 이미지 무한 슬라이더">
        <div className="menu-track" ref={trackRef}>
          {items.map((m, idx) => (
            <div className="menu-card group relative" key={`${m.src}-${idx}`} data-title={m.title}>
              <img src={m.src} alt={m.title} loading="lazy" />
              <div className="menu-label">{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
