import { Link } from "@inertiajs/react";
import React from "react";

export default function NewsCard({ newsLists = [] }) {
    return (
        <div className="">
            {newsLists.map((newsList, index) => (
                <div
                    className="max-w-sm px-5 w-full lg:max-w-full lg:flex border-b  border-gray-400 pb-5 lg:border-gray-300 bg-white mt-5"
                    key={index}
                >
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('https://flowbite.com/docs/images/blog/image-4.jpg')",
                        }}
                        title="Woman holding a mug"
                    ></div>
                    <div className=" p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                05/01/24
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">
                                <Link
                                    href={route("news.single")}
                                    className="hover:underline"
                                >
                                    Can coffee make you a better developer?
                                </Link>
                            </div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {newsLists.length == 0 && (
                <div className="flex items-center h-full w-full justify-center mt-5">
                    <h1 className=" text-xl text-primary">
                        There are no news lists
                    </h1>
                </div>
            )}
        </div>
    );
}
