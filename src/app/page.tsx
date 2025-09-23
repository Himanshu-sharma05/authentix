import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ChooseUs from "@/components/ChooseUs"
import NumberSection from "@/components/NumberSection"
import Howitworks from "@/components/Howitworks"
import Testimonials from "@/components/Testimonials"
import Joinus from "@/components/Joinus"
const page = () => {
  return (
    <div >
      {/* <Navbar/> */}
      <HeroSection/>
      <hr  />
      <ChooseUs/>
      <hr />
      {/* <NumberSection/> */}
      <Howitworks/>
      <Testimonials/>
      <Joinus/>
      
    </div>
  )
}
export default page