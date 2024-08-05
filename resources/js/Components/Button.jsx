import React from "react";

export default function Button({ name = "button", icon = "", ...props }) {
    return (
        <button {...props}>
            {icon} {name}
        </button>
    );
}
