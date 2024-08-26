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
            <section className="px-[64px] pb-[16px] container-wrapper">
                    {children}
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
}
