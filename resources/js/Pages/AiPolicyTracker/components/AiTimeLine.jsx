import TimeLine from "@/Pages/TimeLine/TimeLine";
import React from "react";

export default function AiTimeLine({ timeLines = [] }) {
    return (
        <div className="bg-white rounded-md py-3 mt-5">
            <div className=" border-b-2 pb-4 px-5">
                <div>
                    <p className="font-bold text-primary text-lg">Time Line</p>
                </div>
                <div className="flex gap-5 mt-3 text-sm">
                    <p className=" text-sm font-thin text-primary">
                        Last update: <span>November 2022</span>
                    </p>
                </div>
            </div>

            <div className="mt-5 px-5 bg-white py-5 text-wrap md:py-0 rounded-md md:rounded-none">
                        <ol className="relative border-s-4 border-blue-100">
                            {timeLines.map((timeLine, index) => (
                                <li className="mb-10 ms-6" key={index}>
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                                        <svg
                                            className="w-2.5 h-2.5 text-blue-800"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-sm font-bold text-primary capitalize">
                                        June 2024
                                    </h3>
                                    <div className="mb-2  bg-blue-100 px-5 py-2 rounded-md">
                                        <p className="text-sm font-normal text-blue-500">
                                            Get access to over 20+ pages
                                            including a dashboard layout,
                                            charts, kanban board, calendar, and
                                            pre-order E-commerce & Marketing
                                            pages.
                                        </p>
                                    </div>
                                    <div className="mb-2  bg-blue-100 px-5 py-2 rounded-md">
                                        <p className="text-sm font-normal text-blue-500">
                                            Get access to over 20+ pages
                                            including a dashboard layout,
                                            charts, kanban board, calendar, and
                                            pre-order E-commerce & Marketing
                                            pages.
                                        </p>
                                    </div>
                                    <div className="mb-2  bg-blue-100 px-5 py-2 rounded-md">
                                        <p className="text-sm font-normal text-blue-500">
                                            Get access to over 20+ pages
                                            including a dashboard layout,
                                            charts, kanban board, calendar, and
                                            pre-order E-commerce & Marketing
                                            pages.
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
        </div>
    );
}
