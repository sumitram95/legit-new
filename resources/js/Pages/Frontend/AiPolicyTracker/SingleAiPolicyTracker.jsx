import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import AiNews from "./components/AiNews";
import SingleAiInfo from "./components/SingleAiInfo";
import AiTimeLine from "./components/AiTimeLine";

const name = "Act Ai";

export default function SingleAiPolicyTracker({
    aiPolicyTrackerWithRelatedNews,
    latestDateOfUpdateAiPolicyTracker = null,
}) {
    return (
        <AppLayout>
            <Head title={name} />
            <div className="content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                {/* Flexbox on large screens (lg and xl) */}
                <div className="w-full block lg:flex xl:flex gap-8">
                    {/* Single AI Info */}
                    <div className="w-full lg:w-1/3 xl:w-1/3">
                        <SingleAiInfo
                            aiPolicyTrackerdetail={
                                aiPolicyTrackerWithRelatedNews
                            }
                        />
                    </div>

                    {/* Ai News */}
                    <div className="w-full mt-5 lg:mt-0 xl:mt-0 lg:w-2/3 xl:w-2/3">
                        <AiNews
                            newsLists={aiPolicyTrackerWithRelatedNews.news}
                        />

                    </div>

                    {/* Ai Timeline */}
                    <div className="w-full mt-5 lg:mt-0 xl:mt-0 lg:w-1/3 xl:w-1/3">
                        <AiTimeLine
                            timeLines={
                                aiPolicyTrackerWithRelatedNews.a_i_policy_activity_logs
                            }
                            latestDateOfUpdateAiPolicyTracker={
                                latestDateOfUpdateAiPolicyTracker
                            }
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
