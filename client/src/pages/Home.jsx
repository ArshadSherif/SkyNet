import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Lock, Globe, Network, ChevronDown } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { useWallet } from "@/context/WalletContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="min-h-screen overflow-hidden text-foreground p-7">
      <main className="container relative z-10 px-4 py-16 mx-auto">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-5xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Welcome to SkyNet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl md:text-2xl text-muted-foreground"
          >
            Decentralized File Storage at the Speed of the Future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {walletAddress ? (
              <Link to={"/upload"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-xl transition-all duration-300 ease-in-out transform border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
                >
                  Start uploading
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 ease-in-out transform border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
                onClick={connectWallet}
              >
                Connect Wallet
              </Button>
            )}
          </motion.div>
        </section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-12 p-4 mb-16 md:flex-row"
        >
          <FeatureCard
            icon={<Lock className="w-16 h-16 text-primary" />}
            title="Secure Storage"
            description="Your files are encrypted and stored across a decentralized network."
          />
          <FeatureCard
            icon={<Globe className="w-16 h-16 text-primary" />}
            title="Global Access"
            description="Access your files from anywhere in the world, anytime."
          />
          <FeatureCard
            icon={<Network className="w-16 h-16 text-primary" />}
            title="Decentralized"
            description="No single point of failure. Your data is distributed and resilient."
          />
        </motion.section>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Button
            variant="ghost"
            size="lg"
            className="text-primary hover:text-primary-foreground"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            Learn More <ChevronDown className="ml-2" />
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
