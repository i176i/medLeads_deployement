// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const SwiperContainer = () => {

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
//         <div className="flex justify-between mb-4">
//           <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded">Dialer Video</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded">Dialer Voice</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded">Search</button>
//           <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded">Fax</button>
//         </div>
//         <div className="relative mb-4">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             navigation
//             pagination={{ clickable: true,  }}
//             spaceBetween={50}
//             slidesPerView={1}
//           >
//             <SwiperSlide>
//               <div className="h-64 bg-red-200">Slide 1</div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="h-64 bg-blue-200">Slide 2</div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="h-64 bg-green-200">Slide 3</div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="h-64 bg-yellow-200">Slide 4</div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//         <div className="text-center">
//           <p className="mb-4 text-lg font-semibold">Search, find, and reach any other healthcare provider, instantly</p>
//           <p className="mb-4 text-gray-600">The Universal Clinician Directory. Search and find any U.S. physician, nurse practitioner, or PA in seconds. Never Google another provider again.</p>
//           <button className="px-6 py-2 text-white bg-blue-500 rounded-full">Download App</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DoctorInteractionCard from "../utilities/DoctorInteractionCard";
import doctor_iphone from "../assets/doctor_iphone.png";
import doctor_dialer from "../assets/doctor_dialer.png";
import doctor_attachment from "../assets/doctor_attachment.png";
import doctor_connections from "../assets/doctor_connections.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
} from "swiper/modules";

function DoctorSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log("swiper -->", thumbsSwiper);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#425ff0",
          "--swiper-pagination-color": "#425ff0",
        }}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper2 hidden sm:block"
        effect={"fade"}
      >
        <SwiperSlide>
          <DoctorInteractionCard
            imageSrc={doctor_iphone}
            headingText={"The easiest way to reach your buyers face-to-face."}
            description={
              "Med Leads not only connects you to buyer, we set up your sales call and cultivate buyer’s procurement interest with trust & credibility. "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <DoctorInteractionCard
            imageSrc={doctor_dialer}
            headingText={"Your solution to connect buyers on-the-go."}
            description={
              "Med Leads is the easiest way to connect with buyers, industry experts and policymakers. We help next generation of healthcare companies simplify their business acquisition. "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <DoctorInteractionCard
            imageSrc={doctor_connections}
            headingText={
              "Search, find, and reach any other healthcare provider, instantly"
            }
            description={
              "The Universal Buyer Directory. Search and find any physician, nurse practitioner or healthcare worker in seconds. Never Google another provider again."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <DoctorInteractionCard
            imageSrc={doctor_attachment}
            headingText={"Sell without a campaign."}
            description={
              "Med Leads save your time from creating countless lead lists, setting up campaigns and inbound strategies which do not churn results in the healthcare industry. "
            }
          />
        </SwiperSlide>
      </Swiper>
      <div className="block md:hidden">
        <DoctorInteractionCard
          imageSrc={doctor_iphone}
          headingText={"The easiest way to reach your buyers face-to-face."}
          description={
            "Med Leads not only connects you to buyer, we set up your sales call and cultivate buyer’s procurement interest with trust & credibility. "
          }
          showButton = {false}
        />

        <DoctorInteractionCard
          imageSrc={doctor_dialer}
          headingText={"Your solution to connect buyers on-the-go."}
          description={
            "Med Leads is the easiest way to connect with buyers, industry experts and policymakers. We help next generation of healthcare companies simplify their business acquisition. "
          }
          showButton = {false}
        />

        <DoctorInteractionCard
          imageSrc={doctor_connections}
          headingText={
            "Search, find, and reach any other healthcare provider, instantly"
          }
          description={
            "The Universal Buyer Directory. Search and find any physician, nurse practitioner or healthcare worker in seconds. Never Google another provider again."
          }
          showButton = {false}
        />

        <DoctorInteractionCard
          imageSrc={doctor_attachment}
          headingText={"Sell without a campaign."}
          description={
            "Med Leads save your time from creating countless lead lists, setting up campaigns and inbound strategies which do not churn results in the healthcare industry. "
          }
        />
      </div>
    </>
  );
}

export { DoctorSwiper };
