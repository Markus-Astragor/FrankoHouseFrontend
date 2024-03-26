import React, { useEffect, useState } from "react";
import { PartnerBlock, Title, BlockForTitle, PartnersContainer } from "./styled";
import config from "../../configURLS.json";
import axios from "axios";

import Image from "./ImageItem";
import { Loader } from "../../components/Loader/LoaderComponentStyles";
import { useTranslation } from "react-i18next";

type PartnersData = {
  _id: string;
  name: string;
  link: string;
  logo: string[];
};

export default function Partners() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<PartnersData[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.ADMIN["GET-PARTNERS"]}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log("res", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PartnerBlock id='partners'>
      <BlockForTitle>
        <Title>{t("ns1.description.partners.title")}</Title>
      </BlockForTitle>
      <PartnersContainer>
        {loading ? (
          <Loader />
        ) : (
          data.map((image, i) => <Image key={i} image={image.logo[0]} link={image.link} />)
        )}
      </PartnersContainer>
    </PartnerBlock>
  );
}
