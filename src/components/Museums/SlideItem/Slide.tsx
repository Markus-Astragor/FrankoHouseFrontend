import React from "react";

import {
  SlideBox,
  SlideContent,
  SlideContentBack,
  SlideContentFront,
  SlideContentFrontOverlayer,
  SlideContentTitle,
  BackMuseumTitle,
  BackBoldText,
  BackSiteLink,
} from "./SlideStyles";
import { MuseumInfo } from "../Museums";

function Slide({ data }: { data: MuseumInfo }) {
  return (
    <SlideBox>
      <SlideContent>
        <SlideContentFront slideFrontBg={data.photo[0]}>
          <SlideContentFrontOverlayer>
            <SlideContentTitle>{data.title}</SlideContentTitle>
          </SlideContentFrontOverlayer>
        </SlideContentFront>
        <SlideContentBack>
          {data.title && <BackMuseumTitle>{data.title}</BackMuseumTitle>}
          {data.link && (
            <BackBoldText>
              Веб-сайт:{" "}
              <BackSiteLink href={data.link} target='_blank'>
                {data.link}
              </BackSiteLink>
            </BackBoldText>
          )}
          {/* {data.email && <BackBoldText>Електронна-адреса: {data.email}</BackBoldText>} */}
          {data.phone && <BackBoldText>Телефон: {data.phone}</BackBoldText>}
          {data.workingDays && <BackBoldText>Години роботи: {data.workingDays}</BackBoldText>}
          {data.address && <BackBoldText>Адреса: {data.address}</BackBoldText>}
        </SlideContentBack>
      </SlideContent>
    </SlideBox>
  );
}

export default Slide;
