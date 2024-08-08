import { Link } from "@inertiajs/react";
import React from "react";

export default function Header({ avatarUrl = "NA" }) {
    return (
        <div
            className="px-5 py-1 hidden md:block rounded w-full bg-white shadow-md fixed"
            style={{
                left: "calc(16rem + 1rem)",
                right: "1rem",
                width: "auto",
            }}
        >
            <div className="flex justify-between items-center">
                <div>Welcome to Dashboard</div>

                <div
                    className="flex items-center gap-3 cursor-pointer"
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                >
                    <p className=" font-bold">Sumit Ram</p>
                    <div className="flex justify-center w-[43px] h-[43px] rounded-full overflow-hidden">
                        <img
                            src={avatarUrl}
                            alt="User Avatar"
                            className=" h-full w-full "
                        />
                    </div>
                </div>

                <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                    <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li className="mb-4">
                            <div className="px-4 flex gap-3 items-center">
                                <div className="flex justify-center w-[35px] h-[35px] rounded-full overflow-hidden">
                                    <img
                                        src={avatarUrl}
                                        alt="User Avatar"
                                        className=" h-full w-full "
                                    />
                                </div>
                                <div>
                                    <p className=" font-bold text-sm">
                                        Sumit Ram
                                    </p>
                                    <p className=" text-xs">admin</p>
                                </div>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <Link
                                href={"/login"}
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Profile
                            </Link>
                        </li>
                        <hr />
                        <li className="">
                            <Link
                                href={"/logout"}
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
