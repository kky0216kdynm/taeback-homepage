import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useGsapReveals() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // ✅ StrictMode 대응: context로 만들고 cleanup은 revert만
    const ctx = gsap.context(() => {
      // 혹시 이전에 opacity 0으로 남아있으면 즉시 정상화
      gsap.set(["#hero-content a", "#hero-content img", "#hero-content p"], {
        opacity: 1,
        clearProps: "transform",
      });

      // Nav + hero entrance
      gsap.fromTo(
        "nav",
        { y: -18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        "#hero-content img",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.1 }
      );

      gsap.fromTo(
        "#hero-content p",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.2 }
      );

      // ✅ a 태그는 fromTo로 확실히 1로 복귀
      gsap.fromTo(
        "#hero-content a",
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.35,
          stagger: 0.12,
          overwrite: "auto",
        }
      );

      // Generic reveal for blocks/cards
      gsap.utils.toArray(".js-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Hover micro-interactions for ".group"
      gsap.utils.toArray(".group").forEach((g) => {
        g.addEventListener("mouseenter", () =>
          gsap.to(g, { y: -6, duration: 0.25, ease: "power2.out" })
        );
        g.addEventListener("mouseleave", () =>
          gsap.to(g, { y: 0, duration: 0.25, ease: "power2.out" })
        );
      });
    });

    return () => {
      // ✅ 이 한 줄이면 ScrollTrigger / tween / inline style 다 원복됨
      ctx.revert();
    };
  }, []);
}
