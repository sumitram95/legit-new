import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

export default function IctTrainingConducted({ data, setData, errors }) {
    return (
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            {/* total_no_of_training */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="total_no_of_training"
                        value="TOTAL NUMBER OF TRAINING CONDUCTED :"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="total_no_of_training"
                        type="number"
                        name="total_no_of_training"
                        value={data.ict_training.total_no_of_training || ""}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    total_no_of_training: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.total_no_of_training && (
                        <InputError
                            message={errors.total_no_of_training}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* total_no_of_training_beneficiaries */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="total_no_of_training_beneficiaries"
                        value="TOTAL NUMBER OF ICT TRAINING BENEFICIARIES :
"
                    />
                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="total_no_of_training_beneficiaries"
                        type="number"
                        name="total_no_of_training_beneficiaries"
                        value={
                            data.ict_training
                                .total_no_of_training_beneficiaries || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    total_no_of_training_beneficiaries:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.total_no_of_training_beneficiaries && (
                        <InputError
                            message={errors.total_no_of_training_beneficiaries}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_ict_training_lg_staffs */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_ict_training_lg_staffs"
                        value="NUMBER OF ICT TRAINING CONDUCTED TO LOCAL GOVERNMENT STAFFS"
                    />

                    <span className="ml-2 text-red-500">*</span>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_ict_training_lg_staffs"
                        type="number"
                        name="no_of_ict_training_lg_staffs"
                        value={
                            data.ict_training.no_of_ict_training_lg_staffs || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_ict_training_lg_staffs:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_ict_training_lg_staffs && (
                        <InputError
                            message={errors.no_of_ict_training_lg_staffs}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* total_beneficieries_lg_offices */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="total_beneficieries_lg_offices"
                        // value="TOTAL BENEFECIERIES FROM LOCAL GOVERNMENT OFFICE :"
                    >
                        <span>
                            TOTAL BENEFECIERIES FROM LOCAL GOVERNMENT OFFICE :
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="total_beneficieries_lg_offices"
                        type="number"
                        name="total_beneficieries_lg_offices"
                        value={
                            data.ict_training.total_beneficieries_lg_offices ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    total_beneficieries_lg_offices:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.total_beneficieries_lg_offices && (
                        <InputError
                            message={errors.total_beneficieries_lg_offices}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_male_lg_officer */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_male_lg_officer"
                        // value="Number Of Female"
                    >
                        <span>Number of male</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_male_lg_officer"
                        type="number"
                        name="no_of_male_lg_officer"
                        value={data.ict_training.no_of_male_lg_officer || ""}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_male_lg_officer: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_male_lg_officer && (
                        <InputError
                            message={errors.no_of_male_lg_officer}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* no_of_female_lg_officer */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_female_lg_officer"
                        // value="Number Of Female"
                    >
                        <span>Number of female</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_female_lg_officer"
                        type="number"
                        name="no_of_female_lg_officer"
                        value={data.ict_training.no_of_female_lg_officer || ""}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_female_lg_officer: e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_female_lg_officer && (
                        <InputError
                            message={errors.no_of_female_lg_officer}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* ********************************************************************** */}
            {/* no_of_ict_disadvantage_groups */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_ict_disadvantage_groups"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF ICT TRAINING CONDUCTED TO DISADVANTAGE
                            GROUPS
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_ict_disadvantage_groups"
                        type="number"
                        name="no_of_ict_disadvantage_groups"
                        value={
                            data.ict_training.no_of_ict_disadvantage_groups ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_ict_disadvantage_groups:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_ict_disadvantage_groups && (
                        <InputError
                            message={errors.no_of_ict_disadvantage_groups}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_benefecieries_disadvantage_groups */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_benefecieries_disadvantage_groups"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF BENEFECIERIES FROM DISADVANTAGE GROUPS
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_benefecieries_disadvantage_groups"
                        type="number"
                        name="no_of_benefecieries_disadvantage_groups"
                        value={
                            data.ict_training
                                .no_of_benefecieries_disadvantage_groups || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_benefecieries_disadvantage_groups:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_benefecieries_disadvantage_groups && (
                        <InputError
                            message={
                                errors.no_of_benefecieries_disadvantage_groups
                            }
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_male_disadvantage_group */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_male_disadvantage_group"
                        // value="Number Of Female"
                    >
                        <span>Number of male</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_male_disadvantage_group"
                        type="number"
                        name="no_of_male_disadvantage_group"
                        value={
                            data.ict_training.no_of_male_disadvantage_group ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_male_disadvantage_group:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_male_disadvantage_group && (
                        <InputError
                            message={errors.no_of_male_disadvantage_group}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* no_of_female_disadvantage_group */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_female_disadvantage_group"
                        // value="Number Of Female"
                    >
                        <span>Number of female</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_female_disadvantage_group"
                        type="number"
                        name="no_of_female_disadvantage_group"
                        value={
                            data.ict_training.no_of_female_disadvantage_group ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_female_disadvantage_group:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_female_disadvantage_group && (
                        <InputError
                            message={errors.no_of_female_disadvantage_group}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* ********************************************************************** */}
            {/* no_of_ict_lg_school_or_clubs */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_ict_lg_school_or_clubs"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF ICT TRAINING CONDUCTED TO LOCAL SCHOOLS/
                            CLUBS
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_ict_lg_school_or_clubs"
                        type="number"
                        name="no_of_ict_lg_school_or_clubs"
                        value={
                            data.ict_training.no_of_ict_lg_school_or_clubs || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_ict_lg_school_or_clubs:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_ict_lg_school_or_clubs && (
                        <InputError
                            message={errors.no_of_ict_lg_school_or_clubs}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_benefecieries_ict_lg_school_or_clubs */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_benefecieries_ict_lg_school_or_clubs"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF BENEFECIERIES FROM LOCAL SCHOOLS/ CLUBS
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_benefecieries_ict_lg_school_or_clubs"
                        type="number"
                        name="no_of_benefecieries_ict_lg_school_or_clubs"
                        value={
                            data.ict_training
                                .no_of_benefecieries_ict_lg_school_or_clubs ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_benefecieries_ict_lg_school_or_clubs:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_benefecieries_ict_lg_school_or_clubs && (
                        <InputError
                            message={
                                errors.no_of_benefecieries_ict_lg_school_or_clubs
                            }
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_male_ict_lg_school_or_clubs */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_male_ict_lg_school_or_clubs"
                        // value="Number Of Female"
                    >
                        <span>Number of male</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_male_ict_lg_school_or_clubs"
                        type="number"
                        name="no_of_male_ict_lg_school_or_clubs"
                        value={
                            data.ict_training
                                .no_of_male_ict_lg_school_or_clubs || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_male_ict_lg_school_or_clubs:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_male_ict_lg_school_or_clubs && (
                        <InputError
                            message={errors.no_of_male_ict_lg_school_or_clubs}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* no_of_female_ict_lg_school_or_clubs */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_female_ict_lg_school_or_clubs"
                        // value="Number Of Female"
                    >
                        <span>Number of female</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_female_ict_lg_school_or_clubs"
                        type="number"
                        name="no_of_female_ict_lg_school_or_clubs"
                        value={
                            data.ict_training
                                .no_of_female_ict_lg_school_or_clubs || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_female_ict_lg_school_or_clubs:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_female_ict_lg_school_or_clubs && (
                        <InputError
                            message={errors.no_of_female_ict_lg_school_or_clubs}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* ********************************************************************** */}
            {/* no_of_ict_training_other_agencies */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_ict_training_other_agencies"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF ICT TRAINING CONDUCTED TO OTHER AGENCIES
                            THAN MENTIONED ABOVE
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_ict_training_other_agencies"
                        type="number"
                        name="no_of_ict_training_other_agencies"
                        value={
                            data.ict_training
                                .no_of_ict_training_other_agencies || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_ict_training_other_agencies:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_ict_training_other_agencies && (
                        <InputError
                            message={errors.no_of_ict_training_other_agencies}
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_benefecieries_ict_training_other_agencies */}
            <div className="sm:col-span-2">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_benefecieries_ict_training_other_agencies"
                        // value="Number Of Female"
                    >
                        <span>
                            NUMBER OF BENEFECIERIES FROM LOCAL SCHOOLS/ CLUBS
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_benefecieries_ict_training_other_agencies"
                        type="number"
                        name="no_of_benefecieries_ict_training_other_agencies"
                        value={
                            data.ict_training
                                .no_of_benefecieries_ict_training_other_agencies ||
                            ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_benefecieries_ict_training_other_agencies:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_benefecieries_ict_training_other_agencies && (
                        <InputError
                            message={
                                errors.no_of_benefecieries_ict_training_other_agencies
                            }
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* no_of_male_ict_training_other_agencies */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_male_ict_training_other_agencies"
                        // value="Number Of Female"
                    >
                        <span>Number of male</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_male_ict_training_other_agencies"
                        type="number"
                        name="no_of_male_ict_training_other_agencies"
                        value={
                            data.ict_training
                                .no_of_male_ict_training_other_agencies || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_male_ict_training_other_agencies:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_male_ict_training_other_agencies && (
                        <InputError
                            message={
                                errors.no_of_male_ict_training_other_agencies
                            }
                            className="mt-2"
                        />
                    )}
                </div>
            </div>
            {/* no_of_female_ict_training_other_agencies */}
            <div className="sm:col-span-1">
                <div className="flex">
                    <InputLabel
                        htmlhtmlFor="no_of_female_ict_training_other_agencies"
                        // value="Number Of Female"
                    >
                        <span>Number of female</span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                </div>
                <div className="mt-2">
                    <TextInput
                        id="no_of_female_ict_training_other_agencies"
                        type="number"
                        name="no_of_female_ict_training_other_agencies"
                        value={
                            data.ict_training
                                .no_of_female_ict_training_other_agencies || ""
                        }
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                ict_training: {
                                    ...prev.ict_training,
                                    no_of_female_ict_training_other_agencies:
                                        e.target.value,
                                },
                            }))
                        }
                    />
                    {errors.no_of_female_ict_training_other_agencies && (
                        <InputError
                            message={
                                errors.no_of_female_ict_training_other_agencies
                            }
                            className="mt-2"
                        />
                    )}
                </div>
            </div>

            {/* ********************************************************************** */}

            {/* have_being_using_fund_by_mofaga */}
            <div className="sm:col-span-3">
                {/* <div className="flex"> */}
                    <InputLabel
                        htmlFor="have_being_using_fund_by_mofaga"
                        // value="HAS THE TRAINING BEING CONDUCTED USING THE ANY FUND SENT BY MOFAGA"
                    >
                        <span>
                            HAS THE TRAINING BEING CONDUCTED USING THE ANY FUND
                            SENT BY MOFAGA
                        </span>
                        <span className="ml-2 text-red-500">*</span>
                    </InputLabel>
                {/* </div> */}
                <div className="mt-2 flex items-center gap-x-4">
                    <div className="flex items-center">
                        <input
                            id="mention-yes"
                            type="radio"
                            name="have_being_using_fund_by_mofaga"
                            value={true}
                            checked={
                                data.ict_training
                                    .have_being_using_fund_by_mofaga === true
                            }
                            onChange={() =>
                                setData((prev) => ({
                                    ...prev,
                                    ict_training: {
                                        ...prev.ict_training,
                                        have_being_using_fund_by_mofaga: true,
                                    },
                                }))
                            }
                        />
                        <label htmlFor="mention-yes" className="ml-2">
                            Yes
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="metion-no"
                            type="radio"
                            name="have_being_using_fund_by_mofaga"
                            value={false}
                            checked={
                                data.ict_training
                                    .have_being_using_fund_by_mofaga === false
                            }
                            onChange={() =>
                                setData((prev) => ({
                                    ...prev,
                                    ict_training: {
                                        ...prev.ict_training,
                                        have_being_using_fund_by_mofaga: false,
                                    },
                                }))
                            }
                        />
                        <label htmlFor="metion-no" className="ml-2">
                            No
                        </label>
                    </div>
                </div>
                {errors.have_being_using_fund_by_mofaga && (
                    <InputError
                        message={errors.have_being_using_fund_by_mofaga}
                        className="mt-2"
                    />
                )}
            </div>

            <div className="sm:col-span-3">
                <InputLabel
                    htmlFor="mention_amount_of_fund_in_training"
                    value="MENTION THE AMOUNT OF FUND UTILIZED IN THE TRAINING"
                />
                <input
                    type="text"
                    name="mention_amount_of_fund_in_training"
                    id="mention_amount_of_fund_in_training"
                    value={
                        data.ict_training.mention_amount_of_fund_in_training ||
                        ""
                    }
                    onChange={(e) =>
                        setData((prev) => ({
                            ...prev,
                            ict_training: {
                                ...prev.ict_training,
                                mention_amount_of_fund_in_training:
                                    e.target.value,
                            },
                        }))
                    }
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.mention_amount_of_fund_in_training && (
                    <InputError
                        message={errors.mention_amount_of_fund_in_training}
                        className="mt-2"
                    />
                )}
            </div>
        </div>
    );
}
