import { useEffect, useRef, useState } from "react";

// Custom cursor: a precise dot + a lagging ring that grows over interactive
// elements. Uses mix-blend-difference so it reads on both dark and lime.
// Disabled on touch / coarse-pointer devices.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("cursor-none");

    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      const interactive = e.target.closest?.("a, button, [data-cursor]");
      setHover(Boolean(interactive));
    };

    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className={`cursor-ring ${hover ? "is-hover" : ""}`} aria-hidden="true" />
    </>
  );
}
