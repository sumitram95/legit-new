import { Link } from "@inertiajs/react";
import React from "react";

export default function Contributor({ contributorLists = [] }) {
    return (
        <div className="w-1/2">
            <strong>Key Contributors</strong>
            <div className="mt-3 h-fit w-fit grid grid-cols-2 gap-x-5">
                {contributorLists.map((data, index) => (
                    <Link
                        href={data.url}
                        className="flex gap-2 items-center hover:underline"
                        key={index}
                    >
                        <i className={data.icon}></i>
                        <span>{data.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
