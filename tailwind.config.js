/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        dark: '#1e293b',
      },
    },
  },
  plugins: [],
}
