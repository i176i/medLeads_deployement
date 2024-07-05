import React from "react";

function NetworkCard({ className, imageUrl, primaryText, secondaryText }) {
  return (
    <div className={`my-2 w-full flex flex-col items-center ${className}`}>
      <div className="w-32 h-32">
        <img src={imageUrl} alt="" />
      </div>
      <div className="text-2xl font-semibold my-2 text-slate-900 text-center">
        {primaryText}
      </div>
      <div className="text-md text-slate-900 text-center px-6 sm:px-2">{secondaryText}</div>
    </div>
  );
}

export default NetworkCard;
