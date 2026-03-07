import React from "react";
import type { inputType } from "../types/input";

const Input = ({ labelContent, inputType, placeholder }: inputType) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputType} className="font-medium text-base">
        {labelContent}
      </label>
      <input
        type={inputType}
        id={inputType}
        placeholder={placeholder}
        className="w-full h-13 bg-white border border-slate-300 rounded-lg px-3 py-2 
  outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium"
      />
    </div>
  );
};

export default Input;
