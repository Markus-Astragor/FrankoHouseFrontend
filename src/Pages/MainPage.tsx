import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
// import NewsBoardRoutes from "./NewsBlock/NewsBoard/NewsBoardRoutes";
import Intro from "../components/Intro/Intro";
import Partners from "./Partners/Partners";
import OurMission from "../components/OurMission/OurMission";
import Footer from "../components/Footer/Footer";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <OurMission />
      <AboutUs />
      {/* <NewsBoardRoutes /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default MainPage;
