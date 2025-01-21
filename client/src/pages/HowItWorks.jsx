"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <div className="container px-6 py-12 mx-auto text-white">
      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 mb-12 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Working of File Storage System
          </h1>
          <p className="text-lg text-muted-foreground">
            Our decentralized file storage system operates in three key steps.
            It enables secure and permanent storage of files on the IPFS
            network, with metadata linked to the blockchain for authenticity and
            ownership. Here's how it works:
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://gedw8ocoh9cdt5ei.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-22%2003.04.31%20-%20A%20futuristic,%20minimalistic%20outline%20illustration%20of%20a%20decentralized%20file%20storage%20system.%20The%20design%20should%20include%20an%20outline%20of%20a%20laptop%20connected%20to%20-XLDyIKNgTZuz9wlEIJgneQ9K3kuzRg.webp"
            alt="Decentralized Storage Illustration"
            className="w-full h-auto bg-transparent rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Step 1 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Step 1: Uploading Files
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 md:flex-row">
          <p className="text-lg md:w-1/2 text-muted-foreground">
            Users start by uploading their files through the application. The
            files are securely sent to the IPFS network via Pinata. IPFS ensures
            the file is distributed across the network, providing redundancy and
            decentralization.
          </p>
          <img
            src="https://file-storage-system.vercel.app/static/media/third-image-min.17bfad93ea825d824b55.png"
            alt="File Upload Illustration"
            className="w-full rounded-md shadow-md h-250px md:w-1/2"
          />
        </CardContent>
      </Card>

      {/* Step 2 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Step 2: Storing on Blockchain
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 md:flex-row">
          <p className="text-lg md:w-1/2 text-muted-foreground">
            The IPFS hash generated during the upload process is stored on the
            blockchain along with relevant metadata. This step ensures the
            authenticity and ownership of the file, linking it to a specific
            wallet address.
          </p>
          <img
            src="https://file-storage-system.vercel.app/static/media/second-image-min.32a6fee438e26ca0558c.png"
            alt="Blockchain Storage Illustration"
            className="w-full h-auto rounded-md shadow-md md:w-1/2"
          />
        </CardContent>
      </Card>

      {/* Step 3 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Step 3: Accessing Files
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 md:flex-row">
          <p className="text-lg md:w-1/2 text-muted-foreground">
            To access a stored file, users only need the unique IPFS hash. The
            application fetches the file from the IPFS network, ensuring fast
            and reliable access. Since the network is decentralized, files are
            always available without any single point of failure.
          </p>
          <img
            src="https://file-storage-system.vercel.app/static/media/first-image-min.a183bf5f345db763fc04.png"
            alt="File Access Illustration"
            className="w-full h-auto rounded-md shadow-md md:w-1/2"
          />
        </CardContent>
      </Card>
    </div>
  );
}
