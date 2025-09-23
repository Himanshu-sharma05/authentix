import Link from "next/link"

const Joinus = () => {
  return (
    <div className="p-10 px-30 h-screen">
        <div className="card dark:bg-neutral-900 rounded-2xl bg-neutral-100 w-full h-fit py-10 px-10 ">
            <div className="text-3xl font-bold text-neutral-500 dark:text-neutral-100 ">
                Ready to Secure Your Credentials?
                <span className="text-3xl font-bold text-black dark:text-white dark:font-extrabold"> Get in Touch</span>
            </div>
            <div className="text-lg font-bold text-neutral-400 w-1/2 mt-5 dark:font-light">Join thousands of institutions and professionals who trust Certify for secure, instant certificate verification.</div>
            <Link href={'/contact'}><button className="bg-neutral-950 text-white  px-10 py-3 mt-5 rounded-2xl dark:bg-white dark:text-black dark:text-sm dark:font-bold">Talk to Us</button></Link>
            
        </div>
    </div>
  )
}
export default Joinus