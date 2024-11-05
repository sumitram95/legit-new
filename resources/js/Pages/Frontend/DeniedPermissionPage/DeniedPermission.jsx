import { AppLayout } from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function DeniedPermission() {
    return (
        <AppLayout>
            <Head title="Denied permission" />
            <div className="content-wrapper  mt-5 xl:mt-0 lg:mt-0 md:relative md:top-[-60px]">
                <div className="flex justify-center">
                    <div className="rounded-md md:bg-white lg:bg-white md:w-1/2 md:px-20 py-10">
                        <div className="w-full mb-5 text-center">
                            <span className="text-center text-sm tracking-wider font-bold">
                                Already registered in (LeGit) Local e-Government
                                Infomation Technology?
                            </span>
                            <Link
                                href={route("login")}
                                method="get"
                                className="underline ml-2"
                            >
                                <span className="text-primary-light font-semibold">
                                    Log In
                                </span>
                            </Link>
                        </div>

                        <h1 className="tracking-wider leading-6">
                            <strong className="me-2">
                                Unlock Comprehensive Insights with LeGIT Premium
                                Access
                            </strong>
                            Upgrade to <strong>LeGIT Premium</strong> for
                            exclusive insights into the IT readiness of Nepal’s
                            local governments. Premium members gain access to
                            essential tools and data to drive digital
                            transformation:
                        </h1>
                        <ul className="mt-5">
                            <li className="flex items-center gap-3 mb-5">
                                <strong>
                                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                                </strong>
                                <h2 className=" tracking-wider leading-6">
                                    <strong className="me-2">
                                        IT Readiness Overview :
                                    </strong>
                                    A quick summary of IT infrastructure and
                                    digital capabilities across municipalities,
                                    with comparisons by region.
                                </h2>
                            </li>
                            <li className="flex items-center gap-3 mb-5">
                                <strong>
                                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                                </strong>
                                <h2 className=" tracking-wider leading-6">
                                    <strong className="me-2">
                                        Detailed Profiles:
                                    </strong>
                                    In-depth assessments of local government
                                    digital maturity, infrastructure, and
                                    capacity-building efforts
                                </h2>
                            </li>
                            <li className="flex items-center gap-3 mb-5">
                                <strong>
                                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                                </strong>
                                <h2 className=" tracking-wider">
                                    <strong className="me-2 leading-6">
                                        Real-Time Alerts :
                                    </strong>
                                    Receive instant notifications on updates or
                                    new developments in e-governance and digital
                                    infrastructure.
                                </h2>
                            </li>
                            <li className="mb-5">
                                Additional premium benefits include:
                            </li>

                            <li className="flex items-center gap-3 mb-5">
                                <strong>
                                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                                </strong>
                                <h2 className=" tracking-wider">
                                    <strong className="me-2 leading-6">
                                        Latest e-Governance News :
                                    </strong>
                                    Stay updated on advancements and trends in
                                    Nepal’s digital governance landscape.
                                </h2>
                            </li>

                            <li className="flex items-center gap-3 mb-5">
                                <strong>
                                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                                </strong>
                                <h2 className=" tracking-wider">
                                    <strong className="me-2 leading-6">
                                        Progress Timelines
                                    </strong>
                                    Access detailed timelines tracking the
                                    growth and development of IT readiness
                                    across municipalities.
                                </h2>
                            </li>
                        </ul>

                        <div className="w-full mt-5">
                            <h2 className="text-center text-xl">
                                Empower data-driven decisions and enhance local
                                governance capabilities—register for LeGIT
                                Premium today!
                            </h2>

                            <div className="flex justify-center mt-5">
                                <Link
                                    method="get"
                                    href={route("register")}
                                    className=" text-xl px-10 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border uppercase"
                                >
                                    Register
                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
