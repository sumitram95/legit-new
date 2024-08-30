import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";
import Input from "@/Components/Input";
import PaginationPage from "@/Components/table/PaginationPage";
import Subscription from "../Subscription";

export default function Mobile({
    is_favorite,
    aiPolicies,
    countries,
    statuses,
    tableData: initialTableData,
    countrywithStatus: initialCountrywithStatus,
}) {
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

    // Clear Filter
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

    console.log("tableData : ", tableData);

    return (
        <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
            <div className="md:border-b flex md:hidden border-light-border pb-4 justify-between items-center">
                <div>
                    <div>
                        <p className="font-bold text-primary-light text-lg">
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
                            <span>Back to full list of AI Policy</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="block sm:block md:block xl:flex gap-[30px]">
                {/* Search Component */}
                <div className="block order-1 mb-5 xl:mt-0 lg:mt-0 xl:order-2 lg:block md:block sm:block xl:block xl:w-[16.67%]">
                    <div className="border rounded-md w-full bg-white sticky top-0">
                        <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                            <div className="flex items-center justify-between w-full">
                                <p className="font-bold text-primary-light text-lg leading-none">
                                    Filters
                                </p>

                                <div className="flex">
                                    {isDropdownOpen && (
                                        <button
                                            className="button-wthout-border flex items-center gap-2 text-light-blue"
                                            onClick={handleClearFilters}
                                        >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                className="bi-x-square b-icon bi"
                                            >
                                                <title>Clear</title>
                                                <g>
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                </g>
                                            </svg>
                                            <span>Clear</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={toggleDropDown}
                                        className="text-primary font-medium rounded-lg text-sm block md:hidden"
                                        type="button"
                                    >
                                        <i className="fa-solid ms-3 text-primary fa-angle-down"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <div className="px-[16px] my-5">
                                <form className="w-full" id="FormFiled">
                                    <div>
                                        <SelectInput
                                            label="AI Policy Name"
                                            options={aiPolicies.map(
                                                (policy) => ({
                                                    value: policy.value,
                                                    label: policy.label,
                                                })
                                            )}
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
                                            options={countries.map(
                                                (country) => ({
                                                    value: country.value,
                                                    label: country.label,
                                                })
                                            )}
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
                        )}
                    </div>
                </div>

                {/* content */}
                {/* {tableData.data.map((list) => (
                    <div className="bg-white rounded-md py-3" key={list.id}>
                        <div className="border-b-2 pb-4 px-5">
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    {list.ai_policy_name}
                                    <i className="fa-regular fa-star"></i>
                                </p>
                            </div>
                            <div className="flex mt-3 gap-5 text-sm">
                                <div className="w-1/2">
                                    <div>
                                        <p className="text-muted-light">
                                            Country/Region
                                        </p>
                                    </div>
                                    <div className="mt-1">
                                        <p>{list.country_name}</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div>
                                        <p className="text-muted-light">
                                            Status
                                        </p>
                                    </div>
                                    <div className="mt-1">
                                        <p>{list.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="py-3">
                                <div>
                                    <p className="text-muted-light text-sm">
                                        Technology Partner
                                    </p>
                                </div>
                                <div className="flex mt-1 gap-3 items-center text-sm">
                                    <p>{list.technology_partners}</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <div>
                                    <p className="text-muted-light text-sm">
                                        Announcement Year
                                    </p>
                                </div>
                                <div className="flex mt-1 gap-3 items-center text-sm">
                                    <p>{list.announcement_year}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mb-5">
                                <button className="btn btn-light-primary text-primary flex gap-2 items-center">
                                    <span>
                                        <i className="fa-solid fa-file-circle-check"></i>
                                    </span>
                                    <span>View AI Policy</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
