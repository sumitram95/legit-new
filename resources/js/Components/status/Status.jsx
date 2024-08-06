import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status({ className = "", ...props }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleShowAllChecked() {
        setIsChecked(!isChecked);
    }
    return (
        <div className="flex gap-5 border p-2 rounded-md flex-wrap">
            {StatusLists.map((StatusList, index) => (
                <div className="flex gap-2 items-center">
                    <input
                        {...props}
                        type="checkbox"
                        id={StatusList}
                        checked={isChecked}
                        className={`rounded ${StatusList} focus:ring-0 ${className}`}
                    />
                    <label htmlFor={StatusList} className=" capitalize">
                        {StatusList}
                    </label>
                </div>
            ))}

            <div>
                <button
                    type="button"
                    className=" text-blue-400 hover:underline"
                    onClick={handleShowAllChecked}
                >
                    Show all
                </button>
            </div>
        </div>
    );
}
