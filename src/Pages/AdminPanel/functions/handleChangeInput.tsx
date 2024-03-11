import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { museumInfoProps } from "../types/museumInfoProps";

export default function handleChangeInput(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setMuseumInfo: Dispatch<SetStateAction<museumInfoProps>>,
) {
  const { name, value } = e.target;
  setMuseumInfo((prev) => ({ ...prev, [name]: value }));
}
