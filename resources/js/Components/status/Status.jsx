import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status({ countrywithStatus: initialCountrywithStatus, setCountrywithStatus }) {
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleCheckboxChange = (status) => {
       alert(status);
    };

    return (
        <div className="flex gap-5 border p-2 rounded-md flex-wrap">
            {StatusLists.map((status, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <input
                        type="checkbox"
                        id={status}
                        checked={selectedStatuses.includes(status)}
                        onChange={() => handleCheckboxChange(status)}
                        className="rounded focus:ring-0"
                    />
                    <label htmlFor={status} className="capitalize" style={{ fontSize: '12px' }}>
                        {status}
                    </label>
                </div>
            ))}

            <div>
                <button
                    type="button"
                    className="text-blue-400 hover:underline"

                    style={{ fontSize: '12px' }}
                >
                    Show all
                </button>
            </div>
        </div>
    );
}
