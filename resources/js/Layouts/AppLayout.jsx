import React from "react";
import { Header } from "./Header/Header";
import { Link } from "@inertiajs/react";
import Footer from "./footer/Footer";


export function AppLayout({ children }) {
    return (
        <main className="container-wrapper">
            {/* header */}
            <Header />
            {/* content here */}
            <section className="px-[22px] md:px-[64px] pb-[16px] flex-1">
                    {children}
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
}
