import React from "react";
import { ImageBlock, PartnerImage } from "./styled";

type ImageProps = {
  image: string;
  link: string;
};

export default function Image({ image, link }: ImageProps) {
  return (
    <ImageBlock>
      <a href={link} target='_blank' rel='noreferrer'>
        <PartnerImage src={image} />
      </a>
    </ImageBlock>
  );
}
