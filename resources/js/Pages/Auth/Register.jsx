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
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_no: "",
        organization_name: "",
        organization_email: "",
        password: "",
        password_confirmation: "",
        terms_condition: false,
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
            <div className="w-full bg-white md:bg-gray-100 md:flex justify-center md:mt-6 md:mb-6 items-center">
                <div className="bg-white md:w-1/3 px-8 py-5 rounded-md">
                    <div className="">
                    <ApplicationLogo className="fill-current h-12 w-fit" />
                        <h3 className="my-4 font-bold text-xl text-primary-light">
                            LeGit Register
                        </h3>

                        {status && (
                            <div className="mb-2 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit} className="flex flex-col">
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Name <span className="text-red-500">*</span>
                                </label>

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-950"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
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
                                    Login Email Address
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="phone_no"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Phone No.
                                    <span className="text-red-500">*</span>
                                </label>
                                <TextInput
                                    id="phone_no"
                                    type="tel"
                                    name="phone_no"
                                    value={data.phone_no}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("phone_no", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.phone_no}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="organization_name"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Organization Name
                                        {/* <span className="text-red-500">*</span> */}
                                    </label>
                                </div>
                                <TextInput
                                    id="organization_name"
                                    type="text"
                                    name="organization_name"
                                    value={data.organization_name}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 w-full"
                                    autoComplete="organization_name"
                                    onChange={(e) =>
                                        setData(
                                            "organization_name",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.organization_name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="organization_email"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Organization Email
                                        {/* <span className="text-red-500">*</span> */}
                                    </label>
                                </div>
                                <TextInput
                                    id="organization_email"
                                    type="text"
                                    name="organization_email"
                                    value={data.organization_email}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 w-full"
                                    autoComplete="organization_email"
                                    onChange={(e) =>
                                        setData(
                                            "organization_email",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.organization_email}
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
                                        <span className="text-red-500">*</span>
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
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-1 mt-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password_confirmation"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Confirmation Password
                                        <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            name="terms_condition"
                                            className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                            checked={data.terms_condition}
                                            onChange={(e) =>
                                                setData(
                                                    "terms_condition",
                                                    e.target.checked
                                                )
                                            }
                                        />

                                        <a
                                            // href="https://docs.google.com/document/d/1NXmwuuRcvwdtMgUmW_COMR_YboxWQF9lAKa0KQAwtXE/mobilebasic"
                                            href="check"
                                            target="_blank"
                                            className="text-sm font-semibold text-gray-500 hover:underline"
                                        >
                                            Terms and condition
                                        </a>
                                    </div>

                                    <InputError
                                        message={errors.terms_condition}
                                        className="mt-2"
                                    />
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
                                    {processing ? "Sign Up..." : "Sign Up"}
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
        </GuestLayout>
    );
}
