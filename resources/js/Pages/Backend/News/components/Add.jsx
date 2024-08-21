// Add.jsx
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import ImageUpload from "@/Components/ImageUpload";

export default function Add({ countries = null, categories = null, onClose }) {
    const defaultDate = new Date().toISOString().substring(0, 10);
    const [thumbnails, setThumbnails] = useState([]);
    const [featureImages, setFeatureImages] = useState([]);

    const formAiPolicy = useForm({
        title: "",
        category_id: "",
        upload_date: defaultDate,
        description: "",
        thumbnails: [],
        future_images: [],
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

    const handleImageChange = (images, type) => {
        // Update the state and form data based on the image type
        if (type === "thumbnail") {
            setThumbnails(images);
            formAiPolicy.setData("thumbnails", images);
        } else if (type === "feature_img") {
            setFeatureImages(images);
            formAiPolicy.setData("future_images", images);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create FormData instance
        const formData = new FormData();
        Object.keys(formAiPolicy.data).forEach((key) => {
            if (key === "thumbnails" || key === "future_images") {
                formAiPolicy.data[key].forEach((image, index) => {
                    formData.append(`${key}[${index}]`, image);
                });
            } else {
                formData.append(key, formAiPolicy.data[key]);
            }
        });

        formAiPolicy.post(route("backend.news.store"), {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <div>
            <Head title="Add News" />
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

                <div className="grid gap-6 md:grid-cols-2 mt-5">
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
                {/* Drag and drop upload image */}
                <div className="grid gap-6 md:grid-cols-2 mt-5">
                    <ImageUpload
                        onImageChange={(images) =>
                            handleImageChange(images, "thumbnail")
                        }
                        name="thumbnail"
                        title="Drag & drop thumbnail"
                    />

                    <ImageUpload
                        multiple
                        onImageChange={(images) =>
                            handleImageChange(images, "feature_img")
                        }
                        name="feature_img"
                        title="Drag & drop multiple feature image"
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
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
}
