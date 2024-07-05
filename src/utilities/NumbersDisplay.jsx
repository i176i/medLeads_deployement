// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// function NumbersDisplay({
//   className,
//   isNegative,
//   value,
//   primaryText,
//   secondaryText,
// }) {
  
//   return (
//     <div className={`w-full flex flex-col items-center ${className}`}>
//       <div className="text-5xl my-2 font-bold">
//         {isNegative ? "-" : "+"}
//         {/* {value}% */}
//         <CountUp end={value} duration={4} start={0} enableScrollSpy={true} />
//       </div>
//       <div className="text-xl font-semibold my-1 primary_text text-slate-600">
//         {primaryText}
//       </div>
//       <div className="text-md primary_text text-slate-400">{secondaryText}</div>
//     </div>
//   );
// }

// export default NumbersDisplay;

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function NumbersDisplay({
  className,
  isNegative,
  value,
  primaryText,
  secondaryText,
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`mb-4 lg:mb-0 w-full flex flex-col items-center ${className}`}>
      <div className="text-5xl my-2 font-bold">
        {isNegative ? "-" : "+"}
        {startCount ? (
          <CountUp end={value} duration={2} start={0} />
        ) : (
          "0"
        )}
      </div>
      <div className="text-xl font-semibold my-1 primary_text text-slate-600">
        {primaryText}
      </div>
      <div className="text-md primary_text text-slate-400">{secondaryText}</div>
    </div>
  );
}

export default NumbersDisplay;
