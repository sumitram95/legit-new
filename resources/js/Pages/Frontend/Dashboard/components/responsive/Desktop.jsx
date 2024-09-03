import React, { useState, useEffect } from "react";
import { MapChart } from "../map/MapChart";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/status/Status";
import HistoricState from "../HistoricState";
import Table from "@/Components/table/Table";
import OriginalColumns from "@/Components/table/Columns";
import EditColumn from "../EditColumn";
import EditColumnLists from "../EditColumnLists";
import News from "../new/News";
import Description from "../description/Description";
import DescriptionData from "../description/DescriptionData";
import ContributorLists from "@/Components/contributor/ContributorList";
import ContactLists from "@/Components/contact/ContactLists";
import Organization from "../organization/Organization";
import organizationLogo from "@/assets/images/T4DNepal.png";
import { useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import PaginationPage from "@/Components/table/PaginationPage";
import { useDeviceSize } from "@/Services/useDeviceSize";

export default function Desktop({
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

    // countrywithStatus = [];

    console.log(countrywithStatus);
    useEffect(() => {
        // Update the state if the initialTableData prop changes
        setTableData(initialTableData);
    }, [initialTableData]);

    // console.log(statuses);

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

    const deviceSize = useDeviceSize();

    console.log("device size : ", deviceSize);
    return (
        <div className="content-wrapper relative top-[-60px]">
            <div className="flex gap-[30px]">
                <div className="w-full lg:w-[83.33%]">
                    <div className="w-full border rounded-md bg-white">
                        <div className="border-b border-light-border py-[16px] px-[16px] flex justify-between items-center">
                            <div>
                                <p className="font-bold text-primary-light text-lg leading-none">
                                    Global Artificial Intelligence (AI) Policy
                                    Status
                                </p>
                                <div className="flex items-center mt-[0.5rem] text-sm">
                                    <p className="text-sm leading-normal text-light-blue">
                                        Database Update:
                                        <span className="text-black ml-[4px]">
                                            {aiPolicyLastUpdate}
                                        </span>
                                    </p>
                                    <span className="date-separator"></span>
                                    <p className="text-sm leading-normal text-light-blue">
                                        News Update:
                                        <span className="text-black ml-[4px]">
                                            {newsLastUpdate}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {/* ********************** Status Component (desktop) ********************** */}
                            {deviceSize == "desktop" ||
                                (deviceSize == "largeDesktop" && (
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
                                ))}

                            {/* **********************  Clear filters ********************** */}
                            <div className="flex gap-3 lg:hidden">
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
                                    onClick={() => setVisibleDiv(!visibleDiv)}
                                    className="text-sm text-secondary hover:text-blue-300 lg:hidden"
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
                        {visibleDiv && deviceSize == "smallLaptop" && (
                            <div className="px-5 w-full mt-5">
                                <form className="w-full" id="filterData">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
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
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
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
                                        </div>

                                        <div className="w-full md:w-1/2 px-3">
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
                                        </div>

                                        <div className="w-full md:w-1/2 px-3">
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
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* ********************** Status Component (desktop) ********************** */}
                        {deviceSize == "smallLaptop" ||
                            deviceSize == "laptop" ||
                            (deviceSize == "desktop" && (
                                <div className="flex justify-center mt-5 items-center">
                                    <Status
                                        statuses={statuses}
                                        statusState={statusState}
                                        handleStatusChange1={
                                            handleStatusChange1
                                        }
                                        handleShowAll={handleShowAll}
                                    />
                                </div>
                            ))}

                        {/* ********************** MapChart Component ********************** */}
                        <div className="mt-5 px-4 map-chart-wrapper">
                            <MapChart
                                countrywithStatus={countrywithStatus}
                                countryWithAiPolicies={countryWithAiPolicies}
                            />
                        </div>
                        {/* ********************** HistoricState Component ********************** */}
                        <div className="px-5 mt-4">
                            <HistoricState date={"August 2024"} />
                        </div>
                        <div className="flex justify-between mt-5 px-5">
                            <form
                                onSubmit={submit}
                                className="text-primary bg-secondary hover:bg-blue-100 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2"
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
                                            : `Watchlist (${bookmarkCount})`}
                                    </span>
                                    {processing && (
                                        <i className="fa-solid fa-spinner fa-spin ml-3"></i>
                                    )}
                                </button>
                            </form>
                            <EditColumn
                                EditColumnLists={EditColumnLists}
                                onCheckboxChange={handleCheckboxChange}
                            />
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

                        {/* Pagination */}
                        {/* <div className="pagination">
                    {renderPaginationLinks()}
                </div> */}

                        {/* <Pagination paginator={tableData} /> */}
                        {/* <PaginationPage paginator={tableData} /> */}

                        {tableData.data.length > 9 && (
                            <PaginationPage paginator={tableData} />
                        )}
                    </div>
                </div>

                {/* ********************** Search Component (desktop) ********************** */}
                <div className="hidden lg:block lg:w-[16.67%]">
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
                                        className="mb-2 text-sm font-normal text-light-blue"
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
                                        className="mb-2 text-sm font-normal text-light-blue"
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
                                        className="mb-2 text-sm font-normal text-light-blue"
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

            {/* ********************** News Component ********************** */}
            <News news={news} />

            {/* ********************** Description Component ********************** */}
            <Description
                descriptionData={DescriptionData}
                contributorLists={ContributorLists}
                contactLists={ContactLists}
            />

            {/* ********************** Organization/Client Component ********************** */}
            <Organization organizationLogo={organizationLogo} />
        </div>
    );
}
