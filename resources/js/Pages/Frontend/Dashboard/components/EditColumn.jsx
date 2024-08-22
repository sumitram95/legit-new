import React from "react";

export default function EditColumn({
    btnName = "Edit Columns",
    EditColumnLists = [],
}) {
    return (
        <div>
            <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-primary bg-secondary hover:bg-blue-100 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                {btnName}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
                <ul
                    className="py-2 text-sm text-primary"
                    aria-labelledby="dropdownDefaultButton"
                >
                    {EditColumnLists.map((EditColumnList, index) => (
                        <li key={index}>
                            <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 font-bold">
                                <input
                                    type="checkbox"
                                    id={EditColumnList.name}
                                    className={`rounded focus:ring-0 ${EditColumnList.status ? 'disabled-checkbox' : ''}`}
                                    checked={EditColumnList.status}
                                    disabled={EditColumnList.status}
                                />

                                <label
                                    htmlFor={EditColumnList.name}
                                    className="capitalize"
                                >
                                    {EditColumnList.title}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
