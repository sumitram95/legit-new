import React, { useState } from "react";
import StatusLists from "./StatusLists";

export default function Status(
    {
        countrywithStatus
    }) {

    console.log(countrywithStatus);


    return (
        <div className="flex gap-5 border p-2 rounded-md flex-wrap">
            {StatusLists.map((status, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <input
                        type="checkbox"

                        // className={`rounded ${status} focus:ring-0 ${className}`}
                        className={`rounded focus:ring-0`}
                    />
                    <label htmlFor={status} className="capitalize"
                        style={{ fontSize: '12px' }}
                    >
                        {status}
                    </label>
                </div>
            ))}

            <div>
                <button
                    type="button"
                    className="text-blue-400 hover:underline"
                    // onClick={handleShowAllChecked}
                    style={{ fontSize: '12px' }}
                >
                    Show all
                </button>
            </div>
        </div>
    );
}
