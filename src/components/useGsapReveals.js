import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useGsapReveals() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Nav + hero entrance
    gsap.from("nav", { y: -18, opacity: 0, duration: 0.8, ease: "power2.out" });
    gsap.from("#hero-content img", {
      y: 18,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.1,
    });
    gsap.from("#hero-content p", {
      y: 18,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.from("#hero-content a", {
      y: 14,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.35,
      stagger: 0.12,
    });

    // Generic reveal for blocks/cards
    const els = document.querySelectorAll(".js-reveal");
    els.forEach((el) => {
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
    const groups = document.querySelectorAll(".group");
    const onEnter = (e) =>
      gsap.to(e.currentTarget, { y: -6, duration: 0.25, ease: "power2.out" });
    const onLeave = (e) =>
      gsap.to(e.currentTarget, { y: 0, duration: 0.25, ease: "power2.out" });

    groups.forEach((g) => {
      g.addEventListener("mouseenter", onEnter);
      g.addEventListener("mouseleave", onLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
      groups.forEach((g) => {
        g.removeEventListener("mouseenter", onEnter);
        g.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}
