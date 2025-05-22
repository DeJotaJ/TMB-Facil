/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],     // corpo padrão
            inter: ['Inter', 'sans-serif'],
            heading: ['Poppins', 'sans-serif'],
        },

    },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];
