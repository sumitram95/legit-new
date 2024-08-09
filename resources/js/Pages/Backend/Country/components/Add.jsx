import Button from "@/Components/Button";
import Input from "@/Components/Input";
import React from "react";

export default function Add() {
    return (
        <div>
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <Input htmlFor="f-name" label="First Name" />
                    <Input htmlFor="l-name" label="Last Name" type="number" />
                </div>

                <Button type="submit">submit</Button>
            </form>
        </div>
    );
}
