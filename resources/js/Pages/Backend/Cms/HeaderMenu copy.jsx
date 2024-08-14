import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Layout from "@/Layouts/Backend/Layout";
import React, { useRef, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import TextArea from "@/Components/TextArea";

export default function HeaderMenu() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [navBarList, setNavBarList] = useState([{ name: "", url: "" }]);
    const [aiPolicyTracker, setAiPolicyTracker] = useState([
        { name: "", description: "" },
    ]);

    const { post, setData } = useForm({
        navBars: navBarList,
        logo: null,
        aiPolicyTrackeData: aiPolicyTracker,
    });

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setData("logo", file);
    };

    const handleAddInput = () => {
        setNavBarList([...navBarList, { name: "", url: "" }]);
        setData("navBars", [...navBarList, { name: "", url: "" }]);
    };

    const handleAddAiPolicyTracker = () => {
        setAiPolicyTracker([...aiPolicyTracker, { name: "", description: "" }]);
        setData("aiPolicyTrackeData", [
            ...aiPolicyTracker,
            { name: "", description: "" },
        ]);
    };

    const handleRemoveInput = (index) => {
        const updatedList = navBarList.filter((_, i) => i !== index);
        setNavBarList(updatedList);
        setData("navBars", updatedList);
    };

    const handleRemoveAiPolicyTracker = (index) => {
        const updatedList = aiPolicyTracker.filter((_, i) => i !== index);
        setAiPolicyTracker(updatedList);
        setData("aiPolicyTrackeData", updatedList);
    };

    const handleInputChange = (index, field, value) => {
        const updatedList = [...navBarList];
        updatedList[index][field] = value;
        setNavBarList(updatedList);
        setData("navBars", updatedList);
    };

    const handleAiPolicyTrackerChange = (index, field, value) => {
        const updatedList = [...aiPolicyTracker];
        updatedList[index][field] = value;
        setAiPolicyTracker(updatedList);
        setData("aiPolicyTrackeData", updatedList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("logo", selectedFile); // Use selectedFile directly
        formData.append("navBars", JSON.stringify(navBarList)); // Add navBars data
        formData.append("aiPolicyTrackeData", JSON.stringify(aiPolicyTracker));

        post("/backend/header-menu", {
            data: formData,
            processData: false,
            contentType: false,
            onSuccess: () => {
                console.log("Form submitted successfully");
            },
        });
    };

    return (
        <Layout>
            <Head title="CMS" />
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
                                    <p className="text-center">Choose Logo</p>
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

                    <hr className="mt-5" />

                    <div className="mt-5">
                        <p>Nav Bar</p>
                        <div>
                            {navBarList.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-2 mb-3"
                                >
                                    <Input
                                        label="name"
                                        type="text"
                                        name={`navbar_name_${index}`}
                                        placeholder="Eg. Home"
                                        value={item.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Input
                                        label="url"
                                        type="text"
                                        name={`navbar_url_${index}`}
                                        placeholder="Eg. /home"
                                        value={item.url}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "url",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleRemoveInput(index)}
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
                                </div>
                            ))}
                        </div>

                        <Button
                            className="mt-4"
                            type="button"
                            onClick={handleAddInput}
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

                    <hr className="mt-3" />

                    <div className="mt-3">
                        <p>AIPolicyTracker Project</p>
                        <h1>Description</h1>
                        {aiPolicyTracker.map((item, index) => (
                            <div
                                className="border px-3 mb-3 pt-3 rounded-sm relative"
                                key={index}
                            >
                                <button
                                    type="button"
                                    className="text-red-500 absolute right-[-8px] top-[-14px] hover:text-red-700"
                                    onClick={() =>
                                        handleRemoveAiPolicyTracker(index)
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

                                <Input
                                    placeholder="Eg. Pilot"
                                    type="text"
                                    name={`ai_name_${index}`}
                                    value={item.name}
                                    onChange={(e) =>
                                        handleAiPolicyTrackerChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                />
                                <TextArea
                                    type="text"
                                    name={`ai_description_${index}`}
                                    placeholder="Eg. Countries piloting AI policy in a real environment with a limited number of partie."
                                    value={item.description}
                                    onChange={(e) =>
                                        handleAiPolicyTrackerChange(
                                            index,
                                            "description",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ))}

                        <Button
                            className="mt-4"
                            type="button"
                            onClick={handleAddAiPolicyTracker}
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
                            className="mt-4 bg-secondary hover:bg-blue-100 px-4 py-2"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
