import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status({ className = "", ...props }) {
    const [checkedStatus, setCheckedStatus] = useState(() => {
        const initialStatus = {};
        StatusLists.forEach(status => {
            initialStatus[status] = false;
        });
        return initialStatus;
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckedStatus(prevState => ({
            ...prevState,
            [id]: checked,
        }));
    };

    const handleShowAllChecked = () => {
        const allChecked = Object.values(checkedStatus).some(status => !status);
        const newStatus = {};
        StatusLists.forEach(status => {
            newStatus[status] = allChecked;
        });
        setCheckedStatus(newStatus);
    };

    return (
        <div className="flex gap-5 border p-2 rounded-md flex-wrap">
            {StatusLists.map((status, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <input
                        {...props}
                        type="checkbox"
                        id={status}
                        checked={checkedStatus[status]}
                        onChange={handleCheckboxChange}
                        className={`rounded ${status} focus:ring-0 ${className}`}
                    />
                    <label htmlFor={status} className="capitalize">
                        {status}
                    </label>
                </div>
            ))}

            <div>
                <button
                    type="button"
                    className="text-blue-400 hover:underline"
                    onClick={handleShowAllChecked}
                >
                    Show all
                </button>
            </div>
        </div>
    );
}
