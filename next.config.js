const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		swSrc: "service-worker.js",
		disable: process.env.NODE_ENV === "development",
	},
	images: {
		domains: [
			"scontent.cdninstagram.com",
			"scontent-del1-1.cdninstagram.com",
			"scontent-del1-2.cdninstagram.com",
		],
	},
	reactStrictMode: true,
	webpack(config, options) {
		const { isServer } = options;
		config.module.rules.push({
			test: /\.(ogg|mp3|wav|mpe?g)$/i,
			exclude: config.exclude,
			use: [
				{
					loader: require.resolve("url-loader"),
					options: {
						limit: config.inlineImageLimit,
						fallback: require.resolve("file-loader"),
						publicPath: `${config.assetPrefix}/_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
						esModule: config.esModule || false,
					},
				},
			],
		});

		return config;
	},
});
