import React, { useEffect, useRef, useState } from "react";

import { MapChart } from "./components/map/MapChart";
import { AppLayout } from "@/Layouts/AppLayout";
import SelectInput from "@/Components/SelectInput";
import SelectInputLists from "@/Components/map/SelectInputList";
// import Checkbox from "@/Components/Checkbox";
import Status from "@/Components/status/Status";
import { Head } from "@inertiajs/react";
import HistoricState from "./components/HistoricState";
import Button from "@/Components/Button";
import Table from "@/Components/table/Table";
import Columns from "@/Components/table/Columns";
import TableData from "@/Components/table/TableData";
import EditColumn from "./components/EditColumn";
import EditColumnLists from "./components/EditColumnLists";

// import { Dropdown } from "flowbite-react";
// import { Dropdown, DropdownItem } from "flowbite-react";

export default function Dashboard() {
    const [visibleDiv, setVisibleDiv] = useState(false);

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="relative">
                <div
                    className="border rounded-md w-full bg-white py-5 absolute"
                    style={{ top: "-55px", zIndex: "999" }}
                >
                    <div className=" border-b-2 pb-4 px-5 flex justify-between items-center">
                        <div>
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    Global Artificial Intelligence (AI) Policy
                                    Status
                                </p>
                            </div>
                            <div className="flex gap-5 mt-3 text-sm">
                                <p className=" text-sm">
                                    Database Update:
                                    <span className=" text-black">
                                        July 2022
                                    </span>
                                </p>
                                <p className=" text-sm">
                                    News Update:
                                    <span className="text-black">Aug 2024</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {visibleDiv && (
                                <button
                                    type="button"
                                    className=" hover:underline"
                                >
                                    <i class="fa-solid fa-square-xmark"></i>
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
                                    className={`fa-solid ${
                                        visibleDiv
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                    } ml-3`}
                                ></i>
                            </button>
                        </div>
                    </div>
                    {visibleDiv && (
                        <div className="px-5 w-full mt-5">
                            <form className="w-full" id="filterData">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    {SelectInputLists.labels.map(
                                        (label, index) => (
                                            <div className="w-full md:w-1/2 px-3">
                                                <SelectInput
                                                    key={index}
                                                    label={label}
                                                    listName={
                                                        SelectInputLists.lists[
                                                            index
                                                        ]
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
                    <div
                        style={{ height: "100vh", width: "100%" }}
                        className="mt-5 px-4"
                    >
                        <div className="flex justify-center items-center mb-3">
                            <div>
                                <Status />
                            </div>
                        </div>
                        <MapChart />
                    </div>
                    {/* Historic state */}
                    <div className="px-5 mt-4">
                        <HistoricState date={"August 2024"} />
                    </div>
                    {/* button */}
                    <div className="flex justify-between mt-5 px-5">
                        <Button
                            name={"Watchlist"}
                            className=" bg-secondary py-2 px-5 rounded-md text-primary font-bold"
                        />
                        {/* <Button
                            icon={<i class="fa-solid fa-table-list"></i>}
                            name={"Edit Columns"}
                            className=" bg-secondary py-2 px-5 rounded-md text-primary font-bold"
                        /> */}
                        {/*
                        <Dropdown
                            label="Edit Columns"
                            dismissOnClick={false}
                            class={" bg-secondary font-bold p-0 px-0 py-0"}
                            style={{ padding: "0" }}
                        >
                            <DropdownItem>
                                <input type="checkbox" /> Dashboard
                            </DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem>Earnings</DropdownItem>
                            <DropdownItem>Sign out</DropdownItem>
                        </Dropdown> */}
                        <EditColumn EditColumnLists={EditColumnLists} />
                    </div>

                    {/* table data */}
                    {/* <div class="relative overflow-x-auto px-5 mt-5">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-primary uppercase bg-secondary">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">Silver</td>
                                    <td class="px-6 py-4">Laptop</td>
                                    <td class="px-6 py-4">$2999</td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                    <td class="px-6 py-4">Laptop PC</td>
                                    <td class="px-6 py-4">$1999</td>
                                </tr>
                                <tr class="bg-white">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                    <td class="px-6 py-4">Accessories</td>
                                    <td class="px-6 py-4">$99</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                    <Table
                        columns={Columns}
                        tableData={TableData}
                        btnName={"Edit Columns"}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
