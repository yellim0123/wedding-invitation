/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/wedding-invitation",
  assetPrefix: "/wedding-invitation",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
