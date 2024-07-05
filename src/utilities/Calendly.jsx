import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div
      className="calendly_wrapper w-full min-h-screen p-0 md:col-span-3"
      style={{ minHeight: "650px" }}
    >
      <InlineWidget
        className=""
        url="https://calendly.com/dubeyvasu98/discovery-call"
      />
    </div>
  );
};

export default Calendly;
