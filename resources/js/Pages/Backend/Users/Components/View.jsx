import React, { useEffect, useState } from "react";
import AddIcon from "@/Components/AddIcon";
import Button from "@/Components/Button";
// import DeleteIcon from "@/Components/DeleteIcon";
// import EditIcon from "@/Components/EditIcon";
// import Model from "@/Components/Model";
// import NoTableData from "@/Components/Table/NoTableData";
// import ViewIcon from "@/Components/ViewIcon";
import Layout from "@/Layouts/Backend/Layout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import DeleteIcon from "@/Components/DeleteIcon";
import ViewIcon from "@/Components/ViewIcon";
// import Add from "./Components/Add";
// import Pagination from "@/Components/Pagination";
// import DeleteModel from "@/Components/DeleteModel";
// import Edit from "./Components/Edit";
// import axios from "axios";

// Helper function to generate avatar URL
const generateAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=EBF4FF&color=7F9CF5`;
};

export default function View({ user }) {
    const avatarUrl = generateAvatarUrl(user.name);

    return (
        <div className="w-full">
            <div className="rounded-lg bg-white w-full">
                <div className="border-b pb-3  px-5 flex items-center gap-2">
                    <div className="flex justify-center w-[43px] h-[43px] rounded-full overflow-hidden">
                        <img
                            src={avatarUrl}
                            alt="User Avatar"
                            className="h-full w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-500">{user.name}</p>
                        <span className=" bg-green-500 text-white px-1 rounded-full text-xs">
                            verified
                        </span>
                    </div>
                </div>

                {/* user info */}

                <div className="px-5 mt-3 mb-3 flex justify-between">
                    <strong className="text-gray-600">Status</strong>
                    <span
                        className={`bg-green-500 text-white px-5 py-1 rounded-full text-xs ${
                            user.user_info?.status == 1
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}
                    >
                        {user.user_info?.status == 1 ? "Active" : "Inactive"}
                    </span>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3">
                    <strong className="text-gray-600">Email</strong>
                    <p className="text-gray-500">{user.email}</p>
                </div>
                <hr />
                <div className="px-5 mt-3 mb-3 flex justify-between">
                    <strong className="text-gray-600">Phone No.</strong>
                    <span className="text-gray-500">9800000000</span>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3">
                    <strong className="text-gray-600">Organization Name</strong>
                    <p className="text-gray-500">
                        {user.user_info?.organization_name ?? "N/A"}
                    </p>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3">
                    <strong className="text-gray-600">
                        Organization Email
                    </strong>
                    <p className="text-gray-500">
                        {user.user_info?.organization_email ?? "N/A"}
                    </p>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3 flex justify-between">
                    <strong className="text-gray-600">IP Address.</strong>
                    <span className="text-gray-500">192.168.1.74</span>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3  flex-col justify-between">
                    <strong className="text-gray-600">User Browser</strong>
                    <p className="text-gray-500">
                        {user.user_info?.user_agent}
                    </p>
                </div>
                <hr />

                <div className="px-5 mt-3 mb-3 flex justify-between">
                    <strong className="text-gray-600">
                        Terms and condition
                    </strong>
                    <span className="text-gray-500">true</span>
                </div>
                <hr />

                <div className="px-5 mt-3 flex justify-between">
                    <strong className="text-gray-600">Created at</strong>
                    <span className="text-gray-500">
                        {user.formatted_created_at}
                    </span>
                </div>
            </div>
        </div>
    );
}
