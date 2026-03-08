import type { buttonPropsType } from "../types/button";

const sizes = {
  sm: "w-24 h-10",
  md: "w-32 h-10",
  lg: "w-40 h-12",
  full: "w-full h-16",
};

const Button = ({ content, onClick, size, buttonType }: buttonPropsType) => {
  return (
    <>
      <button
        type={buttonType}
        onClick={onClick}
        className={`${sizes[size]} font-bold size-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 border border-slate-100 shadow-sm`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
