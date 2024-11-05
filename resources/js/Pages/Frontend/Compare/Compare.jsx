import { AppLayout } from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

import SelectInput from "@/Components/SelectInput";
import { useState } from "react";
import { useEffect } from "react";
import CompareChart from "./Services/CompareChart";
export default function Compare({
    lgs,
    provinces,
    districts,
    tableData: initialTableData,
}) {
    const [tableData, setTableData] = useState(initialTableData); // Initialize with the prop data

    useEffect(() => {
        // Update the state if the initialTableData prop changes
        setTableData(initialTableData);
    }, [initialTableData]);

    const [filters, setFilters] = useState({
        lg: [],
        province_id: [],
        district_id: [],
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
            setTableData(result.data); // Update the tableData state
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }
    };

    //****************** Clear Filter ******************* */
    const handleClearFilters = () => {
        const clearedFilters = {
            lg: [],
            province_id: [],
            district_id: [],
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

    // State for showing advanced info
    const [isShowAdvancedInfo, setShowAdvancedInfo] = useState(null);

    // Function to toggle showing advanced info
    const toggleDropDownShowAdvancedInfo = (id) => {
        setShowAdvancedInfo((prevState) => (prevState === id ? null : id));
    };

    // table if
    const hasData = Array.isArray(tableData.data) && tableData.data.length > 0;

    // filter drop down (mobile view)
    const [isOpenFilter, setOpenFilter] = useState(false);
    const toggleFilterDropDown = () => {
        setOpenFilter(!isOpenFilter);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 50 }, (_, i) => currentYear - i); // Generate past 50 years

    return (
        <AppLayout>
            <Head title="Alert Lists" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    {/* News contenet only Desktop */}
                    <div className="w-full order-2 xl:order-1">
                        <div className="w-full  md:border rounded-md bg-transparent md:bg-white lg:bg-white pb-5">
                            <div className="lg:border-b border-light-border lg:p-[16px]  pb-4 lg:px-5 flex justify-between items-center">
                                <div className="w-full">
                                    <div className="flex justify-between px-[0]  xl:block">
                                        <div>
                                            <div>
                                                <p className="font-bold text-primary-light text-lg">
                                                    Compare Between
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
                                                        Back To Home
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* search filter for table data md to desktop */}
                            <div className="flex-grow hidden md:block mt-5">
                                <form className="w-full" id="FormFiled">
                                    <div className="flex">
                                        <div className="w-fit px-3">
                                            <select
                                                className="text-sm rounded-md border-gray-200 mb-2 font-normal text-light-blue"
                                                onChange={(e) =>
                                                    handleFilterChange("year", [
                                                        {
                                                            value: e.target
                                                                .value,
                                                        },
                                                    ])
                                                }
                                            >
                                                <option value="">
                                                    Select Year
                                                </option>
                                                {years.map((year) => (
                                                    <option
                                                        key={year}
                                                        value={year}
                                                    >
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="w-full px-3">
                                            <SelectInput
                                                placeholder="Filter By Index"
                                                className="mb-2 text-sm font-normal text-light-blue"
                                                options={lgs.map((lg) => ({
                                                    value: lg.value,
                                                    label: lg.label,
                                                }))}
                                                value={filters.lg}
                                                onChange={(selectedOptions) =>
                                                    handleFilterChange(
                                                        "lg",
                                                        selectedOptions
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <SelectInput
                                                placeholder="Local Government"
                                                className="text-sm mb-2 font-normal text-light-blue"
                                                options={lgs.map((lg) => ({
                                                    value: lg.value,
                                                    label: lg.label,
                                                }))}
                                                value={filters.lg}
                                                onChange={(selectedOptions) =>
                                                    handleFilterChange(
                                                        "lg",
                                                        selectedOptions
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* chart */}

                            <div className="mt-4">
                                <h1 className="text-center text-primary-light text-lg mb-5">Filter By Fund (MOFAGA)</h1>
                                <CompareChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
