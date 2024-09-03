import React, { useState, useEffect } from "react";

import { AppLayout } from "@/Layouts/AppLayout";

import { Head } from "@inertiajs/react";

import Desktop from "./Components/Responsive/Desktop";
import Mobile from "./Components/Responsive/Mobile";
import { useDeviceSize } from "@/Services/useDeviceSize";

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
    const deviceSize = useDeviceSize();

    return (
        <AppLayout>
            <Head title="Dashboard" />

            {deviceSize == "smallLaptop" ||
            deviceSize == "laptop" ||
            deviceSize == "desktop" ||
            deviceSize == "largeDesktop" ? (
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
