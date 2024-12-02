import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../assets/About/Profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Aboutdata from "./AboutData";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);
    const [aboutData, setAboutData] = useState({});

    useEffect(() => {
        if (location.hash === "#about" && aboutSection.current) {
            aboutSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });
    useEffect(() => {
        axios
            .get(
                "https://api.cosmicjs.com/v3/buckets/sree-rama-krishna-production/objects/674ab9213dbd639ab303fdfd?pretty=true&read_key=gAWSPSpeztGYsLXlFRfFCk1Db1TC4VYHE66zef4zjn8cp3h3Vo&depth=1&props=slug,title,metadata,type"
            )
            .then((res) => {
                setAboutData(res.data.object.metadata);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div
            ref={aboutSection}
            className="bg-[#f6f6f6] py-20 md:py-24 px-7 md:px-10 lg:px-20 2xl:px-20"
        >
            <div className="flex items-center justify-center flex-col sm:flex-row sm:gap-7 overflow-hidden">
                <div
                    data-aos="fade-right"
                    className="font-[poppins] basis-[60%] lg:basis-[60%]"
                >
                    <p className="text-lg sm:text-xl font-[poppins] font-semibold">
                        Welcome to{" "}
                        <span className="font-[poppins] text-[#eb2348] font-bold uppercase text-3xl md:text-4xl">
                            Sree&nbsp;Rama Krishna Engineering Company
                        </span>
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: aboutData.about }} className="mt-5 md:mt-10 mb-5 text-sm md:text-base"></p>
                </div>
                <div
                    data-aos="fade-left"
                    className="basis-[40%] mb-5 sm:mb-10 lg:basis-[40%]"
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
