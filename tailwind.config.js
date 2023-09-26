/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-color': '#01929b',
                'secondary-color': '#f25831',
            },
            fontFamily: {
                'sans': ['Lato']
            },
            dropShadow: {
                'high-light-primary': '0 5px 25px rgba(1, 146, 155, 1)',
            }
        },
    },
    plugins: [],
}