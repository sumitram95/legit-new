import React from "react";
import { HeaderLogo } from "@/Components/HeaderLogo";
import { NavBar } from "@/Layouts/NavBar/NavBar";

const NavBarLists = {
    dashboard: {
        name: "Dashboard",
        url: "/dashboard",
    },
    watchlist: {
        name: "watchlist",
        url: "/watchlists",
    },
    news: {
        name: "news",
        url: "/news",
    },
    whitepaper: {
        name: "whitepaper",
        url: "https://docs.google.com/document/d/199QtBdQwRWVHXxN5wasRBbTNTgsvmP347GsQFyR2p3o/edit",
    },
};

export function Header() {
    return (
        <header className="header">
            <div className="flex justify-between">
                <HeaderLogo />
                <NavBar NavBarLists={NavBarLists} />
            </div>
        </header>
    );
}

