import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/flowbite/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    light: '#7997c3',
                    DEFAULT: '#0f4698',
                    dark: '#4c1d95',
                },
                secondary: {
                    light: '#3b82f6',
                    DEFAULT: '#2563eb',
                    dark: '#1d4ed8',
                },
                // Add more custom colors as needed
            },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin')
    ],
};
