async function main() {
    try {
      console.log("Getting contract factory...");
      const FileStorage = await hre.ethers.getContractFactory("FileStorage");
      
      console.log("Deploying contract...");
      const fileStorage = await FileStorage.deploy();
      
      console.log("Waiting for deployment...");
      await fileStorage.waitForDeployment();
      
      console.log("Contract deployed at:", fileStorage.target);
      
    } catch (error) {
      console.error("Error deploying contract:", error);
      process.exit(1);
    }
  }
  
  // Main entry point
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });