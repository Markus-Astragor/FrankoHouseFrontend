import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { postInfoProps } from "../../types/postInfoProps";

export default function handleChangeInput(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setPostInfo: Dispatch<SetStateAction<postInfoProps>>,
) {
  const { name, value } = e.target;
  setPostInfo((prev) => ({ ...prev, [name]: value }));
}
