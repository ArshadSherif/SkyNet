import axios from "axios";

/**
 * Upload a file to Pinata using Axios and the Pinata REST API.
 * @param {File} file - The file object from an input field.
 * @returns {Promise<string>} - The IPFS hash of the uploaded file.
 */
export const uploadToPinata = async (file) => {
  const jwt = import.meta.env.VITE_PINATA_JWT; // Retrieve JWT from environment variables

  if (!jwt) {
    throw new Error("Pinata JWT is not configured in .env");
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`, // Add JWT in the Authorization header
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      }
    );

    if (response.status === 200) {
      console.log("File uploaded to Pinata:", response.data.IpfsHash);
      return response.data.IpfsHash;
    } else {
      throw new Error(
        `Failed to upload file. Status: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error uploading to Pinata:", error);
    throw error;
  }
};
