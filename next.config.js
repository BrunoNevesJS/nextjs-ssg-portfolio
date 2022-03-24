/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);


module.exports = config
