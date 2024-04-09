import { Dispatch, SetStateAction } from "react";
import { postInfoProps } from "../../types/postInfoProps";

export default function handleClearInputs(setter: Dispatch<SetStateAction<postInfoProps>>) {
  setter({
    ukrTitle: "",
    ukrDescription: "",
    ukrShortDescription: "",
    engTitle: "",
    engDescription: "",
    engShortDescription: "",
  });
}
