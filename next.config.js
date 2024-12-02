/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/paper-gallery',
        destination: 'https://5663-133-19-43-4.ngrok-free.app/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
