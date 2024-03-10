import { Dispatch, SetStateAction } from "react";

export default function handleClearImages(setter: Dispatch<SetStateAction<File[]>>) {
  setter([]);
}
