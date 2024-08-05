import { Link } from "@inertiajs/react";

export function NavBar({ NavBarLists }) {
    return (
        <nav className="flex gap-12 font-bold">
            {Object.keys(NavBarLists).map((key) => {
                const targetAttrVaule =
                    NavBarLists[key] == "whitepaper" ? "_blank" : undefined;
                return (
                    <Link
                        href={NavBarLists[key].url}
                        key={key}
                        target={targetAttrVaule}
                        rel={
                            targetAttrVaule ? "noopener noreferrer" : undefined
                        }
                        className=" capitalize"
                    >
                        {NavBarLists[key].name}
                    </Link>
                );
            })}
        </nav>
    );
}
