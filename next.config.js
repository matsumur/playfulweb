/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const years = [2025, 2024, 2023, 2022, 2021];
    return [
      ...years.map((year) => ({
        source: `/openlab${year}`,
        destination: '/openlab',
        permanent: false,
      })),
      // {
      //   source: '/openlab',
      //   destination: '/openlab2025',
      //   permanent: false,
      // },
    ];
  },
};

module.exports = nextConfig;
