import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

const WalletContext = createContext();

export const useWallet = () => {
  return useContext(WalletContext);
};

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window === "undefined" || !window.ethereum) {
        alert(
          "MetaMask is not installed. Please install it to use this feature."
        );
        return null;
      }

      // Request access to the user's wallet
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        alert("No accounts found. Please connect your MetaMask wallet.");
        return null;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = accounts[0];

      setWalletAddress(address);
      console.log("provider:", provider);
      console.log("signer:", signer);
      console.log("address:", address);
      return { provider, signer, address };
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      return null;
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0] || null);
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
