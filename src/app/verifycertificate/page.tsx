"use client"
import { FileUploadDemo } from "@/components/FileDrop"
import SignupFormDemo from "@/components/signup-form-demo"
 import { GeistSans } from 'geist/font/sans';
import { useEffect, useState } from "react"

const page = () => {
  const [choice,setChoice] = useState<'upload' | 'manual'>("upload");
  return (
    <div className="p-20 py-10 flex flex-col justify-center items-center">
        <div className={" text-5xl font-medium text-center text-neutral-950 dark:text-neutral-100 " + GeistSans.className}>
            Verify your certificates with ease
        </div>
        <div className="text-gray-500 mt-5 text-center w-150">Easily confirm the authenticity of any certificate issued through our platform
using our secure and user-friendly verification system.</div>
        
          
        <div className="w-1/2 mt-10 shadow-sm dark:shadow-none">
            <FileUploadDemo/>
        </div>
        
        
    </div>
  )
}
export default page
