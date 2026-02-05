/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--color-bg) / <alpha-value>)',
                fg: 'rgb(var(--color-fg) / <alpha-value>)',
                muted: 'rgb(var(--color-muted) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
