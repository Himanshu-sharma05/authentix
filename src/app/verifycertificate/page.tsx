"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
 import { GeistSans } from 'geist/font/sans';
import { useEffect, useState } from "react"

const page = () => {
  
  const [pdfFile, setPdfFile] = useState(null);
  const [sigFile, setSigFile] = useState(null);
  const [pubKeyFile, setPubKeyFile] = useState(null);
  const [result, setResult] = useState('');

  const handlePdfChange = (e) => setPdfFile(e.target.files[0]);
  const handleSigChange = (e) => setSigFile(e.target.files[0]);
  const handlePubKeyChange = (e) => setPubKeyFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdfFile || !sigFile || !pubKeyFile) {
      setResult('Please select PDF, signature, and public key files.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', pdfFile);
    formData.append('signature', sigFile);
    formData.append('publicKey', pubKeyFile);

    try {
      const response = await fetch('http://localhost:3002/verify', {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();
      setResult(text);
      console.log(result)
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  

  return (
    <div className="px-40">
      <div className="p-20 py-10 flex flex-col justify-center items-center">
        <div className={" text-5xl font-medium text-center text-neutral-950 dark:text-neutral-100 " + GeistSans.className}>
            Verify your documents with ease
        </div>
        <div className="text-gray-500 mt-5 text-center w-150">Easily confirm the authenticity of any certificate issued through our platform
using our secure and user-friendly verification system.</div>
    </div>
    <div className="w-full">
    <form action="" onSubmit={handleSubmit}>
        <div className="flex items-center justify-around">
      <div className="mt-10">
      <Label htmlFor="certificate" className="font-bold p-3">Upload Certificate</Label>
      <Input id="certificate" name="pdf" type="file" onChange={handlePdfChange} required />
    </div>
        <div className="mt-10 flex flex-col gap-3">
        <Label htmlFor="signature" className="font-bold p-3">Upload Signature</Label>
        <Input id="signature" name="signature" onChange={handleSigChange} type="file" required/>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <label htmlFor="publickey">Select Public Key:</label>
            <Input id="publickey" type="file" accept=".pem" onChange={handlePubKeyChange} />
        </div>
    </div>
    <div className="w-full  flex ">
      <button type="submit" className="bg-black mx-auto py-2 px-5 mt-10  text-white rounded-lg">Upload</button>
      </div>
    </form>
      
    </div>
    </div>
  )
}
export default page