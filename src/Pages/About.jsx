import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../assets/About/Profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#about" && aboutSection.current) {
            aboutSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <div
            ref={aboutSection}
            className="bg-[#f6f6f6] py-20 md:py-24 px-7 md:px-10 lg:px-20 2xl:px-20"
        >
            <div className="flex items-center justify-center flex-col sm:flex-row sm:gap-7 overflow-hidden">
                <div
                    data-aos="fade-right"
                    className="font-[poppins] basis-[60%] lg:basis-auto"
                >
                    <p className="text-lg sm:text-xl font-[poppins] font-semibold">
                        Welcome to{" "}
                        <span className="font-[poppins] text-[#eb2348] font-bold uppercase text-3xl md:text-4xl">
                            Sree&nbsp;Rama Krishna Engineering Company
                        </span>
                    </p>
                    <p className="mt-5 md:mt-10 mb-5 text-sm md:text-base">
                        Established in 1960 in Nidadavolu, West Godavari, Sree
                        Rama Krishna Engineering Company was founded by
                        <span className="text-[#eb2348] font-semibold">
                            {" "}
                            Immani Vishnu Rao garu
                        </span>{" "}
                        with a vision to deliver excellence in industrial and
                        construction materials. Over the decades, we have
                        specialized in providing
                        <span className="text-[#eb2348] font-semibold">
                            {" "}
                            premium Mild Steel (M.S.), Galvanized Iron (G.I.),
                            and Square Pipes
                        </span>
                        , sourced from trusted brands like Jindal, Fortune, and
                        Tata. With branches in{" "}
                        <span className="text-[#eb2348] font-semibold">
                            Visakhapatnam, Secunderabad,
                        </span>{" "}
                        and{" "}
                        <span className="text-[#eb2348] font-semibold">
                            Rajahmundry
                        </span>
                        , we bring premium pipe solutions closer to your
                        projects and needs.
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    className="basis-[40%] mb-5 sm:mb-10 lg:basis-auto"
                >
                    <img
                        src={Profile}
                        alt="AboutImage"
                        className="w-[70vw] sm:w-auto rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[3rem] md:rounded-bl-[3rem] border-l-4 xl:border-l-8 border-[#eb2348]"
                    />
                </div>
            </div>
            <div
                data-aos="fade-up"
                className="font-[poppins] text-sm md:text-xl font-medium md:font-semibold text-center flex items-center justify-center"
            >
                <p className="sm:w-[80%] lg:w-[60%]">
                    Committed to quality, satisfaction, and timely delivery,
                    Sree Rama Krishna Engineering Company powers success with
                    tailored, high-quality solutions.
                </p>
            </div>
        </div>
    );
}

export default About;
