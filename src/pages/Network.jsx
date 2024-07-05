import React from "react";
import NetworkCard from "../utilities/NetworkCard";
import doctor_network_1 from "../assets/networkImages/doctor_network_01.svg";
import doctor_network_2 from "../assets/networkImages/doctor_network_02.svg";
import doctor_network_3 from "../assets/networkImages/doctor_network_03.svg";
import doctor_network_4 from "../assets/networkImages/doctor_network_04.svg";

function Network() {
  return (
    <div className="w-full px-2 md:px-10 mt-20">
      <div className="grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  w-full">
        <NetworkCard
          imageUrl={doctor_network_1}
          primaryText={"Connect"}
          secondaryText={
            "Stay connected with providers, buyers and working professionals. "
          }
        />
        <NetworkCard
          imageUrl={doctor_network_2}
          primaryText={"Careers"}
          secondaryText={
            "Network with colleagues and employers at leading hospitals "
          }
        />
        <NetworkCard
          imageUrl={doctor_network_3}
          primaryText={"News"}
          secondaryText={
            "Stay on top of the latest medical news."
          }
        />
        <NetworkCard
          imageUrl={doctor_network_4}
          primaryText={"Secure"}
          secondaryText={
            "All profiles on platform are vetted to build trust and credibility."
          }
        />
      </div>
    </div>
  );
}

export { Network };
