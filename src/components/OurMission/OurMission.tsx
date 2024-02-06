import React from "react";
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

  return (
    <MissionStyled>
      <MissionContainer>
        <MissionTitle>Наша місія</MissionTitle>
        <MissionsBoxContainer>
          <MissionBox arrowId={1}>{t("ns1.description.our-mission.item-1")}</MissionBox>

          <MissionBox arrowId={2}>{t("ns1.description.our-mission.item-2")}</MissionBox>

          <MissionBox arrowId={3} align='end' borderReverse={true}>
            {t("ns1.description.our-mission.item-3")}
          </MissionBox>

          <MissionBox arrowId={4} align='end' borderReverse={true}>
            {t("ns1.description.our-mission.item-4")}
          </MissionBox>
        </MissionsBoxContainer>
      </MissionContainer>
    </MissionStyled>
  );
}

export default OurMission;
