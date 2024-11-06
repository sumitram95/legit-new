import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import React, { useState } from "react";

export default function StatusOfForm({ onClose, currentStatus, id = null }) {
    const [status, setStatus] = useState(currentStatus || "pending");
    const [isReasonRequired, setIsReasonRequired] = useState(false);
    const [error, setError] = useState("");

    const proccessingStatusFunc = () => {
        setStatus("processing");
        setIsReasonRequired(false);
        setError("");
    };

    const rejectedStatusFunc = () => {
        setStatus("rejected");
        setIsReasonRequired(true);
        setError("");
    };

    const approvedStatusFunc = () => {
        setStatus("approved");
        setIsReasonRequired(false);
        setError("");
    };

    const handleSubmit = () => {
        const reason = document.getElementById("reason").value.trim();
        if (isReasonRequired && reason === "") {
            setError("Reason is required for rejected status.");
        } else {
            setError("");
            alert(`Form status updated to: ${status}`);
        }
    };

    return (
        <div>
            <h1 className="text-gray-400">
                Current Status of form :
                <span className="ml-3 capitalize rounded-md px-2 py-0.5 bg-yellow-100 text-xs text-yellow-400">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
            </h1>
            <p className="mt-5">Write a reason</p>
            <textarea
                id="reason"
                required={isReasonRequired}
                rows="5"
                className="w-full mt-2 border border-gray-500"
                placeholder="Please write the reason here."
            ></textarea>
            {error && <InputError message={error} className="mt-2" />}
            <div className="mt-6 flex gap-6">
                <Button
                    onClick={proccessingStatusFunc}
                    type="button"
                    className="cursor-pointer hover:bg-blue-300 capitalize rounded-md px-2 py-0.5 bg-blue-200 text-xs text-blue-500"
                >
                    <span>Processing</span>
                </Button>
                <Button
                    onClick={rejectedStatusFunc}
                    type="button"
                    className="cursor-pointer hover:bg-red-300 capitalize rounded-md px-2 py-0.5 bg-red-200 text-xs text-red-500"
                >
                    <span>Rejected</span>
                </Button>
                <Button
                    onClick={approvedStatusFunc}
                    type="button"
                    className="cursor-pointer hover:bg-green-300 capitalize rounded-md px-2 py-0.5 bg-green-200 text-xs text-green-500"
                >
                    <span>Approved</span>
                </Button>
            </div>
            <div className="mt-6">
                <Button
                    onClick={handleSubmit}
                    type="button"
                    className="text-sm text-gray-700 font-semibold flex gap-1 bg-secondary px-5 py-2 hover:bg-blue-100"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
