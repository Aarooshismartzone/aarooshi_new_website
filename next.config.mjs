/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/(.*)",
            destination: "https://aarooshi.com/:path*",
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
