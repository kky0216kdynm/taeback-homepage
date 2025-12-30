import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas({ children }) {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero || reduceMotion) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 6;

    const count = 900;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;
      speeds[i] = 0.2 + Math.random() * 0.8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      color: 0xffffff,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    scene.fog = new THREE.Fog(0x000000, 4, 14);

    let mouseX = 0,
      mouseY = 0;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width - 0.5) * 0.8;
      mouseY = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const resize = () => {
      const w = hero.clientWidth;
      const h = hero.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let raf = 0;

    const tick = () => {
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position.array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3 + 1] += 0.003 * speeds[i];
        pos[i3 + 0] += Math.sin(t * 0.4 + i) * 0.0006;
        if (pos[i3 + 1] > 3.5) pos[i3 + 1] = -3.5;
      }
      geometry.attributes.position.needsUpdate = true;

      points.rotation.y = mouseX * 0.6;
      points.rotation.x = -mouseY * 0.6;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <header
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/main.jpeg')",
      }}
    >
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div id="hero-content" className="relative z-10 text-center px-4">
        {children}
      </div>
    </header>
  );
}
