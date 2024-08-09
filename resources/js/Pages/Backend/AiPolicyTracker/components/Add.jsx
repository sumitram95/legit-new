import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import TextArea from "@/Components/TextArea";
import React from "react";

export default function Add({ options }) {
    return (
        <div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-4 ">
                    <Input
                        htmlFor="name"
                        label="Ai policy tracker name"
                        type="text"
                        placeholder="Eg. Act of (AI) not allowed"
                    />

                    <Select label={"Country"} options={options} />
                    <Input
                        htmlFor="governing_body"
                        label="Governing body"
                        type="text"
                        placeholder="Eg. State Council of China"
                    />
                    <Input
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />

                    <Select label={"Status"} options={options} />
                    <Input
                        htmlFor="whitepaper_document_link"
                        label="Whitepaper / Document link"
                        type="text"
                        placeholder="Eg. www.document.com"
                    />
                    <Input
                        htmlFor="technology_partners"
                        label="Technology partners"
                        type="text"
                        placeholder="Eg. Ukt"
                    />
                    <Input
                        htmlFor="Governance_structure"
                        label="Governance structure"
                        type="text"
                    />

                    <Input
                        htmlFor="Main_motivation"
                        label="Main motivation/goals of the AI policy"
                        type="text"
                    />

                </div>
                <TextArea
                        htmlFor="Description"
                        label="Description"
                        rows={8}
                        cols={30}
                    />

                <Button type="submit">Add</Button>
            </form>
        </div>
    );
}
