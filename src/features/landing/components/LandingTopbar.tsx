import React from "react";
import type { ladingProps } from "../types/LandingTypes";
import Button from "../../../shared/ui/Button";

const LandingTopbar = ({ page }: ladingProps) => {
  return (
    <div className="w-full h-16 p-2.5 bg-slate-100 flex justify-between items-center">
      <div className="flex align-middle">Sidemate</div>
      <div>
        <Button weight={25} height={10} content="로그인" onClick={page} />
      </div>
    </div>
  );
};

export default LandingTopbar;
