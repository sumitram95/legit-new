import React from "react";
import { Link, usePage } from "@inertiajs/react";
import NoTableData from "./NoTableData";

import { limitWords } from "@/utils/limitWords";

export default function Table({
    tableData = [],
    noTableDataTitle = "No Data",
    checkedColWithData,
}) {
    const hasData = Array.isArray(tableData) && tableData.length > 0;

    const authcheck = usePage();

    const isAuth = authcheck.props.auth.user
        ? authcheck.props.auth.user?.id
        : null;

    const isVerifiedEmail =
        authcheck.props.auth.user?.email_verified_at == null ? false : true;

    return (
        <div className="relative overflow-x-auto mx-5 mt-5 hidden md:block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-primary uppercase bg-secondary">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 sticky-column border-e border-neutral-200 "
                        >
                            Local Government
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Provinnce
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Districts
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        {/* after show when checked editColumn */}

                    </tr>
                </thead>
                <tbody>
                    {tableData.map((list) => (
                        <tr className="bg-white border-b" key={list.id}>
                            <td
                                width="25%"
                                className="px-6 py-4 sticky-column-td border-e border-neutral-200 "
                            >
                                <div className="flex gap-x-2 items-center">
                                    {/* <i className="fa-regular fa-star B"></i> */}
                                    <Link
                                        href={route("frontend.watch_list.add", {
                                            id: list.id,
                                            isBooked: list.bookmark
                                                ?.ai_policy_tracker_id
                                                ? true
                                                : false,
                                        })}
                                        className="text-primary-light"
                                    >
                                        {list.bookmark?.ai_policy_tracker_id ? (
                                            <i className="fa fa-star A"></i>
                                        ) : (
                                            <i className="fa-regular fa-star B"></i>
                                        )}
                                    </Link>

                                    <Link
                                        href={route(
                                            "frontend.single_ai_policy_tracker.index",
                                            { id: list.id }
                                        )}
                                        className="text-primary hover:underline"
                                    >
                                        {limitWords(list.name_en, 4)}
                                    </Link>
                                </div>
                            </td>
                            <td width="25%" className="px-6 py-4">
                                {list.district?.province?.name_en ?? "null"}
                            </td>
                            <td width="15%" className="px-6 py-4">
                                {list.district?.name_en ?? "null"}
                            </td>
                            <td width="10%" className="px-6 py-4">
                                {list.formatted_created_at}
                            </td>




                            {/* after checked editColumn */}


                        </tr>
                    ))}
                </tbody>
            </table>
            {!hasData && <NoTableData noTableDataTitle={noTableDataTitle} />}
        </div>
    );
}
