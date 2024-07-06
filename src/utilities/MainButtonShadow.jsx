// src/components/CustomButton.js
import React from "react";

const MainButtonShadow = () => {
  return (
    <div className="flex justify-center w-full">
      {/* <button className="w-full  py-4 px-8 bg-white rounded-full shadow-lg shadow-purple-300 text-gray-700 font-medium flex justify-between items-center transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-300">
        <span>Want to get paid to make intros?</span>
        <span className="text-blue-600 font-semibold">Learn More →</span>
      </button> */}
      <button className="text-center w-full py-4 px-8 bg-white rounded-full shadow-[0_0_10px_3px_rgba(59,130,246,0.5)] text-gray-700 font-medium transition-shadow duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]">
        Refer a brand and make up to
        <span className="text-blue-600 font-semibold ml-2">$50 </span>
      </button>
    </div>
  );
};

export default MainButtonShadow;
