import React from "react";
import { Header } from "./Header/Header";
import { Link } from "@inertiajs/react";
import Footer from "./footer/Footer";


export function AppLayout({ children }) {
    return (
        <main>
            {/* header */}
            <Header />
            {/* content here */}
            <section className="px-40 min-h-100">

                    {children}
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
}
