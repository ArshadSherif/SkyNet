import { ethers } from "ethers";
import contractConfig from "../config/contract.json";

export const getContract = async () => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      contractConfig.address,
      contractConfig.abi,
      signer
    );

    return contract;
  } catch (error) {
    console.error("Error getting contract:", error);
    throw error;
  }
};
export const saveFileToBlockchain = async (fileName, ipfsHash) => {
  try {
    const contract = await getContract();
    console.log("contractInfo", contract);
    console.log("Available contract methods:", contract.functions);
    const tx = await contract.uploadFile(fileName, ipfsHash);
    console.log("Transaction sent:", tx.hash);

    await tx.wait();
    console.log("Transaction confirmed:", tx);
  } catch (error) {
    console.error("Error saving file to blockchain:", error);
    throw error;
  }
};

// Fetch stored files for a specific address
export const fetchFiles = async (walletAddress) => {
  try {
    if (!walletAddress) {
      throw new Error("No wallet address provided.");
    }

    // Initialize provider and contract
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
      contractConfig.address,
      contractConfig.abi,
      provider
    );

    // Call the getFiles function with the wallet address
    const files = await contract.getFiles(walletAddress);
    console.log("Fetched files:", files);

    // Format the files for frontend display
    return files.map((file) => ({
      name: file.name,
      cid: file.cid,
      url: `https://ipfs.io/ipfs/${file.cid}`,
    }));
  } catch (error) {
    console.error("Error fetching files from blockchain:", error);
    throw error;
  }
};