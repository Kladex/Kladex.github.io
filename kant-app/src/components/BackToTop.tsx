import React from "react";

const BackToTop: React.FC = () => {
  // ---------- Did not complete --------- //
  // const [showBackToTop, SetShowBackToTop] = useState(false);
  // useEffect(() => {
  //   const handleScoreButtonVisibility = () => {
  //     window.pageYOffset > 100
  //       ? SetShowBackToTop(true)
  //       : SetShowBackToTop(false);
  //   };
  //   window.addEventListener("scroll", handleScoreButtonVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", handleScoreButtonVisibility);
  //   };
  // }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* {showBackToTop && ( */}
      <button
        className="w-full my-5 mt-10 text-lg font-bold text-secondary animate-bounce"
        onClick={backToTop}
      >
        Go to Top
      </button>
      {/* )} */}
    </>
  );
};

export default BackToTop;
