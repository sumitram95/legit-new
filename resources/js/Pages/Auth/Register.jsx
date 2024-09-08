import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Responsive from "@/Components/Responsive/Responsive";
import AuthLoginImage from "@/assets/images/auth/loginpage.jpg";
import LogoImage from "@/assets/images/ai_dark_logo.png";
import Checkbox from "@/Components/Checkbox";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="lg:flex items-center lg:min-h-screen bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden max md:flex-row md:flex-1 ">
                    {/* logo and image side */}
                    <Responsive responsive={["lg", "xl"]}>
                        <div className="w-[50%] p-4 py-6 text-white md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly rounded-md h-screen pr-9">
                            <div className="bg-blue-500 w-full h-full flex items-center justify-center rounded-md">
                                {/* <div className="bg-white/20 rounded-[16px] shadow-lg backdrop-blur-sm border border-white/30 h-[400px] w-[360px] flex items-center  justify-center"> */}
                                <img
                                    src={AuthLoginImage}
                                    alt="AI Policy Tracker"
                                    className="h-full w-full rounded-md"
                                />
                                {/* </div> */}
                            </div>
                        </div>
                    </Responsive>

                    {/* Login side */}
                    <div className="w-full lg:w-[50%]">
                        <div className="w-full">
                            <div className="flex items-center lg:h-screen">
                                <div className="w-full lg:w-[60%] px-5 lg:px-0 mt-6 lg:ml-12 lg:mt-0 ">
                                    <img
                                        src={LogoImage}
                                        alt="AI Policy Tracker"
                                        className="w-[127px] h-[33px]"
                                    />
                                    <h3 className="my-2 text-2xl font-semibold text-primary-light">
                                        Create New Account
                                    </h3>

                                    {status && (
                                        <div className="mb-2 font-medium text-sm text-green-600">
                                            {status}
                                        </div>
                                    )}
                                    <form
                                        onSubmit={submit}
                                        className="flex flex-col"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-semibold text-gray-500"
                                            >
                                                Name
                                            </label>

                                            <TextInput
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-950"
                                                autoComplete="name"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
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
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
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
                                            </div>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 w-full"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="flex flex-col space-y-1 mt-1">
                                            <div className="flex items-center justify-between">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="text-sm font-semibold text-gray-500"
                                                >
                                                    Confirmation Password
                                                </label>
                                            </div>
                                            <TextInput
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                value={
                                                    data.password_confirmation
                                                }
                                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="flex justify-between mt-2">
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
                                                href={route("login")}
                                                className="text-sm underline font-semibold text-primary-light hover:text-blue-900"
                                            >
                                                Already registered?
                                            </Link>
                                        </div>
                                        <div className="mt-3">
                                            <button
                                                disabled={processing}
                                                type="submit"
                                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary-light hover:bg-blue-900 rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
                                            >
                                                {processing
                                                    ? "Sign in..."
                                                    : "Sign in"}
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
