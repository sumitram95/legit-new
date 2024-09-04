import { AppLayout } from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import AiNews from "./Components/AiNews";
import SingleAiInfo from "./Components/SingleAiInfo";
import AiTimeLine from "./Components/AiTimeLine";

import { useDeviceSize } from "@/Services/useDeviceSize";

const name = "Act Ai";

export default function SingleAiPolicyTracker({
    aiPolicyTrackerWithRelatedNews,
    latestDateOfUpdateAiPolicyTracker = null,
}) {
    const deviceSize = useDeviceSize();
    var isDesktop =
        deviceSize === "smallLaptop" ||
        deviceSize === "laptop" ||
        deviceSize === "desktop" ||
        deviceSize === "largeDesktop";

    return (
        <AppLayout>
            <Head title={name} />
            {isDesktop ? (
                <div className="flex flex-row gap-x-4 content-wrapper mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                    <div className="w-1/4">
                        {" "}
                        <SingleAiInfo
                            aiPolicyTrackerdetail={
                                aiPolicyTrackerWithRelatedNews
                            }
                        />
                    </div>
                    <div className="w-2/4">
                        {" "}
                        <AiNews
                            newsLists={aiPolicyTrackerWithRelatedNews.news}
                        />
                    </div>
                    <div className="w-1/4">
                        {" "}
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
            ) : (
                <div className="content-wrapper mt-5">
                    {/* Flexbox on large screens (lg and xl) */}
                    <div className="w-full block lg:flex gap-8">
                        {/* Single AI Info */}
                        <div className="w-full lg:max-w-[25%]">
                            <SingleAiInfo
                                aiPolicyTrackerdetail={
                                    aiPolicyTrackerWithRelatedNews
                                }
                            />
                        </div>

                        {/* Ai News */}
                        <div className="w-full mt-5 lg:mt-0">
                            <AiNews
                                newsLists={aiPolicyTrackerWithRelatedNews.news}
                            />
                        </div>

                        {/* Ai Timeline */}
                        <div className="w-full mt-5 lg:mt-0 lg:max-w-[25%]">
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
            )}
        </AppLayout>
    );
}
