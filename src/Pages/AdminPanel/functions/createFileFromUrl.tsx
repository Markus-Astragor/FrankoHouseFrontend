import axios from "axios";

async function createFileFromUrl(url: string, fileName: string) {
  try {
    // Use Axios to make the request
    const response = await axios.get(url, { responseType: "blob" });

    // Create a File object from the Blob
    const file = new File([response.data], fileName || "image.jpg", {
      type: response.headers["content-type"],
    });

    return file;
  } catch (error) {
    console.error("Error creating File from URL:", error);
    throw error;
  }
}

export default createFileFromUrl;
