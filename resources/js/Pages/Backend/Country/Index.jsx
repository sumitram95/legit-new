import React, { useEffect, useState } from "react";
import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
import Layout from "@/Layouts/Backend/Layout";
import { Head, useForm } from "@inertiajs/react";
import DeleteIcon from "@/Components/DeleteIcon";
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
    const noTableDataTitle = "There are no news lists";

    // Modal state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [updatingData, setUpdatingData] = useState(null);

    const [isActive, setIsActive] = useState({});
    const [selectedId, setSelectedId] = useState(null);

    // Toggle modals
    const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);
    const toggleViewModal = () => setIsViewModalOpen(!isViewModalOpen);

    // Fetch country data for the view modal
    const setViewData = async (id = null) => {
        if (!id) return;

        try {
            const response = await axios.post(`/backend/country/view/${id}`);
            const updatedData = response.data.country;

            if (updatedData) {
                setUpdatingData(updatedData);
                setIsViewModalOpen(true);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    // Toggle switch
    // const toggleSwitch = async (id, currentStatus) => {
    //     const newStatus = currentStatus === 1 ? 0 : 1;
    //     setIsActive((prevState) => ({ ...prevState, [id]: newStatus }));
    //     setSelectedId(id);
    //     console.log(selectedId);
    //     // Perform the update request
    //     axios
    //         .post(route("backend.country.updatedStatus"), {
    //             id: id,
    //             status: newStatus,
    //         })
    //         .then(function (response) {
    //             console.log(
    //                 "successfully ",
    //                 currentStatus ? "enabled" : "disabled"
    //             );
    //         })
    //         .catch((error) => {
    //             console.error("Failed to update status:", error);
    //         });
    // };
    function toggleSwitch(id, currentStatus) {
                const newStatus = currentStatus === 1 ? 0 : 1;
        setIsActive((prevState) => ({ ...prevState, [id]: newStatus }));
        setSelectedId(id);
        console.log(selectedId);
        // Perform the update request
        axios
            .post(route("backend.country.updatedStatus"), {
                id: id,
                status: newStatus,
            })
            .then(function (response) {
                console.log(
                    "successfully ",
                    currentStatus ? "enabled" : "disabled"
                );
            })
            .catch((error) => {
                console.error("Failed to update status:", error);
            });
    }
    // Initialize isActive state
    useEffect(() => {
        const initialState = {};
        tableData.data.forEach((item) => {
            initialState[item.id] = item.status;
        });
        setIsActive(initialState);
    }, [tableData.data]);

    return (
        <Layout>
            <Head title="News Lists" />
            <div className="rounded-lg bg-white py-2 px-5">
                <div className="relative overflow-x-auto mt-5 min-h-[400px]">
                    <div className="mb-3 float-end">
                        <Button
                            onClick={toggleAddModal}
                            type="button"
                            className="text-sm text-gray-700 font-semibold flex gap-1 bg-secondary px-5 py-2 hover:bg-blue-100"
                        >
                            <AddIcon /> <span>Add Country</span>
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
                                        <th
                                            className="px-6 py-3"
                                            style={{ width: "40%" }}
                                        >
                                            Name
                                        </th>
                                        <th
                                            className="px-6 py-3"
                                            style={{ width: "10%" }}
                                        >
                                            Symbol
                                        </th>
                                        <th
                                            className="px-6 py-3"
                                            style={{ width: "0%" }}
                                        >
                                            Status
                                        </th>
                                        <th
                                            className="px-6 py-3"
                                            style={{ width: "20%" }}
                                        >
                                            Created At
                                        </th>
                                        <th
                                            className="px-6 py-3"
                                            style={{ width: "10%" }}
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
                                                {list.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.symbol ?? "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <ToggleSwitch
                                                    checked={
                                                        isActive[list.id] === 1
                                                    }
                                                    onClick={() =>
                                                        toggleSwitch(
                                                            list.id,
                                                            isActive[list.id]
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.formatted_created_at ??
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            setViewData(list.id)
                                                        }
                                                    >
                                                        <ViewIcon />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {tableData.data.length >= 10 && (
                                <Pagination paginator={tableData} />
                            )}
                        </>
                    ) : (
                        <NoTableData noTableDataTitle={noTableDataTitle} />
                    )}
                </div>
            </div>

            {/* Add modal */}
            <Model
                isOpen={isAddModalOpen}
                onClose={toggleAddModal}
                title="Add New Country"
                width="max-w-xl"
            >
                <Add />
            </Model>

            {/* View modal */}
            <Model
                isOpen={isViewModalOpen}
                onClose={toggleViewModal}
                title="Country Info"
                width="max-w-xl"
            >
                <CountryView country={updatingData} />
            </Model>
        </Layout>
    );
}
