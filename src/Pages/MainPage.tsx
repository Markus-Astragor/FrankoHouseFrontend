import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import NewsBoardRoutes from "./NewsBlock/NewsBoard/NewsBoardRoutes";
function MainPage() {
  return (
    <div style={{ background: "#F3EDED", height: "1500px" }}>
      <AboutUs />
      <NewsBoardRoutes />
    </div>
  );
}

export default MainPage;
