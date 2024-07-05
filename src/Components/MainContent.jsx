import React from "react";

const MainContent = () => {
  return (
    <main className="flex flex-col items-center mt-8 md:mt-16 px-4">
      {" "}
      {/* Increased mt-10 to mt-32 */}
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center">
        Stop getting ignored.
        <div className="block mt-2 md:mt-6">
          Get <span className="text-purple-600">introduced</span> to your
          buyers.
        </div>
      </h1>
      <p className="text-xl mb-8 text-center mt-2 md:mt-8">
        Easiest way to connect with healthcare industry professionals. Meet
        ideal prospects, close more deals.
      </p>
      <div className="flex items-center space-x-2 mb-8 mt-4 md:mt-12">
        <input
          type="email"
          placeholder="Enter your work email"
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 shadow-md">
          Get Started
        </button>
      </div>
      {/* <div className="mt-6 text-gray-500">
        BACKED BY
        <img
          src="https://via.placeholder.com/50x20"
          alt="Y Combinator"
          className="inline ml-2"
        />
      </div> */}
    </main>
  );
};

export default MainContent;
