import React from "react";
import { PartnerBlock, Title, BlockForTitle, PartnersContainer } from "./styled";
import { imagesArr } from "./imagesData";
import Image from "./ImageItem";

export default function Partners() {
  return (
    <PartnerBlock id='partners'>
      <BlockForTitle>
        <Title>Партнери</Title>
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
