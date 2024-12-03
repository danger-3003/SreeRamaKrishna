import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import { faMobileAlt, faEnvelope, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../assets/LogoName.svg"
import Bg from "../assets/Gallery/insideEight.jpg"
import axios from "axios"

function Footer() {
  const [mobile,setMobile]=useState({});
  useEffect(()=>{
    axios.get('https://api.cosmicjs.com/v3/buckets/sree-rama-krishna-production/objects/674abad33dbd639ab303fe08?pretty=true&read_key=gAWSPSpeztGYsLXlFRfFCk1Db1TC4VYHE66zef4zjn8cp3h3Vo&depth=1&props=slug,title,metadata,type')
    .then((res)=>{setMobile(res.data.object.metadata)})
    .catch((err)=>{console.log(err)});
  },[]);

  return (
    <div className="pt-10 pb-20 flex items-center justify-between flex-col px-5 md:px-10 text-black font-[poppins]" style={{background:`linear-gradient(to right,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(${Bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
      <div>
        <ul className={`flex items-center justify-center flex-wrap flex-row gap-5 pb-10 uppercase font-medium text-sm lg:text-base transition-all duration-500`}>
          <li className='hover:text-[#eb2348]'><Link to="/#home">Home</Link></li>
          <li className='hover:text-[#eb2348]'><Link to="/#about">About</Link></li>
          <li className='hover:text-[#eb2348]'><Link to="/#products">Products</Link></li>
          <li className='hover:text-[#eb2348]'><Link to="/#why">Why Us</Link></li>
          <li className='hover:text-[#eb2348]'><Link to="/#gallery">Gallery</Link></li>
          <li className='hover:text-[#eb2348]'><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
      <div className='flex items-center justify-center sm:justify-between gap-10 sm:gap-0 flex-row flex-wrap w-full'>
        <div>
          <img src={Logo} alt="Logo" className='w-64 lg:w-72'/>
        </div>
        <div className=' xl:pr-20 w-64 lg:w-80 xl:w-96'>
          <p className='text-[#eb2348] font-semibold text-2xl my-2 text-center sm:text-left'>Contact Us</p>
          <div className='flex items-start justify-center flex-col gap-2'>
            <div className="text-center sm:text-left">
              <FontAwesomeIcon icon={faMapLocation} className=' mr-3'/>
              <a href='https://maps.app.goo.gl/48d27uGFtwf6K5y26' target='_blank'>plot no. 137 to 140, 'B' block, Canara Bank Road, AutoNagar, Gajuwaka, Visakhapatnam, 530012.</a>
            </div>
            <div className="text-center sm:text-left w-full">
              <FontAwesomeIcon icon={faWhatsapp} className='text-green-800 mr-3'/>
              <a href={`https://api.whatsapp.com/send?phone=${mobile.phone_number_1}`} target='_blank'>+91 {mobile.phone_number_1}</a>
            </div>
            <div className="text-center sm:text-left w-full">
              <FontAwesomeIcon icon={faMobileAlt} className=' mr-3'/>
              <a href={`tel:${mobile.phone_number_2}`}>+91 {mobile.phone_number_2}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer