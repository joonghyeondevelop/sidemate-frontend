import { forwardRef } from "react";
import type { inputType } from "../types/input";

const Input = forwardRef<HTMLInputElement, inputType>(
  ({ labelContent, inputType, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={props.name} className="font-medium text-base">
          {labelContent}
        </label>
        <input
          ref={ref}
          type={inputType}
          id={props.name}
          placeholder={placeholder}
          {...props}
          className="w-full h-13 bg-white border border-slate-300 rounded-lg px-3 py-2 
  outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium text-sm"
        />
      </div>
    );
  },
);

export default Input;
