import React from "react";
import SelectInput from "@/Components/SelectInput";
import Input from "@/Components/Input";

export default function Search({ SelectInputLists, Raj, filters, handleFilterChange }) {
    return (
        <form className="w-full" id="filterData">
        <div className="flex">
            {SelectInputLists.labels.map((label, index) => (
                <div className="w-full md:w-1/2 px-3" key={index}>
                    <SelectInput
                        label={label}
                        listName={Raj[SelectInputLists.lists[index]] || []} // Pass the array directly
                    />
                </div>
            ))}

            {/* Anncouncement Yera */}
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

        </div>
    </form>
    );
}
