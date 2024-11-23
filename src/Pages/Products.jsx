import {useRef, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import pipeSmall from "../assets/Products/pipesSmall.svg"
import pipeMedium from "../assets/Products/pipesMedium.svg"
import pipeLarge from "../assets/Products/pipesLarge.svg"
import pipeSquare from "../assets/Products/pipesSquare.svg"
import tata from "../assets/Products/tataSteel.png"
import jindal from "../assets/Products/JSL-Black-1.jpg"
import fortune from "../assets/Products/fortune.jpg"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Marquee from 'react-fast-marquee'
import AOS from "aos"
import "aos/dist/aos.css"

function Products() {
  const productSection=useRef(null);
  const location=useLocation();

  useEffect(() =>{
    if(location.hash==="#products"&&productSection.current)
    {
      productSection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location])
  useEffect(()=>{
    AOS.init({duration:1000})
    AOS.refresh()
  })

  return (
    <div ref={productSection} className='px-5 sm:px-10 md:px-20 py-20 font-[poppins] overflow-hidden'>
      <div className='' data-aos="fade-right">
        <p className='text-[#eb2348] uppercase font-bold text-2xl md:text-3xl text-center'>Our Products</p>
      </div>
      <Marquee  data-aos="fade" autoFill={true} gradient gradientColor='white' gradientWidth={10} speed={80} className='mb-10'>
        <img src={tata} alt="tataSteel" className='w-20 sm:w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-7 sm:h-10 m-2 sm:m-5 rounded-md' />
        <img src={jindal} alt="jindalSteel" className='w-20 sm:w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-7 sm:h-10 m-2 sm:m-5 rounded-md' />
        <img src={fortune} alt="fortuneSteel" className='w-20 sm:w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-7 sm:h-10 m-2 sm:m-5 rounded-md' />
      </Marquee>
      <div className='flex items-center justify-center flex-wrap flex-row gap-10'>
        <div data-aos="fade-right" className='flex items-center justify-center flex-wrap flex-row gap-10'>
          <div className='w-60 h-32 md:w-72 md:h-40 p-5 bg-[#f6f6f6] rounded-lg relative overflow-hidden flex items-center justify-end hover:border-b-4 hover:border-[#eb2348] transition-all duration-500' style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.25)"}}>
            <img src={pipeSmall} alt="smallPipe" className='absolute scale-90 md:scale-100 -left-36 -bottom-[50%] rotate-[30deg]'/>
            <div>
              <p className='font-bold text-sm sm:text-base'>Small Pipes</p>
              <p className='font-light text-[0.7rem]'>15mm to 50mm</p>
              <Link to="#gallery" className='font-bold text-[#eb2348] text-sm'>
                View 
                <FontAwesomeIcon icon={faChevronRight} className='text-[0.6rem] mb-0.5 ml-2'/>
              </Link>
            </div>
          </div>
          <div className='w-60 h-32 md:w-72 md:h-40 p-5 bg-[#f6f6f6] rounded-lg relative overflow-hidden  flex items-center justify-end hover:border-b-4 hover:border-[#eb2348] transition-all duration-500' style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.25)"}}>
            <img src={pipeMedium} alt="mediumPipe" className='absolute -left-32 -bottom-[50%] rotate-[20deg]'/>
            <div>
              <p className='font-bold text-sm sm:text-base'>Medium Pipes</p>
              <p className='font-light text-[0.7rem]'>51mm to 200mm</p>
              <Link to="#gallery" className='font-bold text-[#eb2348] text-sm'>
                View 
                <FontAwesomeIcon icon={faChevronRight} className='text-[0.6rem] mb-0.5 ml-2'/>
              </Link>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left" className='flex items-center justify-center flex-wrap flex-row gap-10 '>
          <div className='w-60 h-32 md:w-72 md:h-40 p-5 bg-[#f6f6f6] rounded-lg relative overflow-hidden  flex items-center justify-end hover:border-b-4 hover:border-[#eb2348] transition-all duration-500' style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.25)"}}>
            <img src={pipeLarge} alt="LargePipe" className='absolute -left-28 -bottom-[35%] rotate-[20deg]'/>
            <div>
              <p className='font-bold text-sm sm:text-base'>Large Pipes</p>
              <p className='font-light text-[0.7rem]'>201mm to 400mm</p>
              <Link to="#gallery" className='font-bold text-[#eb2348] text-sm'>
                View 
                <FontAwesomeIcon icon={faChevronRight} className='text-[0.6rem] mb-0.5 ml-2'/>
              </Link>
            </div>
          </div>
          <div className='w-60 h-32 md:w-72 md:h-40 p-5 bg-[#f6f6f6] rounded-lg relative overflow-hidden  flex items-center justify-end hover:border-b-4 hover:border-[#eb2348] transition-all duration-500' style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.25)"}}>
            <img src={pipeSquare} alt="squarePipe" className='absolute -left-28 -bottom-[50%] rotate-[20deg]'/>
            <div>
              <p className='font-bold text-sm sm:text-base'>Square Pipes</p>
              <Link to="#gallery" className='font-bold text-[#eb2348] text-sm'>
                View 
                <FontAwesomeIcon icon={faChevronRight} className='text-[0.6rem] mb-0.5 ml-2'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className='flex items-center justify-center flex-col my-10'>
        <div className='text-center font-[poppins]'>
          <p className='text-[#eb2348] font-semibold text-xl md:text-2xl mb-5'>Our Trusted Brands</p>
          <p className='font-medium'>At Sree Rama Krishna Engineering Works, we take pride in offering high-quality products sourced from leading manufacturers</p>
        </div>
        <div className='flex items-center justify-center flex-wrap flex-row gap-5 mt-5'>
          <img src={tata} alt="tataSteel" className='w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-14 rounded-md' />
          <img src={jindal} alt="jindalSteel" className='w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-14 rounded-md' />
          <img src={fortune} alt="fortuneSteel" className='w-32 shadow-md shadow-[rgba(0,0,0,0.3)] h-14 rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default Products