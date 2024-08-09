import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import React from "react";

export default function Add() {
    return (
        <div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                    <Input
                        htmlFor="name"
                        label="Ai policy tracker name"
                        type="text"
                        placeholder="Eg. Act of (AI) not allowed"
                    />

                    <Select label={"Country"} options={[]} />
                    <Input
                        htmlFor="governing_body"
                        label="Governing body"
                        type="text"
                    />
                    <Input
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />

                    {/* <Input
                        htmlFor="status"
                        label="Status"
                        type="date"
                    /> */}
                       <Select label={"Status"} options={[]} />
                    <Input
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />
                    <Input
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />
                    <Input
                        htmlFor="announcement_year"
                        label="Announcement year"
                        type="date"
                    />
                </div>

                <Button type="submit">Add</Button>
            </form>
        </div>
    );
}
