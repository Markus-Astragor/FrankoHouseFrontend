import React from "react";
import { useInView } from "react-intersection-observer";
import MissionBox from "../MissionBox/MissionBox";
import {
  MissionStyled,
  MissionTitle,
  MissionContainer,
  MissionsBoxContainer,
} from "./OurMissionStyles";

import { useTranslation } from "react-i18next";
function OurMission() {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <MissionStyled ref={ref} id='our-mission'>
      <MissionContainer>
        <MissionTitle>{t("ns1.description.our-mission.title")}</MissionTitle>
        <MissionsBoxContainer>
          <MissionBox inView={inView} arrowId={1}>
            {t("ns1.description.our-mission.item-1")}
          </MissionBox>

          <MissionBox inView={inView} arrowId={2}>
            {t("ns1.description.our-mission.item-2")}
          </MissionBox>

          <MissionBox inView={inView} arrowId={3} align='end' borderReverse={true}>
            {t("ns1.description.our-mission.item-3")}
          </MissionBox>

          <MissionBox inView={inView} arrowId={4} align='end' borderReverse={true}>
            {t("ns1.description.our-mission.item-4")}
          </MissionBox>
        </MissionsBoxContainer>
      </MissionContainer>
    </MissionStyled>
  );
}

export default OurMission;
