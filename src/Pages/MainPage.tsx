import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import NewsBoardRoutes from "./NewsBlock/NewsBoard/NewsBoardRoutes";
import Intro from "../components/Intro/Intro";
function MainPage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutUs />
      <NewsBoardRoutes />
    </div>
  );
}

export default MainPage;
