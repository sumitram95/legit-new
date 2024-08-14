import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import AiNews from "./components/AiNews";
import SingleAiInfo from "./components/SingleAiInfo";
import AiTimeLine from "./components/AiTimeLine";

const name = "Act Ai";

export default function SingleAiPolicyTracker({
    newsLists = [],
    timeLines = [],
}) {
    return (
        <AppLayout>
            <Head title={name} />
            <div className="relative top-[-50px] max-auto">
                <div className="w-full flex gap-8">
                    <div className="w-1/3">
                        <div className="">
                            <SingleAiInfo />
                        </div>

                        <div>
                            <AiTimeLine timeLines={timeLines} />
                        </div>
                    </div>
                    {/* Ai News */}
                    <div className="w-2/3">
                        <AiNews newsLists={newsLists} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
