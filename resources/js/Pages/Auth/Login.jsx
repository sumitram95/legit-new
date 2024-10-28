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
import AuthLogo from "@/assets/images/auth/login.png";
import AuthLoginImage from "@/assets/images/auth/loginpage.jpg";
import Responsive from "@/Components/Responsive/Responsive";
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
            {/* <div className="lg:flex items-center lg:min-h-screen bg-gray-00 lg:justify-center"> */}
            <div className="w-full bg-white md:bg-gray-100 md:flex justify-center h-screen items-center">
                <div className="bg-white md:w-1/3 px-8 py-5 rounded-md">
                    <div className=" ">
                        {/* <img
                                src={LogoImage}
                                alt="AI Policy Tracker"
                                className="w-[127px] h-[33px]"
                            /> */}
                        <ApplicationLogo className="fill-current h-12 w-fit" />
                        <h3 className="my-4 font-bold text-xl text-primary-light">
                            LeGit Login
                        </h3>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <form
                            onSubmit={submit}
                            className="flex flex-col space-y-5"
                        >
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
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
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Password
                                    </label>
                                    {/* {canResetPassword && (
                                                <Link
                                                    href={route("password.request")}
                                                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )} */}
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
                            <div className="flex justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        name="remember"
                                        className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href={route("register")}
                                    className="text-sm underline font-semibold text-primary-light hover:text-blue-900"
                                >
                                    Register
                                </Link>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary-light hover:bg-blue-900 rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    {processing ? "Sign in..." : "Sign in"}
                                </button>
                            </div>
                            <div className="mt-3 text-center">
                                <Link
                                    href="/"
                                    className="text-sm underline font-semibold text-primary-light hover:text-blue-900"
                                >
                                    Go to home
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </GuestLayout>
    );
}
