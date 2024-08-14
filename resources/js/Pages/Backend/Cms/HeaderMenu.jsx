import React, { useRef, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Backend/Layout";
import Button from "@/Components/Button";
import Navbar from "./components/Navbar";
import AiPolicyTrackerProject from "./components/AiPolicyTrackerProject";
import Contributor from "./components/Contributor";

export default function HeaderMenu() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [navBarList, setNavBarList] = useState([{ name: "", url: "" }]);
    const [aiPolicyTracker, setAiPolicyTracker] = useState([
        { name: "", description: "" },
    ]);

    const [contributor, setContributor] = useState([
        { name: "", url: "", social: "" }, // Added `social` field
    ]);

    const { post, setData } = useForm({
        logo: null,
        navBars: navBarList,
        aiPolicyTrackeData: aiPolicyTracker,
        contributorData: contributor,
    });

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setData("logo", file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("logo", selectedFile); // Add logo file
        formData.append("navBars", JSON.stringify(navBarList));
        formData.append("aiPolicyTrackeData", JSON.stringify(aiPolicyTracker));
        formData.append("contributorData", JSON.stringify(contributor)); // Add contributor data

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
                    <div className="rounded-lg bg-white py-5 px-5 h-fit">
                        <p className="mb-3">Choose Logo</p>
                        <div
                            className="w-44 h-32 border bg-secondary hover:text-blue-300 rounded border-blue-200 cursor-pointer"
                            onClick={handleIconClick}
                        >
                            {selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected"
                                    className="w-full h-full rounded"
                                />
                            ) : (
                                <div className="flex justify-center items-center w-full h-full">
                                    <div>
                                        <p className="text-center">
                                            Choose Logo
                                        </p>
                                        <div className="flex justify-center items-center w-full h-full">
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
                                </div>
                            )}
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
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
                        handleRemovecontributor={(index) => {
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
                    <div className="flex justify-end">
                        <Button
                            className="mt-4 bg-secondary hover:bg-blue-100 px-4 py-2"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
