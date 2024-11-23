import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/LogoName.svg"
import LogoDark from "../assets/LogoNameDark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    // Set up the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const[menu,setMenu]=useState(false);
  const handelMenu=()=>{
    if(window.innerWidth<=768)
    {
      setMenu(!menu);
    }
  }
  
  return (
    <div className={`fixed z-10 top-0 w-full lg:px-5 ${scrollY>150?"bg-white text-[#eb2348] shadow-lg shadow-[#00000011]":"text-[#eb2348] bg-white md:bg-white"} transition-all duration-200`} style={{fontFamily:"poppins"}}>
      <div className='flex items-center justify-center md:justify-between flex-row'>
        <div onClick={handelMenu} className='w-5 left-5 absolute block md:hidden'>
          <FontAwesomeIcon icon={menu?faTimes:faBars} className={`${menu?"text-[#65c8ff]":"text-[#eb2348]"}`}/>
        </div>
        <div className=''>
          <img src={Logo} alt="Logo" className='w-24 md:ml-8 my-1' style={{filter:"drop-shadow(0px 0px 0.4px black"}}/>
        </div>
        <ul className={`flex items-center justify-center flex-col md:flex-row gap-5 absolute ${scrollY>150?"bg-white md:bg-transparent":"bg-black md:bg-transparent"} ${menu?"top-[4.5rem]":"-top-96"} py-5 left-0 w-screen md:top-0 md:py-0 md:h-auto md:w-auto md:relative uppercase font-medium text-sm lg:text-base transition-all duration-500`}>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#home">Home</Link></li>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#about">About</Link></li>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#products">Products</Link></li>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#why">Why Us</Link></li>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#gallery">Gallery</Link></li>
          <li className='hover:text-[#65c8ff]' onClick={handelMenu}><Link to="/#contact">Contact</Link></li>
        </ul>
        <Link to="/#contact" className='right-5 absolute md:relative text-white bg-[#eb2348] p-1.5 px-3 rounded-md flex items-center justify-center gap-2'>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className='hidden sm:block'>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar