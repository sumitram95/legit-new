import React, { useState } from "react";
import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
import Layout from "@/Layouts/Backend/Layout";
import { Head } from "@inertiajs/react";
import ViewIcon from "@/Components/ViewIcon";
import NoTableData from "@/Components/Table/NoTableData";
import Pagination from "@/Components/Pagination";
import Model from "@/Components/Model";
import axios from "axios";
import Add from "./Components/Add";
import CountryView from "./Components/View";
import { ToggleSwitch } from "flowbite-react";

export default function Index({ tableData }) {
    const hasData = Array.isArray(tableData.data) && tableData.data.length > 0;
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [updatingData, setUpdatingData] = useState(null);

    const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);
    const toggleViewModal = () => setIsViewModalOpen(!isViewModalOpen);

    const setViewData = async (id) => {
        try {
            const { data } = await axios.post(`/backend/country/view/${id}`);
            setUpdatingData(data.country);
            setIsViewModalOpen(true);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const toggleSwitch = async (id, currentStatus) => {
        const newStatus = currentStatus === 1 ? 0 : 1;
        try {
            await axios.post(route("backend.country.updatedStatus"), {
                id,
                status: newStatus
            });
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    return (
        <Layout>
            <Head title="Country List" />
            <div className="bg-white p-5 rounded-lg">
                <div className="mb-3">
                    <Button onClick={toggleAddModal} className="bg-secondary flex gap-1 px-5 py-2">
                        <AddIcon /> Add Country
                    </Button>
                </div>
                {hasData ? (
                    <>
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs uppercase bg-secondary text-primary">
                                <tr>
                                    <th className="px-6 py-3">S.N</th>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Symbol</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Created At</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.data.map((list, index) => (
                                    <tr key={list.id} className="bg-white border-b">
                                        <td className="px-6 py-4">{tableData.from + index}</td>
                                        <td className="px-6 py-4">{list.name}</td>
                                        <td className="px-6 py-4">{list.symbol ?? "N/A"}</td>
                                        <td className="px-6 py-4">
                                            <ToggleSwitch
                                                checked={list.status === 1 ? true :false}
                                                onChange={() => toggleSwitch(list.id, list.status)}
                                            />
                                        </td>
                                        <td className="px-6 py-4">{list.formatted_created_at ?? "N/A"}</td>
                                        <td className="px-6 py-4">
                                            <Button onClick={() => setViewData(list.id)}>
                                                <ViewIcon />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {tableData.data.length >= 10 && <Pagination paginator={tableData} />}
                    </>
                ) : (
                    <NoTableData noTableDataTitle="There are no country lists" />
                )}
            </div>

            {/* Add Modal */}
            <Model isOpen={isAddModalOpen} onClose={toggleAddModal} title="Add New Country">
                <Add />
            </Model>

            {/* View Modal */}
            <Model isOpen={isViewModalOpen} onClose={toggleViewModal} title="Country Info">
                <CountryView country={updatingData} />
            </Model>
        </Layout>
    );
}
