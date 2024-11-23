import {useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ImageOne from "../assets/Gallery/insideOne.jpg"
import ImageTwo from "../assets/Gallery/insideTwo.jpg"
import ImageThree from "../assets/Gallery/insideThree.jpg"
import ImageFour from "../assets/Gallery/insideFour.jpg"
import ImageFive from "../assets/Gallery/insideFive.jpg"
import ImageSix from "../assets/Gallery/insideSix.jpg"
import ImageSeven from "../assets/Gallery/insideSeven.jpg"
import ImageEight from "../assets/Gallery/insideEight.jpg"
import AOS from "aos"
import "aos/dist/aos.css"

function Gallery() {
  const gallerySection=useRef(null);
  const location=useLocation();

  useEffect(() =>{
    if(location.hash==="#gallery"&&gallerySection.current)
    {
      gallerySection.current.scrollIntoView({behavior:"smooth"});
    }
  },[location])
  useEffect(()=>{
    AOS.init({duration:1000});
    AOS.refresh()
  })

  return (
    <div ref={gallerySection} className='pt-20 pb-10 md:py-20 px-5 sm:px-10 overflow-hidden'>
      <div data-aos="fade-right" className=''>
        <p className='text-[#eb2348] uppercase font-bold text-2xl md:text-3xl text-center'>Our Gallery</p>
      </div>
      <div className='flex flex-wrap flex-row items-center justify-center mt-5'>
        <div data-aos="fade-up" className='flex flex-col items-center justify-center'>
          <img src={ImageOne} alt="ImageOne" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
          <img src={ImageTwo} alt="ImageTwo" className='h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
          <img src={ImageThree} alt="ImageThree" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
        </div>
        <div data-aos="fade-down" className='flex flex-col items-center justify-center'>
          <img src={ImageFive} alt="ImageFive" className='h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
          <img src={ImageSix} alt="ImageSix" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />  
          <img src={ImageFour} alt="ImageFour" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
        </div>
        <div data-aos="fade-up" className='sm:flex flex-col items-center justify-center hidden'>
          <img src={ImageSeven} alt="ImageSeven" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
          <img src={ImageOne} alt="ImageOne" className='h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
          <img src={ImageEight} alt="ImageEight" className='h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Gallery