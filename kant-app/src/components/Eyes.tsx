import React, { useEffect, useRef } from "react";

const EyesAndIris: React.FC = () => {
  const iris = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const follow = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!iris.current) return;
        const x = Math.max(0, Math.min(18, event.clientX / window.innerWidth * 18));
        const y = Math.max(0, Math.min(6, event.clientY / window.innerHeight * 6));
        iris.current.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("pointermove", follow, { passive: true });
    return () => {
      window.removeEventListener("pointermove", follow);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div aria-hidden="true" className="w-[30px] min-w-[30px] h-[18px] rounded-full bg-white overflow-hidden"><div ref={iris} className="w-3 h-3 rounded-full bg-black" /></div>;
};
export default EyesAndIris;
