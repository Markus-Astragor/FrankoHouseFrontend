import React from "react";
import { ImageBlock } from "./styled";

type ImageProps = {
  image: string;
  link: string;
};

export default function Image({ image, link }: ImageProps) {
  return (
    <ImageBlock>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={image} width='159px' height='159px' />
      </a>
    </ImageBlock>
  );
}
