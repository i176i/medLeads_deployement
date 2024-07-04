// import React from "react";

// function Meetings() {
//   return (
//     <div className="p-2 md:p-16 z-0">
//       <div className=" overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
//           <div className="lg:row-start-2 lg:max-w-md">
//             <div className="font-bold uppercase leading-7 tracking-normal text-indigo-500">
//               How it works
//             </div>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Scheduled calls with qualified prospects
//             </h2>
//           </div>
//           <img
//             alt="Product screenshot"
//             loading="lazy"
//             width="2432"
//             height="1442"
//             decoding="async"
//             data-nimg="1"
//             className="aboslute z-5 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
//             style={{ color: "transparent" }}
//             src="https://trypartnerhq.com/_next/static/media/calendar.bd6b2553.png"
//           />
//           <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
//             <dl className="max-w-xl space-y-10 text-base leading-7 text-gray-300 lg:max-w-none">
//               <div className="relative">
//                 <dt className="ml-12 inline-block font-semibold text-white">
//                   <div className="absolute left-1 top-1 h-7 w-7">
//                     <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                       <span className="text-base">1</span>
//                     </div>
//                     <div className="text-muted-foreground mt-1.5 text-xs uppercase tracking-normal">
//                       Step
//                     </div>
//                   </div>
//                   <span className="text-lg">Describe your buyer profile.</span>
//                 </dt>
//                 <dd className="ml-12">
//                   Specify what types of people you would like an intro to.
//                 </dd>
//               </div>
//               <div className="relative">
//                 <dt className="ml-12 inline-block font-semibold text-white">
//                   <div className="absolute left-1 top-1 h-7 w-7">
//                     <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                       <span className="text-base">2</span>
//                     </div>
//                     <div className="text-muted-foreground mt-1.5 text-xs uppercase tracking-normal">
//                       Step
//                     </div>
//                   </div>
//                   <span className="text-lg">Set your bounty.</span>
//                 </dt>
//                 <dd className="ml-12">
//                   Decide how much you will pay for an intro to your ideal buyer.
//                   The average bounty on PartnerHQ is $500 per intro.
//                 </dd>
//               </div>
//               <div className="relative">
//                 <dt className="ml-12 inline-block font-semibold text-white">
//                   <div className="absolute left-1 top-1 h-7 w-7">
//                     <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                       <span className="text-base">3</span>
//                     </div>
//                     <div className="text-muted-foreground mt-1.5 text-xs uppercase tracking-normal">
//                       Step
//                     </div>
//                   </div>
//                   <span className="text-lg">Close more deals.</span>
//                 </dt>
//                 <dd className="ml-12">
//                   Keep an eye on your email inbox for intro emails. Respond to
//                   intro emails and watch the deals roll in.
//                 </dd>
//               </div>
//             </dl>
//             <div className="mt-8">
//               <form className="flex w-full items-center gap-x-2 gap-y-4 sm:flex-row">
//                 <label
//                   className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
//                   htmlFor="undefined-form-item"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
//                   autoComplete="email"
//                   required
//                   placeholder="Enter your work email"
//                   id="undefined-form-item"
//                   aria-describedby="undefined-form-item-description"
//                   aria-invalid="false"
//                   name="email"
//                   // value=""
//                 />
//                 <button
//                   className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-primary-foreground h-10 py-2 px-4 group bg-indigo-600 hover:bg-indigo-700"
//                   type="submit"
//                 >
//                   <span className="flex items-center">
//                     Get&nbsp;Started&nbsp;
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                       data-slot="icon"
//                       className="ml-1 h-3 stroke-2 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu">
//           <div
//             className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#e180ff] to-[#9089fc] opacity-25"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { Meetings };
// import React from "react";

// function Meetings() {
//   return (
//     <div className="p-4 md:p-8">
//       <div className="bg-gray-900 rounded-3xl px-4 py-12 sm:px-8 sm:py-16 lg:py-16 xl:px-16">
//         <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
//           <div className="sm:col-span-1">
//             <div className="font-bold uppercase text-indigo-500 mb-4">
//               How it works
//             </div>
//             <h2 className="text-3xl font-bold text-white mb-6">
//               Scheduled calls with qualified prospects
//             </h2>
//             <div className="space-y-6 text-base text-gray-300">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                   <span className="text-base">1</span>
//                 </div>
//                 <div className="ml-4">
//                   <span className="block font-semibold text-white">
//                     Describe your buyer profile.
//                   </span>
//                   <span className="text-xs text-muted-foreground uppercase tracking-normal">
//                     Step
//                   </span>
//                   <p className="ml-12">
//                     Specify what types of people you would like an intro to.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                   <span className="text-base">2</span>
//                 </div>
//                 <div className="ml-4">
//                   <span className="block font-semibold text-white">
//                     Set your bounty.
//                   </span>
//                   <span className="text-xs text-muted-foreground uppercase tracking-normal">
//                     Step
//                   </span>
//                   <p className="ml-12">
//                     Decide how much you will pay for an intro to your ideal buyer. The average bounty on PartnerHQ is $500 per intro.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
//                   <span className="text-base">3</span>
//                 </div>
//                 <div className="ml-4">
//                   <span className="block font-semibold text-white">
//                     Close more deals.
//                   </span>
//                   <span className="text-xs text-muted-foreground uppercase tracking-normal">
//                     Step
//                   </span>
//                   <p className="ml-12">
//                     Keep an eye on your email inbox for intro emails. Respond to intro emails and watch the deals roll in.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-1">
//             <img
//               alt="Product screenshot"
//               loading="lazy"
//               width="2432"
//               height="1442"
//               decoding="async"
//               src="https://trypartnerhq.com/_next/static/media/calendar.bd6b2553.png"
//               className="w-full rounded-xl shadow-xl ring-1 ring-white/10"
//               style={{ color: "transparent" }}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -z-10">
//         <div
//           className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-[#e180ff] to-[#9089fc] opacity-25 rounded-3xl"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export { Meetings };






import React from "react";

function Meetings() {
  return (
    <div className="p-4 md:p-8 mt-20 md:mt-40">
      <div className="bg-gray-900 rounded-3xl ">
        <div className="max-w-full mx-auto grid grid-cols-1  md:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:py-16 xl:px-16">
            <div className="font-bold uppercase text-indigo-500 mb-4">
              How it works
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Scheduled calls with qualified prospects
            </h2>
            <div className="space-y-6 text-base text-gray-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">1</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold mb- text-white">
                    Describe your buyer profile.
                  </span>
                  <p className="ml-12">
                    Specify what types of people you would like an intro to.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">2</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold mb- text-white">
                    Set your bounty.
                  </span>
                  <p className="ml-12">
                    Decide how much you will pay for an intro to your ideal buyer. The average bounty on PartnerHQ is $500 per intro.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">3</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold mb- text-white">
                    Close more deals.
                  </span>
                  <p className="ml-12">
                    Keep an eye on your email inbox for intro emails. Respond to intro emails and watch the deals roll in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full w-full overflow-hidden">
            <img
              alt="Product screenshot"
              loading="lazy"
              width="2432"
              height="1442"
              decoding="async"
              src="https://trypartnerhq.com/_next/static/media/calendar.bd6b2553.png"
              className="h-[full] bg-cover rounded-xl shadow-xl ring-1 ring-white/10"
              style={{ color: "transparent", background:"cover" }}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -z-10">
        <div
          className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-[#e180ff] to-[#9089fc] opacity-25 rounded-3xl"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export { Meetings };
