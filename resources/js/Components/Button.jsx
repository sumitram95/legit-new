import React from "react";

export default function Button({
    className = "text-primary font-bold",
    children = "",
    ...props
}) {
    return (
        <button
            {...props}
            className={`bg-secondary py-2 px-5 rounded-md hover:bg-blue-100 ${className}`}
        >
            {children}
        </button>
    );
}
