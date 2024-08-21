import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import artificalLogo from "@/assets/images/clients/artifical.png";
import mindBridgeLogo from "@/assets/images/clients/mind-bridge.png";
import morpheusLogo from "@/assets/images/clients/morpheus.png";
import neverMindLogo from "@/assets/images/clients/never-mind.png";
import nextMindLogo from "@/assets/images/clients/nexmind.png";

export default function Organization({ organizationLogo }) {
    const org = [1, 2, 3, 4];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: false,
        arrows: false,
        speed: 700,
    };
    return (
        <div className="bg-white h-fit p-5 rounded-md w-full mt-6">
            <div className="flex justify-between items-center pb-4">
                <div>
                    <h1 className=" text-xl font-bold mb-2">
                        Contributing Organizations
                    </h1>
                </div>
            </div>
            <Slider {...settings}>
                {/* {org.map((data, index) => (
                    <div className="mt-3" key={index}>
                        <Link hre={"/logo"} className=" w-fit">
                            <img src={organizationLogo} alt="" />
                        </Link>
                    </div>
                ))} */}

                <div className="mt-3">
                    <Link hre={"/logo"} className=" w-fit">
                        <img src={artificalLogo} alt="" />
                    </Link>
                </div>
                <div className="mt-3">
                    <Link hre={"/logo"} className=" w-fit">
                        <img src={mindBridgeLogo} alt="" />
                    </Link>
                </div>
                <div className="mt-3">
                    <Link hre={"/logo"} className=" w-fit">
                        <img src={morpheusLogo} alt="" />
                    </Link>
                </div>
                <div className="mt-3">
                    <Link hre={"/logo"} className=" w-fit">
                        <img src={neverMindLogo} alt="" />
                    </Link>
                </div>
                <div className="mt-3">
                    <Link hre={"/logo"} className=" w-fit">
                        <img src={nextMindLogo} alt="" />
                    </Link>
                </div>
            </Slider>
        </div>
    );
}
