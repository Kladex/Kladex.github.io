import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [showBackToTop, SetShowBackToTop] = useState(false);
  console.log(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        SetShowBackToTop(true);
      } else {
        SetShowBackToTop(false);
      }
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBackToTop && (
        <button
          className="w-full mb-5 text-lg font-bold text-secondary animate-bounce"
          onClick={backToTop}
        >
          Go to Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
