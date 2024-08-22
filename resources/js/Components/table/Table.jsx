import { Link } from "@inertiajs/react";
import React from "react";
import NoTableData from "./NoTableData";
import Button from "../Button";
import LinkButton from "../LinkButton";

export default function Table({
    columns = [],
    tableData = [],
    noTableDataTitle = "No Data",
    ...props
}) {
    const hasData = Array.isArray(tableData) && tableData.length > 0;

    console.log(columns);
    return (
        <div className="relative overflow-x-auto px-5 mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-primary uppercase bg-secondary">
                    <tr>
                        {columns.map((column, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((list, index) => (
                        <tr className="bg-white border-b" key={list.id}>
                            <td className="px-6 py-4">
                                <div className="flex gap-x-2">
                                    <form action="" method="post">
                                        <button
                                            type="submit"
                                            className=" text-primary"
                                        >
                                            <i className="fa-regular fa-star"></i>
                                        </button>
                                    </form>
                                    <Link
                                        href={route("frontend.single_ai_policy_tracker.index", { id: list.id })}
                                        className="text-primary hover:underline"
                                    >
                                        {list.ai_policy_name}
                                    </Link>

                                </div>
                            </td>
                            <td className="px-6 py-4">{list.country?.name}</td>
                            <td className="px-6 py-4">{list.governing_body}</td>
                            <td className="px-6 py-4">
                                {list.formatted_created_at}
                            </td>
                            <td className="px-6 py-4">{list.status?.name}</td>
                            <td className="px-6 py-4">
                                <a
                                    href={list.whitepaper_document_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-950"
                                >
                                    open
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!hasData && <NoTableData noTableDataTitle={noTableDataTitle} />}
        </div>
    );
}
