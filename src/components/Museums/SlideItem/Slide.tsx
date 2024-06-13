import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
              {t("ns1.description.museumsFranko.card-info.website")}{" "}
              <BackSiteLink href={data.link} target='_blank'>
                {data.link}
              </BackSiteLink>
            </BackBoldText>
          )}
          {data.email && <BackBoldText>Електронна-адреса: {data.email}</BackBoldText>}
          {data.phone && (
            <BackBoldText>
              {t("ns1.description.museumsFranko.card-info.phone")} {data.phone}
            </BackBoldText>
          )}
          {data.workingHours && (
            <BackBoldText>
              {t("ns1.description.museumsFranko.card-info.workingHours")} {data.workingHours}
            </BackBoldText>
          )}
          {data.address && (
            <BackBoldText>
              {t("ns1.description.museumsFranko.card-info.address")} {data.address}
            </BackBoldText>
          )}
        </SlideContentBack>
      </SlideContent>
    </SlideBox>
  );
}

export default Slide;
