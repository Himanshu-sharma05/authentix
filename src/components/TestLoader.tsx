'use client'

import { useEffect } from "react"



const TestLoader =  ({setStatus}:any) => {
    useEffect(()=>{
        setTimeout(() => {
            setStatus('Scanned');
        }, 3000);
    })
  return (
    <div className="h-full w-full bg-amber-400">
        <div>Hello loading</div>
    </div>
  )
}
export default TestLoader