import Layout from "@/Layouts/Backend/Layout";
import { Head } from "@inertiajs/react";
import React from "react";

import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const steps = [
    { label: "Rural Municipality/ Municipality (LG) Detail" },
    { label: "Status of ICT Infrastructure at LG Office" },
    { label: "ICT Training" },
    { label: "ICT Training Conducted" },
    { label: "PHYSICAL INFRASTRUCTURE" },
    { label: "GEOGRAPHICAL INFORMATION SYSTEM (GIS)" },
    { label: "SOFTWARE/ SYSTEM" },
    { label: "LG Profile" },
    { label: "Website Status" },
    { label: "Social Media" },
    { label: "Value Addition" },
    { label: "IMPACT OF ICT" },
    { label: "KNOWLEDGE MANAGEMENT" },
    { label: "ICT Budget" },
    { label: "MOFAGA Fund Utilization" },
    { label: "Photos" },
    { label: "Location of LG" },
];

export default function View() {
    return (
        <Layout>
            <Head title="View" />
            <div className="rounded-lg bg-white py-4 px-5">
                <Box sx={{ minHeight: 352, minWidth: 250, borderRadius: 0 }}>
                    <SimpleTreeView defaultExpandedItems={["step-0"]}>
                        {steps.map((step, index) => (
                            <TreeItem key={index} itemId={`step-${index}`} label={step.label}>
                                <TreeItem itemId={`grid-community-${index}`} label="@mui/x-data-grid" />
                                <TreeItem itemId={`grid-pro-${index}`} label="@mui/x-data-grid-pro" />
                                <TreeItem itemId={`grid-premium-${index}`} label="@mui/x-data-grid-premium" />
                            </TreeItem>
                        ))}
                    </SimpleTreeView>
                </Box>
            </div>
        </Layout>
    );
}
