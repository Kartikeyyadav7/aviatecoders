module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
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
		extend: {
			display: ["group-hover"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
