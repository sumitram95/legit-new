import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import LogoImage from "@/assets/images/ai_logo.png";
export function NavBar({ NavBarLists }) {
    const [activeItem, setActiveItem] = useState(null);
    const { url } = usePage();

    const handleClick = (key) => {
        setActiveItem(key);
    };

    const currentUrl = new URL(url, window.location.origin).pathname;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="block md:flex">
            <div className="w-full flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link href={"/"}>
                        <div className="header-logo">
                            <img
                                src={LogoImage}
                                alt="AI Policy Tracker"
                                className="w-full h-full"
                            />
                        </div>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`w-full md:flex md:items-center md:w-auto ${
                    isOpen ? "" : "hidden"
                }`}
            >
                <ul className="md:flex gap-x-12 text-white">
                    {/* <li className="mt-4 md:mt-0">
                            <a href="#home" className="hover:text-gray-300">Home</a>
                        </li> */}
                    {Object.keys(NavBarLists).map((key) => {
                        const item = NavBarLists[key];
                        const itemUrl = new URL(
                            item.url,
                            window.location.origin
                        );
                        const isActive =
                            activeItem === key ||
                            itemUrl.pathname === currentUrl;

                        // Determine if it's an external link
                        const isExternal =
                            item.name === "whitepaper" ||
                            item.name === "Community";
                        const targetAttrValue = isExternal
                            ? "_blank"
                            : undefined;

                        return isExternal ? (
                            <li className="mt-4 md:mt-0 font-bold" key={key}>
                                <a
                                    href={item.url}
                                    target={targetAttrValue}
                                    rel={
                                        targetAttrValue
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    onClick={() => handleClick(key)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ) : (
                            <li className="mt-4 md:mt-0 font-bold" key={key}>
                                <Link
                                    href={item.url}
                                    target={targetAttrValue}
                                    rel={
                                        targetAttrValue
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`capitalize ${
                                        isActive ? "nav-active" : ""
                                    }`}
                                    onClick={() => handleClick(key)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
        // <nav className="flex gap-12 font-bold">
        //     {Object.keys(NavBarLists).map((key) => {
        //         const item = NavBarLists[key];
        //         const itemUrl = new URL(item.url, window.location.origin);
        //         const isActive = activeItem === key || itemUrl.pathname === currentUrl;

        //         // Determine if it's an external link
        //         const isExternal = item.name === "whitepaper" || item.name === "Community";
        //         const targetAttrValue = isExternal ? "_blank" : undefined;

        //         return isExternal ? (
        //             <a
        //                 href={item.url}
        //                 key={key}
        //                 target={targetAttrValue}
        //                 rel={targetAttrValue ? "noopener noreferrer" : undefined}
        //                 onClick={() => handleClick(key)}
        //             >
        //                 {item.name}
        //             </a>
        //         ) : (
        //             <Link
        //                 href={item.url}
        //                 key={key}
        //                 target={targetAttrValue}
        //                 rel={targetAttrValue ? "noopener noreferrer" : undefined}
        //                 className={`capitalize ${isActive ? "nav-active" : ""}`}
        //                 onClick={() => handleClick(key)}
        //             >
        //                 {item.name}
        //             </Link>
        //         );
        //     })}
        // </nav>
    );
}
