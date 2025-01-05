/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/paper-gallery',
        destination: 'https://d2b3-133-19-43-4.ngrok-free.app',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
