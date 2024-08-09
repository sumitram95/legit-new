import React from "react";

export default function ({
    label = "",
    type = "text",
    placeholder = "",
    htmlFor = "",
    className = "",
}) {
    return (
        <div className={className}>
            <label
                htmlFor={htmlFor}
                class="block mb-2 text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                type={type}
                id={htmlFor}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
