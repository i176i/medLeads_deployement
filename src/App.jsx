import "./App.css";
import { Landing } from "./pages/Landing.jsx";
import { BuyWarmIntros } from "./pages/BuyWarmIntros.jsx";
import { Meetings } from "./pages/Meetings.jsx";
import { Network } from "./pages/Network.jsx";
import { DoctorSwiper } from "./pages/DoctorSwiper.jsx";

import { FooterCallToAction } from "./pages/FooterCTA.jsx";
import CalendlySection from "./pages/CalendlySection.jsx";

function App() {
  return (
    <>
      <Landing />
      <BuyWarmIntros />
      <Meetings />
      <Network />
      <DoctorSwiper />
      <FooterCallToAction />
      <CalendlySection />
    </>
  );
}

export default App;
