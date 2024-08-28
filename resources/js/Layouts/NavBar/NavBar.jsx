import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export function NavBar({ NavBarLists }) {
    const [activeItem, setActiveItem] = useState(null);
    const { url } = usePage();

    const handleClick = (key) => {
        setActiveItem(key);
    };

    const currentUrl = new URL(url, window.location.origin).pathname;

    return (
        <nav className="flex gap-12 font-bold">
            {Object.keys(NavBarLists).map((key) => {
                const item = NavBarLists[key];
                const itemUrl = new URL(item.url, window.location.origin);
                const isActive = activeItem === key || itemUrl.pathname === currentUrl;

                // Determine if it's an external link
                const isExternal = item.name === "whitepaper" || item.name === "Community";
                const targetAttrValue = isExternal ? "_blank" : undefined;

                return isExternal ? (
                    <a
                        href={item.url}
                        key={key}
                        target={targetAttrValue}
                        rel={targetAttrValue ? "noopener noreferrer" : undefined}
                        onClick={() => handleClick(key)}
                    >
                        {item.name}
                    </a>
                ) : (
                    <Link
                        href={item.url}
                        key={key}
                        target={targetAttrValue}
                        rel={targetAttrValue ? "noopener noreferrer" : undefined}
                        className={`capitalize ${isActive ? "nav-active" : ""}`}
                        onClick={() => handleClick(key)}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}

