import { Link, usePage } from "@inertiajs/react";

export function NavBar({ NavBarLists }) {
    return (
        <nav className="flex gap-12 font-bold">
            {Object.keys(NavBarLists).map((key) => {
                const targetAttrVaule =
                    NavBarLists[key] == "whitepaper" ? "_blank" : undefined;

                // extract then  url like  127.00.8:800/news from get /news
                const url = new URL(
                    NavBarLists[key].url,
                    window.location.origin
                );

                // get page current url
                const currentUrl = window.location.pathname;

                // here check current and url pathaname match
                const isActive = url.pathname == currentUrl;
                return (
                    <Link
                        href={NavBarLists[key].url}
                        key={key}
                        target={targetAttrVaule}
                        rel={
                            targetAttrVaule ? "noopener noreferrer" : undefined
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
