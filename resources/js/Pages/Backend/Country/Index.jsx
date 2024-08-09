import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
import DeleteIcon from "@/Components/DeleteIcon";
import EditIcon from "@/Components/EditIcon";
import NoTableData from "@/Components/table/NoTableData";
import Table from "@/Components/table/Table";
import ViewIcon from "@/Components/ViewIcon";
import Layout from "@/Layouts/Backend/Layout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function CountryIndex({ tableData = [] }) {
    const hasData = Array.isArray(tableData) && tableData > 0;
    var noTableDataTitle = "There are no country lists";
    return (
        <Layout>
            <Head title="Country Lists" />
            <div className="rounded-lg bg-white py-2 px-5">
                <div className="relative overflow-x-auto mt-5">

                    <div className="mb-3">
                        <Button className=" text-sm text-gray-700 font-semibold flex gap-1">
                           <AddIcon />  Add new country
                        </Button>
                    </div>


                    {/* {hasData && ( */}
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-primary uppercase bg-secondary">
                            <tr>
                                <th
                                    style={{ width: "10%" }}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    S.N
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th
                                    style={{ width: "10%" }}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {tableData.map((list, index) => ( */}
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4">1.</td>
                                <td className="px-6 py-4">Nepal</td>

                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <Link
                                            href={"#"}
                                            className="underline text-blue-950"
                                        >
                                            <EditIcon />
                                        </Link>

                                        <Link
                                            href={"#"}
                                            className="underline text-blue-950"
                                        >
                                            <ViewIcon />
                                        </Link>
                                        <Link
                                            href={"#"}
                                            className="underline text-blue-950"
                                        >
                                            <DeleteIcon />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                    {/* )} */}
                    {!hasData && (
                        <NoTableData noTableDataTitle={noTableDataTitle} />
                    )}
                </div>
            </div>
        </Layout>
    );
}
