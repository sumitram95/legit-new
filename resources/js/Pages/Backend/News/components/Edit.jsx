import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({
    countries = [],
    aiPolicyTrackers = [],
    categories = [],
    aiId = null,
    updatedData = {},
    onClose,
}) {
    const defaultDate = new Date().toISOString().substring(0, 10);

    const formAiPolicy = useForm({
        title: updatedData.title || '',
        status_id: updatedData.status_id || '',
        policy_tracker_id: updatedData.policy_tracker_id || '',
        upload_date: updatedData.upload_date || defaultDate,
        description: updatedData.description || '',
    });

    const handleChange = (e) => {
        if (e && e.target) {
            // Handle regular inputs
            const { name, value } = e.target;
            formAiPolicy.setData(name, value);
        } else if (e && e.name && e.value) {
            // Handle react-select
            formAiPolicy.setData(e.name, e.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose(); // Call onClose as a function
        formAiPolicy.put(route("backend.news.update", aiId));
    };

    return (
        <div>
            <Head title="Edit News" />
            <form onSubmit={handleSubmit}>
                <div className="w-full">
                    <Input
                        name="title"
                        value={formAiPolicy.data.title}
                        htmlFor="title"
                        label="News Title"
                        type="text"
                        onChange={handleChange}
                        placeholder="Eg. Global AI Law and Policy Tracker"
                        errorMsg={formAiPolicy.errors.title}
                    />
                </div>
                <div className="grid gap-6 md:grid-cols-2 mb-5 mt-5">
                    <Select
                        onChange={(option) =>
                            handleChange({
                                name: "status_id",
                                value: option.value,
                            })
                        }
                        name="status_id"
                        value={categories.find(
                            (list) =>
                                list.value === formAiPolicy.data.status_id
                        )}
                        label="Category"
                        options={categories}
                        errorMsg={formAiPolicy.errors.status_id}
                    />

                    {/* dropdown ai policy tracker */}
                    <Select
                        onChange={(option) =>
                            handleChange({
                                name: "policy_tracker_id",
                                value: option.value,
                            })
                        }
                        name="policy_tracker_id"
                        value={aiPolicyTrackers.find(
                            (list) =>
                                list.value === formAiPolicy.data.policy_tracker_id
                        )}
                        label="AI Policy Tracker"
                        options={aiPolicyTrackers}
                        errorMsg={formAiPolicy.errors.policy_tracker_id}
                    />

                    <Input
                        onChange={handleChange}
                        name="upload_date"
                        value={formAiPolicy.data.upload_date}
                        htmlFor="upload_date"
                        label="Created At"
                        type="date"
                    />
                </div>
                <TextArea
                    onChange={handleChange}
                    name="description"
                    htmlFor="description"
                    label="Description"
                    value={formAiPolicy.data.description}
                    rows={8}
                    cols={30}
                />
                <div className="float-end">
                    <Button
                        type="submit"
                        disabled={formAiPolicy.processing}
                        className="text-sm text-gray-700 font-semibold bg-secondary px-5 py-2 hover:bg-blue-100"
                    >
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
}
