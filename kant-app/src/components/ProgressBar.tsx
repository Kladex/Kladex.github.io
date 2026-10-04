import React, { useEffect, useRef } from "react";

const ProgressBar: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const distance = root.scrollHeight - root.clientHeight;
        const progress = distance > 0 ? Math.max(0, Math.min(1, root.scrollTop / distance)) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={bar} aria-hidden="true" className="fixed top-0 left-0 w-full h-1 origin-left bg-teal-400 z-20" style={{ transform: "scaleX(0)" }} />;
};
export default ProgressBar;
