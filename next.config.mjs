/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/(.*)",
            has: [{ type: "protocol", value: "http" }],
            destination: "https://aarooshi.com/:path*",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
