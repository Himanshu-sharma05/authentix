'use client'
import { CardSpotlight } from "@/components/ui/card-spotlight";
import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { GeistSans } from "geist/font/sans";

const ChooseUs = () => {
  return (
    <div className="p-20 h-screen w-fit mx-auto dark:text-neutral-100">
        <div className={"text-5xl text-center font-bold  " + GeistSans.className }>
            Why Choose CredVerify Academia?
        </div>
        <div className="text-2xl w-200 mx-auto text-center mt-5">Our platform combines cutting-edge technology with institutional trust to deliver the most reliable certificate verification solution.</div>
        <div className="mt-20 grid-cols-2 grid px-20 gap-8">
          <div className="card flex gap-5 w-auto py-5 px-7 dark:border-1 dark:border-white shadow-sm hover:shadow-lg transition-shadow duration-100 ease-in-out rounded-2xl">
            <div className="left">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#31fc53" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
            </div>
            <div className="right">
              <div className="title font-bold text-xl">Blockchain Security</div>
            <div className="heading text-neutral-600 ">Every certificate is secured with immutable blockchain technology ensuring tamper-proof verification.</div>
            </div>
            
          </div>
          <div className="card flex gap-5 w-auto py-5 px-7 dark:border-1 dark:border-white shadow-sm hover:shadow-lg transition-shadow duration-100 ease-in-out rounded-2xl">
            <div className="left">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dffd49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>            </div>
            <div className="right">
              <div className="title font-bold text-xl">Instant Verification</div>
            <div className="heading text-neutral-600 ">Get verification results in seconds using advanced OCR and AI-powered document analysis.</div>
            </div>
            
          </div>
          <div className="card flex gap-5 w-auto py-5 px-7 dark:border-1 dark:border-white shadow-sm hover:shadow-lg transition-shadow duration-100 ease-in-out rounded-2xl">
            <div className="left">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7e14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-badge-icon lucide-file-badge"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"/><circle cx="5" cy="14" r="3"/></svg>            </div>
            <div className="right">
              <div className="title font-bold text-xl">Multi-Format Support</div>
            <div className="heading text-neutral-600 ">Support for all certificate formats - PDFs, scanned images, and digital documents.</div>
            </div>
            
          </div>
          <div className="card flex gap-5 w-auto py-5 px-7 dark:border-1 dark:border-white shadow-sm hover:shadow-lg transition-shadow duration-100 ease-in-out rounded-2xl">
            <div className="left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e53f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <div className="right">
              <div className="title font-bold text-xl">Trusted by Institutions</div>
            <div className="heading text-neutral-600 ">Over 500+ educational institutions and employers trust our verification platform.

</div>
            </div>
            
          </div>
        </div>
        
    </div>
  )
}
export default ChooseUs


