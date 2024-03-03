import React from "react";

import {
  SlideBox,
  SlideContent,
  SlideContentBack,
  SlideContentFront,
  SlideContentTitle,
  BackMuseumTitle,
  BackBoldText,
  BackSiteLink,
} from "./SlideStyles";
import { MuseumsData } from "../../../hooks/useMuseums";

function Slide({ data }: { data: MuseumsData }) {
  return (
    <SlideBox>
      <SlideContent>
        <SlideContentFront>
          <SlideContentTitle>{data.name}</SlideContentTitle>
        </SlideContentFront>
        <SlideContentBack>
          {data.name && <BackMuseumTitle>{data.name}</BackMuseumTitle>}
          {data.website && (
            <BackBoldText>
              Веб-сайт:{" "}
              <BackSiteLink href={data.website} target='_blank'>
                {data.website}
              </BackSiteLink>
            </BackBoldText>
          )}
          {data.email && <BackBoldText>Електронна-адреса: {data.email}</BackBoldText>}
          {data.phone && <BackBoldText>Телефон: {data.phone}</BackBoldText>}
          {data.working_hours && <BackBoldText>Години роботи: {data.working_hours}</BackBoldText>}
          {data.address && <BackBoldText>Адреса: {data.address}</BackBoldText>}
        </SlideContentBack>
      </SlideContent>
    </SlideBox>
  );
}

export default Slide;
