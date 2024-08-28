import { Link } from "@inertiajs/react";
import React from "react";

export default function NewsCard({ newsLists = [] }) {

   console.log(newsLists);
    return (
        <div className="">
            {newsLists.map((newsList, index) => (
                <div
                    className="max-w-sm px-5 w-full lg:max-w-full lg:flex border-b  border-gray-400 pb-5 lg:border-gray-300 bg-white mt-5"
                    key={index}
                >
                    {newsList.thumbnail?.path ? (
                        // <img
                        //     className="rounded-t-lg h-44"
                        //     src={`/storage/${newsList.thumbnail?.path}`}
                        //     alt="no-image"
                        // />
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage: `url("/storage/${newsList.thumbnail?.path}")`,
                            }}
                            title="Woman holding a mug"
                        ></div>
                    ) : (
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#4E87D3"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                />
                            </svg>
                        </div>
                    )}

                    <div className=" p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <i className="fa-regular fa-clock"> </i>{" "}
                                {newsList.upload_date}
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">
                                <Link
                                    href={route("news.single", newsList.id)}
                                    className="hover:underline"
                                >
                                    {newsList.title ?? ""}
                                </Link>
                            </div>
                            <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: newsList.description ?? "" }} />

                        </div>
                    </div>
                </div>
            ))}

            {newsLists.length == 0 && (
                <div className="flex items-center h-full w-full justify-center mt-5">
                    <h1 className=" text-xl text-primary">
                        There are no news lists
                    </h1>
                </div>
            )}
        </div>
    );
}
