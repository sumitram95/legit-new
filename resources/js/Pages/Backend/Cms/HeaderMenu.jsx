import React, { useRef, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Backend/Layout";
import Button from "@/Components/Button";
import Navbar from "./components/Navbar";
import AiPolicyTrackerProject from "./components/AiPolicyTrackerProject";
import Contributor from "./components/Contributor";
import Input from "@/Components/Input";

export default function HeaderMenu() {
    const fileInputRefs = useRef([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [logoFile, setLogoFile] = useState(null); // Separate state for main logo
    const [navBarList, setNavBarList] = useState([{ name: "", url: "" }]);
    const [aiPolicyTracker, setAiPolicyTracker] = useState([
        { name: "", description: "" },
    ]);
    const [organizationList, setOrganizationList] = useState([
        { orgLogo: "", url: "" },
    ]);
    const [contributor, setContributor] = useState([
        { name: "", url: "", social: "" },
    ]);

    const { post, setData } = useForm({
        logo: null,
        navBars: navBarList,
        aiPolicyTrackeData: aiPolicyTracker,
        contributorData: contributor,
        organizationData: organizationList,
    });

    const handleIconClick = (index) => {
        fileInputRefs.current[index].click();
    };

    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        const updatedList = [...selectedFiles];
        updatedList[index] = file;
        setSelectedFiles(updatedList);

        const updatedOrganizations = [...organizationList];
        updatedOrganizations[index].orgLogo = file;
        setOrganizationList(updatedOrganizations);

        // Update form data
        setData("organizationData", updatedOrganizations);
    };

    const handleLogoFileChange = (event) => {
        const file = event.target.files[0];
        setLogoFile(file);
        setData("logo", file);
    };

    const handleAddInputOrganization = () => {
        setOrganizationList([...organizationList, { orgLogo: "", url: "" }]);
        setSelectedFiles([...selectedFiles, null]); // Ensure selectedFiles matches organizationList length
    };

    const handleRemoveInputOrganization = (index) => {
        setOrganizationList(organizationList.filter((_, i) => i !== index));
        setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
    };

    const handleInputChange = (index, field, value) => {
        const updatedList = [...organizationList];
        updatedList[index][field] = value;
        setOrganizationList(updatedList);
        setData("organizationData", updatedList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (logoFile) formData.append("logo", logoFile);
        selectedFiles.forEach((file, index) => {
            if (file) formData.append(`orgLogos[${index}]`, file);
        });
        formData.append("navBars", JSON.stringify(navBarList));
        formData.append("aiPolicyTrackeData", JSON.stringify(aiPolicyTracker));
        formData.append("contributorData", JSON.stringify(contributor));
        formData.append("organizationData", JSON.stringify(organizationList));

        post("/backend/header-menu", formData, {
            headers: { "Content-Type": "multipart/form-data" },
            onSuccess: () => {
                console.log("Form submitted successfully");
            },
            onError: (errors) => {
                console.error("Form submission failed", errors);
            },
        });
    };

    return (
        <Layout>
            <Head title="CMS" />
            <div className="rounded-lg bg-white py-5 px-5 h-fit">
                <form onSubmit={handleSubmit}>
                    {/* Main Logo */}
                    <div className="rounded-lg bg-white py-5 px-5 h-fit">
                        <p className="mb-3">Choose Logo</p>
                        <div
                            className="w-44 h-32 border bg-secondary hover:text-blue-300 rounded border-blue-200 cursor-pointer"
                            onClick={() => fileInputRefs.current[0].click()}
                        >
                            {logoFile ? (
                                <img
                                    src={URL.createObjectURL(logoFile)}
                                    alt="Selected"
                                    className="w-full h-full rounded"
                                />
                            ) : (
                                <div className="flex justify-center items-center w-full h-full">
                                    <div>
                                        <p className="text-center">
                                            Choose Logo
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#4E87D3"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            ref={(el) => (fileInputRefs.current[0] = el)}
                            style={{ display: "none" }}
                            onChange={handleLogoFileChange}
                        />
                    </div>

                    <hr className="mt-5" />

                    <Navbar
                        navBarList={navBarList}
                        handleInputChange={(index, field, value) => {
                            const updatedList = [...navBarList];
                            updatedList[index][field] = value;
                            setNavBarList(updatedList);
                            setData("navBars", updatedList);
                        }}
                        handleRemoveInput={(index) => {
                            const updatedList = navBarList.filter(
                                (_, i) => i !== index
                            );
                            setNavBarList(updatedList);
                            setData("navBars", updatedList);
                        }}
                        handleAddInput={() => {
                            const updatedList = [
                                ...navBarList,
                                { name: "", url: "" },
                            ];
                            setNavBarList(updatedList);
                            setData("navBars", updatedList);
                        }}
                    />

                    <hr className="mt-3" />

                    <AiPolicyTrackerProject
                        aiPolicyTracker={aiPolicyTracker}
                        handleAiPolicyTrackerChange={(index, field, value) => {
                            const updatedList = [...aiPolicyTracker];
                            updatedList[index][field] = value;
                            setAiPolicyTracker(updatedList);
                            setData("aiPolicyTrackeData", updatedList);
                        }}
                        handleRemoveAiPolicyTracker={(index) => {
                            const updatedList = aiPolicyTracker.filter(
                                (_, i) => i !== index
                            );
                            setAiPolicyTracker(updatedList);
                            setData("aiPolicyTrackeData", updatedList);
                        }}
                        handleAddAiPolicyTracker={() => {
                            const updatedList = [
                                ...aiPolicyTracker,
                                { name: "", description: "" },
                            ];
                            setAiPolicyTracker(updatedList);
                            setData("aiPolicyTrackeData", updatedList);
                        }}
                    />

                    <hr className="mt-3" />

                    <Contributor
                        contributor={contributor}
                        handleContributorChange={(index, field, value) => {
                            const updatedList = [...contributor];
                            updatedList[index][field] = value;
                            setContributor(updatedList);
                            setData("contributorData", updatedList);
                        }}
                        handleRemoveContributor={(index) => {
                            const updatedList = contributor.filter(
                                (_, i) => i !== index
                            );
                            setContributor(updatedList);
                            setData("contributorData", updatedList);
                        }}
                        handleAddContributor={() => {
                            const updatedList = [
                                ...contributor,
                                { name: "", url: "", social: "" },
                            ];
                            setContributor(updatedList);
                            setData("contributorData", updatedList);
                        }}
                    />

                    <hr className="mt-3" />

                    <div>
                        <p className="mt-3">Contributing Organizations</p>
                        {organizationList.map((_, index) => (
                            <div
                                key={index}
                                className="border px-3 mb-3 pt-3 rounded-sm relative mt-6"
                            >
                                <button
                                    type="button"
                                    className="text-red-500 absolute right-[-8px] top-[-14px] hover:text-red-700"
                                    onClick={() =>
                                        handleRemoveInputOrganization(index)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 hover:size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="flex items-center gap-2 pb-3"
                                    key={index}
                                >
                                    <div
                                        className="w-44 h-32 border bg-secondary hover:text-blue-300 rounded border-blue-200 cursor-pointer"
                                        onClick={() =>
                                            handleIconClick(index + 1)
                                        }
                                    >
                                        {selectedFiles[index] ? (
                                            <img
                                                src={URL.createObjectURL(
                                                    selectedFiles[index]
                                                )}
                                                alt="Selected"
                                                className="w-full h-full rounded"
                                            />
                                        ) : (
                                            <div className="flex justify-center items-center w-full h-full">
                                                <div>
                                                    <p className="text-center">
                                                        Choose Logo
                                                    </p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="#4E87D3"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="size-12"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        ref={(el) =>
                                            (fileInputRefs.current[index + 1] =
                                                el)
                                        }
                                        style={{ display: "none" }}
                                        onChange={(e) =>
                                            handleFileChange(index, e)
                                        }
                                    />
                                    <Input
                                        value={organizationList[index].url}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "url",
                                                e.target.value
                                            )
                                        }
                                        label="Website Url:"
                                        className="w-full"
                                        placeholder="Eg. https://t4dnepal.org.np/"
                                    />
                                    {/* <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveInputOrganization(index)
                                        }
                                    >
                                        Remove
                                    </button> */}
                                </div>
                            </div>
                        ))}
                        {/* <Button
                            type="button"
                            onClick={handleAddInputOrganization}
                        >
                            Add Organization
                        </Button> */}

                        <Button
                            className="mt-4"
                            type="button"
                            onClick={handleAddInputOrganization}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#4E87D3"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </Button>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="bg-secondary px-5 py-2"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
