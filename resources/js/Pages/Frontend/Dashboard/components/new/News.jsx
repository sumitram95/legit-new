import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NoImage from "@/assets/images/no-image/no-image.png";

const News = ({ news }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
        arrows: false,
    };

    return (
        <div className="bg-white h-fit pt-[16px] px-[15px] pb-[60px] rounded-md w-full mt-6">
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
            <div className="text" style={{ margin: '0 -10px' }}>
                <Slider ref={sliderRef} {...settings} className="flex gap-6 mt-5">
                    {news.map((list, index) => (
                        <div className="max-w-sm bg-white border border-gray-200" key={index}>
                            {list.thumbnail?.path ? (
                                <img
                                    className="h-50 w-full object-cover"
                            src={`/storage/${list.thumbnail?.path}`}
                            alt="News Thumbnail"
                                />
                            ) : (
                            <div className="w-full h-44 flex justify-center items-center bg-gray-100">

                               <img src={NoImage} alt="" srcset="" className="h-[100px] w-[80px]" />
                            </div>
                            )}

                            <div className="p-5">
                                <p className="text-xs mb-3 text-gray-500">
                                    <i className="fa-regular fa-clock"></i>{" "}
                                    {list.upload_date}
                                </p>

                                <h5 className="mb-2 text-sm font-bold tracking-tight text-primary truncate">
                                    <Link href={route("news.single", list.id)}>
                                        {list.title}
                                    </Link>
                                </h5>


                                <p className="mb-3 font-normal truncate" dangerouslySetInnerHTML={{ __html: list.description }}></p>
                                <Link
                                    href={route("news.single", list.id)}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary bg-secondary rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none"
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
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
};

export default News;
