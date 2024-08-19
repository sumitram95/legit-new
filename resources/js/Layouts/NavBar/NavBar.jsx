import { Link, usePage } from "@inertiajs/react";

export function NavBar({ NavBarLists }) {
    return (
        <nav className="flex gap-12 font-bold">
            {Object.keys(NavBarLists).map((key) => {
                const targetAttrValue =
                    NavBarLists[key].name === "whitepaper"
                        ? "_blank"
                        : undefined;

                // Extract URL like 127.0.0.1:8000/news from get /news
                const url = new URL(
                    NavBarLists[key].url,
                    window.location.origin
                );

                // Get page current URL
                const currentUrl = window.location.pathname;

                // Check if current URL and link URL pathname match
                const isActive = url.pathname === currentUrl;

                // If it's an external link (Google Docs), use a standard <a> tag
                if (NavBarLists[key].name === "whitepaper") {
                    return (
                        // remove of cors policy
                        <a
                            href={NavBarLists[key].url}
                            key={key}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`capitalize ${
                                isActive ? "nav-active" : ""
                            }`}
                        >
                            {NavBarLists[key].name}
                        </a>
                    );
                }

                if (NavBarLists[key].name === "community") {
                    return (
                        // remove of cors policy
                        <a
                            href={NavBarLists[key].url}
                            key={key}
                            target="_blank"
                            rel="noopener noreferrer"
                            // className={`capitalize ${
                            //     isActive ? "nav-active" : ""
                            // }`}
                        >
                            {NavBarLists[key].name}
                        </a>
                    );
                }

                return (
                    <Link
                        href={NavBarLists[key].url}
                        key={key}
                        target={targetAttrValue}
                        rel={
                            targetAttrValue ? "noopener noreferrer" : undefined
                        }
                        className={`capitalize ${isActive ? "nav-active" : ""}`}
                    >
                        {NavBarLists[key].name}
                    </Link>
                );
            })}
        </nav>
    );
}
