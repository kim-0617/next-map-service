/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lecture-1.vercel.app',
      'pcmap.place.naver.com',
      'openapi.map.naver.com',
      'search.pstatic.net',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
