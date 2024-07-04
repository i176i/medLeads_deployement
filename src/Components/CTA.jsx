import React from 'react';
import MainButtonShadow from "../utilities/MainButtonShadow"

const CTA = () => {
  return (
    <div className="flex flex-col items-center mb-6 mt-14 md:mt-20">
      {/* <a href="#" className="bg-purple-200 text-purple-800 py-2 px-4 rounded-full mb-4 hover:bg-purple-300 shadow-md">
        Want to get paid to make intros? Learn More
      </a>
      <a href="#" className="bg-purple-200 text-purple-800 py-2 px-4 rounded-full hover:bg-purple-300 shadow-md">
        🚀 Boost sales close rates by 53%
      </a> */}
      <div className="w-80 md:w-[500px]">
        <MainButtonShadow />
      </div>
    </div>
  );
};

export default CTA;