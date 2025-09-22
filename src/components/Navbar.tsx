import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <div className="py-8 px-30 flex items-center justify-between ">
        <div className="left-side">
        <Link href={'/'}>
        <div className="logo font-[Poppins] font-bold ">LOGO</div>
        </Link>
        </div>

        <div className="center  flex gap-5 text-gray-500 font-[Poppins] font-thin text-sm dark:text-white ">
            
            <Link className="dark:hover:bg-gray-50/10 hover:bg-gray-100 hover:text-black dark:hover:text-white rounded-lg px-5 py-2" href={'/verifycertificate'}>Verify certificate</Link>
            <Link className="dark:hover:bg-gray-50/10 hover:bg-gray-100 hover:text-black dark:hover:text-white rounded-lg px-5 py-2" href={'/'}>Institutions</Link>
            <Link className="dark:hover:bg-gray-50/10 hover:bg-gray-100 hover:text-black dark:hover:text-white rounded-lg px-5 py-2" href={'/'}>Dashboard</Link>
            <Link className="dark:hover:bg-gray-50/10 hover:bg-gray-100 hover:text-black dark:hover:text-white rounded-lg px-5 py-2" href={'/'}>About</Link>
            <Link className="dark:hover:bg-gray-50/10 hover:bg-gray-100 hover:text-black dark:hover:text-white rounded-lg px-5 py-2" href={'/'}>Contact</Link>
        </div>

        <div className="right-side flex items-center justify-around gap-5"> 
        <div>
            <ModeToggle/>
        </div>
        <div className="auth flex gap-3">
            <button className="px-5 py-2  hover:bg-gray-100 rounded-3xl dark:hover:bg-gray-50/10 text-sm ">Login</button>
            <button className="px-5 py-2  bg-black rounded-3xl text-white text-sm dark:bg-white/10 dark:hover:bg-black dark:border-1 dark:border-gray-100 ">Signup</button>
            
        </div>
        </div>
    </div>
  )
}
export default Navbar