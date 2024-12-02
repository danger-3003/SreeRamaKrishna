import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Gallery() {
    const gallerySection = useRef(null);
    const location = useLocation();
    const [galleryData, setGalleryData]=useState({});

    useEffect(() => {
        if (location.hash === "#gallery" && gallerySection.current) {
            gallerySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });
    useEffect(() => {
        axios.get('https://api.cosmicjs.com/v3/buckets/sree-rama-krishna-production/objects/674ad5683dbd639ab303fe31?pretty=true&read_key=gAWSPSpeztGYsLXlFRfFCk1Db1TC4VYHE66zef4zjn8cp3h3Vo&depth=1&props=slug,title,metadata,type')
        .then((res)=>{setGalleryData(res.data.object.metadata)})
        .catch((err)=>{console.log(err)});
    }, []);

    return (
        <div
            ref={gallerySection}
            className="pt-20 pb-10 md:py-20 px-5 sm:px-10 overflow-hidden"
        >
            <div data-aos="fade-right" className="">
                <p className="text-[#eb2348] uppercase font-bold text-2xl md:text-3xl text-center">
                    Our Gallery
                </p>
            </div>
            <div className="flex flex-wrap flex-row items-center justify-center mt-5">
                <div
                    data-aos="fade-up"
                    className="flex flex-col items-center justify-center"
                >
                    <img
                        src={galleryData.image_1}
                        alt="ImageOne"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_2}
                        alt="ImageTwo"
                        className="h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_3}
                        alt="ImageThree"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                </div>
                <div
                    data-aos="fade-down"
                    className="flex flex-col items-center justify-center"
                >
                    <img
                        src={galleryData.image_4}
                        alt="ImageFive"
                        className="h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_5}
                        alt="ImageSix"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_6}
                        alt="ImageFour"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                </div>
                <div
                    data-aos="fade-up"
                    className="sm:flex flex-col items-center justify-center hidden"
                >
                    <img
                        src={galleryData.image_7}
                        alt="ImageSeven"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_8}
                        alt="ImageOne"
                        className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                    <img
                        src={galleryData.image_1}
                        alt="ImageEight"
                        className="h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
