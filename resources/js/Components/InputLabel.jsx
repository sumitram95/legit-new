import React from "react";

export default function InputLabel({ value = "", ...props }) {
    return (
        <div>
            <label {...props}>{value}</label>
        </div>
    );
}
