import { Dispatch, SetStateAction } from "react";

export default function tranformImagesForPreview(
  images: File[],
  setImagesPreview: Dispatch<SetStateAction<string[]>>,
) {
  if (images.length === 0) return;
  const promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(image);
    });
  });

  Promise.all(promises)
    .then((newPreviews) => {
      setImagesPreview(newPreviews as string[]);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error processing images:", error);
    });
}
