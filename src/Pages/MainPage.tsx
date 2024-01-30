import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import NewsBoardRoutes from "./NewsBlock/NewsBoard/NewsBoardRoutes";
import Intro from "../components/Intro/Intro";
import Partners from "./Partners/Partners";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutUs />
      <NewsBoardRoutes />
      <Partners />
    </div>
  );
}

export default MainPage;
