import React from "react";
import { Link } from "@inertiajs/react";
import NoTableData from "./NoTableData";

import { limitWords } from '@/utils/limitWords';

export default function Table({
    favourite,
    columns = [],
    tableData = [],
    noTableDataTitle = "No Data",
    onHandleBookmark, // Callback function to handle bookmark logic
    watchListIds = [], // Array of bookmarked IDs
    checkedColWithData,
    ...props
}) {

    const hasData = Array.isArray(tableData) && tableData.length > 0;

    return (
        <div className="relative overflow-x-auto mx-5 mt-5 hidden md:block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-primary uppercase bg-secondary">
                    <tr>
                        <th scope="col" className="px-6 py-3 sticky-column border-e border-neutral-200 ">
                            AI Policy Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Country / Region
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Governing Body
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Announcement Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Whitepaper / Document Link
                        </th>
                        {/* after show when checked editColumn */}
                        {checkedColWithData.includes("Technology partners") && (
                            <th scope="col" className="px-6 py-3">
                                Technology partners
                            </th>
                        )}

                        {checkedColWithData.includes(
                            "Governance structure"
                        ) && (
                                <th scope="col" className="px-6 py-3">
                                    Governance structure
                                </th>
                            )}

                        {checkedColWithData.includes(
                            "Main motivation/goals of the AI policy"
                        ) && (
                                <th scope="col" className="px-6 py-3">
                                    Main motivation/goals of the AI policy
                                </th>
                            )}

                        {checkedColWithData.includes("Description") && (
                            <th scope="col" className="px-6 py-3">
                                description
                            </th>
                        )}

                        {checkedColWithData.includes(
                            "Link to announcement"
                        ) && (
                                <th scope="col" className="px-6 py-3">
                                    Link to announcement
                                </th>
                            )}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((list) => (
                        <tr className="bg-white border-b" key={list.id}>
                            <td width="25%" className="px-6 py-4 sticky-column-td border-e border-neutral-200 ">
                                <div className="flex gap-x-2 items-center">
                                    <button
                                        type="button"
                                        className="text-primary-light"
                                        onClick={() =>
                                            onHandleBookmark(list.id)
                                        }
                                    >
                                        {favourite ? (
                                            <i className="fa fa-star A"></i>
                                        ) : (
                                            <i
                                                className={`fa ${watchListIds.includes(
                                                    list.id
                                                )
                                                    ? "fa-star A"
                                                    : "fa-regular fa-star B"
                                                    }`}
                                            ></i>
                                        )}
                                    </button>
                                    <Link
                                        href={route(
                                            "frontend.single_ai_policy_tracker.index",
                                            { id: list.id }
                                        )}
                                        className="text-primary hover:underline"
                                    >
                                        {limitWords(list.ai_policy_name, 3)}
                                    </Link>
                                </div>
                            </td>
                            <td width="15%" className="px-6 py-4">{list.country?.name}</td>
                            <td width="25%" className="px-6 py-4">{list.governing_body}</td>
                            <td width="10%" className="px-6 py-4">
                                {list.formatted_created_at}
                            </td>
                            <td width="15%" className="px-6 py-4">
                                <span className={`status-state ${list.status?.name || ''}`}></span>
                                {list.status?.name}
                            </td>
                            <td width="10%" className="px-6 py-4">
                                <a
                                    href={list.whitepaper_document_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-950"
                                >
                                    open
                                </a>
                            </td>


                            {/* after checked editColumn */}
                            {checkedColWithData.includes(
                                "Technology partners"
                            ) && (
                                    <td width="10%" className="px-6 py-4">
                                        {list.technology_partners}
                                    </td>
                                )}
                            {checkedColWithData.includes(
                                "Governance structure"
                            ) && (
                                    <td width="10%" className="px-6 py-4">
                                        {limitWords(list.governance_structure, 3)}
                                    </td>
                                )}
                            {checkedColWithData.includes(
                                "Main motivation/goals of the AI policy"
                            ) && (
                                    <td width="10%" className="px-6 py-4">

                                        {limitWords(list.main_motivation, 3)}
                                    </td>
                                )}
                            {checkedColWithData.includes("Description") && (
                                <td width="10%" className="px-6 py-4">
                                    {limitWords(list.description, 3)}
                                </td>

                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {!hasData && <NoTableData noTableDataTitle={noTableDataTitle} />}
        </div>
    );
}
