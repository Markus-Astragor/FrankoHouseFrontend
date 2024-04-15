import React from "react";
import styled from "styled-components";
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
  const WrapperIntroAboutUs = styled.div`
    position: relative;
  `;
  return (
    <div>
      <Navbar />
      <WrapperIntroAboutUs>
        <Intro />
        <AboutUs />
      </WrapperIntroAboutUs>
      <OurMission />
      <NewsBoardRoutes />
      <Partners />
      <Museums />
      <InfoLine />
      <Footer />
    </div>
  );
}

export default MainPage;
