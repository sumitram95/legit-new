import Contact from "@/Components/Contact/Contact";
import Contributor from "@/Components/Contributor/Contributor";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Description({
    descriptionData = [],
    contributorLists = [],
    contactLists = [],
}) {
    return (
        <div className="bg-white h-fit py-5 rounded-md w-full mt-6">
            <div className="flex justify-between items-center border-b px-5 pb-4">
                <div>
                    <h1 className=" text-xl font-bold mb-2 text-primary-light">
                        AIPolicyTracker Project
                    </h1>
                    <p>
                        AI Policy Tracker is an open-source project aimed at
                        providing a comprehensive information resource for
                        global AI policy initiatives
                    </p>
                </div>
            </div>

            <div className="mt-3 px-5">
                <div className="block md:flex sm:flex">
                    <div className="w-full md:w-1/2 sm:w-1/2">
                        <strong className="text-primary-light">
                            Description
                        </strong>

                        {descriptionData.map((data, index) => (
                            <div
                                className="flex gap-2 mt-3 text-primary-light"
                                key={index}
                            >
                                <strong className=" capitalize">
                                    {data.name}
                                </strong>
                                <span className="text-gray-500">
                                    {data.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full mt-5 md:mt-0 sm:mt-0 md:w-1/2 sm:w-1/2">
                        {/* key contributors */}
                        <div className=" block md:flex sm:md justify-between">
                            <Contributor contributorLists={contributorLists} />
                            <Contact contactLists={contactLists} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
