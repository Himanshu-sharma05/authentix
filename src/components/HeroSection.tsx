"use client"
import { roboto } from "@/lib/fonts"
import { animate, motion } from "framer-motion";
import { GridBackgroundDemo } from "./GridBackground"
import { cn } from "@/lib/utils"
const HeroSection = () => {
  return (
    <div  className="relative py-30 h-fit w-full flex flex-col text-center " >
        
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
        <div className={"z-10 text-8xl text-center font-bold w-300 leading-23 mt-5 mx-auto " + roboto.className}>
            Detect And Prevent Fake Certificates
        </div>

        <div className="w-200 z-10 mx-auto mt-8 dark:text-gray-300 text-black/65" >
            <p className="text-2xl text-balance">Stop forged certificates with advanced AI, OCR, and real-time validation from trusted education records</p>
        </div>
        <div className="buttons mt-10 flex gap-5 mx-auto z-10">
            <button className="px-5 py-2  bg-black rounded-3xl text-white  dark:bg-white/10 dark:hover:bg-black dark:border-1 dark:border-gray-100 ">Get Started</button>
            <button className="px-5 py-2  hover:bg-gray-200 rounded-3xl dark:hover:bg-gray-50/10  ">Institution Login</button>

        </div>
    </div>
  )
}
export default HeroSection