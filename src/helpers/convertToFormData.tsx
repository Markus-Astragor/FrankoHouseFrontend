function convertToFormData(data: Record<string, string>, images: File[]): FormData {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null) {
      formData.append(key, value.toString());
    }
  }

  images.forEach((image) => {
    formData.append("photos", image);
  });

  return formData;
}

export { convertToFormData };
