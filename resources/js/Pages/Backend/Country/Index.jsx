import React, { useEffect, useState } from "react";
import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
// import DeleteIcon from "@/Components/DeleteIcon";
// import EditIcon from "@/Components/EditIcon";
// import Model from "@/Components/Model";
// import NoTableData from "@/Components/Table/NoTableData";
// import ViewIcon from "@/Components/ViewIcon";
import Layout from "@/Layouts/Backend/Layout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import DeleteIcon from "@/Components/DeleteIcon";
import ViewIcon from "@/Components/ViewIcon";
import NoTableData from "@/Components/Table/NoTableData";
import Pagination from "@/Components/Pagination";
import Model from "@/Components/Model";
// import View from "./Components/View";
import View from "./Components/View";
// import Pagination from "@/Components/Pagination";
// import DeleteModel from "@/Components/DeleteModel";
// import Edit from "./Components/Edit";
import axios from "axios";
import Add from "./Components/Add";
import CountryView from "./Components/View";
import { ToggleSwitch } from "flowbite-react";

export default function Index({ tableData }) {
    const hasData = Array.isArray(tableData.data) && tableData.data.length > 0;
    const noTableDataTitle = "There are no news lists";

    // add modal open
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    // view modal open
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    // add toggle func
    const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

    // add toggle func
    const toggleViewModal = () => setIsViewModalOpen(!isViewModalOpen);

    // set updating data
    const [updatingData, setUpdatingData] = useState(null);

    const setViewData = async (id = null) => {
        if (!id) return;

        try {
            const response = await axios.post(`/backend/country/view/${id}`);
            const updatedData = response.data.country;

            if (updatedData) {
                setUpdatingData(updatedData);
                setIsViewModalOpen(!isAddModalOpen);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const [isActive, setIsActive] = useState(true);

    const [isId, setIsId] = useState(null);

    const country = useForm({
        id: isId,
        status: isActive,
    });

    useEffect(() => {
        country.setData("status", isActive);
        country.setData("id", isId);
    }, [isActive, isId]);

    const toggleSwitch = (id) => {
        setIsActive(true);
        setIsId(id);
    };

    console.log(country);

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
                                            created at
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
                                                    checked={ list.status == 1? isActive:false }
                                                    // label="Set Status"
                                                    onChange={() =>
                                                        toggleSwitch(list.id)
                                                    }
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                {list.formatted_created_at ??
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    {/* <Link
                                                        href={route(
                                                            "backend.users.view",
                                                            list.id
                                                        )}
                                                        className="underline text-blue-950"
                                                    >
                                                        <ViewIcon />
                                                    </Link> */}

                                                    <Button
                                                        type="button"
                                                        onClick={() =>
                                                            setViewData(list.id)
                                                        }
                                                    >
                                                        <ViewIcon />
                                                    </Button>
                                                    {/* <Button
                                                type="button"
                                                onClick={() =>
                                                    toggleDeleteModal(list.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </Button> */}
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

            {/* add model */}
            <Model
                isOpen={isAddModalOpen}
                onClose={toggleAddModal}
                title="Add New Country"
                width="max-w-xl"
            >
                <Add />
                {/* {updatingData} */}
                {/* <View user={updatingData} /> */}
            </Model>

            <Model
                isOpen={isViewModalOpen}
                onClose={toggleViewModal}
                title="Country Info"
                width="max-w-xl"
            >
                <CountryView country={updatingData} />
            </Model>

            {/* edit model */}
            {/* <Model
                isOpen={isEditModalOpen}
                onClose={openEditModal}
                title="Edit News"
                width="max-w-6xl"
            >
                <Edit
                    aiPolicyTrackers={aiPolicyTrackers}
                    countries={countries}
                    categories={categories}
                    onClose={openEditModal}
                    aiId={selectedAiId}
                    updatedData={updatingData}
                />
            </Model> */}
            {/*
            <DeleteModel
                title={"Are you sure you want to delete this news?"}
                routePath={"/backend/news/delete/"}
                isOpen={isDeleteModalOpen}
                onClose={() => toggleDeleteModal()}
                aiId={selectedAiId}
            /> */}
        </Layout>
    );
}
