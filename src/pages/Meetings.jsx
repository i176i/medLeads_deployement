
import React from "react";

function Meetings() {
  return (
    <div className="p-4 md:p-8 mt-20 md:mt-40">
      <div className="bg-gray-900 rounded-3xl ">
        <div className="max-w-full mx-auto ">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:py-16 xl:px-16">
            <div className="font-bold uppercase text-indigo-500 mb-8 text-center text-lg">
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16 text-center">
              Scheduled calls with qualified prospects
            </h2>
            <div className="space-y-6 text-base text-gray-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">1</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold text-base  md:text-xl mb-2  text-white">
                    Describe your buyer profile.
                  </span>
                  <p className="ml-8 mt-2">
                    Specify what types of people you would like an intro to.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">2</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold text-base  md:text-xl mb-2  text-white">
                  Accept Profiles.
                  </span>
                  <p className="ml-8 mt-2">
                  Accept buyer profile from delivered leads. 
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white">
                  <span className="text-base">3</span>
                </div>
                <div className="ml-4">
                  <span className="block font-semibold text-base  md:text-xl mb-2  text-white">
                    Close more deals.
                  </span>
                  <p className="ml-8 mt-2">
                  Keep an eye on your inbox for meet links. Respond to mails and watch more deals roll out. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center h-full w-full overflow-hidden">
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
          </div> */}
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
