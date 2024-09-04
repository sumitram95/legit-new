import React, { useState, useEffect } from "react";

// Define breakpoints for responsiveness
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    double_xl: 1536,
};

// Custom hook to get the device size
export const useDeviceSize = () => {
    const [deviceSize, setDeviceSize] = useState(() => {
        // Initial state should be set based on the client-side width
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width < breakpoints.sm) return "mobile";
            if (width >= breakpoints.sm && width < breakpoints.md)
                return "tablet";
            if (width >= breakpoints.md && width < breakpoints.lg)
                return "smallLaptop";
            if (width >= breakpoints.lg && width < breakpoints.xl)
                return "laptop";
            if (width >= breakpoints.xl && width <= breakpoints.double_xl)
                return "desktop";
            return "largeDesktop";
        }
        // Default state for server-side rendering
        return "desktop";
    });

    // Function to check screen size and set the device size
    const handleResize = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;

            if (width < breakpoints.sm) {
                setDeviceSize("mobile");
            } else if (width >= breakpoints.sm && width < breakpoints.md) {
                setDeviceSize("tablet");
            } else if (width >= breakpoints.md && width < breakpoints.lg) {
                setDeviceSize("smallLaptop");
            } else if (width >= breakpoints.lg && width < breakpoints.xl) {
                setDeviceSize("laptop");
            } else if (
                width >= breakpoints.xl &&
                width <= breakpoints.double_xl
            ) {
                setDeviceSize("desktop");
            } else {
                setDeviceSize("largeDesktop");
            }
        }
    };

    useEffect(() => {
        // Set initial size based on screen width
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return deviceSize;
};
