"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Using shadcn button
import { Input } from "@/components/ui/input"; // Using shadcn input
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { uploadToPinata } from "@/utils/pinata";
import {
  fetchFiles,
  getContract,
  saveFileToBlockchain,
} from "@/utils/blockchain";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [address, setAddress] = useState("");
  const [userUploads, setUserUploads] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      console.log("Uploading file to Pinata...");
      const ipfsHash = await uploadToPinata(selectedFile);

      console.log("Saving file to blockchain...");
      await saveFileToBlockchain(selectedFile.name, ipfsHash);

      const newUpload = {
        name: selectedFile.name,
        size: (selectedFile.size / 1024).toFixed(2) + " KB",
        ipfsHash,
        uploadedAt: new Date().toLocaleString(),
      };
      setUploads((prevUploads) => [...prevUploads, newUpload]);
      setSelectedFile(null);
      alert("File uploaded and saved successfully!");
    } catch (error) {
      console.error("Error during upload:", error);
      alert("Failed to upload file.");
    }
  };

  const handleFetchUploads = async () => {
    try {
      if (!address) {
        alert("Please enter a valid Ethereum address.");
        return;
      }

      console.log("Fetching uploads for address:", address);

      // Use the fetchFiles utility
      const files = await fetchFiles(address);

      if (!files || files.length === 0) {
        console.log("No files found for this address.");
        setUserUploads([]);
        return;
      }

      console.log("Fetched files:", files);

      // Update state with fetched files
      setUserUploads(files);
    } catch (error) {
      console.error("Error fetching uploads:", error);
      alert("Failed to fetch uploads.");
    }
  };

  return (
    <div className="container p-6 mx-auto text-white">
      {/* Upload Section */}
      <Card className="flex flex-col gap-4 mb-8">
        <CardHeader className="items-center">
          <CardTitle className="text-2xl">Upload File</CardTitle>
          <CardDescription>Choose a file to upload to SkyNet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full max-w-md text-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
            <Button variant="outline" onClick={handleUpload}>
              Upload
            </Button>
          </div>
          {selectedFile && (
            <p className="mt-4 text-center text-muted-foreground">
              Selected File: {selectedFile.name} (
              {(selectedFile.size / 1024).toFixed(2)} KB)
            </p>
          )}
        </CardContent>
      </Card>

      {/* My Uploads Section */}
      <Card className="flex flex-col ">
        <CardHeader className="items-center ">
          <CardTitle className="text-2xl">My Uploads</CardTitle>
          <CardDescription>
            Enter your Ethereum address to fetch your specific uploads.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <Input
              type="text"
              placeholder="Enter Ethereum Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-grow"
            />
            <Button variant="outline" onClick={handleFetchUploads}>
              Fetch Uploads
            </Button>
          </div>
          {userUploads.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userUploads.map((upload, index) => (
                <a
                  key={index}
                  href={upload.url} // Link to the IPFS URL
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  <Card className="transition-transform bg-primary/10 hover:shadow-lg hover:scale-105">
                    <CardContent>
                      <img
                        src={upload.url}
                        alt={upload.name}
                        className="object-cover w-full h-48 mb-4 rounded-md"
                      />
                      <p className="text-lg font-semibold text-primary">
                        {upload.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CID: {upload.cid}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No uploads found for this address.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
