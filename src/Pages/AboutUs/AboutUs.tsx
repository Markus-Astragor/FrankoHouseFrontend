import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AboutUsStyled } from "./AboutUsStyle";

import AboutUsInfo from "./AboutUsInfo/AboutUsInfo";
import AboutUsFranko from "./AboutUsFranko/AboutUsFranko";
import AboutUsInfoLine from "./AboutUsInfoLine/AboutUsInfoLine";

function AboutUs() {
  return (
    <AboutUsStyled>
      <Navbar />
      <AboutUsFranko />
      <AboutUsInfo />
      <AboutUsInfoLine />
    </AboutUsStyled>
  );
}

export default AboutUs;
