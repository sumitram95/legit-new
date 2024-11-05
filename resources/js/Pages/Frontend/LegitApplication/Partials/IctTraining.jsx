// IctTraining.js
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import React from "react";
import IctTrainingConducted from "./IctTrainingConducted";

export default function IctTraining({ data, setData, errors }) {
    return (
        <div>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                {/* is_conducted_training */}
                <div className="sm:col-span-2">
                    <div className="flex">
                        <InputLabel
                            htmlFor="is_conducted_training"
                            value="HAVE YOU CONDUCTED ANY ICT TRAINING?"
                        />
                        <span className="ml-2 text-red-500">*</span>
                    </div>
                    <div className="mt-2 flex items-center gap-x-4">
                        <div className="flex items-center">
                            <input
                                id="training-yes"
                                type="radio"
                                name="is_conducted_training"
                                value={true}
                                checked={
                                    data.ict_training.is_conducted_training ===
                                    true
                                }
                                onChange={() =>
                                    setData((prev) => ({
                                        ...prev,
                                        ict_training: {
                                            ...prev.ict_training,
                                            is_conducted_training: true,
                                            reason_for_not_conducting: "", // Clear reason when "Yes" is selected
                                        },
                                    }))
                                }
                            />
                            <label htmlFor="training-yes" className="ml-2">
                                Yes
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="training-no"
                                type="radio"
                                name="is_conducted_training"
                                value={false}
                                checked={
                                    data.ict_training.is_conducted_training ===
                                    false
                                }
                                onChange={() =>
                                    setData((prev) => ({
                                        ...prev,
                                        ict_training: {
                                            ...prev.ict_training,
                                            is_conducted_training: false,
                                        },
                                    }))
                                }
                            />
                            <label htmlFor="training-no" className="ml-2">
                                No
                            </label>
                        </div>
                    </div>
                    {errors.is_conducted_training && (
                        <InputError
                            message={errors.is_conducted_training}
                            className="mt-2"
                        />
                    )}
                </div>

                {/* Conditional reason_for_not_conducting input */}
                {data.ict_training.is_conducted_training === false && (
                    <div className="sm:col-span-6 mt-4">
                        <InputLabel
                            htmlFor="reason_for_not_conducting"
                            value="IF NOT CONDUCTED, STATE REASON FOR NOT CONDUCTING ANY TRAINING ON ICT"
                        />
                        <input
                            type="text"
                            name="reason_for_not_conducting"
                            id="reason_for_not_conducting"
                            value={
                                data.ict_training.reason_for_not_conducting ||
                                ""
                            }
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    ict_training: {
                                        ...prev.ict_training,
                                        reason_for_not_conducting:
                                            e.target.value,
                                    },
                                }))
                            }
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <textarea name="" id=""></textarea>
                        {errors.reason_for_not_conducting && (
                            <InputError
                                message={errors.reason_for_not_conducting}
                                className="mt-2"
                            />
                        )}
                    </div>
                )}
            </div>
            {/* ict training conducted component if true */}
            {data.ict_training.is_conducted_training === true && (
                <IctTrainingConducted
                    data={data}
                    setData={setData}
                    errors={errors}
                />
            )}

        </div>
    );
}
//
