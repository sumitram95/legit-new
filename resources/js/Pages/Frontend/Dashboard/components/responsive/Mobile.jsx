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
import { Link, useForm } from "@inertiajs/react";
import Input from "@/Components/Input";
import PaginationPage from "@/Components/table/PaginationPage";
import NewsCard from "@/Pages/Frontend/News/components/NewsCard";

export default function Mobile({
    news,
    aiPolicies,
    countries,
    statuses,
    tableData: initialTableData,
    aiPolicyLastUpdate,
    newsLastUpdate,
    countrywithStatus: initialCountrywithStatus,
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
    return (
        <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
            <div className="md:border-b flex md:hidden border-light-border pb-4 justify-between items-center">
                <div>
                    <div>
                        <p className="font-bold text-primary-light text-lg leading-none">
                            Global Artificial Intelligence (AI) Policy Status
                        </p>
                    </div>
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
            </div>

            <div className="block sm:block md:block xl:flex gap-[30px]">
                {/* Search Component */}
                <div className="block order-1 mb-5 xl:mt-0 lg:mt-0 xl:order-2 lg:block md:block sm:block xl:block xl:w-[16.67%]">
                    <div className="border rounded-md w-full bg-white sticky top-0">
                        <div className="border-b py-[16px] px-[16px] flex justify-between items-center">
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
                        )}
                    </div>
                </div>
                {/* content */}
                {tableData.data.map((list) => (
                    <div className="bg-white rounded pb-3 mb-5 " key={list.id}>
                        <div className="flex flex-wrap justify-between py-3 px-5 bg-blue-100">
                            <div>
                                <p className="font-bold text-primary-light text-base w-full leading-none">
                                    {list.ai_policy_name}
                                    <i className="fa-regular fa-star ms-3"></i>
                                </p>
                                <p className="mt-2">{list.status?.name}</p>
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
                                    <p>{list.country?.name}</p>
                                </div>
                            </div>
                            <div className="py-3">
                                <div>
                                    <p className="text-muted-light text-sm">
                                        Governing Body
                                    </p>
                                </div>
                                <div className="flex mt-1 gap-3 items-center text-sm">
                                    <p>{list.governing_body}</p>
                                </div>
                            </div>

                            <div className="py-3">
                                <div>
                                    <p className="text-muted-light text-sm">
                                        Announcement Year
                                    </p>
                                </div>
                                <div className="flex mt-1 gap-3 items-center text-sm">
                                    <p>{list.formatted_created_at}</p>
                                </div>
                            </div>

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

                            {list.id == isShowAdvancedInfo && (
                                <div>
                                    <div className="py-3">
                                        <div>
                                            <p className="text-muted-light text-sm">
                                                Governance structure
                                            </p>
                                        </div>
                                        <div className="flex mt-1 gap-3 items-center text-sm">
                                            <p>{list.governance_structure}</p>
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <div>
                                            <p className="text-muted-light text-sm">
                                                Main motivation/goals of the AI
                                                policy
                                            </p>
                                        </div>
                                        <div className="flex mt-1 gap-3 items-center text-sm">
                                            <p>{list.main_motivation}</p>
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

                        {/* show advance info */}
                        <div className="border-b"></div>
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
                        </div>
                    </div>
                ))}

                {tableData.data.length > 9 && (
                    <PaginationPage paginator={tableData} />
                )}

                {!hasData && (
                    <h1 className="font-bold text-primary text-lg text-center">
                        Not Found
                    </h1>
                )}
            </div>

            {/* ********************** News Component ********************** */}
            {/* <News news={news} /> */}

            <div className="md:border-b flex md:hidden border-light-border pb-4 justify-between items-center">
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
