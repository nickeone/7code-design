/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Allow importing CSS from /project directory
  transpilePackages: [],
};

export default nextConfig;
