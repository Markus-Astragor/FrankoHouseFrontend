import React from "react";
import {
  AboutUsFrankoStyled,
  WhiteBackground,
  FrankoImg,
  FrankoQuote,
  FlowersImg,
  FrankoQuoteAuthor,
} from "./AboutUsFrankoStyles";

import frankoImgSrc from "../../../assets/about-us/franko-face.png";
import flowersImgSrc from "../../../assets/about-us/flowers.png";

function AboutUsFranko() {
  return (
    <AboutUsFrankoStyled>
      <FrankoQuote>
        &quot;Людина повинна бути великою не за величезністю своїх досягнень, а за величчю своїх
        мрій.&quot;
        <FrankoQuoteAuthor>- Іван Франко</FrankoQuoteAuthor>
      </FrankoQuote>

      <FrankoImg src={frankoImgSrc} />
      <FlowersImg src={flowersImgSrc} />

      <WhiteBackground />
    </AboutUsFrankoStyled>
  );
}

export default AboutUsFranko;