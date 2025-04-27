/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/**',  // Allow all images from Pexels
        },
      ],
    },
  };
  
  export default nextConfig;
  