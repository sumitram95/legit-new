import SelectInputLists from "@/Components/map/SelectInputList";
import SelectInput from "@/Components/SelectInput";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NewsCard from "./components/NewsCard";
import PaginationPage from "@/Components/table/PaginationPage";
import axios from "axios";

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

    return (
        <AppLayout>
            <Head title="News" />
            <div className="content-wrapper relative top-[-60px]">
                <div className="flex gap-[30px]">
                    <div className="w-full lg:w-[83.33%]">
                        <div className="w-full border rounded-md bg-white">
                            <div className="border-b-2 pb-4 px-5 flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary text-lg">
                                        News
                                    </p>
                                    <p className="mt-3 text-sm text-primary font-thin">
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
                            <div
                                className="mt-5"
                            >
                                <NewsCard newsLists={news.data} />
                                {news.data.length > 10 && (
                                    <PaginationPage paginator={news} />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar for filters */}
                    <div className="hidden lg:block lg:w-[16.67%]">
                        <div className="border rounded-md w-full bg-white sticky top-0">
                            <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                                <p className="font-bold text-primary text-lg">
                                    Filters
                                </p>
                                <button
                                    className="button-wthout-border flex items-center gap-2"
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
                            </div>
                            <div className="px-[16px] my-5">
                                <form className="w-full" id="FormFiled">
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}