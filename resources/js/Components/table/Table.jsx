import React from "react";

export default function Table({ columns = [], tableData = [], ...props }) {
    return (
        <div class="relative overflow-x-auto px-5 mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-primary uppercase bg-secondary">
                    <tr>
                        {columns.map((column, index) => (
                            <th scope="col" class="px-6 py-3" key={index}>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((list, index) => (
                        <tr className="bg-white border-b" key={index}>
                            <td class="px-6 py-4">{list.aiPolicyName}</td>
                            <td class="px-6 py-4">{list.country}</td>
                            <td class="px-6 py-4">{list.governingBody}</td>
                            <td class="px-6 py-4">{list.announcementYear}</td>

                            <td class="px-6 py-4">{list.status}</td>
                            <td class="px-6 py-4">
                                {list.Whitepaper_Document_Link}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
