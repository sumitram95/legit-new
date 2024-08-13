// Add.jsx
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import ImageUpload from "@/Components/ImageUpload";

export default function Add({ countries = null, status = null }) {
    const defaultDate = new Date().toISOString().substring(0, 10);
    const [thumbnail, setThumbnail] = useState(null);

    const formAiPolicy = useForm({
        title: "",
        category_id: "",
        created_at: defaultDate,
        description: "",
        thumbnail: ""  // Initialize with an empty string
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

    const handleImageChange = (image) => {
        // Set the thumbnail state and form data
        setThumbnail(image);
        formAiPolicy.setData('thumbnail', image);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create FormData instance
        const formData = new FormData();
        Object.keys(formAiPolicy.data).forEach((key) => {
            formData.append(key, formAiPolicy.data[key]);
        });
        if (thumbnail) {
            formData.append('thumbnail', thumbnail);
        }

        formAiPolicy.post(route("backend.news.store"), {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    console.log(formAiPolicy.errors);

    return (
        <div>
            <Head title="Add News" />
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
                        value={status.find(
                            (list) =>
                                list.value === formAiPolicy.data.category_id
                        )}
                        label="Category"
                        options={status}
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
                {/* Drag and drop upload image */}
                <div>
                    <ImageUpload onImageChange={handleImageChange} />
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
                    Add
                </Button>
            </form>
        </div>
    );
}
