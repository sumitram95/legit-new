import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            const { name, value } = e.target;
            formAiPolicy.setData(name, value);
        } else if (e && e.name && e.value) {
            formAiPolicy.setData(e.name, e.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
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

                <div className="mt-5">
                    <CKEditor
                        editor={ClassicEditor}
                        data={formAiPolicy.data.description}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleChange({
                                target: {
                                    name: "description",
                                    value: data,
                                },
                            });
                        }}
                        className="custom-ckeditor"
                    />
                    {formAiPolicy.errors.description && (
                        <div className="text-red-600 text-sm mt-1">
                            {formAiPolicy.errors.description}
                        </div>
                    )}
                </div>

                <div className="float-end mt-5">
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
