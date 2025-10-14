/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'main-color': 'var(--main-color)',
                'grey-color': 'var(--grey-color)',
                'main-color-2': 'var(--main-color-2)',
                'grey-color-2': 'var(--grey-color-2)',
                'main-color-3': 'var(--main-color-3)',
            },
        },
    },
    plugins: [],
};
