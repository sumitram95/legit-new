import React from "react";

export default function ({
    label = "",
    type = "text",
    placeholder = "",
    htmlFor = "",
    className = "",
    ...props
}) {
    return (
        <div className={className}>
            <label
                htmlFor={htmlFor}
                className="block tracking-wide text-gray-500 text-sm font-bold mb-2"
            >
                {label}
            </label>
            {/* <input
                type={type}
                id={htmlFor}
                className="bg-gray-50 border input-class border-gray-300 text-gray-900 focus:bg-white focus:ring-2 focus:ring-blue-600 text-sm rounded block w-full px-2.5"
                placeholder={placeholder}
                required
            /> */}

            <input
                type={type}
                id={htmlFor}
                className="input-class border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5"
                placeholder={placeholder}
                {...props}
            />
            {/* <p>fdsfsdfasdfsafsadfa</p> */}
        </div>
    );
}
