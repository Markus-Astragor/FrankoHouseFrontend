import { Dispatch, SetStateAction } from "react";
import { museumInfoProps } from "../../types/museumInfoProps";

export default function handleClearInputs(setter: Dispatch<SetStateAction<museumInfoProps>>) {
  setter({
    ukrTitle: "",
    ukrWorkingHours: "",
    ukrAddress: "",
    engTitle: "",
    engWorkingHours: "",
    engAddress: "",
    link: "",
    phone: "",
    email: "",
  });
}
