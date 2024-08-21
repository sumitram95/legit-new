import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({
    countries = null,
    categories = null,
    aiId = null,
    updatedData = null,
    onClose,
}) {
    const defaultDate = new Date().toISOString().substring(0, 10);

    const formAiPolicy = useForm({
        title: updatedData.title,
        category_id: updatedData.category_id,
        upload_date: updatedData.upload_date,
        description: updatedData.description,
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
                        htmlFor="name"
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
                                name: "category_id",
                                value: option.value,
                            })
                        }
                        name="category_id"
                        value={categories.find(
                            (list) =>
                                list.value === formAiPolicy.data.category_id
                        )}
                        label="Category"
                        options={categories}
                        errorMsg={formAiPolicy.errors.category_id}
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
                <div className=" float-end">
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
