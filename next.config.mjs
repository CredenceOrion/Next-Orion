/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required to prevent Next.js image optimization issues
  },
};

export default nextConfig;
