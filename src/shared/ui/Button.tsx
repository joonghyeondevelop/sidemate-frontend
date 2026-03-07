import React from "react";
import type { buttonPropsType } from "../types/button";

const Button = ({ content, onClick, height, weight }: buttonPropsType) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`w-${weight} h-${height} font-bold size-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 border border-slate-100 shadow-sm`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
