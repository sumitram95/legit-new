import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({
    countries = null,
    status = null,
    aiId = null,
    updatedData = null,
    onClose
}) {
    const formAiPolicy = useForm({
        ai_policy_name: updatedData.ai_policy_name ?? "",
        country_id: updatedData.country_id ?? "",
        governing_body: updatedData.governing_body ?? "",
        announcement_year: updatedData.announcement_year ?? "",
        status_id: updatedData.status_id ?? "",
        whitepaper_document_link: updatedData.whitepaper_document_link ?? "",
        technology_partners: updatedData.technology_partners ?? "",
        governance_structure: updatedData.governance_structure ?? "",
        main_motivation: updatedData.main_motivation ?? "",
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
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-4 ">
                    <Input
                        name="ai_policy_name"
                        value={formAiPolicy.data.ai_policy_name}
                        htmlFor="name"
                        label="Ai policy tracker name"
                        type="text"
                        onChange={handleChange}
                        placeholder="Eg. Act of (AI) not allowed"
                        errorMsg={formAiPolicy.errors.ai_policy_name}
                    />

                    <Select
                        onChange={(option) =>
                            handleChange({
                                name: "country_id",
                                value: option.value,
                            })
                        }
                        name="country_id"
                        value={countries.find(
                            (country) =>
                                country.value === formAiPolicy.data.country_id
                        )}
                        label={"Country"}
                        options={countries}
                        errorMsg={formAiPolicy.errors.country_id}
                    />

                    <Input
                        onChange={handleChange}
                        name="governing_body"
                        value={formAiPolicy.data.governing_body}
                        htmlFor="governing_body"
                        label="Governing body"
                        type="text"
                        placeholder="Eg. State Council of China"
                    />
                    <Input
                        onChange={handleChange}
                        name="announcement_year"
                        value={formAiPolicy.data.announcement_year}
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />

                    <Select
                        onChange={(option) =>
                            handleChange({
                                name: "status_id",
                                value: option.value,
                            })
                        }
                        name="status_id"
                        value={status.find(
                            (statusOption) =>
                                statusOption.value ===
                                formAiPolicy.data.status_id
                        )}
                        label={"Status"}
                        options={status}
                        errorMsg={formAiPolicy.errors.status_id}
                    />

                    <Input
                        onChange={handleChange}
                        name="whitepaper_document_link"
                        value={formAiPolicy.data.whitepaper_document_link}
                        htmlFor="whitepaper_document_link"
                        label="Whitepaper / Document link"
                        type="text"
                        placeholder="Eg. www.document.com"
                    />
                    <Input
                        onChange={handleChange}
                        name="technology_partners"
                        value={formAiPolicy.data.technology_partners}
                        htmlFor="technology_partners"
                        label="Technology partners"
                        type="text"
                        placeholder="Eg. Ukt"
                    />
                    <Input
                        onChange={handleChange}
                        name="governance_structure"
                        value={formAiPolicy.data.governance_structure}
                        htmlFor="governance_structure"
                        label="Governance structure"
                        type="text"
                        placeholder="Nexus Governance System"
                    />

                    <Input
                        onChange={handleChange}
                        name="main_motivation"
                        value={formAiPolicy.data.main_motivation}
                        htmlFor="main_motivation"
                        label="Main motivation/goals of the AI policy"
                        type="text"
                        placeholder="Eg. InnoSafe AI Guidelines"
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
