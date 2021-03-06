const plugin = require("tailwindcss/plugin");

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
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addVariant, e, postcss }) {
			addVariant("firefox", ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: "-moz-document",
					params: "url-prefix()",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`;
				});
			});
		}),
	],
};
