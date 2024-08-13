import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({
    countries = null,
    status = null,
    aiId = null,
    updatedData = null,
    onClose,
}) {
    const formAiPolicy = useForm({
        title: updatedData.ai_policy_name ?? "",
        category_id: updatedData.country_id ?? "",
        created_at: updatedData.announcement_year ?? "",
        description: updatedData.description ?? "",
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

        // alert(aiId);
        onClose;
        formAiPolicy.put(route("backend.ai_policy_tracker.update", aiId));
    };

    return (
        <div>
            <Head title="Edit News" />
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-3 ">
                    <Input
                        name="title"
                        value={formAiPolicy.data.title}
                        htmlFor="name"
                        label="News Title"
                        type="text"
                        onChange={handleChange}
                        placeholder="Eg. Global AI Law and Policy Tracker"
                        errorMsg={formAiPolicy.errors.title}
                    />

                    <Select
                        onChange={(option) =>
                            handleChange({
                                name: "category_id",
                                value: option.value,
                            })
                        }
                        name="category_id"
                        value={countries.find(
                            (country) =>
                                country.value === formAiPolicy.data.category_id
                        )}
                        label="Category"
                        options={countries}
                        errorMsg={formAiPolicy.errors.category_id}
                    />
                    <Input
                        onChange={handleChange}
                        name="created_at"
                        value={formAiPolicy.data.created_at}
                        htmlFor="created_at"
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

                <Button
                    type="submit"
                    disabled={formAiPolicy.processing}
                    className="text-sm text-gray-700 font-semibold bg-secondary px-5 py-2 hover:bg-blue-100"
                >
                    Update
                </Button>
            </form>
        </div>
    );
}
