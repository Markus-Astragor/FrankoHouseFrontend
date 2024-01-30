import React from "react";
import MissionBox from "../MissionBox/MissionBox";
import {
  MissionStyled,
  MissionTitle,
  MissionContainer,
  MissionsBoxContainer,
} from "./OurMissionStyles";

function OurMission() {
  return (
    <MissionStyled>
      <MissionContainer>
        <MissionTitle>Наша місія</MissionTitle>
        <MissionsBoxContainer>
          <MissionBox showArrow={true}>
            Обмін інформацією та особистісній комунікації дослідників і шанувальників постаті й
            творчості Івана Франка в Україні та закордоном;
          </MissionBox>

          <MissionBox showArrow={true}>
            Популяризація світогляду та творчості Івана Франка в українському інформаційному
            просторі та системі вищої і середньої освіти, сприяння ознайомлення з ними світової
            спільноти
          </MissionBox>

          <MissionBox align='end' borderReverse={true}>
            Підтримка, стимулювання та координація франкознавчих досліджень
          </MissionBox>

          <MissionBox align='end' borderReverse={true}>
            Обмін інформацією та особистісній комунікації дослідників і шанувальників постаті й
            творчості Івана Франка в Україні та закордоном;
          </MissionBox>
        </MissionsBoxContainer>
      </MissionContainer>
    </MissionStyled>
  );
}

export default OurMission;
