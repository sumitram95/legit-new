import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import AiNews from "./components/AiNews";
import SingleAiInfo from "./components/SingleAiInfo";
import AiTimeLine from "./components/AiTimeLine";

const name = "Act Ai";

export default function SingleAiPolicyTracker({
    aiPolicyTrackerWithRelatedNews,
    latestDateOfUpdateAiPolicyTracker = null
}) {

    return (
        <AppLayout>
            <Head title={name} />
            <div className="relative top-[-50px]">
                <div className="w-full flex gap-8">
                    <div className="w-1/3">
                        <div className="">
                            <SingleAiInfo aiPolicyTrackerdetail={aiPolicyTrackerWithRelatedNews} />
                        </div>

                        {/* <div className="hidden ">
                            <AiTimeLine timeLines={aiPolicyTrackerWithRelatedNews} />
                        </div> */}
                    </div>
                    {/* Ai News */}
                    <div className="w-2/3 ">
                        <AiNews newsLists={aiPolicyTrackerWithRelatedNews.news} />
                    </div>

                    <div className="w-1/3 ">
                        <AiTimeLine timeLines={aiPolicyTrackerWithRelatedNews.a_i_policy_activity_logs} latestDateOfUpdateAiPolicyTracker={latestDateOfUpdateAiPolicyTracker} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
