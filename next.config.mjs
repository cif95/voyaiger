/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'openweathermap.org',
				port: ''
			}
		],
	},
	webpack: (config) => {
		// Add custom loader rules (if necessary)
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: { svgo: true, titleProp: true },
				},
			],
		});

		return config;
	},
};

export default nextConfig;
