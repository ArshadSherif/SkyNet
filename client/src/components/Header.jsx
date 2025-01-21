import { Link } from "react-router";
import { Button } from "./ui/button";
import { shortenAddress } from "@/utils/ShortenAddress.";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useWallet } from "@/context/WalletContext";

const Header = () => {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-6 text-white bg-transparent backdrop-blur-md">
      {/* Logo */}
      <h1 className="text-4xl font-bold">
        <Link to="/">SkyNet</Link>
      </h1>

      {/* Navigation Links */}
      <nav className="flex justify-end space-x-7">
        <Link
          to="/"
          className="text-xl font-medium text-white hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="/upload"
          className="text-xl font-medium text-white hover:text-gray-300"
        >
          Upload
        </Link>
        <Link
          to="/how-it-works"
          className="text-xl font-medium text-white hover:text-gray-300"
        >
          Working
        </Link>
      </nav>

      {/* <button className="px-4 py-3 transition border border-white rounded-md hover:bg-white hover:text-black">
        Connect Wallet
      </button> */}

      {walletAddress ? (
        <div className="flex items-center justify-center ">
          <Avatar>
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Shortened Wallet Address */}
          <span style={{ fontSize: "19px", fontWeight: "bold" }}>
            {shortenAddress(walletAddress)}
          </span>
        </div>
      ) : (
        <Button
          variant="outline"
          size="lg"
          onClick={connectWallet}
          className="transition-all duration-300 ease-in-out transform border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default Header;
