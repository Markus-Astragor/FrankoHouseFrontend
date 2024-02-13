import React from "react";

import {
  SlideBox,
  SlideContent,
  SlideContentBack,
  SlideContentFront,
  SlideContentTitle,
} from "./SlideStyles";

function Slide() {
  return (
    <SlideBox>
      <SlideContent>
        <SlideContentFront>
          <SlideContentTitle>
            Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
          </SlideContentTitle>
        </SlideContentFront>
        <SlideContentBack>Some info</SlideContentBack>
      </SlideContent>
    </SlideBox>
  );
}

export default Slide;
