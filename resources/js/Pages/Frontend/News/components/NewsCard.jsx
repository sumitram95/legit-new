import NoTableData from "@/Components/table/NoTableData";
import { Link } from "@inertiajs/react";
import React from "react";
import NoImage from "@/assets/images/no-image/no-image.png";


export default function NewsCard({ newsLists = [] }) {
    console.log(newsLists);
    return (
        <div className="">
            {newsLists.map((newsList, index) => (
                <div
                    className="max-w-sm px-5 w-full lg:max-w-full lg:flex border-b  border-gray-400 pb-5 lg:border-gray-300 bg-white mt-5"
                    key={index}
                >
                    {newsList.thumbnail?.path ? (
                        // <img
                        //     className="rounded-t-lg h-44"
                        //     src={`/storage/${newsList.thumbnail?.path}`}
                        //     alt="no-image"
                        // />
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage: `url("/storage/${newsList.thumbnail?.path}")`,
                            }}
                            title="Woman holding a mug"
                        ></div>
                    ) : (
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex justify-center items-center">
                             <img src={NoImage} alt="" srcset="" className="h-[100px] w-[80px]" />
                        </div>
                    )}

                    <div className=" p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                {newsList.upload_date}
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">
                                <Link
                                    href={route("news.single", newsList.id)}
                                    className="hover:underline"
                                >
                                    {newsList.title ?? ""}
                                </Link>
                            </div>
                            {/* <p className="text-gray-700 text-base">
                                {newsList.description ?? ""}
                            </p> */}
                            <div
                                className="text-gray-700 text-base"
                                dangerouslySetInnerHTML={{
                                    __html: newsList.description ?? "",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}

            {newsLists.length == 0 && (
                // <div className="flex items-center h-full w-full justify-center mt-5 pb-5">
                //     <h1 className=" text-xl text-primary">
                //         There are no news lists
                //     </h1>
                // </div>
                <NoTableData noTableDataTitle={"no data found"} />
            )}
        </div>
    );
}
