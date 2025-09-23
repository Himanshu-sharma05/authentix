"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const Testimonials = () => {
  return (
    <div className="h-fit p-30">
        <div className="text-center text-4xl font-[Poppins] font-bold">Trusted By professionals</div>
        <InfiniteMovingCardsDemo/>
    </div>
  )
}
export default Testimonials



export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-fit mt-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "CredVerify has transformed our hiring process. We can now verify candidates' credentials instantly with 100% confidence",
    name: "Dr. Sarah Johnson",
    title: "HR Director, TechCorp Ltd",
  },
  {
    quote:
      "The integration with our student information system was seamless. Our graduates love the instant verification feature.",
    name: "Prof. Michael Chen",
    title: "Registrar, State University",
  },
  {
    quote: "The blockchain verification gives us the security we need for regulatory compliance. Excellent platform",
    name: "Lisa Rodriguez",
    title: "Compliance Officer, FinanceGlobal",
  },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
];
