import React, { useEffect, useRef, useState } from "react";

import { MapChart } from "./components/map/MapChart";
import { AppLayout } from "@/Layouts/AppLayout";
import SelectInput from "@/Components/SelectInput";
import SelectInputLists from "@/Components/map/SelectInputList";
// import Checkbox from "@/Components/Checkbox";
import Status from "@/Components/status/Status";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    const [visibleDiv, setVisibleDiv] = useState(false);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="relative">
                <div
                    className="border rounded-md w-full bg-white py-5 absolute"
                    style={{ top: "-55px", zIndex: "999" }}
                >
                    <div className=" border-b-2 pb-4 px-5 flex justify-between items-center">
                        <div>
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    Global Artificial Intelligence (AI) Policy
                                    Status
                                </p>
                            </div>
                            <div className="flex gap-5 mt-3 text-sm">
                                <p className=" text-sm">
                                    Database Update:
                                    <span className=" text-black">
                                        July 2022
                                    </span>
                                </p>
                                <p className=" text-sm">
                                    News Update:
                                    <span className="text-black">Aug 2024</span>
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
                                    {SelectInputLists.labels.map(
                                        (label, index) => (
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
                                        )
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
                    <div
                        style={{ height: "100vh", width: "100%" }}
                        className="mt-5"
                    >
                        <div className="flex justify-center items-center mb-3">
                            <div>
                                <Status />
                            </div>
                        </div>
                        <MapChart />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
