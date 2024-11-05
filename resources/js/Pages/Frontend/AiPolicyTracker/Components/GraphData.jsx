import GraphChart from "@/Pages/Backend/Services/GraphChart";
import NewsCard from "@/Pages/Frontend/News/Components/NewsCard";
import React from "react";
import SingleGraph from "./SingleGraph";

export default function GraphData({ graphData, currentYear, upcomingYear }) {
    return (
        <div className="bg-white rounded-md py-3">
            <div className="border-b pb-4 px-5">
                <div>
                    <p className="font-bold text-primary-light text-lg">
                        Graph Data
                        <span className="text-gray-500 font-semibold ml-5">
                            ({currentYear ?? ""} - {upcomingYear ?? ""})
                        </span>
                    </p>
                </div>
                <div className="flex gap-5 mt-3 text-sm">
                    <p className=" text-sm text-primary">Sorted by date</p>
                </div>
            </div>
            {/* <GraphChart graphData={graphData} /> */}
            <SingleGraph />

            {/* <NewsCard newsLists={newsLists} /> */}
        </div>
    );
}
