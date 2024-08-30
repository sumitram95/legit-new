import Contact from "@/Components/contact/Contact";
import Contributor from "@/Components/contributor/Contributor";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Description({
    descriptionData = [],
    contributorLists = [],
    contactLists = [],
}) {
    return (
        <div className="bg-white h-fit p-5 rounded-md w-full mt-6">
            <div className="flex justify-between items-center border-b-2 pb-4">
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
            <div className="mt-3">
                <div className="flex">
                    <div className="w-1/2">
                        <strong className="text-primary-light">Description</strong>

                        {descriptionData.map((data, index) => (
                            <div className="flex gap-2 mt-3 text-primary-light" key={index}>
                                <strong className=" capitalize">{data.name}</strong>
                                <span className="text-gray-500">{data.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-1/2">
                        {/* key contributors */}
                        <div className="flex justify-between">
                            <Contributor contributorLists={contributorLists} />
                            <Contact contactLists={contactLists} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
