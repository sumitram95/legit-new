import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status({ countrywithStatus: initialCountrywithStatus, setCountrywithStatus }) {
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleCheckboxChange = (status) => {
        let updatedStatuses;

        if (selectedStatuses.includes(status)) {
            // If the status is already selected, remove it
            updatedStatuses = selectedStatuses.filter(s => s !== status);
        } else {
            // Otherwise, add the new status to the list
            updatedStatuses = [...selectedStatuses, status];
        }

        setSelectedStatuses(updatedStatuses);

        // Update status and notify parent
        const updatedStatus = Object.fromEntries(
            Object.entries(initialCountrywithStatus).map(([countryCode, currentStatus]) => [
                countryCode,
                updatedStatuses.includes(currentStatus) ? currentStatus : currentStatus,
            ])
        );

        setCountrywithStatus(updatedStatus); // Notify parent of status update
    };

    const getFilteredCountries = () => {
        if (selectedStatuses.length === 0) return initialCountrywithStatus;
        return Object.fromEntries(
            Object.entries(initialCountrywithStatus).filter(([_, value]) =>
                selectedStatuses.includes(value)
            )
        );
    };

    const filteredCountries = getFilteredCountries();

    // Log selected statuses and filtered countries
    console.log("Filtered Countries:", filteredCountries);

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
                    onClick={() => {
                        setSelectedStatuses([]); // Reset selected statuses
                        setCountrywithStatus(initialCountrywithStatus); // Reset to initial status
                    }}
                    style={{ fontSize: '12px' }}
                >
                    Show all
                </button>
            </div>

            <div className="mt-4">
                {selectedStatuses.length > 0 && (
                    <div>
                        <h3 className="font-bold">Countries with selected statuses:</h3>
                        <ul>
                            {Object.keys(filteredCountries).map(countryCode => (
                                <li key={countryCode}>
                                    {countryCode} - {filteredCountries[countryCode]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
