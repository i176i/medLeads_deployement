import React from "react";

function NumbersDisplay({
  className,
  isNegative,
  value,
  primaryText,
  secondaryText,
}) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <div className="text-5xl my-2 font-bold">
        {isNegative ? "-" : "+"}
        {value}%
      </div>
      <div className="text-xl font-semibold my-1 primary_text text-slate-600">
        {primaryText}
      </div>
      <div className="text-md primary_text text-slate-400">
        {secondaryText}
      </div>
    </div>
  );
}

export default NumbersDisplay;
