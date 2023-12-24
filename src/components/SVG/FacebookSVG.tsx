import React from "react";
import { SvgWrapper } from "./SvgStyles";
function FacebookSVG() {
  return (
    <SvgWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30px' height='30px'>
        {" "}
        <path d='M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z' />
      </svg>
    </SvgWrapper>
  );
}

export default FacebookSVG;