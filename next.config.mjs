/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side rendering for problematic components
  reactStrictMode: true,

  // Webpack configuration to handle browser-only libraries
  webpack: (config, { isServer }) => {
    // Handle packages that use 'document' or other browser APIs
    if (isServer) {
      config.externals = [...config.externals, "react-lottie"];
    }

    return config;
  },

  // For Vercel deployments, this can help
  transpilePackages: ["react-lottie"],
};

export default nextConfig;
