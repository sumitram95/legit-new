import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="bg-primary">
            <div className="bg-ai">
                {/* <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div> */}

                <div className="min-h-screen flex  items-center justify-end bg-ai2 px-6 ">
                    {children}
                </div>
            </div>
        </div>
    );
}
