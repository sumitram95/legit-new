import SelectInputLists from "@/Components/map/SelectInputList";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/status/Status";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NewsCard from "./components/NewsCard";

export default function News({ news }) {
    const [visibleDiv, setVisibleDiv] = useState(false);

    const filteredLabels = ["AI Policy Name", "Country / Region"];

    return (
        <AppLayout>
            <Head title="News" />
            <div className="relative top-[-50px] flex justify-center">
                <div className="rounded-md w-3/4 bg-white py-5">
                    <div className="" style={{ minHeight: "500px" }}>
                        <div className="text-gray-900 font-bold text-xl mb-2 px-5">
                            {news.title}
                            <p className="text-sm text-gray-600 flex items-center gap-2 justify-center">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                {news.upload_date ?? "-"}
                            </p>
                        </div>
                        <div className=" bg-red-50 w-full h-[400px] overflow-hidden">
                            {news.thumbnail?.path ? (
                                <img
                                    src={`/storage/${news.thumbnail?.path}`}
                                    alt="no-image"
                                    className="w-full h-full object-cover transform"
                                />
                            ) : (
                                <div className="w-full h-full flex justify-center items-center">
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
                        </div>

                        <div className="px-5 mt-5">
                            <p className="text-gray-500 text-xl">
                                {news.description ?? ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
