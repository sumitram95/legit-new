import SelectInputLists from "@/Components/map/SelectInputList";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/status/Status";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import NewsCard from "./components/NewsCard";

export default function News({ newsLists }) {
    const [visibleDiv, setVisibleDiv] = useState(false);

    const filteredLabels = ["AI Policy Name", "Country / Region"];

    return (
        <AppLayout>
            <Head title="News" />
            <div className="relative top-[-50px] max-auto flex justify-center">
                <div className="rounded-md w-3/4 bg-white py-5">
                    <div className="" style={{ minHeight: "500px" }}>
                        <div className="text-gray-900 font-bold text-xl mb-2 px-5">
                            Can coffee make you a better developer? Can coffee
                            make you a better developer? Can coffee make you a
                            better developer?
                            <p className="text-sm text-gray-600 flex items-center gap-2 justify-center">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                05/01/24
                            </p>
                        </div>
                        <div className=" bg-red-50 w-full h-[400px] overflow-hidden">
                            <img
                                src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                alt=""
                                className="w-full h-full object-cover transform"
                            />
                        </div>

                        <div className="px-5 mt-5">
                            <p className="text-gray-500 text-xl">
                                Blogging has been around for years and it has
                                infiltrated all areas of the internet. But still
                                many people fail to understand what a blog is
                                and how reading one can have an impact on their
                                lives.
                            </p>
                            <p className="mt-5 text-xl text-gray-500">
                                This guide aims to demystify blogging for those
                                of you who are complete beginners. We’ll cover
                                exactly what a blog is, essential structures and
                                even which platforms you can get started on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
