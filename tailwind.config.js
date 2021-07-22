module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter"],
				transitionDelay: ['hover', 'focus'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	
		images: {
		  domains: ['pixabay.com'],
		},
	  
};
