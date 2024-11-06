import { AppLayout } from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import AiNews from "./Components/AiNews";
import SingleAiInfo from "./Components/SingleAiInfo";
import AiTimeLine from "./Components/AiTimeLine";
import GraphData from "./Components/GraphData";
import SingleGraph from "./Components/SingleGraph";

export default function SingleAlert({
    aiPolicyTrackerWithRelatedNews,
    latestDateOfUpdateAiPolicyTracker = null,
    graphData,
    data,
}) {
    return (
        <AppLayout>
            <Head title="Single LeGit" />
            <div className="flex gap-5 mt-5 md:mt-0 text-sm md:hidden mb-5">
                <Link href="/" className=" text-sm flex gap-2 hover:underline">
                    <span>
                        <i className="fa-regular fa-circle-left"></i>
                    </span>
                    <span>Go to back</span>
                </Link>
            </div>
            <div className="md:flex flex-row gap-x-4 content-wrapper xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="w-full md:w-1/3">
                    <SingleAiInfo
                        singleLg={data.singleLg ?? []}
                    />
                </div>
                <div className="w-full mt-5 md:mt-0 md:w-full">
                    {/* <AiNews newsLists={aiPolicyTrackerWithRelatedNews.news} />
                     */}
                    <GraphData graphData={data.graphData} currentYear={data.currentYear} upcomingYear={data.upcomingYear}/>
                    {/* <SingleGraph /> */}
                </div>
                {/* <div className="w-full mt-5 md:mt-0 md:w-1/4">
                    <AiTimeLine
                        timeLines={
                            aiPolicyTrackerWithRelatedNews.a_i_policy_activity_logs
                        }
                        latestDateOfUpdateAiPolicyTracker={
                            latestDateOfUpdateAiPolicyTracker
                        }
                    />
                </div> */}
            </div>
        </AppLayout>
    );
}
