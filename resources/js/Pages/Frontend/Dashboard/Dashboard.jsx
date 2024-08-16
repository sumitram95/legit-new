import React, { useEffect, useRef, useState } from "react";

import { MapChart } from "./components/map/MapChart";
import { AppLayout } from "@/Layouts/AppLayout";
import SelectInput from "@/Components/SelectInput";
import SelectInputLists from "@/Components/map/SelectInputList";
import Status from "@/Components/status/Status";
import { Head } from "@inertiajs/react";
import HistoricState from "./components/HistoricState";
import Table from "@/Components/table/Table";
import Columns from "@/Components/table/Columns";
import TableData from "@/Components/table/TableData";
import EditColumn from "./components/EditColumn";
import EditColumnLists from "./components/EditColumnLists";
import News from "./components/new/News";
import Description from "./components/description/Description";
import DescriptionData from "./components/description/DescriptionData";
import ContributorLists from "@/Components/contributor/ContributorList";
import ContactLists from "@/Components/contact/ContactLists";
import Organization from "./components/organization/Organization";
import organizationLogo from "@/assets/images/T4DNepal.png";
import LinkButton from "@/Components/LinkButton";

export default function Dashboard({ tableData, news }) {
    const [visibleDiv, setVisibleDiv] = useState(false);

    console.log("tableData = ", tableData.data);

    return (
        <AppLayout>
            {/* <Head title="Dashboard" /> */}
            <Head title=" " />
            <div className="relative max-w-screen-2xl top-[-50px] ">
                <div className="border rounded-md w-full bg-white py-5">
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
                                    <i className="fa-solid fa-square-xmark"></i>
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
                                    className={`fa-solid ${visibleDiv
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
                                            <div
                                                className="w-full md:w-1/2 px-3"
                                                key={index}
                                            >
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
                        className="mt-5 px-4"
                    >
                        <div className="flex justify-center items-center mb-3">
                            <div>
                                <Status />
                            </div>
                        </div>

                        {/* ********************** Rendering the MapChart component ********************** */}
                        <MapChart />
                    </div>

                    {/* Historic state */}
                    <div className="px-5 mt-4">
                        <HistoricState date={"August 2024"} />
                    </div>
                    {/* button */}
                    <div className="flex justify-between mt-5 px-5">
                        <LinkButton
                            href={route("frontend.watch_list.index")}
                            className="flex gap-2 text-red-900 items-center"
                        >
                            <i className="fa-regular fa-star"></i>
                            <span>Watchlist (0)</span>
                        </LinkButton>

                        <EditColumn EditColumnLists={EditColumnLists} />
                    </div>
                    {/* table */}
                    <Table
                        columns={Columns}
                        tableData={tableData.data}
                        btnName={"Edit Columns "}
                    />
                </div>

                {/* ********************** Rendering the News component ********************** */}
                <News news={news.data} />

                {/* ********************** Rendering the Description component ********************** */}
                {/* AIPolicyTracker Project */}
                <Description
                    dessciptionData={DescriptionData}
                    contributorLists={ContributorLists}
                    contactLists={ContactLists}
                />

                {/* ********************** Rendering the News Organization ********************** */}
                <Organization organizationLogo={organizationLogo} />
            </div>
        </AppLayout>
    );
}
