import React from "react";
import { HeaderLogo } from "@/Components/HeaderLogo";
import { NavBar } from "@/Layouts/NavBar/NavBar";

const NavBarLists = {
    dashboard: {
        name: "Home",
        url: route("frontend.dashboard"),
    },
    watchlist: {
        name: "Alert",
        url: route("frontend.watch_list.index"),
    },
    news: {
        name: "news",
        url: route("news.index"),
    },
    timeline: {
        name: "Timeline",
        url: route("frontend.time_line.index"),
    },
    // legit_application: {
    //     name: "legit application",
    //     url: route("frontend.time_line.index"),
    // },

    // community: {
    //     name: "Community",
    //     url: "https://community.aipolicytracker.org/",
    // },
    // whitepaper: {
    //     name: "whitepaper",
    //     url: "https://docs.google.com/document/d/199QtBdQwRWVHXxN5wasRBbTNTgsvmP347GsQFyR2p3o/edit",
    // },
};

export function Header() {
    return (
        <header className="header md:px-16">
            {/* <div className="flex justify-between "> */}
            {/* <HeaderLogo /> */}
            <NavBar NavBarLists={NavBarLists} />

            {/* </div> */}
        </header>
    );
}
