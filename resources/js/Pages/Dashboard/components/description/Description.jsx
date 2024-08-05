import Contact from "@/Components/contact/Contact";
import Contributor from "@/Components/contributor/Contributor";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Description({
    dessciptionData = [],
    contributorLists = [],
    contactLists = [],
}) {
    return (
        <div className="bg-white h-fit p-5 rounded-md w-full mt-6">
            <div className="flex justify-between items-center border-b-2 pb-4">
                <div>
                    <h1 className=" text-xl font-bold mb-2">
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
                <strong>Description</strong>

                {dessciptionData.map((data, index) => (
                    <div className="flex gap-2 mt-3" key={index}>
                        <strong className=" capitalize">{data.name}</strong>
                        <span className="text-gray-500">{data.title}</span>
                    </div>
                ))}
            </div>

            {/* key contributors */}
            <div className=" flex justify-between">
                <Contributor contributorLists={contributorLists} />
                <Contact contactLists={contactLists} />
            </div>
        </div>
    );
}
