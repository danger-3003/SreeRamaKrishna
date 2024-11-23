import {useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Bg from "../assets/WhyUs/background.jpg"
import AOS from "aos"
import "aos/dist/aos.css"

function WhyUs() {
  const whySection=useRef(null);
  const location=useLocation();

  useEffect(() =>{
    if(location.hash==="#why"&&whySection.current)
    {
      whySection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location])
  useEffect(()=>{
    AOS.init({duration:1000});
    AOS.refresh();
  })

  return (
    <div ref={whySection} className=' pt-20 pb-10 sm:py-20 flex items-center justify-center flex-col font-[poppins]' style={{background:`linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${Bg})`,backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover"}}>
      <div  data-aos="fade-right" className='mb-5'>
        <p className='text-[#eb2348] uppercase font-bold text-3xl md:text-4xl text-center font-[Playfair]'>Why Choose Us?</p>
      </div>
      <div  data-aos="fade" className='flex items-start justify-center flex-row flex-wrap'>
        <div className='w-60 text-white text-center my-5 px-5 md:px-0 sm:mx-7'>
          <p className='text-[#65c8ff] font-semibold text-lg'>Top-Notch Quality</p>
          <p className='font-extralight mt-3 text-sm'>We offer products sourced from the best brands like Jindal, Fortune, and Tata, ensuring superior strength and reliability.</p>
        </div>
        <div className='w-60 text-white text-center my-5 px-5 md:px-0 sm:mx-7'>
          <p className='text-[#65c8ff] font-semibold text-lg'>Affordable Pricing</p>
          <p className='font-extralight mt-3 text-sm'>Affordable pricing with uncompromised quality for reliable project solutions.</p>
        </div>
        <div className='w-60 text-white text-center my-5 px-5 md:px-0 sm:mx-7'>
          <p className='text-[#65c8ff] font-semibold text-lg'>Customer Focus</p>
          <p className='font-extralight mt-3 text-sm'>Tailored solutions designed to meet the specific requirements of your unique projects with precision.</p>
        </div>
        <div className='w-60 text-white text-center my-5 px-5 sm:px-0 sm:mx-7'>
          <p className='text-[#65c8ff] font-semibold text-lg'>Timely Deliveries</p>
          <p className='font-extralight mt-3 text-sm'>Efficient logistics ensure timely delivery of materials exactly when and where you need them.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs