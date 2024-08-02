import React from "react";
import { Header } from "./Header/Header";
import { Link } from "@inertiajs/react";

export function AppLayout({ children }) {
    return (
        <main>
            {/* header */}
            <Header />
            {/* content here */}
            <section className="px-40">

                    {children}
            </section>

            {/* footer */}
        </main>
    );
}
