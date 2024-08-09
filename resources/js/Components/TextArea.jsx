import React from "react";

export default function TextArea({
    placeholder = "Write your thoughts here...",
    htmFor = "",
    rows = null,
    cols = null,
    label = "",
}) {
    return (
        <div className="mb-5">
            <label
                htmFor={htmFor}
                className="block tracking-wide text-gray-500 text-sm font-bold mb-2"
            >
                {label}
            </label>
            <textarea
                id={htmFor}
                rows={rows}
                cols={cols}
                className="input-class border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
}
