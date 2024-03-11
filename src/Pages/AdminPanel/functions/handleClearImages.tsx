import { Dispatch, SetStateAction } from "react";

export default function handleClearImages(
  setImages: Dispatch<SetStateAction<File[]>>,
  SetImagesForPreview: Dispatch<SetStateAction<string[]>>,
) {
  setImages([]);
  SetImagesForPreview([]);
}
