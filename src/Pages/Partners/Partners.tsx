import React from "react";
import { PartnerBlock, Title, BlockForTitle, PartnersContainer } from "./styled";
import { imagesArr } from "./imagesData";
import Image from "./ImageItem";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <PartnerBlock id='partners'>
      <BlockForTitle>
        <Title>{t("ns1.description.partners.title")}</Title>
      </BlockForTitle>
      <PartnersContainer>
        {imagesArr.length > 0 ? (
          imagesArr.map((image, i) => <Image key={i} image={image.image} link={image.link} />)
        ) : (
          <></>
        )}
      </PartnersContainer>
    </PartnerBlock>
  );
}
