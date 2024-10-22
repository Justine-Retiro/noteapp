module.exports = {
    content: [
        "./index.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}", // Include components directory
    ],
    theme: {
        extend: {
            fontFamily: {
                bold: ['System', 'sans-serif'],
                semiBold: ['System', 'sans-serif'],
                regular: ['System', 'sans-serif'],
                displayBold: ['System', 'sans-serif'],
                displayMedium: ['System', 'sans-serif'],
                displayRegular: ['System', 'sans-serif'],
            },
        },
    },
    plugins: [],
}