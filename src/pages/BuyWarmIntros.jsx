import React from "react";
import NumbersDisplay from "../utilities/NumbersDisplay";

function BuyWarmIntros() {
  return (
    <div className="main_wrapper mt-8 md:mt-28">
      {/* <div className="w-full flex justify-around items-center"> */}
      <div className="heading w-full flex flex-col items-center justify-center">
        <div className="secondary_heading block text-purple-600 text-xl font-semibold py-2">Med Leads.</div>
        <div className="primary_heading block text-3xl md:text-5xl font-semibold py-4 text-center">Win more deals, faster</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-20">
        <NumbersDisplay
          isNegative={false}
          value={53}
          primaryText={"Average Win-Rate"}
          secondaryText={"selling with Med Leads"}
        />
        <NumbersDisplay
          isNegative={false}
          value={41}
          primaryText={"Average Deal Size"}
          secondaryText={"selling with Med Leads"}
        />
        <NumbersDisplay
          isNegative={true}
          value={60}
          primaryText={"Average Aquisition Cost"}
          secondaryText={"selling with Med Leads"}
        />
        <NumbersDisplay
          isNegative={false}
          value={46}
          primaryText={"Average Deal Speed"}
          secondaryText={"selling with Med Leads"}
        />
      </div>
    </div>
  );
}

export { BuyWarmIntros };
