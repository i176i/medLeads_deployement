// import React from "react";

// function Landing() {
//   return (
//     <>
//       <div className="bg-white text-center min-h-screen flex flex-col items-center justify-center p-4">
//         <header className="flex justify-between items-center w-full px-6">
//           <div className="text-xl font-bold">PartnerHQ</div>
//           <nav className="flex space-x-4">
//             <a href="#resources" className="text-blue-600">
//               Resources
//             </a>
//             <a href="#earn-intros" className="text-blue-600">
//               Earn Making Intros
//             </a>
//           </nav>
//         </header>

//         <main className="flex flex-col items-center mt-10">
//           <div className="flex flex-col items-center mb-6">
//             <a
//               href="#"
//               className="bg-purple-200 text-purple-800 py-2 px-4 rounded-full mb-4 hover:bg-purple-300"
//             >
//               Want to get paid to make intros? Learn More
//             </a>
//             <a
//               href="#"
//               className="bg-purple-200 text-purple-800 py-2 px-4 rounded-full hover:bg-purple-300"
//             >
//               🚀 Boost sales close rates by 53%
//             </a>
//           </div>

//           <h1 className="text-4xl font-bold mb-4">
//             Stop getting ignored. Get{" "}
//             <span className="text-purple-600">introduced</span> to your buyers.
//           </h1>
//           <p className="text-xl mb-8">
//             Find and buy warm intros to potential customers. You only pay if a
//             meeting is scheduled.
//           </p>

//           <div className="flex items-center space-x-2">
//             <input
//               type="email"
//               placeholder="Enter your work email"
//               className="p-2 border border-gray-300 rounded-md"
//             />
//             <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
//               Get Started
//             </button>
//           </div>

//           <div className="mt-6 text-gray-500">
//             BACKED BY
//             <img
//               src="https://via.placeholder.com/50x20"
//               alt="Y Combinator"
//               className="inline ml-2"
//             />
//           </div>
//         </main>

//         <footer className="mt-10">
//           <p>Join 100+ companies selling with intros</p>
//         </footer>
//       </div>
//     </>
//   );
// }

// export { Landing };

import CTA from "../Components/CTA";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";
function Landing() {
  return (
    <>
      <Header />
      <div className="mt-0 md:mt-10  flex flex-col justify-center">
        <CTA />
        <MainContent />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export { Landing };
