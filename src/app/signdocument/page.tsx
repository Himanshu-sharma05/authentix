"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
 import { GeistSans } from 'geist/font/sans';
import { useEffect, useState } from "react"

const page = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };
  
  
  const handleUpload = async (e: any) => {
  e.preventDefault();

  if (!file) {
    setUploadStatus('No file selected.');
    return;
  }

  const formData = new FormData();
  formData.append('pdf', file); // 👈 Make sure this key matches your backend (it does)

  try {
    const response = await fetch('http://localhost:3002/sign', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Convert the response into a Blob (binary file)
      const blob = await response.blob();

      // Create a download link for the blob
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'signature.sig'; // 👈 This is the filename for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url); // Clean up

      setUploadStatus('Upload & download successful!');
    } else {
      setUploadStatus('Upload failed.');
    }
  } catch (error) {
    console.error('Error:', error);
    setUploadStatus('Error uploading file.');
  }
};


  return (
    <div className="px-40">
      <div className="p-20 py-10 flex flex-col justify-center items-center">
        <div className={" text-5xl font-medium text-center text-neutral-950 dark:text-neutral-100 " + GeistSans.className}>
            Sign your document with ease
        </div>
        <div className="text-gray-500 mt-5 text-center w-150">Easily confirm the authenticity of any certificate issued through our platform
using our secure and user-friendly verification system.</div>
    </div>
    <div className="w-1/4 ">
    <form action="" onSubmit={handleUpload}>
      <div className="grid w-full  items-center gap-3">
      <Label htmlFor="certificate" className="font-bold p-3">Upload Certificate</Label>
      <Input id="certificate" name="pdf" type="file" onChange={handleFileChange} required />
    </div>
      <button type="submit" className="bg-black py-2 px-5 mt-5 text-white rounded-lg">Upload</button>
    </form>
      
    </div>
    </div>
  )
}
export default page





