import React from "react";

function DoctorInteractionCard({
  imageSrc,
  headingText,
  description,
  showButton = true,
}) {
  return (
    <div className="mt-4 md:mt-32  bg-white">
      {/* <h1 className="text-2xl text-center bg-slate-900 text-slate-200 rounded-full max-w-52 py-1 mx-auto">
        Dialer Video
      </h1> */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-4 py-10 px-4 md:px-2  ">
        <div className="image_banner h-[300px] sm:h-[600px] ">
          <img
            src={imageSrc}
            alt="docor_call"
            className="h-full m-auto items-center"
          />
        </div>
        <div className="text_banner text-center md:text-left flex flex-col justify-center  pr-0 pl-0 md:pl-4 md:pr-10">
          <div className="main_heading text-3xl md:text-5xl font-semibold py-4 leading-snug">
            {headingText}
          </div>
          <div className="description py-4">{description}</div>
          {showButton && (
            <div className="cta_buttons py-4">
              <button className="text-white min-w-32 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700">
                Download App
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorInteractionCard;
