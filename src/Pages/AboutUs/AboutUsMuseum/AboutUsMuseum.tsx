import React from "react";
import {
  AboutUsMuseumBlock,
  AboutUsMuseumContainer,
  AboutUsLeftPart,
  AboutUsRightPart,
  AboutUsTitle,
  TextContent,
  FrankoUSSRimg,
  ChurchImg,
} from "./styled";
import FrankoUSSR from "../../../assets/about-us/about-us-info/franko-ussr.png";
import Church from "../../../assets/about-us/about-us-info/church.png";

export default function AboutUsMuseum() {
  return (
    <AboutUsMuseumBlock id='about-us'>
      <AboutUsMuseumContainer>
        <AboutUsLeftPart>
          <AboutUsTitle>Про нас</AboutUsTitle>
          <TextContent>
            Асоціація Музеїв Івана Франка» - це неприбуткова громадська організація, яка працює над
            налагодженням співпраці із музеями Івана Франка для спільної роботи над увічненням
            пам’яті видатного українського письменника, мислителя, громадсько-політичного діяча
            Івана Франка, дослідження та популяризація його духовної спадщини в Україні та поза її
            межами.
            <br />
            <br />
            Безпосередні джерела фінансування «Асоціації Музеїв Івана Франка» відсутні. Громадська
            організація здійснює свою діяльність у рамках отриманих грантових проєктів та
            благодійних внесків.
            <br />
            <br />
            Матеріально-технічна база та кадрове забезпечення відсутні. Діяльність організації
            здійснюється на базі «Львівського національного літературно-меморіального музею Івана
            Франка».
          </TextContent>
        </AboutUsLeftPart>
        <AboutUsRightPart>
          <FrankoUSSRimg src={FrankoUSSR} width='461px' height='396px' />
          <ChurchImg>
            <img src={Church} width='334px' height='326px' />
          </ChurchImg>
        </AboutUsRightPart>
      </AboutUsMuseumContainer>
    </AboutUsMuseumBlock>
  );
}
