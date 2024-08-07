import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                {org.map((data, index) => (
                    <div className="mt-3" key={index}>
                        <Link hre={"/logo"} className=" w-fit">
                            <img src={organizationLogo} alt="" />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
