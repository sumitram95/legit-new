import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function SiderBar() {
    const [openNavBarDropDown, setOpenNavBarDropDown] = useState(false);

    const handleNavBarDropDown = () => {
        setOpenNavBarDropDown(!openNavBarDropDown);
    };
    // current page url set in currentUrl
    const currentUrl = window.location.pathname;

    const isActiveUrl = (sideBarUrl = null) => {
        const url = new URL(sideBarUrl, window.location.origin);
        var isClass = "";

        if (currentUrl == url.pathname) {
            var isClass = "bg-secondary";
        } else {
            var isClass = "";
        }

        return isClass;
    };
    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg">
                <ApplicationLogo className="header-logo mb-3" />
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            href={route("dashboard")}
                            className={`flex items-center ${isActiveUrl(
                                route("dashboard")
                            )} p-2 rounded-lg hover:bg-blue-100 group`}
                        >
                            <svg
                                className="w-5 h-5 transition duration-75"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#4E87D3"
                                viewBox="0 0 22 21"
                            >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3 text-sm text-gray-700">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("backend.country.index")}
                            className={`${isActiveUrl(
                                route("backend.country.index")
                            )} flex items-center p-2 rounded-lg hover:bg-blue-100 group`}
                        >
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#4E87D3"
                                viewBox="0 0 22 21"
                            >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3 text-sm text-gray-700">
                                Country
                            </span>
                        </Link>
                    </li>

                    <li>
                        <button
                            type="button"
                            className={`flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-blue-100 ${
                                openNavBarDropDown ? "bg-secondary" : ""
                            }`}
                            onClick={handleNavBarDropDown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#4E87D3"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>

                            <span className="flex-1 ms-3 text-sm text-gray-700 text-left rtl:text-right whitespace-nowrap">
                                Setting
                            </span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="#4E87D3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        {openNavBarDropDown && (
                            <ul
                                id="dropdown-example"
                                className=" py-2 space-y-2"
                            >
                                <li>
                                    <Link
                                        href="#"
                                        className="flex text-sm text-gray-700 items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-blue-100"
                                    >
                                        Roles
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </aside>
    );
}
