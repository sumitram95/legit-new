import { Link } from "@inertiajs/react";
import React from "react";

export default function SingleAiInfo() {
    return (
        <div className="bg-white rounded-md py-3">
            <div className=" border-b-2 pb-4 px-5">
                <div>
                    <p className="font-bold text-primary text-lg">
                        Act AI (AIPT) <i className="fa-regular fa-star"></i>
                    </p>
                </div>
                <div className="flex gap-5 mt-3 text-sm">
                    <p className="text-sm text-primary">Act AI</p>
                </div>
            </div>

            <div>
                <div className="px-5 mt-4">
                    <p className=" capitalize text-xs">Announcement Year</p>
                    <p className="text-gray-600">2024</p>
                </div>

                <div className="px-5 mt-4">
                    <p className=" capitalize text-xs">Announcement Year</p>
                    <p className="text-gray-600">2024</p>
                </div>

                <div className="px-5 mt-4">
                    <p className=" capitalize text-xs">Announcement Year</p>
                    <p className="text-gray-600">2024</p>
                </div>

                <div className="px-5 mt-4">
                    <p className=" capitalize text-xs">Announcement Year</p>
                    <p className="text-gray-600">2024</p>
                </div>

                <div className="px-5 mt-4">
                    <p className=" capitalize text-xs">Announcement Year</p>
                    <p className="text-gray-600">2024</p>
                </div>

                <div className="px-5 mt-4 border-t-2 pt-4">
                    <p className="text-xs">Link to announcement</p>
                    <a
                        href={
                            "https://x.com/ReserveBankZIM/status/1590560608994623489"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600"
                    >
                        <i className="fa-solid fa-link text-xs"></i>
                        <span className="ml-1 hover">twiter.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
