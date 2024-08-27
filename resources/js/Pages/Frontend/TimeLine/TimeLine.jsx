import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function TimeLine({ timeLines, lastUpdateDate }) {
    return (
        <AppLayout>
            <Head title="Timeline" />
            <div className="block md:relative top-[-50px] w-full ">
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
                                    <div className="status-action" style={{ width: '25%' }}>Status update</div>
                                    <div className="add-action" style={{ width: '25%' }}>Added data</div>
                                    <div className="update-action" style={{ width: '25%' }}>Updated data</div>
                                    <div className="delete-action" style={{ width: '25%' }}>Deleted data</div>
                                </div>
                            </div>
                            <div>
                                {Object.entries(timeLines).map(([year, items]) => (
                                    <div key={year}>
                                        <h3 className="flex items-center mb-1 text-xs mt-2 font-bold text-primary capitalize ml-6">
                                            {year}
                                        </h3>

                                        {items.map((item) => {
                                            // Create arrays to hold activity logs by type
                                            const statusLogs = [];
                                            const addedLogs = [];
                                            const updatedLogs = [];
                                            const deletedLogs = [];

                                            // Categorize logs based on activity_name
                                            item.a_i_policy_activity_logs.forEach((log) => {
                                                switch (log.activity_name) {
                                                    case 'status update':
                                                        statusLogs.push(log);
                                                        break;
                                                    case 'added data':
                                                        addedLogs.push(log);
                                                        break;
                                                    case 'updated data':
                                                        updatedLogs.push(log);
                                                        break;
                                                    case 'deleted data':
                                                        deletedLogs.push(log);
                                                        break;
                                                    default:
                                                        break;
                                                }
                                            });

                                            return (
                                                <div className="mb-10 ms-6 relative" key={item.id}>


                                                    {/* Check if item.a_i_policy_activity_logs exists and is an array */}
                                                    <div>
                                                        <div className="flex flex-wrap">
                                                            {statusLogs.length > 0 ? (
                                                                statusLogs.map((log) => (
                                                                    <div className="flex basis-1/4 p-2" key={log.id}>
                                                                        <div className="w-full">
                                                                            <h3 className="flex items-center mb-1 text-xs mt-2 font-bold text-primary capitalize">
                                                                                {item.ai_policy_name || `Item ${item.id}`}
                                                                            </h3>
                                                                            <h2 className="text-lg font-semibold">{log.activity_name}</h2>
                                                                            <div dangerouslySetInnerHTML={{ __html: log.description }} />
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="flex basis-1/4 p-2">
                                                                    <div className="w-full"></div>
                                                                    {/* <div className="w-full">Status update</div> */}
                                                                </div>
                                                            )}

                                                            {addedLogs.length > 0 ? (
                                                                addedLogs.map((log) => (
                                                                    <div className="flex basis-1/4 p-2" key={log.id}>
                                                                        <div className="w-full">
                                                                            <h3 className="flex items-center mb-1 text-xs mt-2 font-bold text-primary capitalize">
                                                                                {item.ai_policy_name || `Item ${item.id}`}
                                                                            </h3>
                                                                            <h2 className="text-lg font-semibold">{log.activity_name}</h2>
                                                                            <div dangerouslySetInnerHTML={{ __html: log.description }} />
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="flex basis-1/4 p-2">
                                                                    <div className="w-full"></div>
                                                                    {/* <div className="w-full">Added data</div> */}
                                                                </div>
                                                            )}

                                                            <div className="flex flex-wrap basis-1/4">
                                                                {updatedLogs.length > 0 ? (
                                                                    updatedLogs.map((log, index) => (
                                                                        <div
                                                                            className={` ${index === 0 ? 'w-full' : 'w-full mt-2'} p-2`}
                                                                            key={log.id}
                                                                        >
                                                                            <div className="w-full">
                                                                                <h3 className="flex items-center mb-1 text-xs mt-2 font-bold text-primary capitalize">
                                                                                    {item.ai_policy_name || `Item ${item.id}`}
                                                                                </h3>
                                                                                <h2 className="text-lg font-semibold">{log.activity_name}</h2>
                                                                                <div dangerouslySetInnerHTML={{ __html: log.description }} />
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className="flex basis-1/4 p-2">
                                                                        <div className="w-full">
                                                                            {/* Optional placeholder for empty state */}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>


                                                            {deletedLogs.length > 0 ? (
                                                                deletedLogs.map((log) => (
                                                                    <div className="flex basis-1/4 p-2" key={log.id}>
                                                                        <div className="w-full">
                                                                            <h3 className="flex items-center mb-1 text-xs mt-2 font-bold text-primary capitalize">
                                                                                {item.ai_policy_name || `Item ${item.id}`}
                                                                            </h3>
                                                                            <h2 className="text-lg font-semibold">{log.activity_name}</h2>
                                                                            <div dangerouslySetInnerHTML={{ __html: log.description }} />
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="flex basis-1/4 p-2">
                                                                    <div className="w-full"></div>
                                                                    {/* <div className="w-full">Deleted data</div> */}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
