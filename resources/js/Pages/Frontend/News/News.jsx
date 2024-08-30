import SelectInputLists from "@/Components/map/SelectInputList";
import SelectInput from "@/Components/SelectInput";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NewsCard from "./components/NewsCard";
import PaginationPage from "@/Components/table/PaginationPage";
import axios from "axios";
import { isDraftable } from "immer";

export default function News({ news: initialNewsData, aiPolicies, countries }) {
    const [visibleDiv, setVisibleDiv] = useState(false);
    const [news, setNewsData] = useState(initialNewsData); // Initialize with the prop data

    const [filters, setFilters] = useState({
        AI_Policy_Name: [],
        country_id: [],
    });

    useEffect(() => {
        setNewsData(initialNewsData);
    }, [initialNewsData]);

    const handleFilterChange = (name, selectedOptions) => {
        const value = selectedOptions
            ? selectedOptions.map((option) => option.value)
            : [];
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        fetchData(updatedFilters);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        fetchData(updatedFilters);
    };

    const fetchData = async (updatedFilters) => {
        try {
            // Convert filters object to query string
            const queryParams = new URLSearchParams(updatedFilters).toString();

            // Make the post request using Axios
            const response = await axios.post(
                `${route("frontend.news.filtered")}?${queryParams}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            // Handle the response data
            const result = response.data;
            setNewsData(result); // Uncomment to update news data
        } catch (error) {
            // Handle errors
            console.error("Error fetching filtered data:", error);
        }
    };

    const handleClearFilters = () => {
        const clearedFilters = {
            AI_Policy_Name: [],
            country_id: [],
        };
        setFilters(clearedFilters);
        fetchData(clearedFilters);
    };

    // for mobile view (filter box)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Function to check screen size and set dropdown open state
    const handleResize = () => {
        if (window.innerWidth >= 770) {
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
        <AppLayout>
            <Head title="News" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="md:border-b flex md:hidden border-light-border  p-[16px] pb-4 justify-between items-center">
                    <div>
                        <p className="font-bold text-primary-light text-lg">
                            News
                        </p>
                        <p className="mt-3 text-sm text-gray-800">
                            Sorted by date
                        </p>
                    </div>
                </div>
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    {/* Sidebar for filters */}
                    <div className="block order-1 mb-5 xl:mt-0 lg:mt-0 xl:order-2 lg:hidden md:block sm:block xl:block xl:w-[16.67%]">
                        <div className="border rounded-md w-full bg-white sticky top-0">
                            <div className="border-b border-light-border py-[16px] px-[16px] flex justify-between items-center">
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
                                        // id="dropdownDefaultButton"
                                        onClick={toggleDropDown}
                                        // data-dropdown-toggle="dropdown"
                                        className="text-primary font-medium rounded-lg text-sm block md:hidden"
                                        type="button"
                                    >
                                        <i className="fa-solid ms-3 text-primary fa-angle-down"></i>

                                        {/* <i class="fa-solid fa-angle-up"></i> */}
                                    </button>
                                </div>
                            </div>
                            {isDropdownOpen && (
                                <div className="px-[16px] my-5">
                                    <form className="w-full" id="FormFiled">
                                        <SelectInput
                                            label="AI Policy Name"
                                            className="mb-2 text-sm font-normal text-light-blue"
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
                                            className="mb-2 text-sm font-normal text-light-blue"
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
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full order-2 xl:order-1 xl:w-[83.33%]">
                        <div className="w-full  md:border rounded-md bg-transparent md:bg-white sm:bg-white">
                            <div className="md:border-b hidden md:flex border-light-border  p-[16px] pb-4 justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary-light text-lg">
                                        News
                                    </p>
                                    <p className="mt-3 text-sm text-gray-800">
                                        Sorted by date
                                    </p>
                                </div>
                            </div>
                            {visibleDiv && (
                                <div className="px-5 w-full mt-5">
                                    <form className="w-full" id="filterData">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3">
                                                <SelectInput
                                                    label="AI Policy Name"
                                                    options={aiPolicies.map(
                                                        (policy) => ({
                                                            value: policy.value,
                                                            label: policy.label,
                                                        })
                                                    )}
                                                    value={
                                                        filters.AI_Policy_Name
                                                    }
                                                    onChange={(
                                                        selectedOptions
                                                    ) =>
                                                        handleFilterChange(
                                                            "AI_Policy_Name",
                                                            selectedOptions
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <SelectInput
                                                    label="Country / Region"
                                                    options={countries.map(
                                                        (country) => ({
                                                            value: country.value,
                                                            label: country.label,
                                                        })
                                                    )}
                                                    value={filters.country_id}
                                                    onChange={(
                                                        selectedOptions
                                                    ) =>
                                                        handleFilterChange(
                                                            "country_id",
                                                            selectedOptions
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                            <div className="mt-5">
                                <NewsCard newsLists={news.data} />
                                {news.data.length > 10 && (
                                    <PaginationPage paginator={news} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
