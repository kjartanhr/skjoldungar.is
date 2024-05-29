/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.hbs"],
    theme: {
        extend: {
            colors: {
                "tomato": 'hsl(6, 80%, 48%)',
                "tomato-light": "hsl(6, 80%, 44%)"
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif']
            }
        },
    },
    plugins: [],
}

