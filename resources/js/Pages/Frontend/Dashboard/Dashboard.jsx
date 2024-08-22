import React, { useState } from "react";
import { MapChart } from "./components/map/MapChart";
import { AppLayout } from "@/Layouts/AppLayout";
import SelectInput from "@/Components/SelectInput";
import Status from "@/Components/status/Status";
import { Head } from "@inertiajs/react";
import HistoricState from "./components/HistoricState";
import Table from "@/Components/table/Table";
import Columns from "@/Components/table/Columns";
import EditColumn from "./components/EditColumn";
import EditColumnLists from "./components/EditColumnLists";
import News from "./components/new/News";
import Description from "./components/description/Description";
import DescriptionData from "./components/description/DescriptionData";
import ContributorLists from "@/Components/contributor/ContributorList";
import ContactLists from "@/Components/contact/ContactLists";
import Organization from "./components/organization/Organization";
import organizationLogo from "@/assets/images/T4DNepal.png";
import { useForm } from '@inertiajs/react';


export default function Dashboard({ tableData, news, aiPolicies, countries }) {
    // Define SelectInputLists and Raj objects properly
    const SelectInputLists = {
        labels: [
            "AI Policy Name 1",
            "Country / Region",
            "Announcement year",
            "Status",
            "Technology partners",
        ],
        lists: [
            "AI_Policy_Name1",
            "Country1",
            "Announcement_year",
            "Status",
            "Technology_partners",
        ],
    };
    console.log(aiPolicies);
    const Raj = {
        AI_Policy_Name1: aiPolicies.map(policy => ({ value: policy.value, label: policy.label })),
        Country1: countries.map(country => ({ value: country.value, label: country.label })),

        Announcement_year: [
            { value: '2002', label: '2002' },
            { value: '2010', label: '2010' },
            { value: '2024', label: '2024' }
        ],
        Status: [
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' }
        ],
        Technology_partners: [
            { value: 'partner1', label: 'Partner 1' },
            { value: 'partner2', label: 'Partner 2' }
        ],
    };

    const [visibleDiv, setVisibleDiv] = useState(false);
    const [bookmarkCount, setBookmarkCount] = useState(0);
    const [watchListIds, setWatchListIds] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        ids: '',
    });

    const handleBookmarkChange = (count) => {
        setBookmarkCount(count);
    };

    const handleBookmark = (id) => {
        setWatchListIds(prevIds => {
            const updatedIds = prevIds.includes(id)
                ? prevIds.filter(existingId => existingId !== id)
                : [...prevIds, id];

            handleBookmarkChange(updatedIds.length);
            return updatedIds;
        });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('frontend.watch_list.show'), {
            data: { ids: data.ids }, // Use dynamic ids
            onFinish: () => {
                console.log('Submission finished');
                reset(); // Reset the form data
            },
            onError: (error) => {
                console.log('Submission error:', error);
            }
        });
    };

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="content-wrapper relative top-[-60px]">
                <div className="flex gap-[30px]">
                    <div className="w-full lg:w-[83.33%]">
                        <div className="w-full border rounded-md bg-white">
                            <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                                <div>
                                    <p className="font-bold text-primary text-lg leading-none">
                                        Global Artificial Intelligence (AI) Policy Status
                                    </p>
                                    <div className="flex items-center mt-[0.5rem] text-sm">
                                        <p className="text-sm leading-normal text-primary-light">
                                            Database Update:
                                            <span className="text-black ml-[4px]">July 2022</span>
                                        </p>
                                        <span className="date-separator"></span>
                                        <p className="text-sm leading-normal text-primary-light">
                                            News Update:
                                            <span className="text-black ml-[4px]">Aug 2024</span>
                                        </p>
                                    </div>

                                </div>

                                {/* ********************** Status Comonent ********************** */}
                                <div className="flex justify-center items-center mb-3">
                                    <Status />
                                </div>
                                <div className="flex gap-3">
                                    {visibleDiv && (
                                        <button
                                            type="button"
                                            className="hover:underline"
                                            onClick={() => setVisibleDiv(false)}
                                        >
                                            <i className="fa-solid fa-square-xmark"></i>
                                            <span className="ml-2">Clear filters</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setVisibleDiv(!visibleDiv)}
                                        className="text-sm text-secondary hover:text-blue-300 lg:hidden"
                                    >
                                        {!visibleDiv ? "Show filters" : "Hide filters"}
                                        <i
                                            className={`fa-solid ${visibleDiv ? "fa-chevron-up" : "fa-chevron-down"} ml-3`}
                                        ></i>
                                    </button>
                                </div>
                            </div>
                            {visibleDiv && (
                                <div className="px-5 w-full mt-5">
                                    <form className="w-full" id="filterData">
                                        <div className="flex">
                                            {SelectInputLists.labels.map((label, index) => (

                                                <div className="w-full md:w-1/2 px-3" key={index}>
                                                    <SelectInput
                                                        label={label}
                                                        listName={Raj[SelectInputLists.lists[index]] || []} // Pass the array directly
                                                    />
                                                </div>
                                            ))}

                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* ********************** MapChart Comonent ********************** */}
                            <div className="mt-5 px-4 map-chart-wrapper">
                                <MapChart />
                            </div>
                            {/* ********************** HistoricState Comonent ********************** */}
                            <div className="px-5 mt-4">
                                <HistoricState date={"August 2024"} />
                            </div>
                            <div className="flex justify-between mt-5 px-5">
                                <form onSubmit={submit} className="text-primary bg-secondary hover:bg-blue-100 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-2">
                                    <button type="submit" className="">
                                        <i className="fa-regular fa-star mr-3"></i>
                                        <span>{processing ? 'Submitting...' : `Watchlist (${bookmarkCount})`}</span>
                                        {processing && <i className="fa-solid fa-spinner fa-spin"></i>}
                                    </button>
                                </form>
                                <EditColumn EditColumnLists={EditColumnLists} />
                            </div>
                            <Table
                                columns={Columns}
                                tableData={tableData.data}
                                btnName={"Edit Columns "}
                                onBookmarkChange={handleBookmarkChange}
                                onHandleBookmark={handleBookmark}
                                watchListIds={watchListIds}
                            />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="hidden lg:block">
                        <div className="border rounded-md w-full bg-white sticky top-0">
                            <div className="border-b-2 py-[16px] px-[16px] flex justify-between items-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="font-bold text-primary text-lg leading-none">Filters</p>
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
                                    <div>
                                        {SelectInputLists.labels.map((label, index) => (
                                            <div className="w-full px-3" key={index}>
                                                <SelectInput
                                                    label={label}
                                                    listName={Raj[SelectInputLists.lists[index]] || []} // Access the data array based on the listName
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <News news={news.data} />
                <Description
                    descriptionData={DescriptionData}
                    contributorLists={ContributorLists}
                    contactLists={ContactLists}
                />
                <Organization organizationLogo={organizationLogo} />
            </div>
        </AppLayout>
    );
}
