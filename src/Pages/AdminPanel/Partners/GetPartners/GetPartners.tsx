import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Title,
  CenterBox,
  ImagesContainer,
  ImageContainer,
  DeleteButton,
} from "../../../../styles/GeneralStylesAdminPanel";
import { TitleForPartner, ImagePartner } from "./GetPartnersStyles";
import config from "../../../../configURLS.json";
import axios from "axios";
import { Loader } from "../../../../components/Loader/LoaderComponentStyles";
import Success from "../../../../components/SuccesWindow/Success";
import Confirmation from "../../../../components/ConfirmationWindow/Confirmation";

type PartnersData = {
  _id: string;
  name: string;
  link: string;
  logo: string[];
};

export default function GetPartners() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<PartnersData[]>([]);
  const [success, setSuccess] = useState<string>("");
  const [confirmation, setConfirmation] = useState<string>("");
  const [deletePartnerId, setDeletePartnerId] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.ADMIN["GET-PARTNERS"]}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log("res", err))
      .finally(() => setLoading(false));
  }, []);

  const handleDeletePartner = () => {
    setLoading(true);
    axios
      .delete(`${config.ADMIN["DELETE-PARTNER"]}`, {
        data: { partnerId: deletePartnerId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        setData((prev) => prev.filter((obj) => obj._id !== deletePartnerId));
        setSuccess(res.data.message);
      })
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
        setConfirmation("");
      });
  };

  const handleConfirmation = (id: string) => {
    setConfirmation("Ви дійсно хочете видалити партнера?");
    setDeletePartnerId(id);
  };
  const handleCancel = () => setConfirmation("");
  return (
    <Wrapper>
      <Title>Переглянути партнерів</Title>
      {loading ? (
        <CenterBox>
          <Loader />
        </CenterBox>
      ) : (
        <ImagesContainer>
          {data.map((img, index) => (
            <ImageContainer height='auto' overflow='visible' key={index}>
              <TitleForPartner>{img.name}</TitleForPartner>
              <ImageContainer height='225px' overflow='visible'>
                <ImagePartner src={img.logo[0]} width='100%' height='100%' />
                <DeleteButton onClick={() => handleConfirmation(img._id)}>X</DeleteButton>
              </ImageContainer>
            </ImageContainer>
          ))}
        </ImagesContainer>
      )}
      {confirmation && (
        <Confirmation onCancel={handleCancel} onDelete={handleDeletePartner} text={confirmation} />
      )}
      {success && <Success setSuccess={setSuccess} message={success} />}
    </Wrapper>
  );
}
