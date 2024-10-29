import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function IctInfrastructure({ data, setData, errors }) {
    return (
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            {/* no_of_desktop */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_desktop"
                        value="NUMBER OF DESKTOP COMPUTERS"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_desktop"
                        type="number"
                        name="no_of_desktop"
                        value={
                            data.status_of_ict_infrastructure.no_of_desktop ||
                            ""
                        }
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                status_of_ict_infrastructure: {
                                    ...prev.status_of_ict_infrastructure,
                                    no_of_desktop: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_desktop && (
                        <InputError
                            message={errors.no_of_desktop}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_laptop */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_laptop"
                        value="NUMBER OF LAPTOPS"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_laptop"
                        type="number"
                        name="no_of_laptop"
                        value={
                            data.status_of_ict_infrastructure.no_of_laptop || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                status_of_ict_infrastructure: {
                                    ...prev.status_of_ict_infrastructure,
                                    no_of_laptop: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_laptop && (
                        <InputError
                            message={errors.no_of_laptop}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_desktop_printer */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_desktop_printer"
                        value="NUMBER OF DESKTOP PRINTER"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_desktop_printer"
                        type="number"
                        name="no_of_desktop_printer"
                        value={
                            data.status_of_ict_infrastructure
                                .no_of_desktop_printer || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                status_of_ict_infrastructure: {
                                    ...prev.status_of_ict_infrastructure,
                                    no_of_desktop_printer: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_desktop_printer && (
                        <InputError
                            message={errors.no_of_desktop_printer}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_staff_use_compture_software */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_staff_use_compture_software"
                        // value="NUMBER OF STAFFS THAT USE COMPUTER/SOFTWARE FOR DAY TO DAY OPERATION"
                    >
                        <span>
                            NUMBER OF STAFFS THAT USE COMPUTER/SOFTWARE FOR DAY
                            TO DAY OPERATION
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_staff_use_compture_software"
                        type="number"
                        name="no_of_staff_use_compture_software"
                        value={
                            data.status_of_ict_infrastructure
                                .no_of_staff_use_compture_software || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                status_of_ict_infrastructure: {
                                    ...prev.status_of_ict_infrastructure,
                                    no_of_staff_use_compture_software:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_staff_use_compture_software && (
                        <InputError
                            message={errors.no_of_staff_use_compture_software}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
