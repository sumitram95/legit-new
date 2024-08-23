import { Link } from "@inertiajs/react";
import React from "react";

export default function Contact({ contactLists = [] }) {
    return (
        <div className="w-1/2">
            <strong>Contacts</strong>
            <div className="mt-3 h-fit w-full">
                {contactLists.map((data, index) => (
                    // <Link
                    //     href={data.url}
                    //     className="flex gap-2 w-fit items-center hover:underline"
                    //     key={index}
                    // >
                    //     <i className={data.icon}></i>
                    //     <span>{data.name}</span>
                    // </Link>

                    <a href={data.url} className="flex gap-2 items-center hover:underline" key={index}>
                        <i className={data.icon}></i>
                        <span>{data.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
