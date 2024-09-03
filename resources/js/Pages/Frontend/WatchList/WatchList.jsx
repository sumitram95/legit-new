import React, { useState, useEffect } from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Desktop from "./Components/Responsive/Desktop";
import Mobile from "./Components/Responsive/Mobile";
import { useDeviceSize } from "@/Services/useDeviceSize";

const breakpoints = {
    md: 768, // mobile
    lg: 1024, // tablet
    xl: 1280, // desktop
    double_xl: 1536, // max desktop
};

export default function WatchList({
    is_favorite,
    aiPolicies,
    countries,
    statuses,
    tableData,
    countrywithStatus,
}) {
    // // State to manage the view type
    // const [isDesktopView, setDesktopView] = useState(false);

    // // Function to check screen size and set the view type
    // const handleResize = () => {
    //     const width = window.innerWidth;

    //     if (width >= breakpoints.xl && width <= breakpoints.double_xl) {
    //         setDesktopView(true);
    //     } else if (width >= breakpoints.md && width <= breakpoints.lg) {
    //         setDesktopView(false);
    //     }
    // };

    // useEffect(() => {
    //     // Set initial view based on screen size
    //     handleResize();

    //     // Listen for window resize events
    //     window.addEventListener("resize", handleResize);

    //     // Cleanup listener on component unmount
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    const deviceSize = useDeviceSize();

    const isDesktop =
        deviceSize === "smallLaptop" ||
        deviceSize === "laptop" ||
        deviceSize === "desktop" ||
        deviceSize === "largeDesktop";

    return (
        <AppLayout>
            <Head title="Watch List" />

            {isDesktop ? (
                <Desktop
                    is_favorite={is_favorite}
                    aiPolicies={aiPolicies}
                    countries={countries}
                    statuses={statuses}
                    tableData={tableData}
                    countrywithStatus={countrywithStatus}
                />
            ) : (
                <Mobile
                    is_favorite={is_favorite}
                    aiPolicies={aiPolicies}
                    countries={countries}
                    statuses={statuses}
                    tableData={tableData}
                    countrywithStatus={countrywithStatus}
                />
            )}
        </AppLayout>
    );
}
