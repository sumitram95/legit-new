import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link, useForm } from "@inertiajs/react";
import LogoImage from "@/assets/images/ai_dark_logo.png";
import LogoImageSquare from "@/assets/images/ai-square.png";
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* <div className="blur-ai  p-8 rounded-md py-10 w-1/3">
                <div className="form-container">
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className="text-white"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-transparent border-white text-white"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="text-white"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-transparent border-white text-white"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className=" mt-4 flex justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    className=" border-white bg-transparent"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-white">
                                    Remember me
                                </span>
                            </label>

                            <Link
                                href={route("register")}
                                className="underline text-sm text-white focus:outline-none"
                            >
                                Register
                            </Link>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-white focus:outline-none"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="ms-4 bg-blue-600 hover:bg-blue-500"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div> */}

            <div class="flex items-center min-h-screen bg-gray-100 lg:justify-center">
                <div class="flex flex-col overflow-hidden max md:flex-row md:flex-1 ">
                    {/* left */}
                    <div class="w-[50%] p-4 py-6 text-white   md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly rounded-md h-screen pr-9">
                        <div className="bg-blue-500 w-full h-full flex items-center justify-center rounded-md">
                            {/* <img
                                src={LogoImageSquare}
                                alt="AI Policy Tracker"
                                className="w-[127px] h-[80px]"
                            /> */}
                        </div>
                    </div>

                    {/* right */}
                    <div class="w-[50%]">
                        <div className="">
                            <div className="flex items-center h-screen">
                                <div className="w-[60%] ml-12 ">
                                    <img
                                        src={LogoImage}
                                        alt="AI Policy Tracker"
                                        className="w-[127px] h-[33px]"
                                    />
                                    <h3 class="my-4 text-2xl font-semibold text-gray-700">
                                        Account Login
                                    </h3>

                                    {status && (
                                        <div className="mb-4 font-medium text-sm text-green-600">
                                            {status}
                                        </div>
                                    )}
                                    <form onSubmit={submit} class="flex flex-col space-y-5">
                                        <div class="flex flex-col space-y-1">
                                            <label
                                                for="email"
                                                class="text-sm font-semibold text-gray-500"
                                            >
                                                Email address
                                            </label>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData("email", e.target.value)
                                                }
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div class="flex flex-col space-y-1">
                                            <div class="flex items-center justify-between">
                                                <label
                                                    for="password"
                                                    class="text-sm font-semibold text-gray-500"
                                                >
                                                    Password
                                                </label>
                                                {canResetPassword && (
                                                    <Link
                                                        href={route("password.request")}
                                                        className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                                                    >
                                                        Forgot your password?
                                                    </Link>
                                                )}
                                            </div>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData("password", e.target.value)
                                                }
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <Checkbox
                                                name="remember"
                                                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData("remember", e.target.checked)
                                                }
                                            />
                                            <label
                                                for="remember"
                                                class="text-sm font-semibold text-gray-500"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                            >
                                                Sign in
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
