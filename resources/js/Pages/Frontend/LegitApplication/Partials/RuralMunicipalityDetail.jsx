import React, { useEffect, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import axios from "axios";

export default function RuralMunicipalityDetail({
    data,
    setData,
    errors,

    provinces,
}) {
    const [updatedDistrictData, setUpdatedDistrictData] = useState(null);
    const [updatedLgData, setUpdatedLgData] = useState(null);

    // province selected after update district data and disable off
    const provinceSelectedHandle = async (value) => {
        if (!value) {
            setUpdatedDistrictData(null);
            return;
        }

        try {
            const response = await axios.post(`district-data-updata/${value}`);

            const updatedData = response.data;

            console.log({ "updated data = ": updatedData, " value = ": value });

            if (updatedData) {
                setUpdatedDistrictData(updatedData);
            } else {
                // Handle case where data is null, e.g., show a warning or notification
            }
        } catch (error) {
            // Handle error case if needed
            console.error("Failed to fetch data:", error);
        }
    };

    const districtSelectedHandle = async (value) => {
        if (!value) {
            setUpdatedLgData(null);
            return;
        }

        try {
            const response = await axios.post(`lg-data-updata/${value}`); // lg (local government)
            const updatedData = response.data;

            if (updatedData) {
                setUpdatedLgData(updatedData);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    return (
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-4 border-b pb-4">
            {/* NAME OF DATA PROVIDER */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlFor="provider_name"
                        value="NAME OF DATA PROVIDER"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>

                <div className="mt-2">
                    <TextInput
                        id="provider_name"
                        type="text"
                        name="provider_name"
                        value={
                            data.rural_municipality_details.provider_name || ""
                        }
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                rural_municipality_details: {
                                    ...prev.rural_municipality_details,
                                    provider_name: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.provider_name && (
                        <InputError
                            message={errors.provider_name}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* phone number */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel htmlFor="phone_no" value="PHONE NUMBER" />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="phone_no"
                        type="tel"
                        name="phone_no"
                        value={data.rural_municipality_details.phone_no || ""}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                rural_municipality_details: {
                                    ...prev.rural_municipality_details,
                                    phone_no: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.phone_no && (
                        <InputError
                            message={errors.phone_no}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* email */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel htmlFor="email" value="EMAIL" />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.rural_municipality_details.email || ""}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                rural_municipality_details: {
                                    ...prev.rural_municipality_details,
                                    email: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.email && (
                        <InputError message={errors.email} className="mt-2" />
                    )}
                </div>
            </div>

            {/* province */}
            <div className="sm:col-span-2">
                <div className="flex items-center">
                    <InputLabel htmlFor="province_label" value="PROVINCE" />
                    <span className="ml-1 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <select
                        name="province_label"
                        id="province_label"
                        onChange={(e) => {
                            setData((prev) => ({
                                ...prev,
                                rural_municipality_details: {
                                    ...prev.rural_municipality_details,
                                    province_label: e.target.value,
                                },
                            })),
                                provinceSelectedHandle(e.target.value ?? null);
                        }}
                        placeholder="Choose"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">Choose the province</option>
                        {provinces.map((province, index) => (
                            <option
                                key={index}
                                value={province.label}
                                className="text-gray-950"
                            >
                                {province.name_en}
                            </option>
                        ))}
                    </select>
                    {errors.province_label && (
                        <InputError
                            message={errors.province_label}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* district */}
            <div className="sm:col-span-2">
                <div className="flex items-center">
                    <InputLabel htmlFor="district_label" value="DISTRICT" />
                    <span className="ml-1 text-red-500">*</span>
                </div>

                <div className="mt-2">
                    <select
                        name="district_label"
                        id="district_label"
                        onChange={(e) => {
                            setData((prev) => ({
                                ...prev,
                                rural_municipality_details: {
                                    ...prev.rural_municipality_details,
                                    district_label: e.target.value,
                                },
                            })),
                                districtSelectedHandle(e.target.value ?? null);
                        }}
                        disabled={!updatedDistrictData} // Disable if no data
                        className={`w-full ${
                            !updatedDistrictData ? "bg-gray-200" : "bg-white"
                        } rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                    >
                        <option value="" className="text-gray-300">
                            Choose the district
                        </option>
                        {(updatedDistrictData || []).map((district, index) => (
                            <option key={index} value={district.label}>
                                {district.name_en} / {district.name_np}
                            </option>
                        ))}
                    </select>
                    {errors.district_label && (
                        <InputError
                            message={errors.district_label}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* LOCAL GOVERNMENT NAME */}
            <div className="sm:col-span-2">
                <div className="flex items-center">
                    <InputLabel
                        htmlFor="local_government_lable"
                        value="LOCAL GOVERNMENT NAME"
                    />
                    <span className="ml-1 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <div className="mt-2">
                        <select
                            name="local_government_lable"
                            id="local_government_lable"
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    rural_municipality_details: {
                                        ...prev.rural_municipality_details,
                                        local_government_lable: e.target.value,
                                    },
                                }))
                            }
                            disabled={!updatedLgData} // Disable if no data
                            className={`w-full ${
                                !updatedLgData ? "bg-gray-200" : "bg-white"
                            } rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                        >
                            <option value="" className="text-gray-300">
                                Choose the local government
                            </option>
                            {(updatedLgData || []).map((lg, index) => (
                                <option key={index} value={lg.label}>
                                    {lg.name_en} / {lg.name_np}
                                </option>
                            ))}
                        </select>
                        {errors.local_government_lable && (
                            <InputError
                                message={errors.local_government_lable}
                                className="mt-2"
                            />
                        )}
                    </div>
                </div>
            </div>
            {/* POSITION */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel htmlFor="position" value="POSITION" />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2 flex items-center gap-x-4">
                    <div className="flex items-center">
                        <input
                            id="position-officer"
                            type="radio"
                            name="position"
                            value="IT officer"
                            checked={
                                data.rural_municipality_details.position ===
                                "IT officer"
                            }
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    rural_municipality_details: {
                                        ...prev.rural_municipality_details,
                                        position: e.target.value,
                                    },
                                }))
                            }
                        />
                        <label htmlFor="position-officer" className="ml-2">
                            IT Officer
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="position-other"
                            type="radio"
                            name="position"
                            value="Other"
                            checked={
                                data.rural_municipality_details.position ===
                                "Other"
                            }
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    rural_municipality_details: {
                                        ...prev.rural_municipality_details,
                                        position: e.target.value,
                                    },
                                }))
                            }
                        />
                        <label htmlFor="position-other" className="ml-2">
                            Other
                        </label>
                    </div>
                </div>
                {errors.position && (
                    <InputError message={errors.position} className="mt-2" />
                )}
            </div>
        </div>
    );
}
