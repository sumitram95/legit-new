import { Link } from "@inertiajs/react";
import React from "react";
import NoTableData from "./NoTableData";
import Button from "../Button";
import LinkButton from "../LinkButton";

export default function Table({ columns = [], tableData = [], ...props }) {
    const hasData = Array.isArray(tableData) && tableData.length > 0;

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
                        <tr className="bg-white border-b" key={index}>
                            <td className="px-6 py-4">
                                <div className="flex gap-x-2">
                                    <form action="" method="post">
                                        <button
                                            type="submit"
                                            className=" text-primary"
                                        >
                                            <i className="fa-solid fa-star"></i>
                                        </button>
                                    </form>
                                    <Link className="text-primary hover:underline">
                                        {list.aiPolicyName}
                                    </Link>
                                </div>
                            </td>
                            <td className="px-6 py-4">{list.country}</td>
                            <td className="px-6 py-4">{list.governingBody}</td>
                            <td className="px-6 py-4">
                                {list.announcementYear}
                            </td>
                            <td className="px-6 py-4">{list.status}</td>
                            <td className="px-6 py-4">
                                <Link
                                    href={"#"}
                                    className="underline text-blue-950"
                                >
                                    {list.Whitepaper_Document_Link}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!hasData && (
                <NoTableData titleName="There are no AI Policy Lists" />
            )}
        </div>
    );
}
