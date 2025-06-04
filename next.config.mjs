/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',  // Allow all images from Pexels
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',  // Allow all images from Cloudinary
      },
    ],
  },
};

export default nextConfig;
