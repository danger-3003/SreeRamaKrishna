import { useRef, useEffect } from "react";
import Bg from "../assets/Home/background.jpg";
import Van from "../assets/Home/van.png";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const homeSection = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (homeSection.current && location.hash === "#home") {
            homeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={homeSection}
                className="py-20 pt-32 md:py-40 md:pb-32"
                style={{
                    background: `linear-gradient(to right,rgba(0,0,0,0.9),rgba(0,0,0,0.6)),url(${Bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="px-5 sm:px-7 md:px-10 lg:pl-20 text-white text-center sm:text-left">
                    <p
                        data-aos="fade-right"
                        className="font-[poppins] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    >
                        Sree Rama Krishna
                        <br />
                        Engineering Company-
                    </p>
                    <p
                        data-aos="fade-right"
                        className="font-[poppins] font-extralight italic text-lg sm:text-xl"
                    >
                        Your Trusted Source for Premium Pipes and Steel.
                    </p>
                    <p
                        data-aos="fade-right"
                        className="my-10 text-base sm:text-xl md:w-[70%] lg:w-[60%]"
                    >
                        Explore high-quality Mild Steel (M.S.), Galvanized Iron
                        (G.I.), and Square Pipes for all your industrial and
                        construction needs.
                    </p>
                    <div data-aos="fade-right">
                        <Link
                            to="#products"
                            className="relative z-[1] px-6 py-2 font-bold text-[#eb2348] text-sm md:text-base group"
                        >
                            <span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 md:-translate-x-2 md:-translate-y-2 bg-[#65c8ff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full border-2 md:border-4 border-[#eb2348] rounded-lg"></span>
                            <span className="relative">Explore Us</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-black text-[#65c8ff] p-2 relative font-[poppins]">
                <div className="h-4 w-[96vw] -left-[0.5vw] top-[0.85rem] mx-[2vw] border-y-2 border-dashed border-white absolute"></div>
                <Marquee
                    gradient
                    gradientColor="black"
                    gradientWidth={20}
                    direction="left"
                    speed={100}
                    className=" overflow-hidden"
                >
                    <img src={Van} alt="van" className="h-10 -my-5" />
                    <p className="bg-black text-base md:text-xl px-4 font-bold">
                        Now delivering Our PRODUCTS allover INDIA!
                    </p>
                </Marquee>
            </div>
        </>
    );
}

export default Home;
