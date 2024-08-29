import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status({ statuses, statusState, handleStatusChange1, handleShowAll }) {
    return (
        <div className="flex gap-5 border p-2 rounded-md flex-wrap">
            {statuses.map((status, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <input
                        type="checkbox"
                        id={status.value}
                        checked={statusState[status.value] || false}
                        onChange={(e) => handleStatusChange1(status.value, e.target.checked)}
                        className="rounded focus:ring-0"
                    />
                    <label htmlFor={status.value} className="capitalize" style={{ fontSize: '12px' }}>
                        {status.label}
                    </label>
                </div>
            ))}

            <button
                type="button"
                className="text-blue-400 hover:underline"
                style={{ fontSize: '12px' }}
                onClick={handleShowAll} // Add onClick handler
            >
                Show all
            </button>
        </div>
    );
}
