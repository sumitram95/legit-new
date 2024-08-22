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
    // console.log("tableData = ", tableData.data);
    return (
        <AppLayout>
            {/* <Head title="Dashboard" /> */}
            <Head title=" " />
            {/* ********************** Rendering the Main Content  ********************** */}
            <div className="content-wrapper relative top-[-60px]">
                <div className="">
                    <div>
                        <div className="flex gap-[30px]">
                            <div className="w-full lg:w-[83.33%]">
                                <div className="w-full">

                                    <div className="border rounded-md w-full bg-white ">
                                        <div className=" border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                                            <div>
                                                <div>
                                                    <p className="font-bold text-primary text-lg leading-none">
                                                        Global Artificial Intelligence (AI) Policy
                                                        Status
                                                    </p>
                                                </div>
                                                <div className="flex items-center mt-[0.5rem] text-sm">
                                                    <p className=" text-sm leading-normal text-primary-light">
                                                        Database Update:
                                                        <span className=" text-black ml-[4px]">
                                                            July 2022
                                                        </span>
                                                    </p>
                                                    <span className="date-separator"></span>
                                                    <p className=" text-sm leading-normal text-primary-light">
                                                        News Update:
                                                        <span className="text-black ml-[4px]">Aug 2024</span>
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
                                                    className="text-sm text-secondary hover:text-blue-300 lg:hidden"
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
                                                    <div className="flex">
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

                                            className="mt-5 px-4 map-chart-wrapper"
                                        >
                                            <div className="flex justify-center items-center mb-3">
                                                <div>
                                                    <Status />
                                                </div>
                                            </div>

                                            {/* ********************** Rendering the MapChart component ********************** */}
                                            <MapChart />
                                        </div>

                                        {/* ********************** Rendering the Historic state component ********************** */}
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
                                                <span>Watchlist ()</span>
                                            </LinkButton>

                                            <EditColumn EditColumnLists={EditColumnLists} />
                                        </div>

                                        {/* ********************** Rendering the AI Policy Detail (with watch list) ********************** */}
                                        <Table
                                            columns={Columns}
                                            tableData={tableData.data}
                                            btnName={"Edit Columns "}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ********************** Rendering the Filter Content [Right Sidebar] ********************** */}
                            <div className="hidden lg:block">
                                <div className="border rounded-md w-full bg-white sticky top-0">
                                    <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <p className="font-bold text-primary text-lg leading-none">Filters</p>
                                            </div>
                                            <button className="button-wthout-border flex items-center gap-2">
                                                <span className="ui-icon">
                                                    <svg
                                                        viewBox="0 0 16 16"
                                                        width="1em"
                                                        height="1em"
                                                        focusable="false"
                                                        role="img"
                                                        aria-label="x square"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        className="bi-x-square b-icon bi"
                                                    >
                                                        <title>Clear</title>
                                                        <g>
                                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="ui-clear-button_text">Clear</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="px-[16px] mt-5">
                                        <form className="w-full" id="filterData">
                                            <div className="">
                                                {SelectInputLists.labels.map(
                                                    (label, index) => (
                                                        <div
                                                            className="w-full px-3"
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
                                </div>
                            </div>
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
                </div>
            </div>
        </AppLayout>
    );
}
