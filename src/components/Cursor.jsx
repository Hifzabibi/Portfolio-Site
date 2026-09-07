import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e) => {
      const t = e.target;
      if (!t) return setBig(false);
      if (t.closest && (t.closest("a") || t.closest("button") || t.classList.contains("cursor-expand"))) {
        setBig(true);
      } else {
        setBig(false);
      }
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (typeof window === "undefined") return null;
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: big ? 48 : 10,
          height: big ? 48 : 10,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          background: big ? "rgba(124,58,237,0.08)" : "#7C3AED",
          border: big ? "2px solid rgba(124,58,237,0.7)" : "2px solid rgba(124,58,237,1)",
          opacity: visible ? 1 : 0,
          transition: "width 150ms ease, height 150ms ease, background 150ms ease, border 150ms ease",
        }}
      />

      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: big ? 120 : 0,
          height: big ? 120 : 0,
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          background: "transparent",
          border: big ? "1px solid rgba(124,58,237,0.12)" : "0px solid transparent",
          opacity: visible ? 1 : 0,
          transition: "width 180ms ease, height 180ms ease, border 180ms ease",
        }}
      />
    </>
  );
}
