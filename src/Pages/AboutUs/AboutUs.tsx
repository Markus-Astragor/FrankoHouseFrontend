import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import { AboutUsStyled } from "./AboutUsStyle";
import AboutUsMuseum from "./AboutUsMuseum/AboutUsMuseum";

// import AboutUsInfo from "./AboutUsInfo/AboutUsInfo";
// import AboutUsFranko from "./AboutUsFranko/AboutUsFranko";
// import AboutUsInfoLine from "./AboutUsInfoLine/AboutUsInfoLine";

function AboutUs() {
  return (
    <AboutUsStyled>
      {/* <Navbar /> */}
      {/* <AboutUsFranko />
      <AboutUsInfo />
      <AboutUsInfoLine /> */}
      <AboutUsMuseum />
    </AboutUsStyled>
  );
}

export default AboutUs;
