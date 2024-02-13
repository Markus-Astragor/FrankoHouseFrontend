import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import NewsBoardRoutes from "./NewsBlock/NewsBoard/NewsBoardRoutes";
import Intro from "../components/Intro/Intro";
import Partners from "./Partners/Partners";
import OurMission from "../components/OurMission/OurMission";
import Footer from "../components/Footer/Footer";
import Museums from "../components/Museums/Museums";
import InfoLine from "../components/InfoLine/InfoLine";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <OurMission />
      <AboutUs />
      <NewsBoardRoutes />
      <Partners />
      <Museums />
      <InfoLine />
      <Footer />
    </div>
  );
}

export default MainPage;
