import { Link } from "@inertiajs/react";
import React from "react";

export default function SingleAiInfo({ singleLg }) {
    // const {
    //     ai_policy_name,
    //     technology_partners,
    //     announcement_year,
    //     governing_body,
    //     governance_structure,
    //     status,
    //     country,
    //     description,
    //     whitepaper_document_link,
    // } = singleLg;

    return (
        <div className="bg-white rounded-md py-3">
            <div className="border-b pb-4 px-5">
                <div>
                    <p className="font-bold text-primary-light text-lg">
                        {singleLg.name_en ?? ""}
                        <i className="fa-regular fa-star"></i>
                    </p>
                </div>
                {/* <div className="flex gap-5 mt-3 text-sm">
                    <p className="text-sm text-primary">
                        {singleLg.district?.name_en ?? ""}
                    </p>
                </div> */}
            </div>

            <div>

                <div className="px-5 mt-4">
                    <p className="capitalize text-xs">Province</p>
                    <p className="text-gray-500">
                        {singleLg.district?.province?.name_en ?? ""}
                    </p>
                </div>
                <div className="px-5 mt-4">
                    <p className="capitalize text-xs">Distric</p>
                    <p className="text-gray-500">
                        {singleLg.district?.name_en ?? ""}
                    </p>
                </div>
            </div>
        </div>
    );
}
