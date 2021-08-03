module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		typography: (theme) => ({}),
		extend: {
			fontFamily: {
				sans: ["Inter"],
			},
			typography: (theme) => ({
				dark: {
					css: {
						color: "white",
					},
				},
			}),
		},
	},
	variants: {
		typography: ["dark"],
	},
	plugins: [require("@tailwindcss/typography")],
};
