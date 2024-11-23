import {useState} from "react";
import GalvanisedTable from "../Components/GalvanisedTable.jsx";
import MSBlackTable from "../Components/MSBlackTable.jsx";
import HollowTable from "../Components/HollowTable.jsx";
import Bg from "../assets/Home/background.jpg";

function Specifications() {
    const [galvanised, setGalvanised] = useState(false);
    const [hollow, setHollow] = useState(true);
    const [msBlack, setMSBlack] = useState(false);

    return (
        <div className="">
            <div className="pt-40 py-20 flex items-center justify-center mb-10" style={{background:`linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${Bg})`,backgroundPosition:"ceenter",backgroundSize:"cover"}}>
                <h1 className="text-[#fff] font-bold uppercase text-2xl md:text-3xl text-center">Our Product Specifications</h1>
            </div>
            <div className="px-5 md:px-10 lg:px-20 pb-10">
                <div className="flex items-center justify-center flex-row flex-wrap">
                    <div
                        className="bg-[#eb2348] px-5 py-2 m-3 text-white font-semibold rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            setGalvanised(false),
                                setHollow(true),
                                setMSBlack(false);
                        }}
                    >
                        <p>Hollow</p>
                    </div>
                    <div
                        className="bg-[#eb2348] px-5 py-2 m-3 text-white font-semibold rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            setGalvanised(true),
                                setHollow(false),
                                setMSBlack(false);
                        }}
                    >
                        <p>Galvanized</p>
                    </div>
                    <div
                        className="bg-[#eb2348] px-5 py-2 m-3 text-white font-semibold rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            setGalvanised(false),
                                setHollow(false),
                                setMSBlack(true);
                        }}
                    >
                        <p>MS Black</p>
                    </div>
                </div>
                {galvanised && <GalvanisedTable />}
                {msBlack && <MSBlackTable />}
                {hollow && <HollowTable />}
            </div>
        </div>
    );
}

export default Specifications;
