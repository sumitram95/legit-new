import React, { useState, useEffect } from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import Table from "@/Components/Table/Table";
import Columns from "@/Components/Table/Columns";
import Subscription from "./Components/Subscription";
import PaginationPage from "@/Components/Table/PaginationPage";
import SelectInput from "@/Components/SelectInput";
import Input from "@/Components/Input";
import EditColumn from "../Dashboard/Components/EditColumn";
import EditColumnLists from "../Dashboard/Components/EditColumnLists";
import Responsive from "@/Components/Responsive/Responsive";

export default function WatchList({
    is_favorite,
    lgs,
    provinces,
    districts,
    statuses,
    tableData: initialTableData,
    countrywithStatus,
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

    return (
        <AppLayout>
            <Head title="Alert Lists" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    {/* Sidebar for filters for desktop  */}

                    {/* News contenet only Desktop */}
                    <div className="w-full order-2 xl:order-1">
                        <div className="w-full  md:border rounded-md bg-transparent md:bg-white lg:bg-white">
                            <div className="lg:border-b border-light-border lg:p-[16px]  pb-4 lg:px-5 flex justify-between items-center">
                                <div className="w-full">
                                    <div className="flex justify-between px-[0] md:px-[16px]  xl:block">
                                        <div>
                                            <div>
                                                <p className="font-bold text-primary-light text-lg">
                                                    Alert
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
                                                        Back to full list of
                                                        Alert
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
                                        <div className="w-full px-3">
                                            <SelectInput
                                                placeholder="Local Government"
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
                                                placeholder="Province"
                                                className="text-sm mb-2 font-normal text-light-blue"
                                                options={provinces.map(
                                                    (province) => ({
                                                        value: province.value,
                                                        label: province.label,
                                                    })
                                                )}
                                                value={filters.province_id}
                                                onChange={(selectedOptions) =>
                                                    handleFilterChange(
                                                        "province_id",
                                                        selectedOptions
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="w-full px-3">
                                            <SelectInput
                                                placeholder="District"
                                                className="mb-2 text-sm font-normal text-light-blue"
                                                options={districts.map(
                                                    (district) => ({
                                                        value: district.value,
                                                        label: district.label,
                                                    })
                                                )}
                                                value={filters.district_id}
                                                onChange={(selectedOptions) =>
                                                    handleFilterChange(
                                                        "district_id",
                                                        selectedOptions
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* <div className="w-full px-3">
                                                <Input
                                                    className="mb-2 text-sm font-normal text-light-blue"
                                                    name="announcement_year"
                                                    value={
                                                        filters.announcement_year
                                                    }
                                                    onChange={handleInputChange}
                                                    htmlFor="announcement_year"
                                                    placeholder="Announcement Year"
                                                    type="date"
                                                />
                                            </div> */}
                                    </div>
                                </form>
                            </div>

                            {/* show on desktop (table) */}
                            <Table
                                columns={Columns}
                                tableData={tableData.data}
                                favourite={is_favorite}
                                checkedColWithData={checkedColumns}
                            />
                            {/* mobile filter */}
                            <div className="mb-5 block md:hidden">
                                <div className="border rounded-md w-full bg-white sticky top-0">
                                    <div className="border-b border-light-border py-[16px] px-[16px] flex justify-between items-center">
                                        <div className="flex items-center justify-between w-full">
                                            <p className="font-bold text-primary text-lg leading-none">
                                                Filters
                                            </p>
                                            <div className="flex">
                                                {isOpenFilter && (
                                                    <button
                                                        className="button-wthout-border flex items-center gap-2 text-light-blue"
                                                        onClick={
                                                            handleClearFilters
                                                        }
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
                                                                fill="#7997c4"
                                                                className="bi-x-square b-icon bi"
                                                            >
                                                                <title>
                                                                    Clear
                                                                </title>
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
                                                )}

                                                <button
                                                    onClick={
                                                        toggleFilterDropDown
                                                    }
                                                    className="text-primary font-medium rounded-lg text-sm block md:hidden"
                                                    type="button"
                                                >
                                                    <i className="fa-solid ms-3 text-primary fa-angle-down"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {isOpenFilter && (
                                        <div className="px-[16px] my-5">
                                            <form
                                                className="w-full"
                                                id="FormFiled"
                                            >
                                                <div>
                                                    <SelectInput
                                                        label="Local Government"
                                                        className="mb-2 text-sm font-normal text-light-blue"
                                                        options={lgs.map(
                                                            (lg) => ({
                                                                value: lg.value,
                                                                label: lg.label,
                                                            })
                                                        )}
                                                        value={filters.lg}
                                                        onChange={(
                                                            selectedOptions
                                                        ) =>
                                                            handleFilterChange(
                                                                "lg",
                                                                selectedOptions
                                                            )
                                                        }
                                                    />

                                                    <SelectInput
                                                        label="Province"
                                                        className="mb-2 text-sm font-normal text-light-blue"
                                                        options={provinces.map(
                                                            (province) => ({
                                                                value: province.value,
                                                                label: province.label,
                                                            })
                                                        )}
                                                        value={
                                                            filters.province_id
                                                        }
                                                        onChange={(
                                                            selectedOptions
                                                        ) =>
                                                            handleFilterChange(
                                                                "province_id",
                                                                selectedOptions
                                                            )
                                                        }
                                                    />

                                                    <SelectInput
                                                        label="District"
                                                        className="mb-2 text-sm font-normal text-light-blue"
                                                        options={districts.map(
                                                            (district) => ({
                                                                value: district.value,
                                                                label: district.label,
                                                            })
                                                        )}
                                                        value={
                                                            filters.district_id
                                                        }
                                                        onChange={(
                                                            selectedOptions
                                                        ) =>
                                                            handleFilterChange(
                                                                "district_id",
                                                                selectedOptions
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* mobile table data */}
                            <div className="block md:hidden">
                                {tableData.data.map((list) => (
                                    <div
                                        className="bg-white rounded pb-3 mb-5 block md:hidden"
                                        key={list.id}
                                    >
                                        <div className="flex flex-wrap justify-between py-3 px-5 bg-blue-100">
                                            <div>
                                                <p className="font-bold text-primary-light text-base w-full leading-none">
                                                    <Link
                                                        href={route(
                                                            "frontend.single_ai_policy_tracker.index",
                                                            { id: list.id }
                                                        )}
                                                        className="hover:underline"
                                                    >
                                                        {list.name_en}
                                                    </Link>

                                                    <Link
                                                        href={route(
                                                            "frontend.watch_list.add",
                                                            {
                                                                id: list.id,
                                                                isBooked: list
                                                                    .bookmark
                                                                    ?.lg_id
                                                                    ? true
                                                                    : false,
                                                            }
                                                        )}
                                                        className="text-primary-light"
                                                    >
                                                        {list.bookmark
                                                            ?.lg_id ? (
                                                            <i className="fa fa-star A"></i>
                                                        ) : (
                                                            <i className="fa-regular fa-star B"></i>
                                                        )}
                                                    </Link>
                                                </p>
                                                <p className="mt-2">
                                                    {list.status?.name}
                                                </p>
                                            </div>
                                            <div>
                                                <Link
                                                    href={route(
                                                        "frontend.single_ai_policy_tracker.index",
                                                        { id: list.id }
                                                    )}
                                                >
                                                    <i className="fa-regular fa-circle-right"></i>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="px-5">
                                            <div className="py-3">
                                                <div>
                                                    <p className="text-muted-light font-semibold text-sm">
                                                        Local Government
                                                    </p>
                                                </div>
                                                <div className="flex mt-1 gap-3 items-center text-sm">
                                                    <p className="text-gray-500">
                                                        {list.name_en}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                <div>
                                                    <p className="text-muted-light font-semibold text-sm">
                                                        Provinnce
                                                    </p>
                                                </div>
                                                <div className="flex mt-1 gap-3 items-center text-sm">
                                                    <p className="text-gray-500">
                                                        {list.district?.province
                                                            ?.name_en ?? "null"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="py-3">
                                                <div>
                                                    <p className="text-muted-light font-semibold text-sm">
                                                        Districts
                                                    </p>
                                                </div>
                                                <div className="flex mt-1 gap-3 items-center text-sm">
                                                    <p className="text-gray-500">
                                                        {list.district
                                                            ?.name_en ?? "null"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="py-3">
                                                <div>
                                                    <p className="text-muted-light font-semibold text-sm">
                                                        Date
                                                    </p>
                                                </div>
                                                <div className="flex mt-1 gap-3 items-center text-sm">
                                                    <p className="text-gray-500">
                                                        {
                                                            list.formatted_created_at
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            {/* {list.id == isShowAdvancedInfo && (
                                    <div>
                                        <div className="py-3">
                                            <div>
                                                <p className="text-muted-light font-semibold text-sm">
                                                    Governance structure
                                                </p>
                                            </div>
                                            <div className="flex mt-1 gap-3 items-center text-sm">
                                                <p className="text-gray-500">
                                                    {list.governance_structure}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="py-3">
                                            <div>
                                                <p className="text-muted-light font-semibold text-sm">
                                                    Main motivation/goals of the
                                                    AI policy
                                                </p>
                                            </div>
                                            <div className="flex mt-1 gap-3 items-center text-sm">
                                                <p className="text-gray-500">
                                                    {list.main_motivation}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="py-3">
                                            <div>
                                                <p className="text-muted-light font-semibold text-sm">
                                                    Description
                                                </p>
                                            </div>
                                            <div
                                                className="mt-1 text-sm text-gray-500"
                                                dangerouslySetInnerHTML={{
                                                    __html: list.description,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )} */}
                                        </div>
                                        {/* <div className="border-b"></div>
                            <div className="pt-3 px-5 flex justify-center items-center">
                                <button
                                    onClick={() =>
                                        toggleDropDownShowAdvancedInfo(list.id)
                                    }
                                    className="text-primary"
                                    type="button"
                                >
                                    <span>
                                        <i
                                            className={` fa-solid ms-3 ${
                                                list.id == isShowAdvancedInfo
                                                    ? "fa-angle-up"
                                                    : "fa-angle-down"
                                            }`}
                                        ></i>
                                    </span>
                                    <span className="ms-1">
                                        {list.id == isShowAdvancedInfo
                                            ? "Hide adanced info"
                                            : "    Show advanced info"}
                                    </span>
                                </button>
                            </div> */}
                                    </div>
                                ))}

                                {tableData.total >= 10 && (
                                    <PaginationPage paginator={tableData} />
                                )}

                                {!hasData && (
                                    <h1 className="font-bold text-primary text-lg text-center">
                                        Not Found
                                    </h1>
                                )}
                            </div>

                            {tableData.total >= 10 && (
                                <PaginationPage paginator={tableData} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
