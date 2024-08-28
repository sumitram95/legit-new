import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#4E87D3"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                    />
                                </svg>
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
