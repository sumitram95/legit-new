import React, { useState } from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import SelectInput from "@/Components/SelectInput";
import SelectInputLists from "@/Components/map/SelectInputList";
import { Head, Link } from "@inertiajs/react";
import Table from "@/Components/table/Table";
import Columns from "@/Components/table/Columns";
import TableData from "@/Components/table/TableData";
import EditColumn from "../Dashboard/components/EditColumn";
import EditColumnLists from "../Dashboard/components/EditColumnLists";

export default function Dashboard() {
    const [visibleDiv, setVisibleDiv] = useState(false);

    return (
        <AppLayout>
            <Head title="Watch List" />
            <div className="relative top-[-50px] max-auto">
                <div className="border rounded-md w-full bg-white py-5">
                    <div className=" border-b-2 pb-4 px-5 flex justify-between items-center">
                        <div>
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    WatchList
                                </p>
                            </div>
                            <div className="flex gap-5 mt-3 text-sm">
                                <Link
                                    href={"/"}
                                    className=" text-sm flex gap-2 hover:underline"
                                >
                                    <span>
                                        <i class="fa-regular fa-circle-left"></i>
                                    </span>
                                    <span>Back to full list of AI Policy</span>
                                </Link>
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

                    {/* table */}
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