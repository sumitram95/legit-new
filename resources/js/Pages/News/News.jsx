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
            <div className="relative top-[-50px] max-auto">
                <div className="border rounded-md w-full bg-white py-5">
                    <div className=" border-b-2 pb-4 px-5 flex justify-between items-center">
                        <div>
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    News
                                </p>
                            </div>
                            <div className="flex gap-5 mt-3 text-sm">
                                <p className=" text-sm font-thin text-primary">
                                    Sorted by date
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {visibleDiv && (
                                <button
                                    type="button"
                                    className=" hover:underline"
                                >
                                    <i class="fa-solid fa-square-xmark"></i>
                                    <span className="ml-2"> Clear filters</span>
                                </button>
                            )}
                            <button
                                onClick={() => setVisibleDiv(!visibleDiv)}
                                className="text-sm text-secondary hover:text-blue-300"
                            >
                                {!visibleDiv
                                    ? "  Show filters"
                                    : "Hide filters"}

                                <i
                                    className={`fa-solid ${
                                        visibleDiv
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    } ml-3`}
                                ></i>
                            </button>
                        </div>
                    </div>
                    {visibleDiv && (
                        <div className="px-5 w-full mt-5">
                            <form className="w-full" id="filterData">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    {filteredLabels.map((label, index) => (
                                        <div className="w-full md:w-1/2 px-3">
                                            <SelectInput
                                                key={index}
                                                label={label}
                                                listName={
                                                    SelectInputLists.lists[
                                                        index
                                                    ]
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="mt-5" style={{ minHeight: "500px" }}>
                        <NewsCard newsLists={newsLists} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
