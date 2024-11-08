import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
import DeleteIcon from "@/Components/DeleteIcon";
import EditIcon from "@/Components/EditIcon";
import Model from "@/Components/Model";
import NoTableData from "@/Components/Table/NoTableData";
import ViewIcon from "@/Components/ViewIcon";
import Layout from "@/Layouts/Backend/Layout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Add from "./Components/Add";
import Pagination from "@/Components/Pagination";
import DeleteModel from "@/Components/DeleteModel";
import axios from "axios";
import Edit from "./Components/Edit";

export default function Index({
    tableData = [],
    countries = null,
    status = null,
}) {
    // add modal
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // edit modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    //delete modal
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // set id
    const [selectedAiId, setSelectedAiId] = useState(null);

    // set updating data
    const [updatingData, setUpdatingData] = useState(null);

    // add toggle func
    const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

    // import axios from 'axios'; // Ensure axios is imported

    function openEditModal() {
        setIsEditModalOpen(!isEditModalOpen);
    }

    // edit toggle func
    const toggleEdiModal = async (id = null) => {
        if (!id) return;

        try {
            // Make a GET request to fetch data by ID
            const response = await axios.post(
                `/backend/legit-application/update/${id}`
            );

            const updatedData = response.data.aiPolicyTracker; // Adjust according to your response structure

            if (updatedData) {
                // Set the updating data and open the modal if data is not null
                setUpdatingData(updatedData);
                setSelectedAiId(id);
                // setIsEditModalOpen(!isEditModalOpen);

                openEditModal();
            } else {
                // Handle case where data is null, e.g., show a warning or notification
            }
        } catch (error) {
            // Handle error case if needed
            console.error("Failed to fetch data:", error);
        }
    };

    // delete toggle func
    const toggleDeleteModal = (id = null) => {
        setSelectedAiId(id);
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const hasData = Array.isArray(tableData.data) && tableData.data.length > 0;
    const noTableDataTitle = "There are no (AI) policy tracker lists";

    return (
        <Layout>
            <Head title="Country Lists" />
            <div className="rounded-lg bg-white py-2 px-5">
                <div className="relative overflow-x-auto mt-5 min-h-[400px]">
                    <div className="mb-3 float-end">
                        <Button
                            onClick={toggleAddModal}
                            type="button"
                            className="text-sm text-gray-700 font-semibold flex gap-1 bg-secondary px-5 py-2 hover:bg-blue-100"
                        >
                            <AddIcon /> <span>Add New</span>
                        </Button>
                    </div>

                    {hasData ? (
                        <>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-primary uppercase bg-secondary">
                                    <tr>
                                        <th
                                            style={{ width: "10%" }}
                                            className="px-6 py-3"
                                        >
                                            S.N
                                        </th>
                                        <th className="px-6 py-3">
                                            Provider Name
                                        </th>
                                        <th className="px-6 py-3">Phone No.</th>
                                        <th className="px-6 py-3">Province</th>
                                        <th className="px-6 py-3">District</th>
                                        <th className="px-6 py-3">LG Name</th>
                                        <th className="px-6 py-3">
                                            Created At
                                        </th>
                                        <th
                                            style={{ width: "10%" }}
                                            className="px-6 py-3"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.data.map((list, index) => (
                                        <tr
                                            className="bg-white border-b"
                                            key={list.id}
                                        >
                                            <td className="px-6 py-4">
                                                {tableData.from + index}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.provider_name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.phone_no}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.province?.name_en ??
                                                    "N/A"}
                                            </td>

                                            <td className="px-6 py-4">
                                                {list.district?.name_en ??
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.lg?.name_en ?? 0}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.formatted_created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    {/* View Action */}
                                                    <Link
                                                        href="#"
                                                        className="underline text-blue-950"
                                                    >
                                                        <ViewIcon />
                                                    </Link>

                                                    {/* Edit Action */}
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleEdiModal(1)
                                                        }
                                                    >
                                                        <EditIcon />
                                                    </Button>

                                                    {/* Delete Action */}
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleDeleteModal(2)
                                                        }
                                                    >
                                                        <DeleteIcon />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {tableData.total > 10 && (
                                <Pagination paginator={tableData} />
                            )}
                        </>
                    ) : (
                        <NoTableData noTableDataTitle={noTableDataTitle} />
                    )}
                </div>
            </div>

            {/* ******************************* Add Model *****************************/}
            <Model
                isOpen={isAddModalOpen}
                onClose={toggleAddModal}
                title="Add new (AI) Policy Tracker"
                width="max-w-6xl"
            >
                <Add
                    countries={countries}
                    status={status}
                    onClose={toggleAddModal}
                />
            </Model>

            {/* ******************************* Edit Model *****************************/}
            <Model
                isOpen={isEditModalOpen}
                onClose={openEditModal}
                title="Edit (AI) Policy Tracker"
                width="max-w-6xl"
            >
                <Edit
                    countries={countries}
                    status={status}
                    onClose={openEditModal}
                    aiId={selectedAiId}
                    updatedData={updatingData}
                />
            </Model>

            {/* ******************************* Delete Model *****************************/}
            <DeleteModel
                title={
                    "Are you sure you want to delete this (AI) policy tracker?"
                }
                routePath={"/backend/legit-application/delete/"}
                isOpen={isDeleteModalOpen}
                onClose={() => toggleDeleteModal()}
                aiId={selectedAiId}
            />
        </Layout>
    );
}
