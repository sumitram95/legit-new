import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function TimeLine({ timeLines, lastUpdateDate }) {
    return (
        <AppLayout>
            <Head title="Timeline" />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="md:border rounded-md w-full md:bg-white py-5">
                    <div className=" md:border-b-2 pb-4 px-5 flex justify-between items-center">
                        <div>
                            <div>
                                <p className="font-bold text-primary text-lg">
                                    Timeline
                                </p>
                            </div>
                            <div className="flex gap-5 mt-3 text-sm">
                                <p className=" text-sm">
                                    Last update: <span>{lastUpdateDate}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ////////////// */}
                    <div className="bg-white py-5 text-wrap md:py-0 rounded-md md:rounded-none">


                        <div className="table-auto title_line_action mb-2 w-full">
                            <div>
                                <div className="flex">
                                    <div className="status-action" style={{ width: '25%' }}>Status update </div>
                                    <div className="add-action" style={{ width: '25%' }}>Added data </div>
                                    <div className="update-action" style={{ width: '25%' }}>Updated data </div>
                                    <div className="delete-action" style={{ width: '25%' }}>Deleted data </div>
                                </div>
                            </div>
                            <div>
                                {Object.entries(timeLines).map(([year, items]) => (
                                    <div>
                                        <h3 className="flex items-center mb-1 text-sm font-bold text-primary capitalize ml-6">
                                            {year}
                                        </h3>
                                        {/* <h3> <pre>{JSON.stringify(item, null, 2)}</pre></h3> */}
                                        {items.map((item, index) => (
                                            <div className="mb-10 ms-6 relative" key={`${year}-${index}`}>
                                                <h3 className="flex items-center mb-1 text-sm font-bold text-primary capitalize">
                                                    {item.ai_policy_name || `Item ${index + 1}`}
                                                </h3>

                                                {/* Check if item.a_i_policy_activity_logs exists and is an array */}
                                                <div>
                                                    <div className="flex">
                                                        {Array.isArray(item.a_i_policy_activity_logs) && item.a_i_policy_activity_logs.map((log, logIndex) => (
                                                            <div className="flex basis-1/4" key={logIndex}>
                                                                {log.activity_name === 'Status data' && (

                                                                    <div className="w-full">
                                                                        <h2>{log.activity_name}</h2>
                                                                        <div dangerouslySetInnerHTML={{ __html: log.description }} />

                                                                    </div>
                                                                )}

                                                                {log.activity_name === 'Added data' && (
                                                                    <div className="w-full">
                                                                        <h2>{log.activity_name}</h2>
                                                                        <div dangerouslySetInnerHTML={{ __html: log.description }} />

                                                                        {/* <h4 className="text-sm font-semibold">Activity Log:</h4> */}
                                                                        {/* <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(log, null, 2)}</pre> */}

                                                                    </div>
                                                                )}
                                                                {log.activity_name === 'Updated data' && (
                                                                    <div className="w-full">
                                                                        <h2>{log.activity_name}</h2>
                                                                        <div dangerouslySetInnerHTML={{ __html: log.description }} />

                                                                    </div>
                                                                )}
                                                                {/* {log.activity_name !== 'Added data' && log.activity_name !== 'Updated data' && ( */}

                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>

                                            </div>
                                        ))}

                                        <hr />
                                    </div>

                                ))}
                            </div>
                        </div>
                        {/* ///////////////////////// */}


                        <div className="px-5">
                            {Object.entries(timeLines).map(([year, items]) => (
                                <ol className="relative border-s-4 border-blue-100">
                                    <div>
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
                                        <h3 className="flex items-center mb-1 text-sm font-bold text-primary capitalize ml-6">
                                            {year}
                                        </h3>
                                    </div>
                                    {items.map((item, index) => (
                                        <li className="mb-10 ms-6 relative" key={`${year}-${index}`}>

                                            <h3 className="flex items-center mb-1 text-sm font-bold text-primary capitalize">
                                                {item.ai_policy_name || `Item ${index + 1}`}
                                            </h3>
                                            <div className="mb-2 bg-blue-100 px-5 py-2 rounded-md">
                                                <p className="text-sm font-normal text-blue-500">
                                                    {item.description || 'Default description text.'}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
