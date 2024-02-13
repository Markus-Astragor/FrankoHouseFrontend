import React from "react";
import {
  InfoLineStyled,
  InfoLineContiner,
  InfoLineTitle,
  FlexContainer,
  Contacts,
  ContactTitle,
  ContactItem,
  Map,
} from "./InfoLineStyles";

function InfoLine() {
  return (
    <InfoLineStyled>
      <InfoLineContiner>
        <InfoLineTitle>Інфомарційна лінія</InfoLineTitle>
        <FlexContainer>
          <Contacts>
            <ContactTitle>Контакти</ContactTitle>
            <ContactItem>email: dimfranka@gmail.com</ContactItem>
            <ContactItem>Тел.: +38096 158 46 06 </ContactItem>
            <ContactItem>+38098 486 00 42</ContactItem>
          </Contacts>
          <Map />
        </FlexContainer>
      </InfoLineContiner>
    </InfoLineStyled>
  );
}

export default InfoLine;
