import React, { useState, useEffect } from "react";
import { MapChart } from "./Components/Map/MapChart";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/Status/Status";
import HistoricState from "./Components/HistoricState";
import Table from "@/Components/Table/Table";
import OriginalColumns from "@/Components/Table/Columns";
import EditColumn from "./Components/EditColumn";
import EditColumnLists from "./Components/EditColumnLists";
import News from "./Components/News/News";
import Description from "./Components/Description/Description";
import DescriptionData from "./Components/Description/DescriptionData";
import ContributorLists from "@/Components/Contributor/ContributorList";
import ContactLists from "@/Components/Contact/ContactLists";
import Organization from "./Components/Organization/Organization";
import organizationLogo from "@/assets/images/T4DNepal.png";
import { Head, Link, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import PaginationPage from "@/Components/Table/PaginationPage";
import { AppLayout } from "@/Layouts/AppLayout";
import Responsive from "@/Components/Responsive/Responsive";
import NewsCard from "../News/Components/NewsCard";

export default function Dashboard({
    news,
    aiPolicies,
    countries,
    statuses,
    tableData: initialTableData,
    aiPolicyLastUpdate,
    newsLastUpdate,
    countrywithStatus: initialCountrywithStatus,
    countryWithAiPolicies,
}) {
    var [countrywithStatus, setCountrywithStatus] = useState(
        initialCountrywithStatus
    );
    const [tableData, setTableData] = useState(initialTableData); // Initialize with the prop data

    const [statusState, setStatusState] = useState([]);

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
                `${route("frontend.dashboard.filtered")}?${queryParams}`,
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

    const [visibleDiv, setVisibleDiv] = useState(false);
    const [bookmarkCount, setBookmarkCount] = useState(0);
    const [watchListIds, setWatchListIds] = useState([]);

    //****************** BookMark ******************* */

    const handleBookmarkChange = (count) => {
        setBookmarkCount(count);
    };

    const handleBookmark = (id) => {
        setWatchListIds((prevIds) => {
            const updatedIds = prevIds.includes(id)
                ? prevIds.filter((existingId) => existingId !== id)
                : [...prevIds, id];

            handleBookmarkChange(updatedIds.length);
            return updatedIds;
        });
    };

    //****************** Form Submit ******************* */
    const { data, setData, post, processing, errors, reset } = useForm({
        uuids: [],
    });

    const submit = (e) => {
        e.preventDefault();
        // Set the uuids value
        setData("uuids", watchListIds);
    };

    useEffect(() => {
        // Perform the POST request
        if (data.uuids.length > 0) {
            post(route("frontend.watch_list.show"), {
                onFinish: () => reset("uuids"),
            });
        }
    }, [data.uuids]);

    // edit column
    const [checkedColumns, setCheckedColumns] = useState([]);

    // Callback function to handle checkbox changes
    const handleCheckboxChange = (checkedItems) => {
        setCheckedColumns(checkedItems);
    };

    // console.log("dashboard checked column", checkedColumns);

    // Combine OriginalColumns with checkedColumns
    const Columns = [...OriginalColumns, ...checkedColumns];

    useEffect(() => {}, [Columns]);

    ///////////////
    // Function to handle status change

    const handleStatusChange1 = async (statusId, isChecked) => {
        try {
            // Update the local state first
            setStatusState((prevState) => {
                const updatedState = {
                    ...prevState,
                    [statusId]: isChecked,
                };

                // Prepare the query parameters by filtering out the boolean values
                // Prepare the query parameters by filtering out the boolean values
                const filteredState = Object.keys(updatedState).filter(
                    (key) => updatedState[key]
                );

                // Convert the filteredState into query parameters for array format
                const queryParams = new URLSearchParams();
                filteredState.forEach((statusId) => {
                    queryParams.append("status_state[]", statusId);
                });

                // Fetch CSRF token
                const csrfMetaTag = document.querySelector(
                    'meta[name="csrf-token"]'
                );
                const csrfToken = csrfMetaTag
                    ? csrfMetaTag.getAttribute("content")
                    : "";

                // Perform the request with the updated state
                axios
                    .get(
                        `${route(
                            "frontend.dashboard.updateStatus"
                        )}?${queryParams}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "X-CSRF-TOKEN": csrfToken,
                            },
                        }
                    )
                    .then((response) => {
                        if (response.status === 200) {
                            // i want to update countrywithStatus
                            const updatedCountrywithStatus = response.data;
                            // console.log(updatedCountrywithStatus);
                            setCountrywithStatus(updatedCountrywithStatus); // Update the state with the new data
                        } else {
                            // alert('Failed to update status');
                            // console.error("Failed to update status");
                        }
                    })
                    .catch((error) => {
                        setCountrywithStatus(initialCountrywithStatus);

                        // console.error("Error updating status:", error);
                    });

                // Return the updated state
                return updatedState;
            });
        } catch (error) {
            // alert('Failed to update status');
            console.error("Error updating status:", error);
        }
    };

    // Function to handle the "Show all" button click
    const handleShowAll = () => {
        const allCheckedState = statuses.reduce((acc, status) => {
            acc[status.value] = true; // Set all checkboxes to true (checked)
            return acc;
        }, {});

        // Update the status state for all checkboxes
        setStatusState(allCheckedState);

        // Optionally, trigger the handleStatusChange1 for each status to reflect this change in the backend
        statuses.forEach((status) => {
            handleStatusChange1(status.value, true);
        });
    };

    // Slice the array to get the first five items
    const firstFiveNews = news.slice(0, 5);

    const hasData = Array.isArray(tableData.data) && tableData.data.length > 0;

    // State for showing advanced info
    const [isShowAdvancedInfo, setShowAdvancedInfo] = useState(null);

    // Function to toggle showing advanced info
    const toggleDropDownShowAdvancedInfo = (id) => {
        setShowAdvancedInfo((prevState) => (prevState === id ? null : id));
    };

    // filter drop down (mobile view)
    const [isOpenFilter, setOpenFilter] = useState(false);
    const toggleFilterDropDown = () => {
        setOpenFilter(!isOpenFilter);
    };

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="block sm:block md:block xl:flex gap-[30px]">
                    {/* Sidebar for search filters for desktop  */}
                    {/* <Responsive responsive={["xl"]}>
                    <div className="order-1 mb-5 xl:mt-0 lg:mt-0 xl:order-2 hidden xl:block  xl:w-[16.67%]">
                        <div className="border rounded-md w-full bg-white sticky top-0">
                            <div className="border-b border-light-border py-[16px] px-[16px] flex justify-between items-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="font-bold text-primary-light text-lg leading-none">
                                        Filters
                                    </p>
                                    <button
                                        className="button-wthout-border flex items-center gap-2 text-light-blue"
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
                                                fill="#7997c4"
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

                                        <SelectInput
                                            label="Status"
                                            className="mb-2 text-sm font-normal text-light-blue"
                                            options={statuses.map(
                                                (status) => ({
                                                    value: status.value,
                                                    label: status.label,
                                                })
                                            )}
                                            value={filters.status_id}
                                            onChange={(selectedOptions) =>
                                                handleFilterChange(
                                                    "status_id",
                                                    selectedOptions
                                                )
                                            }
                                        />

                                        <Input
                                            className="mb-2 text-sm font-normal text-light-blue"
                                            name="announcement_year"
                                            value={
                                                filters.announcement_year
                                            }
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
                </Responsive> */}

                    {/* News contenet only Desktop */}
                    <div className="w-full order-2 xl:order-1">
                        <div className="w-full  md:border rounded-md bg-transparent md:bg-white lg:bg-white">
                            <div className="sm:border-b border-light-border py-[16px] sm:px-[16px] flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary-light text-lg leading-none">
                                        Global Artificial Intelligence (AI)
                                        Policy Status
                                    </p>
                                    <div className="md:flex items-center mt-[0.5rem] text-sm">
                                        <p className="text-xs text-light-blue">
                                            Database Update:
                                            <span className="text-black ml-[4px]">
                                                {aiPolicyLastUpdate}
                                            </span>
                                        </p>
                                        <span className="date-separator"></span>
                                        <p className="text-xs text-light-blue">
                                            News Update:
                                            <span className="text-black ml-[4px]">
                                                {newsLastUpdate}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* show on desktop (status component) */}
                                <Responsive responsive={["xl"]}>
                                    <div className="flex justify-center items-center">
                                        <Status
                                            statuses={statuses}
                                            statusState={statusState}
                                            handleStatusChange1={
                                                handleStatusChange1
                                            }
                                            handleShowAll={handleShowAll}
                                        />
                                    </div>
                                </Responsive>

                                {/* md and lg for show and hide search filter button */}
                                <Responsive responsive={["md", "lg"]}>
                                    <div className="flex gap-3 items-center">
                                        <div className="flex gap-4">
                                            {visibleDiv && (
                                                <button
                                                    className="button-wthout-border flex items-center gap-2 text-light-blue"
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
                                                            fill="#7997c4"
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
                                            )}

                                            <button
                                                onClick={() =>
                                                    setVisibleDiv(!visibleDiv)
                                                }
                                                className="text-sm text-secondary hover:text-blue-300"
                                            >
                                                {!visibleDiv
                                                    ? "Show filters"
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
                                </Responsive>
                            </div>

                            {/* show on medium and lg device (status component) */}
                            <Responsive responsive={["md", "lg"]}>
                                <div className="flex justify-center items-center mt-5">
                                    <Status
                                        statuses={statuses}
                                        statusState={statusState}
                                        handleStatusChange1={
                                            handleStatusChange1
                                        }
                                        handleShowAll={handleShowAll}
                                    />
                                </div>
                            </Responsive>
                            {/* show on medium and lg device (MapChart, HistoricState, Table component) */}
                            <Responsive responsive={["md", "lg", "xl"]}>
                                {/* ********************** MapChart Component ********************** */}
                                <div className="mt-5 border-b px-4 map-chart-wrapper">
                                    <MapChart
                                        countrywithStatus={countrywithStatus}
                                        countryWithAiPolicies={
                                            countryWithAiPolicies
                                        }
                                    />
                                </div>

                                {/* ********************** HistoricState Component ********************** */}

                                {/* <div className="px-5 mt-4">
                                <HistoricState date={"August 2024"} />
                            </div> */}
                                <div className="flex flex-wrap mt-5 px-5">
                                    {/* watchlist fav */}
                                    <div className="flex-none">
                                        <form
                                            onSubmit={submit}
                                            className="text-primary h-fit bg-secondary hover:bg-blue-100 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2"
                                        >
                                            <button
                                                type="submit"
                                                className="flex items-center text-primary-light"
                                            >
                                                <i
                                                    className={`fa ${
                                                        bookmarkCount
                                                            ? "fa-star"
                                                            : "fa-regular fa-star"
                                                    } mr-3`}
                                                ></i>
                                                <span>
                                                    {processing
                                                        ? "Submitting..."
                                                        : `Bookmarks (${bookmarkCount})`}
                                                </span>
                                                {processing && (
                                                    <i className="fa-solid fa-spinner fa-spin ml-3"></i>
                                                )}
                                            </button>
                                        </form>
                                    </div>

                                    {/* search filter for table data */}

                                    <div className="flex-grow">
                                        <form className="w-full" id="FormFiled">
                                            <div className="flex">
                                                <div className="w-full px-3">
                                                    <SelectInput
                                                        placeholder="AI Policy Name"
                                                        className="mb-2 text-sm font-normal text-light-blue"
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
                                                <div className="w-full px-3">
                                                    <SelectInput
                                                        placeholder="Country / Region"
                                                        className="text-sm mb-2 font-normal text-light-blue"
                                                        options={countries.map(
                                                            (country) => ({
                                                                value: country.value,
                                                                label: country.label,
                                                            })
                                                        )}
                                                        value={
                                                            filters.country_id
                                                        }
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

                                                <div className="w-full px-3">
                                                    <SelectInput
                                                        placeholder="Status"
                                                        className="mb-2 text-sm font-normal text-light-blue"
                                                        options={statuses.map(
                                                            (status) => ({
                                                                value: status.value,
                                                                label: status.label,
                                                            })
                                                        )}
                                                        value={
                                                            filters.status_id
                                                        }
                                                        onChange={(
                                                            selectedOptions
                                                        ) =>
                                                            handleFilterChange(
                                                                "status_id",
                                                                selectedOptions
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className="w-full px-3">
                                                    <Input
                                                        className="mb-2 text-sm font-normal text-light-blue"
                                                        name="announcement_year"
                                                        value={
                                                            filters.announcement_year
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        htmlFor="announcement_year"
                                                        placeholder="Announcement Year"
                                                        type="date"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* edit column drow down */}
                                    <div className="flex-none">
                                        <EditColumn
                                            EditColumnLists={EditColumnLists}
                                            onCheckboxChange={
                                                handleCheckboxChange
                                            }
                                        />
                                    </div>
                                </div>

                                {/* ********************** AI Policy Component ********************** */}

                                <Table
                                    columns={Columns}
                                    checkedColWithData={checkedColumns}
                                    tableData={tableData.data} // Ensure this matches the structure of the data returned from fetchData
                                    btnName={"Edit Columns "}
                                    onBookmarkChange={handleBookmarkChange}
                                    onHandleBookmark={handleBookmark}
                                    watchListIds={watchListIds}
                                />
                            </Responsive>
                            {/* show on small device only for show and hide search filter */}
                            <Responsive responsive={["sm"]}>
                                <div className="mb-5">
                                    <div className="border rounded-md w-full bg-white sticky top-0">
                                        <div className="border-b border-light-border py-[16px] px-[16px] flex justify-between items-center">
                                            <div className="flex items-center justify-between w-full">
                                                <p className="font-bold text-primary-light text-lg leading-none">
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
                                                            label="AI Policy Name"
                                                            className="mb-2 text-sm font-normal text-light-blue"
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

                                                        <SelectInput
                                                            label="Country / Region"
                                                            className="mb-2 text-sm font-normal text-light-blue"
                                                            options={countries.map(
                                                                (country) => ({
                                                                    value: country.value,
                                                                    label: country.label,
                                                                })
                                                            )}
                                                            value={
                                                                filters.country_id
                                                            }
                                                            onChange={(
                                                                selectedOptions
                                                            ) =>
                                                                handleFilterChange(
                                                                    "country_id",
                                                                    selectedOptions
                                                                )
                                                            }
                                                        />

                                                        <SelectInput
                                                            label="Status"
                                                            className="mb-2 text-sm font-normal text-light-blue"
                                                            options={statuses.map(
                                                                (status) => ({
                                                                    value: status.value,
                                                                    label: status.label,
                                                                })
                                                            )}
                                                            value={
                                                                filters.status_id
                                                            }
                                                            onChange={(
                                                                selectedOptions
                                                            ) =>
                                                                handleFilterChange(
                                                                    "status_id",
                                                                    selectedOptions
                                                                )
                                                            }
                                                        />

                                                        <Input
                                                            className="mb-2 text-sm font-normal text-light-blue"
                                                            name="announcement_year"
                                                            value={
                                                                filters.announcement_year
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
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
                            </Responsive>

                            {/* show on small device only (ai policy name table data) */}
                            <Responsive responsive={["sm"]}>
                                <div className="block">
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
                                                            {
                                                                list.ai_policy_name
                                                            }
                                                        </Link>
                                                        <i className="fa-regular fa-star ms-3"></i>
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
                                                        <p className="text-muted-light text-sm">
                                                            Country
                                                        </p>
                                                    </div>
                                                    <div className="flex mt-1 gap-3 items-center text-sm">
                                                        <p>
                                                            {list.country?.name}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="py-3">
                                                    <div>
                                                        <p className="text-muted-light text-sm">
                                                            Governing Body
                                                        </p>
                                                    </div>
                                                    <div className="flex mt-1 gap-3 items-center text-sm">
                                                        <p>
                                                            {
                                                                list.governing_body
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="py-3">
                                                    <div>
                                                        <p className="text-muted-light text-sm">
                                                            Announcement Year
                                                        </p>
                                                    </div>
                                                    <div className="flex mt-1 gap-3 items-center text-sm">
                                                        <p>
                                                            {
                                                                list.formatted_created_at
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="py-3">
                                                    <div>
                                                        <p className="text-muted-light text-sm">
                                                            Technology Partner
                                                        </p>
                                                    </div>
                                                    <div className="flex mt-1 gap-3 items-center text-sm">
                                                        <p>
                                                            {
                                                                list.technology_partners
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                {list.id ==
                                                    isShowAdvancedInfo && (
                                                    <div>
                                                        <div className="py-3">
                                                            <div>
                                                                <p className="text-muted-light text-sm">
                                                                    Governance
                                                                    structure
                                                                </p>
                                                            </div>
                                                            <div className="flex mt-1 gap-3 items-center text-sm">
                                                                <p>
                                                                    {
                                                                        list.governance_structure
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="py-3">
                                                            <div>
                                                                <p className="text-muted-light text-sm">
                                                                    Main
                                                                    motivation/goals
                                                                    of the AI
                                                                    policy
                                                                </p>
                                                            </div>
                                                            <div className="flex mt-1 gap-3 items-center text-sm">
                                                                <p>
                                                                    {
                                                                        list.main_motivation
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="py-3">
                                                            <div>
                                                                <p className="text-muted-light text-sm">
                                                                    Description
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="mt-1 text-sm"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: list.description,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="border-b"></div>
                                            <div className="pt-3 px-5 flex justify-center items-center">
                                                <button
                                                    onClick={() =>
                                                        toggleDropDownShowAdvancedInfo(
                                                            list.id
                                                        )
                                                    }
                                                    className="text-primary"
                                                    type="button"
                                                >
                                                    <span>
                                                        <i
                                                            className={` fa-solid ms-3 ${
                                                                list.id ==
                                                                isShowAdvancedInfo
                                                                    ? "fa-angle-up"
                                                                    : "fa-angle-down"
                                                            }`}
                                                        ></i>
                                                    </span>
                                                    <span className="ms-1">
                                                        {list.id ==
                                                        isShowAdvancedInfo
                                                            ? "Hide adanced info"
                                                            : "    Show advanced info"}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    {!hasData && (
                                        <h1 className="font-bold text-primary text-lg text-center">
                                            There are not AI policy data
                                        </h1>
                                    )}
                                </div>
                            </Responsive>
                            {tableData.data.length >= 10 && (
                                <PaginationPage paginator={tableData} />
                            )}
                        </div>
                    </div>
                </div>
                {/* show on lg and xl devie (New component) */}
                <Responsive responsive={["lg", "xl"]}>
                    <News news={news} />
                </Responsive>
                {firstFiveNews.length > 0 && (
                    <Responsive responsive={["sm", "md"]}>
                        <div className=" mt-5">
                            <div className="md:border-b flex border-light-border pb-4 justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary-light text-lg leading-none">
                                        News
                                    </p>
                                </div>
                                <div className="flex gap-5 mt-3 text-sm">
                                    <Link
                                        href={route("news.index")}
                                        className=" text-sm flex gap-2 hover:underline"
                                    >
                                        <span>Go to all News</span>
                                        <span>
                                            <i className="fa-regular fa-circle-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <NewsCard newsLists={firstFiveNews} />
                        </div>
                    </Responsive>
                )}

                {/* ********************** Description Component ********************** */}
                <Description
                    descriptionData={DescriptionData}
                    contributorLists={ContributorLists}
                    contactLists={ContactLists}
                />

                {/* ********************** Organization/Client Component ********************** */}
                <Organization organizationLogo={organizationLogo} />
            </div>
        </AppLayout>
    );
}
