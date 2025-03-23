/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.aarooshi.com" }],
                destination: "https://aarooshi.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
