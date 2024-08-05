import { Link } from "@inertiajs/react";
import React from "react";

export default function Contact({ contactLists = [] }) {
    return (
        <div className="mt-3">
            <strong>Contact</strong>
            <div className="mt-3 h-fit w-full grid grid-cols-2 gap-x-3">
                {contactLists.map((data, index) => (
                    <Link
                        href={data.url}
                        className="flex gap-2 w-fit items-center hover:underline"
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
