/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    turbo: {
      loaders: {
        // Configure loaders for Turbopack
      },
      resolveAlias: {
        // Configure module resolution aliases
      },
    },
  },
};

module.exports = nextConfig;
