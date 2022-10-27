import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const scrollHeight = (): void => {
    let element = document.documentElement;
    let ScrollTop = element.scrollTop;
    // || document.body.scrollTop;
    let ScrollHeight = element.scrollHeight;
    // || document.body.scrollHeight;

    let percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;
    setProgress(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  const Bar = styled.div`
    position: fixed;
    height: 6px;
    border-radius: 0px 2px 0px 0px;
    background: linear-gradient(90deg, #c6ffdd 0%, #fbd786 100%, #2c5364 100%);
  `;

  return <Bar className="z-10" style={{ width: progress + "%" }}></Bar>;
};

export default ProgressBar;
