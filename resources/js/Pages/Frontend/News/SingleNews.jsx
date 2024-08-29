import SelectInputLists from "@/Components/map/SelectInputList";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/status/Status";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NewsCard from "./components/NewsCard";
import NoImage from "@/assets/images/no-image/no-image.png";


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
                            <div className="flex justify-between align-items-center">
                                {news.title}
                                <p className="text-sm text-gray-600 flex items-center gap-2 justify-center">
                                    <i className="fa-regular fa-clock"> </i>{" "}
                                    {news.upload_date ?? "-"}
                                </p>
                            </div>
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
                                    <img src={NoImage} alt="" srcset="" className="h-[100px] w-[80px]" />
                                </div>
                            )}
                        </div>

                        <div className="px-5 mt-5">

                            <p className="text-gray-500 text-xl" dangerouslySetInnerHTML={{ __html: news.description }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
