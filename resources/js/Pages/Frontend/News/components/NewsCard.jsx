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
                    className="px-[10%] lg:px-5 w-full lg:max-w-full lg:flex border-b border-gray-400 pb-5 lg:border-gray-300 bg-white mt-5"
                    key={index}
                >
                    {newsList.thumbnail?.path ? (
                        <div className="lg:w-[25%]">
                            <div className="max-h-[200px]">
                                <img className="w-full h-full object-cover" src={`/storage/${newsList.thumbnail?.path}`} alt="" srcset="" />
                            </div>

                        </div>
                    ) : (
                        <div className="lg:w-[25%]">
                            <div className="h-48 ">
                                <div className="flex justify-center">
                                    <img src={NoImage} alt="" srcset="" className="max-h-[200px] max-w-[90px] object-cover" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="lg:w-[75%] p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                {newsList.upload_date}
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2 truncate">
                                <Link
                                    href={route("news.single", newsList.id)}
                                    className="hover:underline"
                                >
                                    {newsList.title ?? ""}
                                </Link>
                            </div>
                            <div
                                className="text-gray-700 text-base truncate"
                                dangerouslySetInnerHTML={{
                                    __html: newsList.description ?? "",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}

            {newsLists.length == 0 && (
                <NoTableData noTableDataTitle={"no data found"} />
            )}
        </div>
    );
}
