import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
import DeleteIcon from "@/Components/DeleteIcon";
import EditIcon from "@/Components/EditIcon";
import Model from "@/Components/Model";
import NoTableData from "@/Components/table/NoTableData";
import ViewIcon from "@/Components/ViewIcon";
import Layout from "@/Layouts/Backend/Layout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import Pagination from "@/Components/Pagination";
import DeleteModel from "@/Components/DeleteModel";
import Edit from "./components/Edit";
import axios from "axios";

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
                `/backend/aipolicytracker/update/${id}`
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

    const { props } = usePage();
    const successMessage = props.flash?.success;

    useEffect(() => {
        if (successMessage) {
            setIsAddModalOpen(false); // Close the modal on success

            setIsEditModalOpen(false);
        }
    }, [successMessage]);

    return (
        <Layout>
            <Head title="Country Lists" />
            <div className="rounded-lg bg-white py-2 px-5">
                <div className="relative overflow-x-auto mt-5">
                    <div className="mb-3 float-end">
                        <Button
                            onClick={toggleAddModal}
                            type="button"
                            className="text-sm text-gray-700 font-semibold flex gap-1 bg-secondary px-5 py-2 hover:bg-blue-100"
                        >
                            <AddIcon /> <span>Add (AI) Policy Tracker</span>
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
                                        <th className="px-6 py-3">Name</th>
                                        <th className="px-6 py-3">
                                            Governing Body
                                        </th>
                                        <th className="px-6 py-3">
                                            Country Name
                                        </th>
                                        <th className="px-6 py-3">
                                            Status Name
                                        </th>
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
                                                {list.ai_policy_name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.governing_body}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.country?.name ?? "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.status?.name ?? "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.formatted_created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleEdiModal(
                                                                list.id
                                                            )
                                                        }
                                                    >
                                                        <EditIcon />
                                                    </Button>
                                                    <Link
                                                        href="#"
                                                        className="underline text-blue-950"
                                                    >
                                                        <ViewIcon />
                                                    </Link>
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleDeleteModal(
                                                                list.id
                                                            )
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

                            <Pagination paginator={tableData} />
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
                <Add countries={countries} status={status} />
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
                title={"Are you sure you want to delete this (AI) policy tracker?"}
                routePath={"/backend/aipolicytracker/delete/"}
                isOpen={isDeleteModalOpen}
                onClose={() => toggleDeleteModal()}
                aiId={selectedAiId}
            />
        </Layout>
    );
}
