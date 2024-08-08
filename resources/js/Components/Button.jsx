import React from "react";

export default function Button({ className = "", children = "", ...props }) {
    return (
        <button
            {...props}
            className={`bg-secondary py-2 px-5 rounded-md text-primary font-bold  hover:bg-blue-100 ${className}`}
        >
            {children}
        </button>
    );
}
