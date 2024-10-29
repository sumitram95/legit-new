import React from "react";
import RuralMunicipalityDetail from "./Partials/RuralMunicipalityDetail";
import IctInfrastructure from "./Partials/IctInfrastructure";

const Steps = (provinces) => [
    {
        label: "Rural Municipality/ Municipality (LG) Detail",
        component: <RuralMunicipalityDetail provinces={provinces} />,
        fields: [
            "provider_name",
            "phone_no",
            "email",
            "province_label",
            "district_label",
            "local_government_lable",
            "position",
        ],
    },
    {
        label: "Status of ICT Infrastructure at LG Office",
        component: <IctInfrastructure />,
        fields: [
            "no_of_desktop",
            "no_of_laptop",
            "no_of_desktop_printer",
            "no_of_staff_use_compture_software",
        ],
    },
    // {
    //     label: "ICT Training",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "ICT Training Conducted",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "PHYSICAL INFRASTRUCTURE",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "GEOGRAPHICAL INFORMATION SYSTEM (GIS)",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "SOFTWARE/ SYSTEM",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "LG Profile",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "Website Status",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "Social Media",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "Value Addition",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "IMPACT OF ICT",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "KNOWLEDGE MANAGEMENT",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "ICT Budget",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "MOFAGA Fund Utilization",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "Photos",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
    // {
    //     label: "Location of LG",
    //     component: <IctInfrastructure />,
    //     fields: ["ict_infra_email"],
    // },
];

export default Steps;
