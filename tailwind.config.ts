import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                spin: 'spin 1s linear infinite',
            },
        },
    },
    plugins: [],
} satisfies Config

