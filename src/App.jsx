import { useState } from "react";
import "./App.css";
import { Landing } from "./pages/Landing.jsx";
import { BuyWarmIntros } from "./pages/BuyWarmIntros.jsx";
import { Meetings } from "./pages/Meetings.jsx"


function App() {
  return (
    <>
      <Landing />

      <BuyWarmIntros />
      <Meetings />
    </>
  );
}

export default App;
