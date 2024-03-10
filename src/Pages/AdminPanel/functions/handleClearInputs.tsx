import { Dispatch, SetStateAction } from "react";
import { museumInfoProps } from "../types/museumInfoProps";

export default function handleClearInputs(setter: Dispatch<SetStateAction<museumInfoProps>>) {
  setter({
    urkMuseumTitle: "",
    UkrWorkingHr: "",
    UkrAddress: "",
    EnMuseumTitle: "",
    EnrWorkingHr: "",
    EnAddress: "",
    link: "",
    phone: "",
    email: "",
  });
}
