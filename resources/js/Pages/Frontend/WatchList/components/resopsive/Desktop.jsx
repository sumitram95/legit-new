import React, { useState } from "react";
import SelectInputLists from "@/Components/map/SelectInputList";
import { Head, Link } from "@inertiajs/react";
import Table from "@/Components/table/Table";
import Columns from "@/Components/table/Columns";

import Subscription from "../Subscription";
import PaginationPage from "@/Components/table/PaginationPage";
import SelectInput from "@/Components/SelectInput";
import { useEffect } from "react";
import Input from "@/Components/Input";
import EditColumn from "@/Pages/Frontend/Dashboard/components/EditColumn";
import EditColumnLists from "@/Pages/Frontend/Dashboard/components/EditColumnLists";

export default function Desktop({
    // tableData,
    is_favorite,
    aiPolicies,
    countries,
    statuses,
    tableData: initialTableData,
    countrywithStatus: initialCountrywithStatus,
}) {
    const [visibleDiv, setVisibleDiv] = useState(false);

    // const [countrywithStatus, setCountrywithStatus] = useState(
    //     initialCountrywithStatus
    // );

    const [tableData, setTableData] = useState(initialTableData); // Initialize with the prop data

    useEffect(() => {
        // Update the state if the initialTableData prop changes
        setTableData(initialTableData);
    }, [initialTableData]);

    const [filters, setFilters] = useState({
        AI_Policy_Name: [],
        country_id: [],
        status_id: [],
        announcement_year: "",
    });

    const handleFilterChange = (name, selectedOptions) => {
        const value = selectedOptions
            ? selectedOptions.map((option) => option.value)
            : [];
        setFilters((prevFilters) => {
            const updatedFilters = {
                ...prevFilters,
                [name]: value,
            };
            fetchData(updatedFilters); // Fetch data after updating filters
            return updatedFilters;
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => {
            const updatedFilters = {
                ...prevFilters,
                [name]: value,
            };
            fetchData(updatedFilters); // Fetch data after updating filters
            return updatedFilters;
        });
    };

    const fetchData = async (updatedFilters) => {
        try {
            const queryParams = new URLSearchParams(updatedFilters).toString();
            const response = await fetch(
                `${route("frontend.watch_list.filtered")}?${queryParams}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = await response.json();
            setTableData(result); // Update the tableData state
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }
    };

    //****************** Clear Filter ******************* */
    const handleClearFilters = () => {
        const clearedFilters = {
            AI_Policy_Name: [],
            country_id: [],
            status_id: [],
            announcement_year: "",
        };

        setFilters(clearedFilters);
        fetchData(clearedFilters); // Fetch data with cleared filters
    };

    // edit column
    const [checkedColumns, setCheckedColumns] = useState([]);

    // Callback function to handle checkbox changes
    const handleCheckboxChange = (checkedItems) => {
        setCheckedColumns(checkedItems);
    };

    // for mobile view (filter box)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Function to check screen size and set dropdown open state
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            // Considering 'md' as 768px breakpoint
            setDropdownOpen(true);
        } else {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Set dropdown state based on initial screen size
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="content-wrapper relative top-[-60px]">
            <div className="flex gap-[30px]">
                <div className="w-full lg:w-[83.33%]">
                    <div className="w-full border rounded-md bg-white">
                        <div className="border-b-2 p-[16px]  pb-4 px-5 flex justify-between items-center">
                            <div>
                                <div>
                                    <p className="font-bold text-primary text-lg">
                                        WatchList
                                    </p>
                                </div>
                                <div className="flex gap-5 mt-3 text-sm">
                                    <Link
                                        href={"/"}
                                        className=" text-sm flex gap-2 hover:underline"
                                    >
                                        <span>
                                            <i className="fa-regular fa-circle-left"></i>
                                        </span>
                                        <span>
                                            Back to full list of AI Policy
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            {/* show filter */}
                            {/* <div className="flex gap-3">
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
                </div> */}
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
                                                            SelectInputLists
                                                                .lists[index]
                                                        }
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="mt-5 flex justify-end px-5">
                            <EditColumn
                                EditColumnLists={EditColumnLists}
                                onCheckboxChange={handleCheckboxChange}
                            />
                        </div>

                        {/* table */}
                        <Table
                            columns={Columns}
                            tableData={tableData.data}
                            favourite={is_favorite}
                            checkedColWithData={checkedColumns}
                        />

                        {tableData.data.length > 10 && (
                            <PaginationPage paginator={tableData} />
                        )}
                    </div>
                </div>

                {/* ********************** Search Comonent (desktop) ********************** */}
                <div className="hidden lg:block lg:w-[16.67%]">
                    <div className="border rounded-md w-full bg-white sticky top-0">
                        <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                            <div className="flex items-center justify-between w-full">
                                <p className="font-bold text-primary text-lg leading-none">
                                    Filters
                                </p>
                                <button
                                    className="button-wthout-border flex items-center gap-2"
                                    onClick={handleClearFilters}
                                >
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
                                    <span className="ui-clear-button_text">
                                        Clear
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="px-[16px] my-5">
                            <form className="w-full" id="FormFiled">
                                <div>
                                    <SelectInput
                                        label="AI Policy Name"
                                        options={aiPolicies.map((policy) => ({
                                            value: policy.value,
                                            label: policy.label,
                                        }))}
                                        value={filters.AI_Policy_Name}
                                        onChange={(selectedOptions) =>
                                            handleFilterChange(
                                                "AI_Policy_Name",
                                                selectedOptions
                                            )
                                        }
                                    />

                                    <SelectInput
                                        label="Country / Region"
                                        options={countries.map((country) => ({
                                            value: country.value,
                                            label: country.label,
                                        }))}
                                        value={filters.country_id}
                                        onChange={(selectedOptions) =>
                                            handleFilterChange(
                                                "country_id",
                                                selectedOptions
                                            )
                                        }
                                    />

                                    <SelectInput
                                        label="Status"
                                        options={statuses.map((status) => ({
                                            value: status.value,
                                            label: status.label,
                                        }))}
                                        value={filters.status_id}
                                        onChange={(selectedOptions) =>
                                            handleFilterChange(
                                                "status_id",
                                                selectedOptions
                                            )
                                        }
                                    />

                                    <Input
                                        name="announcement_year"
                                        value={filters.announcement_year}
                                        onChange={handleInputChange}
                                        htmlFor="announcement_year"
                                        label="Announcement Year"
                                        type="date"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscription */}
            {/* <Subscription className="" /> */}
        </div>
    );
}
