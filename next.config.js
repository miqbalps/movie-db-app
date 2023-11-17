/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "placehold.co"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
