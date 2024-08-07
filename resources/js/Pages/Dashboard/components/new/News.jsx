import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
    const sliderRef = useRef(null);

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

    const newsList = ["1", "2", "3", "4"];

    return (
        <div className="bg-white h-fit p-5 rounded-md w-full mt-6">
            <div className="flex justify-between items-center border-b-2 pb-4">
                <div>
                    <h1 className=" text-xl font-bold mb-2">News</h1>
                    <Link href={"/news"} className="hover:underline">
                        Go to news
                        <i className="fa-regular fa-circle-right ml-2"></i>
                    </Link>
                </div>
                <div className="flex gap-6">
                    <i
                        className="fa-solid fa-left-long hover:cursor-pointer"
                        onClick={() => sliderRef.current.slickPrev()}
                    ></i>
                    <i
                        className="fa-solid fa-right-long hover:cursor-pointer"
                        onClick={() => sliderRef.current.slickNext()}
                    ></i>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className="flex gap-6 mt-5">
                {newsList.map((list, index) => (
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        key={index}
                    >

                            <img
                                className="rounded-t-lg"
                                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                                alt=""
                            />

                        <div className="p-5">
                            <p className=" text-xs mb-3">
                                <i class="fa-regular fa-clock"></i> 05/01/24
                            </p>

                                <h5 className="mb-2 text-sm font-bold tracking-tight text-primary truncate ...">
                                    Noteworthy 1 technology acquisitions 2021
                                </h5>

                            <p className="mb-3 font-normal text-primary truncate ...">
                                Here are the biggest enterprise technology
                                acquisitions of 2021 so far, in reverse
                                chronological order.
                            </p>
                            <Link
                                href={route("news.single")}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pr bg-secondary rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none"
                            >
                                Read more
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default News;
