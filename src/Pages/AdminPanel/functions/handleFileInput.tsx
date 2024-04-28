import { Dispatch, SetStateAction } from "react";

export default function handleFileInput(
  images: File[],
  setImages: Dispatch<SetStateAction<File[]>>,
  fileRef: React.RefObject<HTMLInputElement> | null,
  setMessage?: Dispatch<SetStateAction<string>>,
) {
  if (!fileRef) {
    console.error("Ref is null");
    return;
  }

  if (images.length >= 10)
    return setMessage
      ? setMessage("Ви досягли ліміту по зображеннях")
      : alert("Ви досягли ліміту по зображеннях");
  if (fileRef.current && fileRef.current.files?.length !== 0) {
    const files = fileRef.current?.files;
    console.log(files);

    if (files) {
      const newFiles: File[] = [];

      // Validation for files of type image
      for (const file of files) {
        if (file.type.startsWith("image/")) {
          newFiles.push(file);
        } else {
          if (setMessage) {
            setMessage(`${file.name} не є зображенням`);
          }
          alert(`${file.name} не є зображенням`);
        }
      }

      // Validation for max images count
      if (newFiles.length + images.length > 10) {
        setMessage
          ? setMessage(
              `Кількість вибраних зображень перевищує допустиму кількість (10), попередньо вибрані зображення не були збережені, будь ласка спробуйте ще раз.\nКількість зображень які можна ще вибрати - ${
                10 - images.length
              } `,
            )
          : alert(
              `Кількість вибраних зображень перевищує допустиму кількість (10), попередньо вибрані зображення не були збережені, будь ласка спробуйте ще раз.\nКількість зображень які можна ще вибрати - ${
                10 - images.length
              } `,
            );
        return;
      }

      setImages((prev) => [...prev, ...newFiles]);
    } else {
      console.log("No image selected");
    }
  }
}
