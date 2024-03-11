import { Dispatch, SetStateAction } from "react";

export default function handleDeleteImage(
  setImagesPreview: Dispatch<SetStateAction<string[]>>,
  setImages: Dispatch<SetStateAction<File[]>>,
  index: number,
) {
  setImagesPreview((prev) => prev.slice(0, index).concat(prev.slice(index + 1)));
  setImages((prev) => prev.slice(0, index).concat(prev.slice(index + 1)));
}
