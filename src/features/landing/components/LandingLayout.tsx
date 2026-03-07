import React from "react";
import LandingTopbar from "./LandingTopbar";
import LadingCenter from "./LadingCenter";
import usePageMove from "../hooks/usePageMove";

const LandingLayout = () => {
  const { moveLogin } = usePageMove();

  return (
    <div className="pl-3 pr-3 pt-4 pb-4 h-screen flex flex-col bg-slate-50">
      <LandingTopbar page={moveLogin} />
      <LadingCenter page={moveLogin} />
    </div>
  );
};

export default LandingLayout;
