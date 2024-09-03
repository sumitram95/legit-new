import { Link } from "@inertiajs/react";
import React from "react";

export default function Contributor({ contributorLists = [] }) {
    return (
        <div className="w-full md:w-1/2 sm:w-1/2">
            <strong className="text-primary-light">Key Contributors</strong>
            <div className="mt-3 h-fit w-fit grid grid-cols-2 gap-x-5">
                {contributorLists.map((data, index) => (
                    <a
                        href={data.url}
                        className="flex gap-2 items-center hover:underline text-light-blue"
                        key={index}
                    >
                        <i className={data.icon}></i>
                        <span>{data.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
