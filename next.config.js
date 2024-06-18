/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "fanciful-horse-cea043.netlify.app",
			},
		],
	},
};

module.exports = nextConfig;
