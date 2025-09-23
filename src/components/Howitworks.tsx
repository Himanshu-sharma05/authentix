'use client'
import { HoverEffect } from "./ui/card-hover-effect";
const Howitworks = () => {
  return (
    <div className="py-10">
        <div className="text-center text-4xl font-[Poppins] font-bold">How it Works</div>
        <div className="text-2xl text-muted-foreground mt-5 text-center text-balance">Three simple steps to verify any academic certificate with complete confidence.</div>
        
        <div>
            <CardHoverEffectDemo/>
        </div>
        <hr />
    </div>
  )
}
export default Howitworks

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Upload Certificate",
    description:
      "Upload PDF, image, or scan of any academic certificate. Our system supports all formats.",
    link: "",
  },
  {
    title: "Ai Analyses",
    description:
      "Advanced OCR extracts data while AI algorithms check for authenticity markers and fraud indicators.",
    link: "",
  },
  {
    title: "Instant Results",
    description:
      "Get comprehensive verification report with blockchain-backed certificate of authenticity.",
    link: "",
  },
  
];