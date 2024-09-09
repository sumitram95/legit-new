import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import LogoImage from "@/assets/images/ai_logo.png";
import Responsive from "@/Components/Responsive/Responsive";

// Helper function to generate avatar URL
const generateAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
    )}&background=EBF4FF&color=7F9CF5`;
};

export function NavBar({ NavBarLists }) {
    const { props } = usePage();
    const userName = props.auth.user ? props.auth.user.name : ""; // Get the user's name or use 'Guest' if not available

    const avatarUrl = generateAvatarUrl(userName);

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

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
                <ul className="md:flex items-center gap-x-12 text-white">
                    {/* show on small device only (avartar ui) */}
                    <Responsive responsive={["sm"]}>
                        {userName && (
                            <div className="mt-5 border-b pb-3 flex items-center gap-2">
                                <div className="flex justify-center w-[38px] h-[38px] rounded-full overflow-hidden">
                                    <img
                                        src={avatarUrl}
                                        alt="User Avatar"
                                        className="h-full w-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-white">{userName}</p>
                                </div>
                            </div>
                        )}
                    </Responsive>
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
                            <li
                                className="mt-4 md:mt-0 font-bold capitalize"
                                key={key}
                            >
                                <a
                                    href={item.url}
                                    key={key}
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
                                    key={key}
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
                    {/* show on small device logout navbar */}
                    <Responsive responsive={["sm"]}>
                        {userName && (
                            <li className="mt-4 md:mt-0 font-bold capitalize">
                                <Link href="/logout">logout</Link>
                            </li>
                        )}
                    </Responsive>

                    {!userName ? (
                        <li className="mt-4 md:mt-0 font-bold">
                            <Link href={route("login")}>Login</Link>
                        </li>
                    ) : (
                        <Responsive responsive={["md", "lg", "xl"]}>
                            <div className="flex justify-between items-center">
                                <div
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    <div className="flex justify-center w-[38px] h-[38px] rounded-full overflow-hidden">
                                        <img
                                            src={avatarUrl}
                                            alt="User Avatar"
                                            className="h-full w-full"
                                        />
                                    </div>
                                </div>

                                {dropdownOpen && (
                                    <div className="z-10 absolute top-12 right-0 mt-4 mr-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <div
                                            className="py-2 text-sm text-gray-700"
                                            aria-labelledby="dropdownDefadivtButton"
                                        >
                                            <div className="flex gap-2 items-center pb-1 ml-2">
                                                <div className="flex justify-center w-[38px] h-[38px] rounded-full overflow-hidden">
                                                    <img
                                                        src={avatarUrl}
                                                        alt="User Avatar"
                                                        className="h-full w-full"
                                                    />
                                                </div>
                                                <div>
                                                    <p>{userName}</p>
                                                </div>
                                            </div>

                                            <hr />
                                            <hr />
                                            <div>
                                                <Link
                                                    href={"/logout"}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Responsive>
                    )}
                </ul>
            </div>
        </nav>
    );
}
