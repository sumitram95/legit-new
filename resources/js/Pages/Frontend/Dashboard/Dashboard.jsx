import React, { useState, useEffect } from "react";

import { AppLayout } from "@/Layouts/AppLayout";

import { Head } from "@inertiajs/react";

import Desktop from "./components/responsive/Desktop";
import Mobile from "./components/responsive/Mobile";

const breakpoints = {
    md: 768, // mobile
    lg: 1024, // tablet
    xl: 1280, // desktop
    double_xl: 1536, // max desktop
};

export default function Dashboard({
    news,
    aiPolicies,
    countries,
    statuses,
    tableData,
    aiPolicyLastUpdate,
    newsLastUpdate,
    countrywithStatus,
    countryWithAiPolicies,
}) {
    // State to manage the view type
    const [isDesktopView, setDesktopView] = useState(false);

    // Function to check screen size and set the view type
    const handleResize = () => {
        const width = window.innerWidth;

        if (width >= breakpoints.xl && width <= breakpoints.double_xl) {
            setDesktopView(true);
        } else if (width >= breakpoints.md && width <= breakpoints.lg) {
            setDesktopView(false);
        }
    };

    useEffect(() => {
        // Set initial view based on screen size
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <AppLayout>
            <Head title="Dashboard" />

            {isDesktopView ? (
                <Desktop
                    news={news}
                    aiPolicies={aiPolicies}
                    countries={countries}
                    statuses={statuses}
                    tableData={tableData}
                    aiPolicyLastUpdate={aiPolicyLastUpdate}
                    newsLastUpdate={newsLastUpdate}
                    countrywithStatus={countrywithStatus}
                    countryWithAiPolicies={countryWithAiPolicies}
                />
            ) : (
                <Mobile
                    news={news}
                    aiPolicies={aiPolicies}
                    countries={countries}
                    statuses={statuses}
                    tableData={tableData}
                    aiPolicyLastUpdate={aiPolicyLastUpdate}
                    newsLastUpdate={newsLastUpdate}
                    countrywithStatus={countrywithStatus}
                    countryWithAiPolicies={countryWithAiPolicies}
                />
            )}
        </AppLayout>
    );
}
